import Link from "next/link";
import { Activity, BookOpen, BookmarkCheck, BookMarked, ArrowUpRight, Search, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import pool from "@/lib/db";
import { getCoverUrl } from "@/lib/book-utils";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { rows: statistikRows } = await pool.query(
    `SELECT
       COUNT(*)::int AS total,
       COUNT(*) FILTER (WHERE tersedia = TRUE)::int AS tersedia,
       COUNT(*) FILTER (WHERE tersedia = FALSE)::int AS dipinjam
     FROM buku`
  );
  const statistikData = statistikRows[0] || { total: 0, tersedia: 0, dipinjam: 0 };
  const { rows: bukuPilihan } = await pool.query(
    `SELECT id, judul, cover_url
     FROM buku
     ORDER BY id DESC
     LIMIT 6`
  );

  const statistik = [
    { label: "TOTAL COLLECTION", value: Number(statistikData.total), unit: "BOOKS", Icon: BookOpen, color: "text-cyan-300" },
    { label: "AVAILABLE NOW", value: Number(statistikData.tersedia), unit: "BOOKS", Icon: BookmarkCheck, color: "text-emerald-300" },
    { label: "CURRENTLY ON LOAN", value: Number(statistikData.dipinjam), unit: "BOOKS", Icon: BookMarked, color: "text-pink-300" },
  ];

  return (
    <div className="container py-7 sm:py-10">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow">ROOT / HOME</p>
        <p className="font-mono text-[9px] text-emerald-300/70"><Activity size={12} className="mr-1 inline" /> ALL SYSTEMS OPERATIONAL</p>
      </div>

      <Hero
        nama="PUSTAKA SENJA"
        slogan="Ruang baca komunitas untuk menjelajahi ide, cerita, dan pengetahuan. Masuk ke arsip digital kami dan temukan bacaan yang mungkin mengubah sudut pandangmu."
        lokasi="Area kampus"
        jamBuka="Setiap hari · 09.00–20.00 WIB"
      />

      <section className="search-console terminal-panel scanline mt-6 p-5 sm:p-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="eyebrow">QUICK ACCESS / FIND YOUR NEXT READ</p>
            <h2 className="mt-2 text-xl font-black text-white sm:text-2xl">Cari di <span className="neon">seluruh koleksi.</span></h2>
          </div>
          <Sparkles className="hidden text-cyan-300 sm:block" size={25} />
        </div>
        <form action="/katalog" method="GET" className="flex flex-col gap-3 sm:flex-row">
          <label className="search-glow flex min-h-12 flex-1 items-center gap-3 rounded-md border border-emerald-300/35 bg-black/55 px-4">
            <Search size={18} className="shrink-0 text-emerald-300" />
            <input name="q" type="search" placeholder="Cari judul, penulis, kategori, atau sinopsis..." className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-500" aria-label="Cari koleksi buku" />
            <span className="hidden font-mono text-[8px] text-emerald-300/60 sm:block">SEARCH</span>
          </label>
          <button type="submit" className="btn-primary"><Search size={14} /> CARI BUKU</button>
        </form>
        <p className="mt-3 font-mono text-[8px] tracking-widest text-slate-500">PENCARIAN AKAN MEMBUKA KATALOG DENGAN HASIL YANG SESUAI</p>
      </section>

      <section className="mt-9">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">01 / LIVE DATABASE</p>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">Archive <span className="neon">statistics.</span></h2>
          </div>
          <span className="font-mono text-[9px] text-slate-500">QUERY: COUNT(*) FROM BUKU</span>
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
                <p className="mt-3 font-mono text-[8px] text-slate-600">0{index + 1}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <p className="eyebrow">02 / FEATURED FILES</p>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">Recently <span className="cyan-glow">indexed.</span></h2>
          </div>
          <Link href="/katalog" className="font-mono text-[9px] text-emerald-300 hover:text-white">VIEW ALL ↗</Link>
        </div>

        {bukuPilihan.length > 0 ? (
          <div className="marquee-wrap border-y border-emerald-300/20 py-4">
            <div className="marquee">
              {bukuPilihan.map((buku) => (
                <Link href={`/katalog/${buku.id}`} key={`first-${buku.id}`} className="marquee-item terminal-panel p-3">
                  <img
                    src={getCoverUrl(buku)}
                    alt={`Sampul ${buku.judul}`}
                    className="aspect-[3/4] w-full rounded object-cover"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = "/images/hero-library.png";
                    }}
                  />
                  <p className="mt-3 truncate text-xs font-bold text-white">{buku.judul}</p>
                  <p className="mt-1 font-mono text-[8px] text-emerald-300">FILE_{String(buku.id).padStart(3, "0")}</p>
                </Link>
              ))}
              {bukuPilihan.map((buku) => (
                <Link href={`/katalog/${buku.id}`} key={`second-${buku.id}`} className="marquee-item terminal-panel p-3" aria-hidden="true" tabIndex={-1}>
                  <img
                    src={getCoverUrl(buku)}
                    alt=""
                    className="aspect-[3/4] w-full rounded object-cover"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = "/images/hero-library.png";
                    }}
                  />
                  <p className="mt-3 truncate text-xs font-bold text-white">{buku.judul}</p>
                  <p className="mt-1 font-mono text-[8px] text-emerald-300">FILE_{String(buku.id).padStart(3, "0")}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="terminal-panel p-8 text-center text-sm text-slate-400">Belum ada buku. Tambahkan koleksi pertama melalui katalog.</div>
        )}
        <p className="mt-2 font-mono text-[8px] text-slate-600">HOVER TO PAUSE · SELECT A FILE TO OPEN ITS RECORD</p>
      </section>

      <section className="terminal-panel mt-12 grid gap-5 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="eyebrow">03 / COLLECTION MANAGEMENT</p>
          <h2 className="mt-2 text-2xl font-black text-white">Expand the <span className="neon">archive.</span></h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">Tambahkan buku beserta cover, informasi, dan status ketersediaannya. Data akan tersimpan langsung di koleksi Pustaka Senja.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/katalog" className="btn-ghost">LIHAT KATALOG <ArrowUpRight size={14} /></Link>
          <Link href="/katalog/tambah" className="btn-primary">TAMBAH BUKU <ArrowUpRight size={14} /></Link>
        </div>
      </section>
    </div>
  );
}
