import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero({ nama, slogan, lokasi, jamBuka }) {
  return (
    <section className="hero-cinematic scanline" style={{ backgroundImage: "linear-gradient(90deg, rgba(0,5,3,.95), rgba(0,10,6,.82) 48%, rgba(0,6,4,.38)), url('/images/hero-library.png')" }}>
      <div className="absolute inset-0 hero-grid" />
      <div className="orbit right-[7%] top-[14%] hidden h-64 w-64 lg:block" />
      <div className="orbit right-[13%] top-[23%] hidden h-48 w-48 lg:block" />
      <div className="relative z-10 flex min-h-[490px] flex-col justify-between p-6 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow">[ COMMUNITY KNOWLEDGE NETWORK ]</p>
          <span className="flex items-center gap-2 rounded-full border border-emerald-300/35 bg-black/55 px-3 py-2 font-mono text-[9px] text-emerald-200">
            <i className="pulse-dot h-2 w-2 rounded-full bg-emerald-300" /> LIVE ARCHIVE
          </span>
        </div>
        <div className="max-w-3xl py-12">
          <p className="mb-4 font-mono text-[10px] tracking-[.28em] text-cyan-300">WELCOME TO THE ARCHIVE</p>
          <h1 className="hero-title text-white">{nama.split(" ")[0]}<br /><span className="neon">{nama.split(" ").slice(1).join(" ") || "ARCHIVE"}</span><span className="cyan-glow">_</span></h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-200/80 sm:text-base">{slogan}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/katalog" className="btn-primary">EXPLORE COLLECTION <ArrowUpRight size={15} /></Link>
            <Link href="/katalog/tambah" className="btn-secondary">ADD A BOOK +</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[9px] tracking-widest text-emerald-100/65">
            <span>⌖ {lokasi}</span><span>◷ {jamBuka}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
