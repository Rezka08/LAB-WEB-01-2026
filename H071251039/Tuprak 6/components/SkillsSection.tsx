import React from "react"
import SectionHeader from "./SectionHeader"
import { Code2, Globe2, Database, Wrench, Terminal, Cpu } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      num: "01",
      category: "Bahasa Pemrograman",
      enCategory: "LANGUAGES",
      description:
        "Fondasi logika algoritma, rekayasa kecerdasan buatan, problem solving, dan pemrograman sistem berorientasi objek.",
      icon: Code2,
      skills: [
        { name: "Python", tag: "AI & Pipeline", level: "Primary" },
        { name: "JavaScript", tag: "Web & Vision", level: "Primary" },
        { name: "Java", tag: "OOP & Systems", level: "Core" },
        { name: "C++", tag: "Competitive Prog.", level: "Core" },
      ],
    },
    {
      num: "02",
      category: "Web & Computer Vision",
      enCategory: "VISION & WEB",
      description:
        "Pengembangan antarmuka interaktif masa depan berbasis peramban (browser) yang ditenagai model penglihatan komputer dan akselerasi grafis.",
      icon: Globe2,
      skills: [
        { name: "MediaPipe", tag: "Hand Tracking / CV", level: "Specialist" },
        { name: "Three.js / WebGL", tag: "3D & Shaders", level: "Advanced" },
        { name: "Node.js", tag: "Runtime", level: "Core" },
        { name: "Express.js", tag: "REST API", level: "Core" },
        { name: "Tailwind CSS", tag: "UI Framework", level: "Primary" },
      ],
    },
    {
      num: "03",
      category: "Database & BaaS",
      enCategory: "DATA PERSISTENCE",
      description:
        "Pengelolaan skema basis data relasional terstruktur, pemrosesan kueri efisien, dan integrasi backend-as-a-service modern.",
      icon: Database,
      skills: [
        { name: "PostgreSQL", tag: "Relational DB", level: "Primary" },
        { name: "MySQL", tag: "RDBMS", level: "Primary" },
        { name: "SQLite", tag: "Embedded DB", level: "Core" },
        { name: "Firebase", tag: "Cloud BaaS", level: "Applied" },
      ],
    },
    {
      num: "04",
      category: "Tools & Workflow",
      enCategory: "DEV ENVIRONMENT",
      description:
        "Ekosistem pendukung untuk kontrol versi kode terdistribusi, administrasi database grafis, dan manajemen proyek kolaboratif.",
      icon: Wrench,
      skills: [
        { name: "Git & GitHub", tag: "Version Control", level: "Primary" },
        { name: "pgAdmin 4", tag: "Postgres GUI", level: "Tool" },
        { name: "TablePlus", tag: "DB Client", level: "Tool" },
        { name: "VS Code", tag: "Primary Editor", level: "Environment" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          title="TECH STACK & TOOLS"
          subtitle="TECHNOLOGIES & CAPABILITIES"
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.num}
                className="bg-[#ffffff] border-2 border-[#141414] shadow-[5px_5px_0px_0px_#141414] hover:shadow-[7px_7px_0px_0px_#e5262c] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="p-4 bg-[#f6f4f0] border-b-2 border-[#141414] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-black text-[#e5262c]">
                        {cat.num}.
                      </span>
                      <span className="font-mono text-xs font-bold uppercase text-[#141414]">
                        {cat.enCategory}
                      </span>
                    </div>
                    <Icon className="w-4 h-4 text-[#e5262c]" />
                  </div>

                  {/* Title & Description */}
                  <div className="p-6">
                    <h3 className="font-poster text-xl sm:text-2xl font-black uppercase text-[#141414] mb-2">
                      {cat.category}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#141414]/75 leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    {/* Skill Pills Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-2.5 bg-[#f6f4f0] border border-[#141414] flex items-center justify-between hover:border-[#e5262c] hover:bg-[#fff9f9] transition-all group"
                        >
                          <div className="flex flex-col">
                            <span className="font-mono text-xs font-bold text-[#141414] group-hover:text-[#e5262c] transition-colors">
                              {skill.name}
                            </span>
                            <span className="font-mono text-[10px] text-[#141414]/60">
                              {skill.tag}
                            </span>
                          </div>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#141414]/40 group-hover:bg-[#e5262c] group-hover:scale-125 transition-all"></span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Stamp */}
                <div className="px-6 py-3 bg-[#eae5dc] border-t-2 border-[#141414] flex items-center justify-between text-[11px] font-mono text-[#141414]/70">
                  <span>CAPABILITY METRIC</span>
                  <span className="font-bold text-[#141414]">VERIFIED // STACK 2026</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
