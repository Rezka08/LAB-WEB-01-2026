import React from "react"

interface SectionHeaderProps {
  number: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export default function SectionHeader({
  number,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 sm:mb-16 ${align === "center" ? "text-center" : ""}`}>
      {/* Index Tag */}
      <div className={`flex items-center gap-2 mb-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#141414] text-[#f6f4f0] font-mono text-xs font-bold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e5262c]"></span>
          SECTION {number}
        </span>
        {subtitle && (
          <span className="font-mono text-xs text-[#141414]/70 uppercase tracking-widest font-semibold hidden sm:inline">
            // {subtitle}
          </span>
        )}
      </div>

      {/* Main Title & Poster Graphic Rule */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <h2 className="font-poster text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#141414]">
          {title}
        </h2>

        {/* Decorative Swiss/Poster Rule */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xs lg:max-w-md pb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5262c]"></div>
          <div className="h-[2px] bg-[#e5262c] flex-1"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#141414]"></div>
          <div className="h-[1px] bg-[#141414]/40 w-12"></div>
        </div>
      </div>

      {/* Underline Rule for Mobile */}
      <div className="mt-3 flex items-center gap-2 md:hidden">
        <div className="w-2 h-2 rounded-full bg-[#e5262c]"></div>
        <div className="h-[2px] bg-[#e5262c] w-24"></div>
        <div className="h-[1px] bg-[#141414]/30 flex-1"></div>
      </div>
    </div>
  )
}
