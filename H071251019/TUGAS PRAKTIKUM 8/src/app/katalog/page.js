"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import dataBuku from "@/data/dataBuku";

const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";
const sunken = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080,inset_-2px_-2px_#e8e4da,inset_2px_2px_#0a0a0a]";

export default function KatalogPage() {
const [kategoriAktif, setKategoriAktif] = useState("Semua");

    const bukuTampil =
        kategoriAktif === "Semua"
        ? dataBuku
        : dataBuku.filter((buku) => buku.kategori === kategoriAktif);

    return (
        <section className={`${raised} p-1`}>
        <div className="bg-gradient-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1 text-sm font-bold text-[#0b2a55]">
            C:\Pustaka\Katalog
        </div>
        <div className="space-y-4 p-4">
            <div>
            <h1 className="text-2xl font-bold text-[#1b3c70]">Katalog Buku</h1>
            <p className="text-sm">Pilih kategori untuk menyaring koleksi.</p>
            </div>
            <div className="flex flex-wrap gap-2">
            {daftarKategori.map((kategori) => (
                <button
                key={kategori}
                onClick={() => setKategoriAktif(kategori)}
                className={`px-4 py-1 text-sm ${
                    kategoriAktif === kategori ? `${sunken} font-bold underline underline-offset-4` : `${raised} hover:bg-[#e8e4da]`
                }`}
                >
                {kategori}
                </button>
            ))}
            </div>
            <p className="text-sm">{bukuTampil.length} objek ditemukan</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bukuTampil.map((buku) => (
                <BukuCard
                key={buku.id}
                id={buku.id}
                judul={buku.judul}
                penulis={buku.penulis}
                kategori={buku.kategori}
                tahun={buku.tahun}
                tersedia={buku.tersedia}
                gambar={buku.gambar}
                />
            ))}
            </div>
        </div>
        </section>
    );
}
