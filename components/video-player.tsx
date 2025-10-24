"use client"

import { useEffect, useRef } from "react"

interface VideoPlayerProps {
  source: "dailymotion" | "googledrive"
  videoId: string
  title?: string
  autoplay?: boolean
  controls?: boolean
  mute?: boolean
}

export default function VideoPlayer({
  source,
  videoId,
  title = "Video",
  autoplay = false,
  controls = true,
  mute = false,
}: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null) // <— contenedor, NO iframe

  useEffect(() => {
    if (source !== "dailymotion") return

    // Cargar SDK
    const script = document.createElement("script")
    script.src = "https://api.dmcdn.net/all.js"
    script.async = true

    script.onload = () => {
      const DM = (window as any).DM
      if (!DM || !containerRef.current) return

      // Crear el player (DM crea el iframe internamente)
      const player = DM.player(containerRef.current, {
        video: videoId,
        params: {
          api: 1,
          autoplay: autoplay ? 1 : 0,
          controls: controls ? 1 : 0, // pon 'controls={false}' para ocultar controles
          mute: mute ? 1 : 0,
          "queue-enable": 0,
          "ui-logo": 0,
          // "ui-start-screen-info": 0, // opcional
        },
      })
    }

    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) document.head.removeChild(script)
    }
  }, [source, videoId, autoplay, controls, mute])

  // Google Drive: sin API de tiempo (no hay gate posible). Solo embeber.
  if (source === "googledrive") {
    return (
      <div className="relative max-w-4xl mx-auto mb-12">
        <div className="aspect-video bg-gray-900 rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white">
          <iframe
            src={`https://drive.google.com/file/d/${videoId}/preview`}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            title={title}
            loading="lazy"
          />
        </div>
      </div>
    )
  }

  // Dailymotion (API sí disponible)
  const dailymotionParams = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    controls: controls ? "1" : "0",
    mute: mute ? "1" : "0",
    "queue-enable": "0",
    "ui-logo": "0",
  })

  return (
    <div className="relative max-w-4xl mx-auto mb-12">
      <div className="aspect-video bg-gray-900 rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white">
        <iframe
          src={`https://geo.dailymotion.com/player.html?video=${videoId}&${dailymotionParams.toString()}`}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          title={title}
          loading="lazy"
        />
      </div>
    </div>
  )
}
