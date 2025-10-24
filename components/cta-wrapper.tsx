"use client"

import type { ReactNode } from "react"
import { useVideoProgress } from "@/contexts/video-progress-context"
import { AlertCircle } from "lucide-react"

interface CTAWrapperProps {
  children: ReactNode
  showMessage?: boolean
}

export default function CTAWrapper({ children, showMessage = true }: CTAWrapperProps) {
  const { hasWatched90Percent } = useVideoProgress()

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className={`${!hasWatched90Percent ? "opacity-50 pointer-events-none cursor-not-allowed" : ""} w-full flex justify-center`}
      >
        {children}
      </div>
      {!hasWatched90Percent && showMessage && (
        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-lg text-sm max-w-md text-center">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>Para poder agendar una llamada debes haber visto el 90% del vídeo</span>
        </div>
      )}
    </div>
  )
}
