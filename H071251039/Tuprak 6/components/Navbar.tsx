"use client"

import React, { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight, Github, Mail, Sparkles } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "TENTANG", href: "#tentang", num: "01" },
    { name: "PROYEK", href: "#proyek", num: "02" },
    { name: "SKILLS", href: "#skills", num: "03" },
    { name: "PRESTASI", href: "#prestasi", num: "04" },
    { name: "ORGANISASI", href: "#organisasi", num: "05" },
    { name: "PENDIDIKAN", href: "#pendidikan", num: "06" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f6f4f0]/95 backdrop-blur-md border-b-2 border-[#141414] py-3 shadow-sm"
          : "bg-[#f6f4f0]/80 backdrop-blur-sm border-b border-[#141414]/20 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#e5262c]"
        >
          {/* Stamp Monogram */}
          <div className="w-10 h-10 bg-[#e5262c] text-[#f6f4f0] font-poster font-black flex items-center justify-center text-xs tracking-tighter border-2 border-[#141414] shadow-[2px_2px_0px_0px_#141414] group-hover:rotate-6 transition-transform">
            AQ/IL
          </div>
          <div className="flex flex-col">
            <span className="font-poster font-black text-sm tracking-wider text-[#141414] uppercase">
              AQILA SANDEWANG
            </span>
            <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-[#141414]/70">
              <span className="inline-block w-2 h-2 rounded-full bg-[#e5262c] animate-pulse"></span>
              <span>H071251039 // UNHAS</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1 text-xs font-mono font-bold text-[#141414] hover:text-[#e5262c] transition-colors py-1 relative"
            >
              <span className="text-[10px] text-[#e5262c] font-black">{link.num}.</span>
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#e5262c] group-hover:w-full transition-all duration-200"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/akiljhe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 flex items-center justify-center border-2 border-[#141414] bg-[#ffffff] text-[#141414] hover:bg-[#e5262c] hover:text-[#f6f4f0] transition-colors shadow-[2px_2px_0px_0px_#141414]"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="#kontak"
            className="inline-flex items-center gap-2 bg-[#e5262c] hover:bg-[#c91c22] text-[#f6f4f0] text-xs font-mono font-bold tracking-wider uppercase px-4 py-2 border-2 border-[#141414] shadow-[3px_3px_0px_0px_#141414] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#141414] active:translate-x-[1px] active:translate-y-[1px] transition-all"
          >
            <span>HUBUNGI</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 border-2 border-[#141414] bg-[#ffffff] text-[#141414] shadow-[2px_2px_0px_0px_#141414]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f6f4f0] border-b-2 border-[#141414] px-4 pt-3 pb-6 mt-2 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 border border-[#141414] bg-[#ffffff] font-mono text-xs font-bold text-[#141414] hover:bg-[#e5262c] hover:text-[#f6f4f0] transition-colors"
              >
                <span className="text-[#e5262c] group-hover:text-[#f6f4f0]">{link.num}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="flex gap-2 pt-2">
            <a
              href="https://github.com/akiljhe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 border-2 border-[#141414] bg-[#ffffff] font-mono text-xs font-bold text-[#141414]"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2 border-2 border-[#141414] bg-[#e5262c] text-[#f6f4f0] font-mono text-xs font-bold"
            >
              <Mail className="w-4 h-4" />
              <span>KONTAK</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
