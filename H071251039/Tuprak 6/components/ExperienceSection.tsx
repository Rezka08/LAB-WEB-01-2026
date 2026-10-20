import React from "react"
import SectionHeader from "./SectionHeader"
import { Users, CheckCircle, ChevronRight, Briefcase } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      organization: "UKM Persatuan Catur Universitas Hasanuddin",
      period: "2026",
      badge: "CAMPUS ORGANIZATION",
      isPrimary: true,
      roles: [
        {
          title: "Koordinator Divisi Dana & Usaha",
          event: "Rektor Unhas Cup (RUC) 2026",
          description:
            "Mengintegrasikan solusi teknologi dengan merancang dan mengimplementasikan aplikasi web pencatatan pesanan bazar terpusat (BAZAR-PERCA-UH) guna mengotomasi kalkulasi finansial dan transaksi bazar kepanitiaan.",
        },
        {
          title: "Koordinator Divisi Dana & Usaha",
          event: "UNHAS Chess Competition (UCC) 2026",
          description:
            "Memimpin strategi penggalangan dana kepanitiaan, negosiasi kemitraan, dan perancangan skema pendanaan operasional turnamen catur bergengsi tingkat universitas.",
        },
        {
          title: "Bendahara",
          event: "Panitia Pendidikan dan Pelatihan Anggota Baru (P2AB) 2026",
          description:
            "Mengelola alokasi anggaran, pencatatan arus kas, dan pertanggungjawaban laporan keuangan kegiatan kaderisasi anggota baru secara transparan.",
        },
      ],
    },
    {
      organization: "OSIS SMA Negeri 3 Palopo",
      period: "2024 – 2025",
      badge: "STUDENT COUNCIL",
      isPrimary: false,
      roles: [
        {
          title: "Sekretaris Umum",
          event: "Kepengurusan Inti OSIS",
          description:
            "Mengelola administrasi terpusat, tata kelola persuratan resmi lembaga, dokumentasi arsip organisasi, serta memfasilitasi koordinasi lintas divisi program kerja kesiswaan.",
        },
      ],
    },
    {
      organization: "Organisasi Relawan TIK (R-TIK) SMA Negeri 3 Palopo",
      period: "2024 – 2025",
      badge: "DIGITAL LITERACY",
      isPrimary: false,
      roles: [
        {
          title: "Wakil Ketua",
          event: "Kepengurusan Organisasi",
          description:
            "Mengembangkan program literasi teknologi informasi, memandu lokakarya pemanfaatan media digital positif, serta mengoordinasikan kegiatan edukasi teknologi untuk lingkungan sekolah.",
        },
      ],
    },
  ]

  return (
    <section id="organisasi" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          title="PENGALAMAN ORGANISASI"
          subtitle="LEADERSHIP & CONTRIBUTIONS"
        />

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] border-2 border-[#141414] shadow-[5px_5px_0px_0px_#141414] hover:shadow-[7px_7px_0px_0px_#e5262c] transition-all"
            >
              {/* Org Header */}
              <div className="p-4 sm:p-6 bg-[#f6f4f0] border-b-2 border-[#141414] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#141414] text-[#f6f4f0] font-mono font-bold flex items-center justify-center text-xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-poster text-xl sm:text-2xl font-black uppercase text-[#141414]">
                      {exp.organization}
                    </h3>
                    <span className="font-mono text-xs font-bold text-[#e5262c]">
                      PERIODE: {exp.period}
                    </span>
                  </div>
                </div>

                <span className="bg-[#141414] text-[#f6f4f0] font-mono text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider">
                  {exp.badge}
                </span>
              </div>

              {/* Roles List */}
              <div className="p-6 divide-y divide-[#141414]/15">
                {exp.roles.map((role, rIdx) => (
                  <div
                    key={rIdx}
                    className={`space-y-2 ${rIdx > 0 ? "pt-5 mt-5" : ""}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#e5262c]"></span>
                        <h4 className="font-poster font-bold text-base sm:text-lg text-[#141414] uppercase">
                          {role.title}
                        </h4>
                      </div>
                      <span className="font-mono text-xs font-bold bg-[#eae5dc] border border-[#141414] px-2 py-0.5 text-[#141414]">
                        {role.event}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#141414]/80 leading-relaxed pl-4 border-l-2 border-[#e5262c]">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
