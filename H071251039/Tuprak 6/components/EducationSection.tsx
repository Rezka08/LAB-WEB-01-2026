import React from "react"
import SectionHeader from "./SectionHeader"
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from "lucide-react"

export default function EducationSection() {
  const educations = [
    {
      institution: "Universitas Hasanuddin",
      degree: "S1 Sistem Informasi (Undergraduate)",
      focus: "Intelligent Information Systems",
      period: "2025 – Sekarang",
      location: "Makassar, Sulawesi Selatan",
      badge: "ACTIVE ENROLLMENT",
      isCurrent: true,
      notes: [
        "Fokus kurikulum pada Intelligent Information Systems, Machine Learning, dan Rekayasa Web",
        "Terlibat aktif dalam pengembangan solusi teknologi (misal: Bazaar Data Management untuk RUC 2026)",
        "Eksplorasi mendalam di ranah Computer Vision (MediaPipe, WebGL) dan AI Innovation (COMPFEST 18)",
      ],
    },
    {
      institution: "SMA Negeri 3 Palopo",
      degree: "Sekolah Menengah Atas (MIPA / Sains & Informatika)",
      focus: "Sains, Matematika & Algoritma",
      period: "2022 – 2025",
      location: "Palopo, Sulawesi Selatan",
      badge: "GRADUATED",
      isCurrent: false,
      notes: [
        "2x Juara 2 Olimpiade Sains Nasional Tingkat Kabupaten/Kota (OSK) Bidang Informatika (2023 & 2024)",
        "Mewakili sekolah melaju ke kompetisi Olimpiade Sains tingkat Provinsi",
        "Menjabat Sekretaris Umum OSIS dan Wakil Ketua Relawan TIK SMA Negeri 3 Palopo",
      ],
    },
  ]

  return (
    <section id="pendidikan" className="py-20 sm:py-28 bg-[#ede9e1] border-y-2 border-[#141414] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          title="PENDIDIKAN"
          subtitle="ACADEMIC BACKGROUND"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] border-2 border-[#141414] shadow-[5px_5px_0px_0px_#141414] hover:shadow-[7px_7px_0px_0px_#e5262c] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Strip */}
                <div className="p-4 bg-[#f6f4f0] border-b-2 border-[#141414] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#e5262c]" />
                    <span className="font-mono text-xs font-bold text-[#141414]">
                      {edu.period}
                    </span>
                  </div>
                  <span
                    className={`font-mono text-[10px] font-bold px-2 py-0.5 border ${
                      edu.isCurrent
                        ? "bg-[#e5262c] text-[#f6f4f0] border-[#141414]"
                        : "bg-[#eae5dc] text-[#141414] border-[#141414]"
                    }`}
                  >
                    {edu.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-poster text-2xl font-black uppercase text-[#141414]">
                      {edu.institution}
                    </h3>
                    <p className="font-mono text-xs font-bold text-[#e5262c] mt-1">
                      {edu.degree}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[#141414]/70 mt-1 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#e5262c]" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Focus Tag */}
                  <div className="p-3 bg-[#f6f4f0] border border-[#141414]">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#141414]/60 block mb-1">
                      FOKUS PEMINATAN
                    </span>
                    <span className="font-mono text-xs font-bold text-[#141414]">
                      {edu.focus}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2">
                    {edu.notes.map((note, nIdx) => (
                      <div key={nIdx} className="flex items-start gap-2 text-xs text-[#141414]/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#e5262c] shrink-0 mt-0.5" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Stamp */}
              <div className="px-6 py-3 bg-[#eae5dc] border-t-2 border-[#141414] flex items-center justify-between font-mono text-[10px] text-[#141414]/70">
                <span>ACADEMIC VERIFICATION</span>
                <span className="font-bold text-[#141414]">ID: {idx === 0 ? "UNHAS-SI-25" : "SMAN3-PALOPO"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
