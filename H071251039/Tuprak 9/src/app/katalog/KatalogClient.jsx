"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import BukuCard from "@/components/BukuCard";
import TambahBukuForm from "@/components/TambahBukuForm";
import { daftarKategori } from "@/data/dataBuku";
import { useBookmark } from "@/context/BookmarkContext";

const pilihanFilter = ["Semua", ...daftarKategori];

export default function KatalogClient({ bukuList = [] }) {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [kataKunci, setKataKunci] = useState("");
  const [hanyaTersedia, setHanyaTersedia] = useState(false);
  const [hanyaFavorit, setHanyaFavorit] = useState(false);
  const [urutkan, setUrutkan] = useState("default");
  const [tampilkanFormTambah, setTampilkanFormTambah] = useState(false);

  const { favoritIds, totalFavorit } = useBookmark();

  const bukuTampil = useMemo(() => {
    let hasil = [...bukuList];

    // Filter Kategori
    if (kategoriAktif !== "Semua") {
      hasil = hasil.filter((buku) => buku.kategori === kategoriAktif);
    }

    // Filter Pencarian (judul atau penulis)
    if (kataKunci.trim() !== "") {
      const q = kataKunci.toLowerCase().trim();
      hasil = hasil.filter(
        (buku) =>
          buku.judul.toLowerCase().includes(q) ||
          buku.penulis.toLowerCase().includes(q)
      );
    }

    // Filter Status Tersedia
    if (hanyaTersedia) {
      hasil = hasil.filter((buku) => buku.tersedia);
    }

    // Filter Favorit / Tersimpan
    if (hanyaFavorit) {
      hasil = hasil.filter((buku) => favoritIds.includes(String(buku.id)));
    }

    // Pengurutan
    if (urutkan === "terbaru") {
      hasil.sort((a, b) => b.tahun - a.tahun);
    } else if (urutkan === "terlama") {
      hasil.sort((a, b) => a.tahun - b.tahun);
    } else if (urutkan === "judul-az") {
      hasil.sort((a, b) => a.judul.localeCompare(b.judul));
    }

    return hasil;
  }, [bukuList, kategoriAktif, kataKunci, hanyaTersedia, hanyaFavorit, urutkan, favoritIds]);

  const resetSemuaFilter = () => {
    setKategoriAktif("Semua");
    setKataKunci("");
    setHanyaTersedia(false);
    setHanyaFavorit(false);
    setUrutkan("default");
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">Katalog buku</h1>
          <p className="mt-3 max-w-xl text-lg text-ink/80">
            Telusuri seluruh koleksi buku Pustaka Senja langsung dari basis data PostgreSQL. Gunakan pencarian dan filter untuk menemukan bacaan favoritmu.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setTampilkanFormTambah((prev) => !prev)}
          className="border-[3px] border-ink bg-sun px-6 py-3 font-bold text-on-fill shadow-brut transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none shrink-0"
        >
          {tampilkanFormTambah ? "✕ Tutup Formulir" : "+ Tambah Buku Baru"}
        </button>
      </header>

      {/* Accordion / Dropdown Form Tambah Buku */}
      {tampilkanFormTambah && (
        <section aria-label="Formulir Tambah Buku" className="border-[3px] border-ink bg-surface p-6 shadow-brut-lg md:p-8">
          <div className="mb-6 flex items-center justify-between border-b-[3px] border-ink pb-4">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-sun">
                Entri Koleksi Baru
              </span>
              <h2 className="text-2xl font-black">Tambah Buku ke PostgreSQL</h2>
            </div>
            <button
              type="button"
              onClick={() => setTampilkanFormTambah(false)}
              className="border-2 border-ink px-3 py-1 font-mono text-xs font-bold hover:bg-ink hover:text-paper"
            >
              Tutup ✕
            </button>
          </div>
          <TambahBukuForm onCancel={() => setTampilkanFormTambah(false)} />
        </section>
      )}

      {/* Control Bar: Pencarian & Pengurutan */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-xl">
          <input
            type="text"
            value={kataKunci}
            onChange={(e) => setKataKunci(e.target.value)}
            placeholder="Cari judul buku atau nama penulis..."
            aria-label="Cari buku"
            className="w-full border-[3px] border-ink bg-surface px-4 py-3 pr-10 font-mono text-sm text-ink outline-none transition focus:shadow-brut-sm"
          />
          {kataKunci ? (
            <button
              type="button"
              onClick={() => setKataKunci("")}
              aria-label="Hapus pencarian"
              className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs font-bold text-ink/60 hover:text-ink"
            >
              ✕
            </button>
          ) : (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-ink/40"
            >
              ⌕
            </span>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <label htmlFor="urutkan" className="font-mono text-xs font-bold shrink-0">
            Urutkan:
          </label>
          <select
            id="urutkan"
            value={urutkan}
            onChange={(e) => setUrutkan(e.target.value)}
            className="border-[3px] border-ink bg-surface px-3 py-2.5 font-mono text-sm text-ink outline-none transition focus:shadow-brut-sm"
          >
            <option value="default">Default</option>
            <option value="terbaru">Tahun: Terbaru</option>
            <option value="terlama">Tahun: Terlama</option>
            <option value="judul-az">Judul (A–Z)</option>
          </select>
        </div>
      </div>

      {/* Filter Kategori & Status Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-y-[3px] border-ink py-4">
        {/* Kategori Buttons */}
        <div role="group" aria-label="Filter kategori" className="flex flex-wrap gap-2">
          {pilihanFilter.map((kategori) => {
            const aktif = kategori === kategoriAktif && !hanyaFavorit;
            return (
              <button
                key={kategori}
                type="button"
                onClick={() => {
                  setKategoriAktif(kategori);
                  setHanyaFavorit(false);
                }}
                aria-pressed={aktif}
                className={`border-[3px] border-ink px-4 py-2 font-bold transition ${
                  aktif
                    ? "translate-x-[2px] translate-y-[2px] bg-ink text-paper shadow-none"
                    : "bg-surface text-ink shadow-brut-sm hover:bg-volt hover:text-on-fill"
                }`}
              >
                {kategori}
              </button>
            );
          })}
        </div>

        {/* Checkbox Toggles */}
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex cursor-pointer items-center gap-2 font-mono text-xs font-bold">
            <input
              type="checkbox"
              checked={hanyaTersedia}
              onChange={(e) => setHanyaTersedia(e.target.checked)}
              className="h-4 w-4 accent-ink"
            />
            <span>Hanya yang tersedia</span>
          </label>

          <button
            type="button"
            onClick={() => setHanyaFavorit((prev) => !prev)}
            aria-pressed={hanyaFavorit}
            className={`flex items-center gap-1.5 border-2 border-ink px-3 py-1 font-mono text-xs font-bold transition ${
              hanyaFavorit
                ? "bg-sun text-on-fill"
                : "bg-surface text-ink hover:bg-sun hover:text-on-fill"
            }`}
          >
            <span>★</span>
            <span>Tersimpan ({totalFavorit})</span>
          </button>
        </div>
      </div>

      {/* Info Hasil Filter */}
      <div className="flex items-center justify-between font-mono text-xs text-ink/70">
        <span>
          Menampilkan <strong>{bukuTampil.length}</strong> dari <strong>{bukuList.length}</strong> buku
        </span>
        {(kategoriAktif !== "Semua" || kataKunci || hanyaTersedia || hanyaFavorit || urutkan !== "default") && (
          <button
            type="button"
            onClick={resetSemuaFilter}
            className="underline underline-offset-4 hover:text-sun"
          >
            Reset semua filter
          </button>
        )}
      </div>

      {/* Grid Buku */}
      {bukuTampil.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bukuTampil.map((buku) => (
            <BukuCard key={buku.id} buku={buku} />
          ))}
        </div>
      ) : (
        <div className="border-[3px] border-dashed border-ink/40 bg-surface/50 p-12 text-center">
          <p className="font-mono text-lg font-bold">Tidak ada buku yang cocok dengan filter.</p>
          <p className="mt-1 font-mono text-xs text-ink/60">
            Coba ubah kata kunci pencarian atau reset filter yang sedang aktif.
          </p>
          <button
            type="button"
            onClick={resetSemuaFilter}
            className="mt-6 border-[3px] border-ink bg-sun px-6 py-2.5 font-bold text-on-fill shadow-brut-sm hover:shadow-none"
          >
            Reset Filter
          </button>
        </div>
      )}
    </div>
  );
}

