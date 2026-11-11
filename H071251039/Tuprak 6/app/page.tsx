import React from "react"
import dynamic from "next/dynamic"
import Navbar from "@/components/Navbar"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import AchievementsSection from "@/components/AchievementsSection"
import ExperienceSection from "@/components/ExperienceSection"
import EducationSection from "@/components/EducationSection"
import ContactSection from "@/components/ContactSection"

const Demo = dynamic(() => import("@/components/ui/demo"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[100svh] bg-[#f6f4f0] flex items-center justify-center font-mono text-xs uppercase tracking-widest text-[#141414]/40">
      PORTFOLIO 2026 // AQILA SANDEWANG
    </div>
  ),
})

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#f6f4f0] text-[#141414] relative selection:bg-[#e5262c] selection:text-[#f6f4f0]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section (Waving Poster Landing) */}
      <section className="relative w-full h-[100svh] overflow-hidden pt-12 sm:pt-0">
        <Demo />
      </section>

      {/* 01. About Section */}
      <AboutSection />

      {/* 02. Projects Section */}
      <ProjectsSection />

      {/* 03. Skills & Tech Stack Section */}
      <SkillsSection />

      {/* 04. Achievements Section */}
      <AchievementsSection />

      {/* 05. Experience Section */}
      <ExperienceSection />

      {/* 06. Education Section */}
      <EducationSection />

      {/* 07. Contact & Footer Section */}
      <ContactSection />
    </main>
  )
}
