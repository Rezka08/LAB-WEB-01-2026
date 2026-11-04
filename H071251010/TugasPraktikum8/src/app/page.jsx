import Link from "next/link";
import { Activity, BookOpen, BookmarkCheck, BookMarked, ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import BukuCard from "@/components/BukuCard";
import dataBuku from "@/data/dataBuku";

// Beranda tidak membutuhkan hooks, sehingga tetap Server Component.
export default function HomePage() {
  const total = dataBuku.length;
  const tersedia = dataBuku.filter((buku) => buku.tersedia).length;
  const dipinjam = dataBuku.filter((buku) => !buku.tersedia).length;
  const bukuPilihan = dataBuku.slice(0, 6);

  const statistik = [
    { label: "TOTAL COLLECTION", value: total, unit: "BOOKS", Icon: BookOpen, color: "text-cyan-300" },
    { label: "AVAILABLE NOW", value: tersedia, unit: "BOOKS", Icon: BookmarkCheck, color: "text-emerald-300" },
    { label: "CURRENTLY ON LOAN", value: dipinjam, unit: "BOOKS", Icon: BookMarked, color: "text-pink-300" },
  ];

  return (
    <div className="container py-7 sm:py-10">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow">ROOT / HOME // MAINFRAME</p>
        <p className="font-mono text-[9px] text-emerald-300/70">
          <Activity size={12} className="mr-1 inline" /> ALL SYSTEMS OPERATIONAL
        </p>
      </div>

      <Hero
        nama="PUSTAKA SENJA"
        slogan="Ruang baca komunitas untuk menjelajahi ide, cerita, dan pengetahuan. Masuk ke arsip digital kami dan temukan bacaan yang mungkin mengubah sudut pandangmu."
        lokasi="Area kampus"
        jamBuka="Setiap hari · 09.00–20.00 WIB"
      />

      {/* Statistik selalu dihitung dari satu sumber data, bukan angka manual. */}
      <section className="mt-9">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">01 / LIVE DATABASE</p>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">Archive <span className="neon">statistics.</span></h2>
          </div>
          <span className="font-mono text-[9px] text-slate-500">QUERY: SELECT * FROM BOOKS</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {statistik.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div key={item.label} className="stat-card">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-widest text-slate-400">{item.label}</span>
                  <Icon size={18} className={item.color} />
                </div>
                <div className="mt-6 flex items-end gap-2">
                  <span className={`font-mono text-5xl font-black ${item.color}`}>{String(item.value).padStart(2, "0")}</span>
                  <span className="pb-1 font-mono text-[9px] text-slate-500">{item.unit}</span>
                </div>
                <div className="mt-5 h-px bg-gradient-to-r from-emerald-300/70 via-cyan-300/25 to-transparent" />
                <p className="mt-3 font-mono text-[8px] text-slate-600">0{index + 1} // METRIC VERIFIED</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Koleksi pilihan memakai gambar cover yang sama dengan halaman Katalog. */}
      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <p className="eyebrow">02 / FEATURED FILES</p>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">Recently <span className="cyan-glow">indexed.</span></h2>
          </div>
          <Link href="/katalog" className="font-mono text-[9px] text-emerald-300 hover:text-white">VIEW ALL ↗</Link>
        </div>

        <div className="marquee-wrap border-y border-emerald-300/20 py-4">
          <div className="marquee">
            {bukuPilihan.map((buku) => (
              <Link href={`/katalog/${buku.id}`} key={`first-${buku.id}`} className="marquee-item terminal-panel p-3">
                <img src={buku.cover} alt={`Sampul sementara ${buku.judul}`} className="w-full rounded object-cover" />
                <p className="mt-3 truncate text-xs font-bold text-white">{buku.judul}</p>
                <p className="mt-1 font-mono text-[8px] text-emerald-300">FILE_{buku.id.padStart(3, "0")}</p>
              </Link>
            ))}
            {bukuPilihan.map((buku) => (
              <Link href={`/katalog/${buku.id}`} key={`second-${buku.id}`} className="marquee-item terminal-panel p-3" aria-hidden="true" tabIndex={-1}>
                <img src={buku.cover} alt="" className="w-full rounded object-cover" />
                <p className="mt-3 truncate text-xs font-bold text-white">{buku.judul}</p>
                <p className="mt-1 font-mono text-[8px] text-emerald-300">FILE_{buku.id.padStart(3, "0")}</p>
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-2 font-mono text-[8px] text-slate-600">HOVER TO PAUSE · SELECT A FILE TO OPEN ITS RECORD</p>
      </section>

      <section className="terminal-panel mt-12 grid gap-5 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="eyebrow">03 / COMMUNITY INPUT</p>
          <h2 className="mt-2 text-2xl font-black text-white">Help expand the <span className="neon">archive.</span></h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">Punya rekomendasi bacaan? Kirim usulan agar koleksi Pustaka Senja terus berkembang.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/katalog" className="btn-primary">OPEN CATALOG <ArrowUpRight size={14} /></Link>
          <Link href="/usulan" className="btn-secondary">SUBMIT A BOOK +</Link>
        </div>
      </section>
    </div>
  );
}
