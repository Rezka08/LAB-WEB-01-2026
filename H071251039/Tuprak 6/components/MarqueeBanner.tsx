"use client"

import React from "react"

interface MarqueeBannerProps {
  text?: string
  reverse?: boolean
  className?: string
}

export default function MarqueeBanner({
  text = "✦ INTELLIGENT INFORMATION SYSTEMS ✦ UNIVERSITAS HASANUDDIN ✦ COMPUTER VISION ✦ MEDIAPIPE GESTURE UI ✦ COMPFEST 18 AI INNOVATION ✦ WEBGL & THREE.JS ✦ 2X OSK INFORMATIKA MEDALIST ✦ FULL-STACK DEVELOPMENT ✦",
  reverse = false,
  className = "",
}: MarqueeBannerProps) {
  return (
    <div
      className={`w-full overflow-hidden bg-[#e5262c] text-[#f6f4f0] border-y-2 border-[#141414] py-2.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex whitespace-nowrap ${
          reverse ? "animate-marquee [animation-direction:reverse]" : "animate-marquee"
        }`}
      >
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
    </div>
  )
}
