import Link from "next/link";
import { ArrowLeft, BookX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container py-20">
      <section className="terminal-panel mx-auto max-w-xl p-9 text-center">
        <BookX size={38} className="mx-auto text-pink-300" />
        <p className="mt-4 font-mono text-xs tracking-widest text-pink-300">ERROR 404</p>
        <h1 className="mt-4 text-3xl font-black text-white">Arsip tidak ditemukan.</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">ID buku tidak valid atau data sudah tidak tersedia di koleksi Pustaka Senja.</p>
        <Link href="/katalog" className="btn-primary mt-7"><ArrowLeft size={14} /> KEMBALI KE KATALOG</Link>
      </section>
    </div>
  );
}
