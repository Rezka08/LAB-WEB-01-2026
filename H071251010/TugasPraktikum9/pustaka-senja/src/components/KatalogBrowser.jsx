"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, Plus, X } from "lucide-react";
import BukuCard from "@/components/BukuCard";

export default function KatalogBrowser({ buku, statusMessage = "", initialQuery = "" }) {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [statusAktif, setStatusAktif] = useState("Semua status");
  const [kataKunci, setKataKunci] = useState(initialQuery);

  const kategoriBuku = useMemo(
    () => ["Semua", ...new Set(buku.map((item) => item.kategori))],
    [buku]
  );

  const bukuTampil = useMemo(() => {
    const keyword = kataKunci.trim().toLowerCase();
    return buku.filter((item) => {
      const cocokKategori = kategoriAktif === "Semua" || item.kategori === kategoriAktif;
      const cocokStatus = statusAktif === "Semua status" || (statusAktif === "Tersedia" ? item.tersedia : !item.tersedia);
      const teksBuku = `${item.judul} ${item.penulis} ${item.kategori} ${item.sinopsis}`.toLowerCase();
      return cocokKategori && cocokStatus && teksBuku.includes(keyword);
    });
  }, [buku, kategoriAktif, statusAktif, kataKunci]);

  function resetFilter() {
    setKategoriAktif("Semua");
    setStatusAktif("Semua status");
    setKataKunci("");
  }

  return (
    <>
      {statusMessage && <div role="status" className="mb-5 border border-emerald-300/35 bg-emerald-300/5 px-4 py-3 text-xs text-emerald-200">{statusMessage}</div>}

      <section className="terminal-panel p-6 sm:p-9">
        <p className="eyebrow">/ ARCHIVE / DIRECTORY_02</p>
        <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-4xl font-black text-white sm:text-5xl">BOOK <span className="neon">ARCHIVE</span><span className="text-cyan-300">_</span></h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Pilih kategori, cari judul atau penulis, dan buka detail setiap koleksi melalui tautan unik.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[10px] text-cyan-300">{String(buku.length).padStart(2, "0")} RECORDS INDEXED</span>
            <Link href="/katalog/tambah" className="btn-primary"><Plus size={14} /> TAMBAH BUKU</Link>
          </div>
        </div>
      </section>

      <section className="terminal-panel mt-6 p-4 sm:p-5">
        <div className="mb-4 flex items-center gap-2 font-mono text-[9px] tracking-widest text-emerald-300"><SlidersHorizontal size={14} /> SEARCH & QUERY FILTERS</div>
        <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
          <label className="flex min-h-12 items-center gap-2 border border-cyan-300/30 bg-black/40 px-3 py-2.5">
            <Search size={15} className="shrink-0 text-cyan-300" />
            <input value={kataKunci} onChange={(event) => setKataKunci(event.target.value)} placeholder="Cari judul, penulis, kategori, atau sinopsis..." className="w-full bg-transparent text-xs text-white outline-none placeholder:text-slate-600" aria-label="Cari buku" />
            {kataKunci && <button type="button" onClick={() => setKataKunci("")} aria-label="Hapus pencarian" className="text-slate-400 hover:text-white"><X size={14} /></button>}
          </label>
          <select value={statusAktif} onChange={(event) => setStatusAktif(event.target.value)} className="terminal-input">
            <option>Semua status</option>
            <option>Tersedia</option>
            <option>Sedang Dipinjam</option>
          </select>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {kategoriBuku.map((kategori) => (
            <button key={kategori} type="button" onClick={() => setKategoriAktif(kategori)} aria-pressed={kategoriAktif === kategori} className={`filter-btn ${kategoriAktif === kategori ? "filter-active" : ""}`}>{kategori.toUpperCase()}</button>
          ))}
        </div>
      </section>

      <div className="my-5 flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] tracking-widest text-slate-500">
        <span>RESULT: <b className="text-emerald-300">{bukuTampil.length}</b> / {buku.length} RECORD(S)</span>
        <button type="button" onClick={resetFilter} className="text-cyan-300 hover:text-white">RESET SEARCH & FILTER</button>
      </div>

      {bukuTampil.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{bukuTampil.map((item) => <BukuCard key={item.id} buku={item} />)}</div>
      ) : (
        <div className="terminal-panel p-12 text-center">
          <p className="eyebrow">NO RECORD FOUND</p>
          <p className="mt-3 text-white">Tidak ada buku yang cocok dengan pencarian atau filter.</p>
          <button type="button" className="btn-secondary mt-5" onClick={resetFilter}>RESET FILTER</button>
        </div>
      )}
    </>
  );
}
