import React from "react"
import SectionHeader from "./SectionHeader"
import { Trophy, Award, Medal, CheckCircle2, ArrowUpRight } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
    {
      year: "2026",
      title: "COMPFEST 18 AI Innovation Challenge",
      role: "Peserta / Tim Pengembang",
      category: "Kecerdasan Buatan (AI)",
      institution: "Fakultas Ilmu Komputer, Universitas Indonesia",
      description:
        "Merancang arsitektur sistem, dataset pipeline, dan dokumentasi teknis komprehensif untuk proyek inovasi AI 'GENESIS' dalam menyelesaikan tantangan nyata berbasis machine learning.",
      badge: "AI INNOVATION 2026",
      type: "challenge",
      highlight: "Arsitektur Sistem & Data Pipeline GENESIS",
    },
    {
      year: "2024",
      title: "Juara 2 OSK Bidang Informatika",
      role: "Peraih Medali Perak / Finalis Provinsi",
      category: "Olimpiade Sains Nasional (OSN-K)",
      institution: "Balai Pengembangan Talenta Indonesia (BPTI) / Kemendikbudristek",
      description:
        "Meraih Juara 2 pada seleksi Olimpiade Sains Nasional Tingkat Kabupaten/Kota (OSK) Bidang Informatika/Komputer. Berhasil mewakili sekolah dan melaju berkompetisi ke tingkat Provinsi.",
      badge: "JUARA 2 / SILVER MEDALIST",
      type: "medal",
      highlight: "Lolos Seleksi & Mewakili ke Tingkat Provinsi",
    },
    {
      year: "2023",
      title: "Juara 2 OSK Bidang Informatika",
      role: "Peraih Medali Perak / Finalis Provinsi",
      category: "Olimpiade Sains Nasional (OSN-K)",
      institution: "Balai Pengembangan Talenta Indonesia (BPTI) / Kemendikbudristek",
      description:
        "Membuktikan konsistensi kemampuan penalaran algoritmik dan computational thinking dengan kembali meraih Juara 2 OSK Tingkat Kabupaten/Kota serta lolos mewakili sekolah ke tingkat Provinsi.",
      badge: "JUARA 2 / SILVER MEDALIST",
      type: "medal",
      highlight: "Lolos Seleksi & Mewakili ke Tingkat Provinsi",
    },
  ]

  return (
    <section id="prestasi" className="py-20 sm:py-28 bg-[#ede9e1] border-y-2 border-[#141414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="04"
          title="KOMPETISI & PENCAPAIAN"
          subtitle="HONORS & AWARDS"
        />

        {/* Timeline / Cards */}
        <div className="space-y-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] border-2 border-[#141414] shadow-[5px_5px_0px_0px_#141414] hover:shadow-[7px_7px_0px_0px_#e5262c] transition-all overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                {/* Left Year & Medal Badge Column */}
                <div className="md:col-span-3 bg-[#141414] text-[#f6f4f0] p-6 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-[#141414]">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-black text-[#e5262c]">
                        {item.year}
                      </span>
                      {item.type === "medal" ? (
                        <Medal className="w-6 h-6 text-[#e5262c]" />
                      ) : (
                        <Trophy className="w-6 h-6 text-[#e5262c]" />
                      )}
                    </div>

                    <div className="inline-block bg-[#e5262c] text-[#f6f4f0] font-mono text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                      {item.badge}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#f6f4f0]/20 font-mono text-[10px] text-[#f6f4f0]/60">
                    KATEGORI: {item.category}
                  </div>
                </div>

                {/* Right Content Column */}
                <div className="md:col-span-9 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-[#e5262c]">
                        {item.institution}
                      </span>
                      <span className="font-mono text-xs font-bold bg-[#f6f4f0] border border-[#141414] px-2 py-0.5 text-[#141414]">
                        {item.role}
                      </span>
                    </div>

                    <h3 className="font-poster text-2xl sm:text-3xl font-black uppercase text-[#141414] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#141414]/85 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlight pill */}
                  <div className="pt-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#e5262c] shrink-0" />
                    <span className="font-mono text-xs font-bold text-[#141414]">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
