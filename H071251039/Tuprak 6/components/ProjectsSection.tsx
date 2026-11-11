"use client"

import React, { useState } from "react"
import SectionHeader from "./SectionHeader"
import {
  Github,
  ArrowUpRight,
  Sparkles,
  Camera,
  Layers,
  Cpu,
  Database,
  Calendar,
  Hand,
  CheckCircle2,
} from "lucide-react"

type ProjectCategory = "all" | "featured" | "vision" | "ai" | "fullstack"

interface Project {
  id: string
  number: string
  title: string
  category: "vision" | "ai" | "fullstack"
  isFeatured: boolean
  subtitle: string
  description: string
  techStack: string[]
  githubUrl?: string
  highlights: string[]
  interactiveType: "gesture" | "camera" | "pipeline" | "whatsapp" | "database"
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("featured")

  const projects: Project[] = [
    {
      id: "puzzlecam",
      number: "01",
      title: "PUZZLECAM",
      category: "vision",
      isFeatured: true,
      subtitle: "Gesture-Controlled Interactive Photo Booth",
      description:
        "Aplikasi photo booth interaktif berbasis browser yang memungkinkan pengguna mengambil dan menyusun/berinteraksi dengan foto secara real-time menggunakan kendali gerakan tangan (hand gesture) tanpa perlu menyentuh layar.",
      techStack: ["JavaScript", "MediaPipe", "WebGL", "HTML/CSS"],
      githubUrl: "https://github.com/akiljhe/PUZZLECAM",
      highlights: [
        "Kontrol nirsentuh (touchless) dengan hand gesture tracking real-time",
        "Interaksi manipulasi foto & penyusunan puzzle di canvas WebGL",
        "Pipeline pengenalan gesture berbasis MediaPipe berjalan langsung di browser klien",
      ],
      interactiveType: "gesture",
    },
    {
      id: "retrolens",
      number: "02",
      title: "Retrolens",
      category: "vision",
      isFeatured: true,
      subtitle: "Gesture-Controlled Web Camera with Retro Filters",
      description:
        "Aplikasi kamera web interaktif yang menggabungkan pelacakan gerakan tangan (hand gesture recognition) dengan berbagai filter visual bergaya retro secara real-time langsung di browser. Pengguna bisa mengganti efek atau memicu kamera hanya lewat gestur tangan.",
      techStack: [
        "JavaScript",
        "MediaPipe (Computer Vision)",
        "Canvas/WebGL",
        "Web API",
      ],
      githubUrl: "https://github.com/akiljhe/Retrolens",
      highlights: [
        "Penggantian filter visual retro & vintage secara hands-free",
        "Pemicu rana kamera (camera shutter) otomatis via gestur tangan tertentu",
        "Pemrosesan shader real-time di Canvas & WebGL dengan latensi ultra-rendah",
      ],
      interactiveType: "camera",
    },
    {
      id: "genesis",
      number: "03",
      title: "GENESIS",
      category: "ai",
      isFeatured: true,
      subtitle: "AI Innovation Project — COMPFEST 18",
      description:
        "Proyek inovasi berbasis kecerdasan buatan (AI) yang dikembangkan untuk menyelesaikan permasalahan spesifik pada kompetisi AI Innovation Challenge. Mencakup perancangan arsitektur teknis dan pipeline pengolahan dataset dari hulu ke hilir.",
      techStack: ["Python", "Machine Learning", "Data Pipeline", "System Architecture"],
      highlights: [
        "Perancangan arsitektur teknis komprehensif untuk kompetisi COMPFEST 18",
        "Pipeline ETL data dan rekayasa fitur data hulu-ke-hilir yang terstruktur",
        "Dokumentasi sistem & validasi model untuk tantangan tantangan AI spesifik",
      ],
      interactiveType: "pipeline",
    },
    {
      id: "sismadul",
      number: "04",
      title: "SISMADUL",
      category: "fullstack",
      isFeatured: false,
      subtitle: "Sistem Penjadwalan & Notifikasi WhatsApp Otomatis",
      description:
        "Sistem backend otomatisasi cerdas yang menangani penjadwalan agenda berkala dan pengiriman notifikasi pengingat via WhatsApp tanpa intervensi manual, mengintegrasikan WhatsApp Web client dengan database relasional.",
      techStack: ["Node.js", "Express.js", "MySQL", "whatsapp-web.js"],
      highlights: [
        "Automasi bot pengirim pesan WhatsApp berbasis event & cron trigger",
        "Manajemen jadwal dinamis dengan persistensi basis data MySQL",
        "Arsitektur modular REST API dengan Express.js",
      ],
      interactiveType: "whatsapp",
    },
    {
      id: "bazar-perca-uh",
      number: "05",
      title: "Bazaar Data Management",
      category: "fullstack",
      isFeatured: false,
      subtitle: "Aplikasi Web Pencatatan Pesanan Bazar Terpusat — UKM Catur Unhas",
      description:
        "Aplikasi web terpadu untuk pencatatan dan pengelolaan pesanan bazar dana usaha kepanitiaan Rektor Unhas Cup (RUC) 2026. Mengintegrasikan rekapitulasi data pesanan secara terpusat untuk meminimalisir kesalahan transaksi manual.",
      techStack: ["JavaScript", "MySQL", "Node.js / Express", "Tailwind CSS"],
      githubUrl: "https://github.com/akiljhe/BAZAR-PERCA-UH",
      highlights: [
        "Digitalisasi pencatatan pesanan bazar multi-pengguna",
        "Dashboard rekapitulasi finansial dan status pesanan real-time",
        "Diterapkan langsung pada kepanitiaan Rektor Unhas Cup (RUC) 2026",
      ],
      interactiveType: "database",
    },
  ]

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true
    if (activeFilter === "featured") return p.isFeatured
    return p.category === activeFilter
  })

  return (
    <section id="proyek" className="py-20 sm:py-28 bg-[#ede9e1] border-y-2 border-[#141414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          title="FEATURED PROJECTS"
          subtitle="SELECTED WORKS & EXPERIMENTS"
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#141414]/20">
          <button
            onClick={() => setActiveFilter("featured")}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#141414] transition-all ${
              activeFilter === "featured"
                ? "bg-[#e5262c] text-[#f6f4f0] shadow-[3px_3px_0px_0px_#141414]"
                : "bg-[#ffffff] text-[#141414] hover:bg-[#f6f4f0]"
            }`}
          >
            ★ 3 Proyek Utama
          </button>
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#141414] transition-all ${
              activeFilter === "all"
                ? "bg-[#141414] text-[#f6f4f0] shadow-[3px_3px_0px_0px_#141414]"
                : "bg-[#ffffff] text-[#141414] hover:bg-[#f6f4f0]"
            }`}
          >
            Semua Proyek ({projects.length})
          </button>
          <button
            onClick={() => setActiveFilter("vision")}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#141414] transition-all ${
              activeFilter === "vision"
                ? "bg-[#141414] text-[#f6f4f0] shadow-[3px_3px_0px_0px_#141414]"
                : "bg-[#ffffff] text-[#141414] hover:bg-[#f6f4f0]"
            }`}
          >
            Computer Vision (2)
          </button>
          <button
            onClick={() => setActiveFilter("ai")}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#141414] transition-all ${
              activeFilter === "ai"
                ? "bg-[#141414] text-[#f6f4f0] shadow-[3px_3px_0px_0px_#141414]"
                : "bg-[#ffffff] text-[#141414] hover:bg-[#f6f4f0]"
            }`}
          >
            AI Innovation (1)
          </button>
          <button
            onClick={() => setActiveFilter("fullstack")}
            className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#141414] transition-all ${
              activeFilter === "fullstack"
                ? "bg-[#141414] text-[#f6f4f0] shadow-[3px_3px_0px_0px_#141414]"
                : "bg-[#ffffff] text-[#141414] hover:bg-[#f6f4f0]"
            }`}
          >
            Full-Stack & Systems (2)
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#ffffff] border-2 border-[#141414] shadow-[5px_5px_0px_0px_#141414] hover:shadow-[7px_7px_0px_0px_#e5262c] hover:border-[#141414] transition-all flex flex-col justify-between group"
            >
              {/* Card Top Banner */}
              <div>
                <div className="p-4 bg-[#f6f4f0] border-b-2 border-[#141414] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black text-[#e5262c]">
                      PROJECT {project.number}
                    </span>
                    {project.isFeatured && (
                      <span className="bg-[#e5262c] text-[#f6f4f0] text-[9px] font-mono font-bold px-1.5 py-0.5 uppercase">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[10px] uppercase text-[#141414]/60 font-bold">
                    {project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-poster text-2xl font-black uppercase text-[#141414] group-hover:text-[#e5262c] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs font-bold text-[#e5262c] mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Interactive Graphic Accent / Visual Badge */}
                  <div className="p-3 bg-[#f6f4f0] border border-[#141414] font-mono text-[11px] space-y-2">
                    <div className="flex items-center justify-between border-b border-[#141414]/20 pb-1.5">
                      <span className="font-bold text-[#141414] flex items-center gap-1.5">
                        {project.interactiveType === "gesture" && (
                          <>
                            <Hand className="w-3.5 h-3.5 text-[#e5262c]" />
                            <span>GESTURE ENGINE: ACTIVE</span>
                          </>
                        )}
                        {project.interactiveType === "camera" && (
                          <>
                            <Camera className="w-3.5 h-3.5 text-[#e5262c]" />
                            <span>RETRO SHADER PIPELINE</span>
                          </>
                        )}
                        {project.interactiveType === "pipeline" && (
                          <>
                            <Cpu className="w-3.5 h-3.5 text-[#e5262c]" />
                            <span>COMPFEST 18 PIPELINE</span>
                          </>
                        )}
                        {project.interactiveType === "whatsapp" && (
                          <>
                            <Calendar className="w-3.5 h-3.5 text-[#e5262c]" />
                            <span>AUTO SCHEDULER DAEMON</span>
                          </>
                        )}
                        {project.interactiveType === "database" && (
                          <>
                            <Database className="w-3.5 h-3.5 text-[#e5262c]" />
                            <span>BAZAAR ORDER SYSTEM</span>
                          </>
                        )}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#e5262c]"></span>
                    </div>

                    <div className="text-[#141414]/80 text-[11px]">
                      {project.highlights[0]}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#141414]/85 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(1).map((hl, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-1.5 text-xs text-[#141414]/70"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e5262c] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 space-y-4">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#141414]/15">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-[#f6f4f0] border border-[#141414] font-mono text-[10px] font-bold text-[#141414]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="pt-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#141414] hover:bg-[#e5262c] text-[#f6f4f0] font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#141414] shadow-[3px_3px_0px_0px_#141414] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>REPOSITORY GITHUB</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#f6f4f0] text-[#141414]/60 font-mono text-xs font-bold uppercase tracking-wider border border-dashed border-[#141414]/40">
                      <span>COMPETITION ARCHITECTURE</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
