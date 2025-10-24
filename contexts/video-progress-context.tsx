"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface VideoProgressContextType {
  hasWatched50Percent: boolean
  setHasWatched50Percent: (value: boolean) => void
}

const VideoProgressContext = createContext<VideoProgressContextType | undefined>(undefined)

export function VideoProgressProvider({ children }: { children: ReactNode }) {
  const [hasWatched50Percent, setHasWatched50Percent] = useState(false)

  return (
    <VideoProgressContext.Provider value={{ hasWatched50Percent, setHasWatched50Percent }}>
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
