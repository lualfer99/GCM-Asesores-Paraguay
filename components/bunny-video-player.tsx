"use client"

import { useEffect, useRef, useState } from "react"
import { useVideoProgress } from "@/contexts/video-progress-context"

type Props = { libraryId: string; videoId: string }

export default function BunnyVideoPlayer({ libraryId, videoId }: Props) {
  const { setHasWatched50Percent } = useVideoProgress()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<any>(null)

  // Estado para UI de velocidad
  const [speed, setSpeed] = useState(1)

  const durationRef = useRef(0)
  const halfRef = useRef(0)
  const maxSeenRef = useRef(0)        // máximo visto real
  const unlockedRef = useRef(false)   // true al 50%

  // IMPORTANTE: usa EMBED, sin token en front
  const src = `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}`

  useEffect(() => {
    let destroyed = false

    const ensurePlayerJs = () =>
      new Promise<void>((resolve) => {
        if ((window as any).playerjs) return resolve()
        const s = document.createElement("script")
        s.src = "//assets.mediadelivery.net/playerjs/playerjs-latest.min.js"
        s.async = true
        s.onload = () => resolve()
        document.body.appendChild(s)
      })

    ensurePlayerJs().then(() => {
      if (destroyed || !iframeRef.current) return
      const P = (window as any).playerjs
      const player = new P.Player(iframeRef.current)
      playerRef.current = player

      player.on("ready", () => {
        player.mute?.()
        player.play?.()

        // duración → mitad
        player.getDuration?.((d: number) => {
          durationRef.current = d || 0
          halfRef.current = durationRef.current * 0.5
        })

        // Progreso continuo
        player.on("timeupdate", (e: { seconds: number; duration: number }) => {
          const t = e?.seconds || 0
          const d = e?.duration || durationRef.current || 0
          if (d && !durationRef.current) {
            durationRef.current = d
            halfRef.current = d * 0.5
          }

          // registra el máximo realmente visto
          if (t > maxSeenRef.current) maxSeenRef.current = t

          // desbloqueo al 50%
          if (!unlockedRef.current && durationRef.current > 0 && maxSeenRef.current >= halfRef.current) {
            unlockedRef.current = true
            setHasWatched50Percent(true)
          }

          // anti-skip por salto (por si arrastran la barra): rebote inmediato
          if (!unlockedRef.current) {
            const cap = Math.min(maxSeenRef.current, Math.max(0, halfRef.current - 1))
            if (t > cap + 0.2) player.setCurrentTime?.(cap)
          }
        })

        // anti-skip explícito
        const bounceBack = () => {
          if (unlockedRef.current) return
          player.getCurrentTime?.((now: number) => {
            const cap = Math.min(maxSeenRef.current, Math.max(0, halfRef.current - 1))
            if (now > cap + 0.1) player.setCurrentTime?.(cap)
          })
        }
        player.on("seeking", bounceBack)
        player.on("seeked", bounceBack)

        // velocidad inicial
        player.setPlaybackRate?.(1)
      })
    })

    return () => { destroyed = true }
  }, [src, setHasWatched50Percent])

  // Controles de VELOCIDAD (1x / 1.5x). Fullscreen y calidad se usan del propio player.
  const setRate = (r: number) => {
    setSpeed(r)
    playerRef.current?.setPlaybackRate?.(r)
  }

  return (
    <div className="relative max-w-4xl mx-auto mb-12">
      <div className="aspect-video bg-gray-900 rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white">
        <iframe
          ref={iframeRef}
          src={src}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          title="VSL"
          loading="lazy"
        />

        {/* Controles mínimos propios: solo velocidad.
            (Fullscreen y calidad: usar los del player dentro del iframe) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-white/90 rounded-xl px-3 py-1">
          <button
            onClick={() => setRate(1)}
            className={`px-3 py-1 rounded-lg text-sm font-semibold ${speed === 1 ? "bg-black text-white" : "bg-white text-black"}`}
          >
            1×
          </button>
          <button
            onClick={() => setRate(1.5)}
            className={`px-3 py-1 rounded-lg text-sm font-semibold ${speed === 1.5 ? "bg-black text-white" : "bg-white text-black"}`}
          >
            1.5×
          </button>
        </div>
      </div>
    </div>
  )
}
