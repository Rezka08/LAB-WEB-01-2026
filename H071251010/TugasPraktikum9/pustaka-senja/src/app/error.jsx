"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Pustaka Senja mengalami error:", error);
  }, [error]);

  return (
    <div className="container py-20">
      <section className="terminal-panel mx-auto max-w-xl p-9 text-center">
        <AlertTriangle size={38} className="mx-auto text-amber-300" />
        <p className="mt-4 font-mono text-xs tracking-widest text-amber-300">SYSTEM ERROR</p>
        <h1 className="mt-4 text-3xl font-black text-white">Halaman belum dapat dimuat.</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">Periksa apakah PostgreSQL aktif, DATABASE_URL sudah benar, dan tabel buku sudah dibuat melalui file SQL praktikum.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={() => reset()} className="btn-primary"><RefreshCw size={14} /> COBA LAGI</button>
          <Link href="/katalog" className="btn-secondary">BUKA KATALOG</Link>
        </div>
      </section>
    </div>
  );
}
