"use client";
import { useMemo, useState } from "react";
import BukuCard from "@/components/BukuCard";
const kategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];
export default function FilterKatalog({ buku }) {
  const [aktif, setAktif] = useState("Semua");
  const daftar = useMemo(() => aktif === "Semua" ? buku : buku.filter((item) => item.kategori === aktif), [aktif, buku]);
  return <>
    <div className="mb-7 flex flex-wrap gap-2">{kategori.map((item) => <button key={item} onClick={() => setAktif(item)} className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${aktif === item ? "bg-[#493326] text-white shadow-md" : "border border-[#e6dbce] bg-[#fffdf9] text-[#806e5e] hover:bg-[#f1e8dc]"}`}>{item}</button>)}</div>
    <p className="mb-4 text-xs text-[#9b8877]">Menampilkan {daftar.length} dari {buku.length} buku</p>
    {daftar.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{daftar.map((item) => <BukuCard key={item.id} buku={item} />)}</div> : <p className="rounded-2xl border border-dashed border-[#d9cabb] p-8 text-center text-[#8b7868]">Belum ada buku dalam kategori ini.</p>}
  </>;
}
