"use client"

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
  const getEmbedUrl = () => {
    if (source === "dailymotion") {
      return `https://dailymotion.com/embed/video/${videoId}?autoplay=${autoplay ? 1 : 0}&playsinline=1&ui-highlight&start&endscreen-enable=0&controls=${controls ? 1 : 0}&mute=${mute ? 1 : 0}&ui-start-screen-info=1&ui-logo=1`
    } else if (source === "googledrive") {
      return `https://drive.google.com/file/d/${videoId}/preview`
    }
    return ""
  }

  return (
    <div className="relative max-w-4xl mx-auto mb-12">
      <div className="aspect-video bg-gray-900 rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white hover:scale-[1.02] transition-transform duration-500">
        <iframe
          src={getEmbedUrl()}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          title={title}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </div>
    </div>
  )
}
