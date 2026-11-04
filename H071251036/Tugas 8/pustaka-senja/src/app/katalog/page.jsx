"use client";
import { useState } from "react";
import dataBuku from "@/data/dataBuku";
import BukuCard from "@/components/BukuCard";
const kategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];
export default function KatalogPage() {
  const [aktif, setAktif] = useState("Semua");
  const daftar = aktif === "Semua" ? dataBuku : dataBuku.filter((buku) => buku.kategori === aktif);
  return <div><div className="mb-9 max-w-2xl"><p className="eyebrow">THE BOOKSHELF</p><h1 className="section-title mt-2">Temukan cerita <span className="italic text-[#a47a56]">favoritmu.</span></h1><p className="mt-3 leading-7 text-[#827161]">Jelajahi koleksi pilihan Pustaka Senja. Siapa tahu, buku berikutnya akan jadi teman terbaikmu.</p></div>
    <div className="mb-7 flex flex-wrap gap-2">{kategori.map((item) => <button key={item} onClick={() => setAktif(item)} className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${aktif === item ? "bg-[#493326] text-white shadow-md" : "border border-[#e6dbce] bg-[#fffdf9] text-[#806e5e] hover:bg-[#f1e8dc]"}`}>{item}</button>)}</div>
    <p className="mb-4 text-xs text-[#9b8877]">Menampilkan {daftar.length} dari {dataBuku.length} buku</p><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{daftar.map((buku) => <BukuCard key={buku.id} buku={buku} />)}</div>
  </div>;
}
