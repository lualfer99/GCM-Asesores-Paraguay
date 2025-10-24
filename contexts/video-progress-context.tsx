"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface VideoProgressContextType {
  hasWatched90Percent: boolean
  setHasWatched90Percent: (value: boolean) => void
}

const VideoProgressContext = createContext<VideoProgressContextType | undefined>(undefined)

export function VideoProgressProvider({ children }: { children: ReactNode }) {
  const [hasWatched90Percent, setHasWatched90Percent] = useState(false)

  return (
    <VideoProgressContext.Provider value={{ hasWatched90Percent, setHasWatched90Percent }}>
      {children}
    </VideoProgressContext.Provider>
  )
}

export function useVideoProgress() {
  const context = useContext(VideoProgressContext)
  if (context === undefined) {
    throw new Error("useVideoProgress must be used within a VideoProgressProvider")
  }
  return context
}
