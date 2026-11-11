"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";

const kategoriList = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function KatalogClient({ daftarBuku }) {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [kataKunci, setKataKunci] = useState("");

  const bukuTerfilter = daftarBuku.filter((buku) => {
    const cocokKategori =
      kategoriAktif === "Semua" || buku.kategori === kategoriAktif;
    const cocokCari =
      buku.judul.toLowerCase().includes(kataKunci.toLowerCase()) ||
      buku.penulis.toLowerCase().includes(kataKunci.toLowerCase());

    return cocokKategori && cocokCari;
  });

  return (
    <div className="space-y-6">
      {/* Pencarian & Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {kategoriList.map((kategori) => (
            <button
              key={kategori}
              type="button"
              onClick={() => setKategoriAktif(kategori)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                kategoriAktif === kategori
                  ? "bg-[#E06D53] text-white shadow-sm"
                  : "bg-[#C9B6E4] border border-[#B8A2D6] text-[#382933] hover:bg-[#B8A2D6]"
              }`}
            >
              {kategori}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={kataKunci}
          onChange={(e) => setKataKunci(e.target.value)}
          placeholder="Cari judul atau penulis..."
          className="w-full md:w-72 bg-[#FFF2CC] border-2 border-[#FFE699] rounded-xl px-4 py-2 text-sm text-[#382933] font-medium placeholder-[#4E3A47]/60 focus:outline-none focus:border-[#E06D53] transition"
        />
      </div>

      {/* Grid Buku */}
      {bukuTerfilter.length === 0 ? (
        <div className="text-center py-12 bg-white border border-[#C9B6E4]/50 rounded-2xl text-[#4E3A47] font-medium">
          Tidak ada buku yang cocok dengan pencarian &quot;{kataKunci}&quot;.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bukuTerfilter.map((buku) => (
            <BukuCard key={buku.id} buku={buku} />
          ))}
        </div>
      )}
    </div>
  );
}