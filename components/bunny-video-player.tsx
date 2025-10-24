"use client"

import { useEffect, useRef } from "react"
import { useVideoProgress } from "@/contexts/video-progress-context"

type Props = { libraryId: string; videoId: string }

export default function BunnyVideoPlayer({ libraryId, videoId }: Props) {
  const { setHasWatched50Percent } = useVideoProgress()
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const durationRef = useRef(0)
  const halfRef = useRef(0)
  const maxSeenRef = useRef(0)
  const unlockedRef = useRef(false)

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
      const PlayerJS = (window as any).playerjs
      const player = new PlayerJS.Player(iframeRef.current)

      player.on("ready", () => {
        player.mute?.()
        player.play?.()

        player.getDuration?.((d: number) => {
          durationRef.current = d || 0
          halfRef.current = durationRef.current * 0.5
        })

        player.on("timeupdate", (data: { seconds: number; duration: number }) => {
          const t = data?.seconds || 0
          const d = data?.duration || durationRef.current || 0
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

        player.on("seeked", () => {
          if (unlockedRef.current) return
          player.getCurrentTime?.((now: number) => {
            const cap = Math.min(maxSeenRef.current, Math.max(0, halfRef.current - 1))
            if (now > cap + 0.5) player.setCurrentTime?.(cap)
          })
        })
      })
    })

    return () => { destroyed = true }
  }, [src, setHasWatched50Percent])

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
