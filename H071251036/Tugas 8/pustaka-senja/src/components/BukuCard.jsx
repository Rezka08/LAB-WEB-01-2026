"use client";
import { useState } from "react";
import Link from "next/link";
const covers = ["from-[#d9c1a5] to-[#a77b58]", "from-[#c8d0bc] to-[#78866c]", "from-[#d9b5a9] to-[#a76552]", "from-[#d7c9ad] to-[#a18a67]"];
export default function BukuCard({ buku }) {
  const [favorit, setFavorit] = useState(false);
  const cover = covers[(Number(buku.id) - 1) % covers.length];
  return <article className="book-card group overflow-hidden rounded-3xl border border-[#e9dfd2] bg-[#fffdf9] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-25px_rgba(68,45,30,.35)]">
    <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${cover} p-6`}><div className="absolute inset-3 rounded-2xl border border-white/30"/><div className="relative flex h-36 w-28 flex-col justify-between rounded-r-lg border-l-[5px] border-white/30 bg-[#493326]/90 p-3 text-center text-[#fff4e5] shadow-xl"><span className="text-[9px] uppercase tracking-[.2em] text-[#e7c9a6]">Pustaka Senja</span><span className="font-serif text-sm font-bold leading-tight">{buku.judul}</span><span className="text-[9px] text-[#e7c9a6]">{buku.tahun}</span></div><button onClick={() => setFavorit(!favorit)} aria-label={favorit ? "Hapus dari favorit" : "Simpan ke favorit"} className={`absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur transition ${favorit ? "bg-[#fff4e5] text-[#a6533d]" : "bg-white/75 text-[#705b49] hover:bg-white"}`}>{favorit ? "♥" : "♡"}</button></div>
    <div className="p-5"><div className="flex items-center justify-between gap-2"><span className="rounded-full bg-[#f2e9dc] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8c694c]">{buku.kategori}</span><span className={`text-[10px] font-semibold ${buku.tersedia ? "text-[#64805b]" : "text-[#a56a5d]"}`}>{buku.tersedia ? "● Tersedia" : "● Sedang Dipinjam"}</span></div><h3 className="mt-4 font-serif text-xl font-bold leading-snug text-[#493326]">{buku.judul}</h3><p className="mt-1 text-sm text-[#8b7868]">{buku.penulis} · {buku.tahun}</p><Link href={`/katalog/${buku.id}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#9a704c] transition group-hover:gap-3">Lihat detail <span>→</span></Link></div>
  </article>;
}
