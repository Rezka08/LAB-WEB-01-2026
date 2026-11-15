"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const PerpustakaanScene = dynamic(
  () => import("@/components/game/PerpustakaanScene"),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[600px] w-full flex-col items-center justify-center border-[3px] border-ink bg-surface p-8 text-center shadow-brut-lg">
        <div className="flex h-16 w-16 items-center justify-center border-[3px] border-ink bg-sun shadow-brut">
          <span className="font-mono text-2xl font-black text-on-fill">3D</span>
        </div>
        <h2 className="mt-6 text-2xl font-black text-ink">Menyiapkan Ruang Perpustakaan 3D...</h2>
        <p className="mt-2 font-mono text-sm text-ink/70">
          Memuat model rak, buku, dan kontrol interaktif Pustaka Senja.
        </p>
      </div>
    ),
  }
);

export default function GamePage() {
  return (
    <div className="space-y-6">
      {/* Header Info */}
      <header className="border-b-[3px] border-ink pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-sun">
              Eksplorasi Interaktif
            </span>
            <h1 className="mt-1 text-3xl font-black text-ink md:text-4xl">
              Jelajahi Perpustakaan 3D
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="border-2 border-ink bg-volt px-3 py-1 font-mono text-xs font-bold text-on-fill shadow-brut-sm">
              3D Engine Aktif
            </span>
            <Link
              href="/katalog"
              className="border-2 border-ink bg-surface px-3 py-1 font-mono text-xs font-bold text-ink shadow-brut-sm transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
            >
              Lihat Katalog 2D →
            </Link>
          </div>
        </div>
        <p className="mt-3 font-mono text-sm leading-relaxed text-ink/80">
          Gunakan tombol <strong>W, A, S, D</strong> untuk berjalan, klik canvas untuk <strong>Pointer Lock</strong> (melihat sekeliling dengan mouse), dan tekan <strong>E</strong> saat mendekati rak buku untuk membuka informasi lengkap buku.
        </p>
      </header>

      {/* 3D Scene */}
      <PerpustakaanScene />
    </div>
  );
}

