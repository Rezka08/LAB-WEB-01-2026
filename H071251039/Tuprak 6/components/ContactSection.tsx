"use client"

import React, { useState } from "react"
import {
  Mail,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  ArrowUp,
  Sparkles,
  Heart,
} from "lucide-react"

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = "aqilasandewang@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="kontak" className="pt-20 sm:pt-28 pb-12 bg-[#f6f4f0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Poster Call to Action Card */}
        <div className="bg-[#141414] text-[#f6f4f0] p-8 sm:p-12 md:p-16 border-2 border-[#141414] shadow-[8px_8px_0px_0px_#e5262c] relative overflow-hidden mb-16">
          {/* Subtle Background Pattern */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none paper-grid"
            aria-hidden="true"
          ></div>

          {/* Stamp Monogram */}
          <div className="absolute top-6 right-6 w-16 h-16 sm:w-20 sm:h-20 bg-[#e5262c] text-[#f6f4f0] font-poster font-black flex items-center justify-center text-sm sm:text-base border-2 border-[#f6f4f0] rotate-12 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
            AQ/ILA
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e5262c] text-[#f6f4f0] font-mono text-xs font-bold uppercase tracking-wider">
              <span>GET IN TOUCH // 2026</span>
            </div>

            <h2 className="font-poster text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#f6f4f0] leading-none">
              TERTARIK BERKOLABORASI ATAU DISKUSI?
            </h2>

            <p className="text-sm sm:text-base text-[#f6f4f0]/80 leading-relaxed max-w-xl">
              Terbuka untuk diskusi proyek seputar{" "}
              <strong className="text-[#e5262c]">
                Intelligent Information Systems
              </strong>
              , riset{" "}
              <strong className="text-[#f6f4f0]">Computer Vision</strong>,
              inovasi AI, maupun kolaborasi pengembangan web interaktif.
            </p>

            {/* Email Box & Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#e5262c] hover:bg-[#c91c22] text-[#f6f4f0] font-mono text-sm font-bold tracking-wider uppercase border-2 border-[#f6f4f0] shadow-[4px_4px_0px_0px_#f6f4f0] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>KIRIM EMAIL LANGSUNG</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-[#ffffff] hover:bg-[#eae5dc] text-[#141414] font-mono text-sm font-bold border-2 border-[#f6f4f0] shadow-[4px_4px_0px_0px_#f6f4f0] transition-all"
                title="Salin email"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600 font-bold" />
                    <span>EMAIL TERSALIN!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>SALIN EMAIL</span>
                  </>
                )}
              </button>

              <a
                href="https://github.com/akiljhe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-transparent hover:bg-[#f6f4f0]/10 text-[#f6f4f0] font-mono text-sm font-bold border-2 border-[#f6f4f0]/40 hover:border-[#f6f4f0] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Meta & Copyright */}
        <div className="pt-8 border-t-2 border-[#141414] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Stamp Monogram small */}
            <div className="w-8 h-8 bg-[#e5262c] text-[#f6f4f0] font-poster font-black flex items-center justify-center text-[10px] border border-[#141414]">
              AQ
            </div>
            <div className="text-xs font-mono text-[#141414]/80">
              <p className="font-bold uppercase text-[#141414]">
                AQILA SANDEWANG // H071251039
              </p>
              <p>Universitas Hasanuddin — Intelligent Information Systems</p>
            </div>
          </div>

          {/* Dice pips badge motif harmonizing with hero */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#141414]/60">
              <span>PALETTE:</span>
              <span className="inline-block w-3 h-3 bg-[#e5262c] border border-[#141414]"></span>
              <span className="inline-block w-3 h-3 bg-[#141414] border border-[#141414]"></span>
              <span className="inline-block w-3 h-3 bg-[#f6f4f0] border border-[#141414]"></span>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#ffffff] hover:bg-[#141414] text-[#141414] hover:text-[#f6f4f0] border-2 border-[#141414] shadow-[2px_2px_0px_0px_#141414] font-mono text-xs font-bold transition-all"
              aria-label="Kembali ke atas"
            >
              <span>KE ATAS</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center font-mono text-[11px] text-[#141414]/60">
          © 2026 Aqila Sandewang. Designed in Japanese & Swiss Brutalist Poster Aesthetic.
        </div>
      </div>
    </footer>
  )
}
