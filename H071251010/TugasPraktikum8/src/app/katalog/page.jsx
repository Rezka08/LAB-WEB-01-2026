"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import dataBuku from "@/data/dataBuku";
import BukuCard from "@/components/BukuCard";

const kategoriBuku = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

// Client Component karena filter dan pencarian memakai useState.
export default function KatalogPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [kataKunci, setKataKunci] = useState("");

  const bukuTampil = dataBuku.filter((buku) => {
    const cocokKategori = kategoriAktif === "Semua" || buku.kategori === kategoriAktif;
    const teksBuku = `${buku.judul} ${buku.penulis}`.toLowerCase();
    const cocokKataKunci = teksBuku.includes(kataKunci.toLowerCase());
    return cocokKategori && cocokKataKunci;
  });

  function resetFilter() {
    setKategoriAktif("Semua");
    setKataKunci("");
  }

  return (
    <div className="container py-9 sm:py-12">
      <section className="terminal-panel p-6 sm:p-9">
        <p className="eyebrow">/ ARCHIVE / DIRECTORY_02</p>
        <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-4xl font-black text-white sm:text-5xl">BOOK <span className="neon">ARCHIVE</span><span className="text-cyan-300">_</span></h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Pilih kategori, temukan buku, dan buka detail setiap koleksi melalui tautan unik.</p>
          </div>
          <span className="font-mono text-[10px] text-cyan-300">{String(dataBuku.length).padStart(2, "0")} RECORDS INDEXED</span>
        </div>
      </section>

      <section className="terminal-panel mt-6 p-4 sm:p-5">
        <div className="mb-4 flex items-center gap-2 font-mono text-[9px] tracking-widest text-emerald-300">
          <SlidersHorizontal size={14} /> QUERY FILTERS
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {kategoriBuku.map((kategori) => (
              <button
                key={kategori}
                type="button"
                onClick={() => setKategoriAktif(kategori)}
                aria-pressed={kategoriAktif === kategori}
                className={`filter-btn ${kategoriAktif === kategori ? "filter-active" : ""}`}
              >
                {kategori.toUpperCase()}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-2 border border-cyan-300/30 bg-black/40 px-3 py-2.5 lg:w-72">
            <Search size={14} className="text-cyan-300" />
            <input
              value={kataKunci}
              onChange={(event) => setKataKunci(event.target.value)}
              placeholder="SEARCH BOOK / AUTHOR..."
              className="w-full bg-transparent font-mono text-[10px] text-white outline-none placeholder:text-slate-600"
              aria-label="Cari judul atau penulis buku"
            />
          </label>
        </div>
      </section>

      <div className="my-5 flex items-center justify-between font-mono text-[9px] tracking-widest text-slate-500">
        <span>RESULT: <b className="text-emerald-300">{bukuTampil.length}</b> RECORD(S)</span>
        <span>FILTER // {kategoriAktif.toUpperCase()}</span>
      </div>

      {bukuTampil.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bukuTampil.map((buku) => <BukuCard key={buku.id} buku={buku} />)}
        </div>
      ) : (
        <div className="terminal-panel p-12 text-center">
          <p className="eyebrow">NO RECORD FOUND</p>
          <p className="mt-3 text-white">Coba kategori atau kata kunci lain.</p>
          <button type="button" className="btn-secondary mt-5 px-4 py-2" onClick={resetFilter}>RESET FILTER</button>
        </div>
      )}
    </div>
  );
}
