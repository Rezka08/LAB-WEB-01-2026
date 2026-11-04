"use client";

import { useState } from "react";
import Link from "next/link";

export default function BukuCard({ buku }) {
  const [favorit, setFavorit] = useState(false);

  return (
    <article className="bg-[#FFF2CC] border-2 border-[#FFE699] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#E06D53]/40 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          {/* Chip Kategori: Warm Butter Aksen */}
          <span className="text-xs px-3 py-1 rounded-full bg-white/80 text-[#382933] border border-[#FFE699] font-bold">
            {buku.kategori}
          </span>
          <span
            className={`text-xs px-3 py-1 rounded-full font-bold border ${
              buku.tersedia
                ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                : "bg-rose-100 text-rose-700 border-rose-300"
            }`}
          >
            {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>
        </div>

        {/* Judul Buku: Fraunces + Charcoal Plum */}
        <h3
          style={{ fontFamily: "var(--font-fraunces)" }}
          className="text-xl font-bold text-[#382933] leading-snug line-clamp-1"
        >
          {buku.judul}
        </h3>

        {/* Metadata: Charcoal Plum */}
        <p className="text-sm font-medium text-[#4E3A47] mt-1">
          {buku.penulis} &bull; {buku.tahun}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#FFE699] flex items-center justify-between gap-3">
        {/* Bookmark Icon / Tombol Favorit: Soft Wisteria */}
        <button
          type="button"
          onClick={() => setFavorit(!favorit)}
          className={`text-xs font-bold px-3.5 py-2 rounded-lg border transition-all active:scale-95 flex items-center gap-1.5 ${
            favorit
              ? "bg-[#C9B6E4] border-[#B8A2D6] text-[#382933] shadow-sm"
              : "bg-white border-[#C9B6E4] text-[#382933] hover:bg-[#F5EFEB]"
          }`}
        >
          <span>{favorit ? "Tersimpan" : "Simpan"}</span>
        </button>

        {/* Quick Action Button: Sunset Terracotta */}
        <Link
          href={`/katalog/${buku.id}`}
          className="text-xs font-bold bg-[#E06D53] hover:bg-[#CC5A40] text-white px-4 py-2 rounded-lg shadow-sm transition"
        >
          Lihat Detail &rarr;
        </Link>
      </div>
    </article>
  );
}