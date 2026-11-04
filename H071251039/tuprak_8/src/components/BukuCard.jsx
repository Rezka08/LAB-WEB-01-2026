"use client";

import Link from "next/link";
import { warnaKategori } from "@/data/dataBuku";
import { useBookmark } from "@/context/BookmarkContext";

export default function BukuCard({ buku }) {
  const { isFavorit, toggleFavorit } = useBookmark();
  const { id, judul, penulis, kategori, tahun, tersedia } = buku;
  const favorit = isFavorit(id);

  return (
    <article className="flex flex-col border-[3px] border-ink bg-surface p-6 shadow-brut transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brut-lg">
      <div className="flex items-center justify-between gap-2">
        <span className={`border-2 border-ink px-2 py-1 font-mono text-xs font-bold ${warnaKategori[kategori]}`}>
          {kategori}
        </span>
        <span className="font-mono text-sm">#{id}</span>
      </div>

      <h2 className="mt-5 text-2xl font-black leading-tight">{judul}</h2>
      <p className="mt-2 text-ink/80">{penulis}</p>
      <p className="mt-1 font-mono text-sm text-ink/60">{tahun}</p>

      <span
        className={`mt-4 self-start border-2 border-ink px-3 py-1 font-mono text-xs font-bold ${
          tersedia ? "bg-volt text-on-fill" : "bg-bubble text-on-fill"
        }`}
      >
        {tersedia ? "Tersedia" : "Sedang dipinjam"}
      </span>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <button
          type="button"
          onClick={() => toggleFavorit(id, judul)}
          aria-pressed={favorit}
          className={`border-[3px] border-ink px-4 py-2 font-bold transition hover:translate-x-[2px] hover:translate-y-[2px] ${
            favorit ? "bg-sun text-on-fill shadow-none" : "bg-surface shadow-brut-sm hover:shadow-none"
          }`}
        >
          {favorit ? "★ Tersimpan" : "☆ Simpan"}
        </button>
        <Link
          href={`/katalog/${id}`}
          className="border-[3px] border-ink bg-surface px-4 py-2 font-bold shadow-brut-sm transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          Lihat detail
        </Link>
      </div>
    </article>
  );
}
