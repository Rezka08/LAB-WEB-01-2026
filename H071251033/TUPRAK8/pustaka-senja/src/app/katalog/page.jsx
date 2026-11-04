"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import { dataBuku } from "@/data/dataBuku";

const kategoriList = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

export default function KatalogPage() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuTerfilter =
    kategoriAktif === "Semua"
      ? dataBuku
      : dataBuku.filter((buku) => buku.kategori === kategoriAktif);

  return (
    <div className="space-y-8">
      <div>
        <h1
          style={{ fontFamily: "var(--font-fraunces)" }}
          className="text-3xl sm:text-4xl font-bold text-[#382933]"
        >
          Katalog Buku
        </h1>
        <p className="text-[#4E3A47] text-sm mt-1 font-medium">
          Jelajahi dan temukan koleksi buku bacaan yang tersedia di Pustaka Senja.
        </p>
      </div>

      {/* Filter Kategori: Soft Wisteria */}
      <div className="flex flex-wrap gap-2.5">
        {kategoriList.map((kategori) => (
          <button
            key={kategori}
            type="button"
            onClick={() => setKategoriAktif(kategori)}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 ${
              kategoriAktif === kategori
                ? "bg-[#E06D53] text-white shadow-sm"
                : "bg-[#C9B6E4] border border-[#B8A2D6] text-[#382933] hover:bg-[#B8A2D6]"
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bukuTerfilter.map((buku) => (
          <BukuCard key={buku.id} buku={buku} />
        ))}
      </div>
    </div>
  );
}