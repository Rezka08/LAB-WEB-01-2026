"use client";

import { useState, useMemo } from "react";
import BukuCard from "@/components/BukuCard";
import { dataBuku, daftarKategori } from "@/data/dataBuku";
import { useBookmark } from "@/context/BookmarkContext";

const pilihanFilter = ["Semua", ...daftarKategori];

export default function Katalog() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [kataKunci, setKataKunci] = useState("");
  const [hanyaTersedia, setHanyaTersedia] = useState(false);
  const [hanyaFavorit, setHanyaFavorit] = useState(false);
  const [urutkan, setUrutkan] = useState("default");

  const { favoritIds, totalFavorit } = useBookmark();

  const bukuTampil = useMemo(() => {
    let hasil = [...dataBuku];

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
      hasil = hasil.filter((buku) => favoritIds.includes(buku.id));
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
  }, [kategoriAktif, kataKunci, hanyaTersedia, hanyaFavorit, urutkan, favoritIds]);

  const resetSemuaFilter = () => {
    setKategoriAktif("Semua");
    setKataKunci("");
    setHanyaTersedia(false);
    setHanyaFavorit(false);
    setUrutkan("default");
  };

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">Katalog buku</h1>
        <p className="mt-3 max-w-xl text-lg text-ink/80">
          Telusuri seluruh koleksi buku Pustaka Senja. Gunakan pencarian dan filter untuk menemukan bacaan favoritmu.
        </p>
      </header>

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

        {/* Quick Toggles: Hanya Tersedia & Tersimpan */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <button
            type="button"
            onClick={() => setHanyaTersedia((prev) => !prev)}
            aria-pressed={hanyaTersedia}
            className={`flex items-center gap-2 border-[3px] border-ink px-3 py-2 font-bold transition ${
              hanyaTersedia
                ? "bg-volt text-on-fill shadow-none translate-x-[2px] translate-y-[2px]"
                : "bg-surface text-ink shadow-brut-sm hover:bg-volt hover:text-on-fill"
            }`}
          >
            <span>{hanyaTersedia ? "✓" : "○"}</span>
            <span>Hanya Tersedia</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setHanyaFavorit((prev) => !prev);
              if (!hanyaFavorit) setKategoriAktif("Semua");
            }}
            aria-pressed={hanyaFavorit}
            className={`flex items-center gap-2 border-[3px] border-ink px-3 py-2 font-bold transition ${
              hanyaFavorit
                ? "bg-bubble text-on-fill shadow-none translate-x-[2px] translate-y-[2px]"
                : "bg-surface text-ink shadow-brut-sm hover:bg-volt hover:text-on-fill"
            }`}
          >
            <span>★</span>
            <span>Tersimpan ({totalFavorit})</span>
          </button>
        </div>
      </div>

      {/* Info Hasil Filter */}
      <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-sm text-ink/70">
        <p>
          Menampilkan <span className="font-bold text-ink">{bukuTampil.length}</span> dari{" "}
          <span className="font-bold text-ink">{dataBuku.length}</span> koleksi
          {kataKunci && <span> untuk pencarian &quot;{kataKunci}&quot;</span>}
          {hanyaFavorit && <span> (daftar tersimpan)</span>}
          {hanyaTersedia && <span> (hanya tersedia)</span>}
        </p>

        {(kataKunci || kategoriAktif !== "Semua" || hanyaTersedia || hanyaFavorit || urutkan !== "default") && (
          <button
            type="button"
            onClick={resetSemuaFilter}
            className="underline underline-offset-4 hover:text-sun font-bold text-xs"
          >
            Reset semua filter
          </button>
        )}
      </div>

      {/* Grid Buku */}
      {bukuTampil.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bukuTampil.map((buku) => (
            <BukuCard key={buku.id} buku={buku} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="space-y-4 border-[3px] border-dashed border-ink bg-surface p-10 text-center shadow-brut">
          <p className="font-mono text-4xl">∅</p>
          <h2 className="text-2xl font-black">Tidak ada buku yang cocok</h2>
          <p className="mx-auto max-w-md font-mono text-sm text-ink/70">
            {hanyaFavorit
              ? "Kamu belum menyimpan buku apa pun. Klik tombol ☆ Simpan pada kartu buku untuk menambahkannya ke sini."
              : "Coba gunakan kata kunci pencarian lain atau setel ulang filter untuk melihat seluruh koleksi."}
          </p>
          <button
            type="button"
            onClick={resetSemuaFilter}
            className="border-[3px] border-ink bg-sun px-6 py-2.5 font-bold text-on-fill shadow-brut transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Lihat semua buku
          </button>
        </div>
      )}
    </div>
  );
}
