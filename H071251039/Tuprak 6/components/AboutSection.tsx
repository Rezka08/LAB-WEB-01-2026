"use client"

import React, { useState } from "react"
import SectionHeader from "./SectionHeader"
import {
  Mail,
  Github,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Cpu,
  Compass,
  FileText,
} from "lucide-react"

export default function AboutSection() {
  const [copied, setCopied] = useState(false)
  const email = "aqilasandewang@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const highlights = [
    {
      num: "01",
      title: "Intelligent Systems",
      desc: "Eksplorasi AI, model machine learning, dan pipeline pengolahan data untuk inovasi teknis.",
      icon: Cpu,
    },
    {
      num: "02",
      title: "Computer Vision",
      desc: "Implementasi hand gesture tracking & real-time vision dengan MediaPipe & WebGL.",
      icon: Sparkles,
    },
    {
      num: "03",
      title: "Interactive Web",
      desc: "Membangun sistem web fungsional yang interaktif, responsif, dan kaya pengalaman visual.",
      icon: Terminal,
    },
  ]

  return (
    <section id="tentang" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01"
          title="TENTANG SAYA"
          subtitle="PROFILE & BACKGROUND"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffffff] border-2 border-[#141414] shadow-[3px_3px_0px_0px_#141414] font-mono text-xs font-bold text-[#e5262c]">
              <span>👋 HALO, SAYA AQILA SANDEWANG</span>
            </div>

            <h3 className="font-poster text-2xl sm:text-3xl md:text-4xl font-black text-[#141414] leading-tight uppercase">
              Information Systems Undergraduate{" "}
              <span className="text-[#e5262c]">@ Universitas Hasanuddin</span>
            </h3>

            <div className="p-6 bg-[#ffffff] border-2 border-[#141414] shadow-[4px_4px_0px_0px_#141414] relative">
              {/* Corner Stamp */}
              <div className="absolute top-0 right-0 bg-[#141414] text-[#f6f4f0] text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-wider">
                DOSSIER // BIO
              </div>

              <p className="text-base sm:text-lg text-[#141414]/90 leading-relaxed font-normal">
                Fokus di bidang{" "}
                <strong className="text-[#e5262c] font-bold">
                  Intelligent Information Systems
                </strong>
                , pengembangan web interaktif,{" "}
                <strong className="text-[#141414] font-bold">
                  computer vision
                </strong>
                , dan eksplorasi AI. Suka ngulik teknologi baru dan bikin sistem
                fungsional yang menarik secara visual maupun teknis.
              </p>
            </div>

            {/* Quick Contact & Links Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Email Copy Card */}
              <div className="flex items-center bg-[#ffffff] border-2 border-[#141414] shadow-[3px_3px_0px_0px_#141414]">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 px-3 py-2 text-xs font-mono font-bold text-[#141414] hover:text-[#e5262c] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#e5262c]" />
                  <span>{email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-2 border-l-2 border-[#141414] bg-[#f6f4f0] hover:bg-[#e5262c] hover:text-[#f6f4f0] transition-colors text-[#141414]"
                  title="Copy email to clipboard"
                  aria-label="Salin email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-green-600 font-bold" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* GitHub Button */}
              <a
                href="https://github.com/akiljhe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#141414] hover:bg-[#e5262c] text-[#f6f4f0] text-xs font-mono font-bold uppercase tracking-wider border-2 border-[#141414] shadow-[3px_3px_0px_0px_#141414] transition-all"
              >
                <Github className="w-4 h-4" />
                <span>github.com/akiljhe</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Key Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.num}
                    className="p-4 bg-[#ffffff] border-2 border-[#141414] shadow-[3px_3px_0px_0px_#141414] hover:border-[#e5262c] transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-black text-[#e5262c]">
                        {item.num}.
                      </span>
                      <Icon className="w-4 h-4 text-[#141414] group-hover:text-[#e5262c] transition-colors" />
                    </div>
                    <h4 className="font-poster font-bold text-sm uppercase text-[#141414] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#141414]/70 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Dossier Card Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#ffffff] border-2 border-[#141414] shadow-[6px_6px_0px_0px_#141414] overflow-hidden">
              {/* Card Header Bar */}
              <div className="bg-[#141414] text-[#f6f4f0] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#e5262c]"></div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    SPECIFICATION // DOSSIER
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#f6f4f0]/70">
                  ID: AQ-2026-UH
                </span>
              </div>

              {/* Table / Spec details */}
              <div className="divide-y-2 divide-[#141414] font-mono text-xs">
                <div className="p-3.5 flex justify-between items-center bg-[#f6f4f0]/50">
                  <span className="text-[#141414]/60 font-semibold uppercase">Nama Lengkap</span>
                  <span className="font-bold text-[#141414]">Aqila Sandewang</span>
                </div>

                <div className="p-3.5 flex justify-between items-center bg-[#ffffff]">
                  <span className="text-[#141414]/60 font-semibold uppercase">NIM</span>
                  <span className="font-bold text-[#e5262c] bg-[#e5262c]/10 px-2 py-0.5 border border-[#e5262c]">
                    H071251039
                  </span>
                </div>

                <div className="p-3.5 flex justify-between items-center bg-[#f6f4f0]/50">
                  <span className="text-[#141414]/60 font-semibold uppercase">Universitas</span>
                  <span className="font-bold text-[#141414] text-right">
                    Universitas Hasanuddin
                  </span>
                </div>

                <div className="p-3.5 flex justify-between items-center bg-[#ffffff]">
                  <span className="text-[#141414]/60 font-semibold uppercase">Program Studi</span>
                  <span className="font-bold text-[#141414]">S1 Sistem Informasi</span>
                </div>

                <div className="p-3.5 flex justify-between items-center bg-[#f6f4f0]/50">
                  <span className="text-[#141414]/60 font-semibold uppercase">Fokus Bidang</span>
                  <span className="font-bold text-[#e5262c] text-right">
                    Intelligent Information Systems
                  </span>
                </div>

                <div className="p-3.5 flex justify-between items-center bg-[#ffffff]">
                  <span className="text-[#141414]/60 font-semibold uppercase">Domisili</span>
                  <span className="font-bold text-[#141414]">Makassar / Palopo, ID</span>
                </div>

                <div className="p-3.5 flex justify-between items-center bg-[#f6f4f0]/50">
                  <span className="text-[#141414]/60 font-semibold uppercase">Status</span>
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
                    Ready for Inovasi & Riset
                  </span>
                </div>
              </div>

              {/* Bottom Spec Footer */}
              <div className="p-4 bg-[#eae5dc] border-t-2 border-[#141414] flex items-center justify-between">
                <div className="text-[11px] font-mono text-[#141414]/80">
                  <p className="font-bold uppercase tracking-wider text-[#141414]">
                    UNIVERSITAS HASANUDDIN
                  </p>
                  <p>Fakultas MIPA / Sistem Informasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
