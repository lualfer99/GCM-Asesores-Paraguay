"use client"

import { useEffect, useRef } from "react"
import { useVideoProgress } from "@/contexts/video-progress-context"

type Props = { libraryId: string; videoId: string }

export default function BunnyVideoPlayerStrict({ libraryId, videoId }: Props) {
  const { setHasWatched90Percent } = useVideoProgress()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<any>(null)

  const durationRef = useRef(0)
  const ninetyRef = useRef(0)
  const maxSeenRef = useRef(0)
  const unlockedRef = useRef(false)

  const src = `https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}?autoplay=true&muted=true`

  // Cargar playerjs SOLO cuando el iframe esté cerca del viewport
  useEffect(() => {
    let destroyed = false
    if (!iframeRef.current) return

    const loadPlayer = () =>
      new Promise<void>((resolve) => {
        if ((window as any).playerjs) return resolve()
        const existing = document.querySelector<HTMLScriptElement>('script[src^="https://assets.mediadelivery.net/playerjs/"]')
        if (existing) {
          existing.addEventListener("load", () => resolve(), { once: true })
          return
        }
        const s = document.createElement("script")
        s.src = "https://assets.mediadelivery.net/playerjs/playerjs-latest.min.js" // https absoluto
        s.async = true // sin defer
        s.onload = () => resolve()
        s.onerror = () => resolve()
        document.body.appendChild(s)
      })

    // Observa el iframe y carga el script cuando esté a ~400px del viewport
    const io = new IntersectionObserver(
      async (entries) => {
        const ev = entries[0]
        if (!ev?.isIntersecting) return
        io.disconnect()

        await loadPlayer()
        if (destroyed || !iframeRef.current) return
        const P = (window as any).playerjs
        if (!P) return

        const player = new P.Player(iframeRef.current)
        playerRef.current = player

        player.on("ready", () => {
          player.mute?.()
          player.play?.()
          player.getDuration?.((d: number) => {
            durationRef.current = d || 0
            ninetyRef.current = (d || 0) * 0.9
          })

          player.on("timeupdate", (e: { seconds: number; duration: number }) => {
            const t = e?.seconds ?? 0
            const d = e?.duration ?? durationRef.current
            if (!durationRef.current && d) {
              durationRef.current = d
              ninetyRef.current = d * 0.9
            }
            if (t > maxSeenRef.current) maxSeenRef.current = t
            if (!unlockedRef.current && durationRef.current > 0 && maxSeenRef.current >= ninetyRef.current) {
              unlockedRef.current = true
              setHasWatched90Percent(true)
            }
          })

          // Evita saltos antes del 90%
          const bounceBack = () => {
            if (unlockedRef.current) return
            player.getCurrentTime?.((now: number) => {
              const cap = Math.min(maxSeenRef.current, Math.max(0, ninetyRef.current - 1))
              if (now > cap + 0.1) player.setCurrentTime?.(cap)
            })
          }
          player.on("seeked", bounceBack)
          player.on("seeking", bounceBack)
        })
      },
      { rootMargin: "400px 0px" }
    )

    io.observe(iframeRef.current)

    return () => {
      destroyed = true
      io.disconnect()
    }
  }, [src, setHasWatched90Percent])

  return (
    <div className="relative max-w-4xl mx-auto mb-12">
      <div className="aspect-video bg-black rounded-2xl overflow-hidden relative shadow-2xl border-4 border-white">
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
      </div>
    </div>
  )
}
