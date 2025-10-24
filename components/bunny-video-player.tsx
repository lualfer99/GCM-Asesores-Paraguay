"use client"
import { useEffect, useRef, useState } from "react"
import { useVideoProgress } from "@/contexts/video-progress-context"

type Props = { libraryId: string; videoId: string }

export default function BunnyVideoPlayerStrict({ libraryId, videoId }: Props) {
  const { setHasWatched50Percent } = useVideoProgress()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<any>(null)

  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)

  const durationRef = useRef(0)
  const halfRef = useRef(0)
  const maxSeenRef = useRef(0)
  const unlockedRef = useRef(false)

  const src = `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}?autoplay=true&muted=true` // sin controls si tu lib lo respeta: &controls=false

  useEffect(() => {
    let destroyed = false
    const ensure = () =>
      new Promise<void>((r) => {
        if ((window as any).playerjs) return r()
        const s = document.createElement("script")
        s.src = "//assets.mediadelivery.net/playerjs/playerjs-latest.min.js"
        s.async = true
        s.onload = () => r()
        document.body.appendChild(s)
      })

    ensure().then(() => {
      if (destroyed || !iframeRef.current) return
      const P = (window as any).playerjs
      const player = new P.Player(iframeRef.current)
      playerRef.current = player

      player.on("ready", () => {
        player.mute?.()
        player.play?.()
        player.getDuration?.((d: number) => {
          durationRef.current = d || 0
          halfRef.current = d * 0.5
        })
        player.on("timeupdate", (e: { seconds: number; duration: number }) => {
          const t = e?.seconds || 0
          const d = e?.duration || durationRef.current || 0
          if (d && !durationRef.current) {
            durationRef.current = d
            halfRef.current = d * 0.5
          }
          if (t > maxSeenRef.current) maxSeenRef.current = t
          if (!unlockedRef.current && durationRef.current > 0 && maxSeenRef.current >= halfRef.current) {
            unlockedRef.current = true
            setHasWatched50Percent(true)
          }
        })
        const bounceBack = () => {
          if (unlockedRef.current) return
          player.getCurrentTime?.((now: number) => {
            const cap = Math.min(maxSeenRef.current, Math.max(0, halfRef.current - 1))
            if (now > cap + 0.1) player.setCurrentTime?.(cap)
          })
        }
        player.on("seeked", bounceBack)
        player.on("seeking", bounceBack)
      })
    })

    return () => { destroyed = true }
  }, [src, setHasWatched50Percent])

  // Controles propios
  const togglePlay = () => {
    const p = playerRef.current
    if (!p) return
    if (isPlaying) { p.pause?.(); setIsPlaying(false) } else { p.play?.(); setIsPlaying(true) }
  }
  const toggleMute = () => {
    const p = playerRef.current
    if (!p) return
    if (isMuted) { p.unmute?.(); setIsMuted(false) } else { p.mute?.(); setIsMuted(true) }
  }
  const goFullscreen = () => {
    // PlayerJS no siempre expone fullscreen; usa el iframe nativo:
    const el = iframeRef.current
    ;(el as any)?.requestFullscreen?.()
  }

  return (
    <div className="relative max-w-4xl mx-auto mb-12">
      <div className="aspect-video bg-black rounded-2xl overflow-hidden relative shadow-2xl border-4 border-white">
        {/* bloquea clicks para evitar interacción con timeline del player */}
        <div className="absolute inset-0 z-10" style={{ pointerEvents: "none" }} />
        <iframe
          ref={iframeRef}
          src={src}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          title="VSL"
          loading="lazy"
        />
        {/* barra de controles propia */}
        <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-3">
          <button onClick={togglePlay} className="px-3 py-2 rounded-lg bg-white/90 text-black text-sm font-semibold">
            {isPlaying ? "Pausar" : "Reproducir"}
          </button>
          <button onClick={toggleMute} className="px-3 py-2 rounded-lg bg-white/90 text-black text-sm font-semibold">
            {isMuted ? "Activar sonido" : "Silenciar"}
          </button>
          <button onClick={goFullscreen} className="px-3 py-2 rounded-lg bg-white/90 text-black text-sm font-semibold">
            Pantalla completa
          </button>
        </div>
      </div>
    </div>
  )
}
