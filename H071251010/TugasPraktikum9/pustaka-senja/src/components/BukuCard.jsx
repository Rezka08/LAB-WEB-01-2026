"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ArrowUpRight, CalendarDays, BookOpen, Pencil } from "lucide-react";
import TombolHapus from "@/components/TombolHapus";
import { getCoverUrl } from "@/lib/book-utils";

export default function BukuCard({ buku }) {
  const [favorit, setFavorit] = useState(false);
  const [coverError, setCoverError] = useState(false);
  const cover = getCoverUrl(buku);
  const idLabel = String(buku.id).padStart(3, "0");

  return (
    <article className="book-card group">
      <div className="cover-area m-3 rounded-md">
        {coverError ? (
          <div className="absolute inset-0 z-10 grid place-items-center p-5 text-center">
            <div>
              <BookOpen size={38} className="mx-auto text-emerald-300 drop-shadow-[0_0_12px_#42ff91]" />
              <p className="mt-3 font-mono text-[9px] tracking-[.22em] text-cyan-200">COVER NOT AVAILABLE</p>
              <p className="mt-2 text-sm font-bold text-white">{buku.judul}</p>
            </div>
          </div>
        ) : (
          <img
            src={cover}
            alt={`Sampul buku ${buku.judul}`}
            className="cover-img"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = "/images/hero-library.png";
              setCoverError(true);
            }}
          />
        )}

        <span className="absolute left-3 top-3 z-10 border border-cyan-300/35 bg-black/75 px-2 py-1 font-mono text-[8px] text-cyan-200">ARCHIVE_{idLabel}</span>
        <button
          type="button"
          onClick={() => setFavorit((value) => !value)}
          aria-label={favorit ? "Hapus dari favorit" : "Simpan ke favorit"}
          aria-pressed={favorit}
          className={`absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-md border backdrop-blur transition hover:scale-110 ${favorit ? "border-pink-300 bg-pink-400/20 text-pink-300 shadow-[0_0_15px_#ff4bd855]" : "border-white/25 bg-black/70 text-white hover:border-pink-300 hover:text-pink-300"}`}
        >
          <Heart size={16} fill={favorit ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="px-4 pb-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="chip">{buku.kategori}</span>
          <span className={`status ${buku.tersedia ? "status-yes" : "status-no"}`}>● {buku.tersedia ? "TERSEDIA" : "SEDANG DIPINJAM"}</span>
        </div>

        <h3 className="min-h-[48px] text-base font-bold leading-6 text-white transition group-hover:text-emerald-200">{buku.judul}</h3>
        <p className="mt-1 text-xs text-slate-400">{buku.penulis}</p>
        <p className="mt-3 line-clamp-2 min-h-10 text-xs leading-5 text-slate-500">{buku.sinopsis}</p>

        <div className="mt-4 flex items-center justify-between border-t border-emerald-300/15 pt-3">
          <span className="flex items-center gap-1.5 font-mono text-[9px] text-slate-500"><CalendarDays size={12} /> {buku.tahun}</span>
          <Link href={`/katalog/${buku.id}`} className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold tracking-widest text-cyan-300 transition hover:gap-3 hover:text-white">LIHAT DETAIL <ArrowUpRight size={13} /></Link>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-emerald-300/10 pt-3">
          <Link href={`/katalog/${buku.id}/edit`} className="inline-flex min-h-9 items-center gap-2 rounded border border-cyan-300/30 px-3 text-[9px] font-bold tracking-widest text-cyan-200 transition hover:bg-cyan-300/10"><Pencil size={12} /> EDIT</Link>
          <TombolHapus id={buku.id} judul={buku.judul} />
        </div>

        {favorit && <p className="mt-3 font-mono text-[8px] tracking-widest text-pink-300">[OK] SAVED TO FAVORITES</p>}
      </div>
    </article>
  );
}
