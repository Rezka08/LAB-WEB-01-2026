    "use client";

    import { useState } from "react";
    import BukuCard from "@/components/BukuCard";
    import { dataBuku } from "@/data/dataBuku";

    const daftarKategori = ["Semua", "Teknologi", "Fiksi", "Pengembangan Diri"];

    export default function KatalogPage() {
    const [kategoriAktif, setKategoriAktif] = useState("Semua");
    const [searchQuery, setSearchQuery] = useState("");
    const [urutan, setUrutan] = useState("default");

    const bukuFiltered = dataBuku
        .filter((buku) => {
        const matchKategori =
            kategoriAktif === "Semua" || buku.kategori === kategoriAktif;
        const matchSearch =
            buku.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
            buku.penulis.toLowerCase().includes(searchQuery.toLowerCase());
        return matchKategori && matchSearch;
        })
        .sort((a, b) => {
        if (urutan === "tahun-baru") return b.tahun - a.tahun;
        if (urutan === "tahun-lama") return a.tahun - b.tahun;
        if (urutan === "judul-asc") return a.judul.localeCompare(b.judul);
        return 0;
        });

    return (
        <section className="space-y-8">
        <div className="border-b border-zinc-800 pb-6 space-y-4">
            <div>
            <h1 className="font-serif text-3xl font-bold text-zinc-100">
                Etalase & Arsip Pustaka
            </h1>
            <p className="text-zinc-400 text-sm mt-1">
                Jelajahi karya pilihan di atas rak literatur Pustaka Senja.
            </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
            <input
                type="text"
                placeholder="Cari judul pustaka atau penulis..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
            />

            <select
                value={urutan}
                onChange={(e) => setUrutan(e.target.value)}
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-xs text-zinc-300 focus:outline-none focus:border-amber-500/70"
            >
                <option value="default">Urutan: Bawaan</option>
                <option value="tahun-baru">Tahun Terbit (Terbaru)</option>
                <option value="tahun-lama">Tahun Terbit (Terlama)</option>
                <option value="judul-asc">Judul Alfabetis (A-Z)</option>
            </select>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
            <div className="flex flex-wrap gap-2">
                {daftarKategori.map((kategori) => (
                <button
                    key={kategori}
                    onClick={() => setKategoriAktif(kategori)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    kategoriAktif === kategori
                        ? "bg-amber-500 text-zinc-950 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                        : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-zinc-200"
                    }`}
                >
                    {kategori}
                </button>
                ))}
            </div>

            <span className="text-xs text-zinc-500 font-medium">
                Menampilkan <strong className="text-amber-400">{bukuFiltered.length}</strong> buku
            </span>
            </div>
        </div>

        {bukuFiltered.length > 0 ? (
            <div className="relative pb-6 space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {bukuFiltered.map((buku) => (
                <BukuCard key={buku.id} buku={buku} />
                ))}
            </div>

            <div className="h-4 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border-t border-amber-500/30 border-b border-black rounded-sm shadow-[0_8px_20px_rgba(0,0,0,0.9)] relative">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-amber-400/20" />
            </div>
            </div>
        ) : (
            <div className="text-center py-16 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
            <p className="text-zinc-300 font-serif text-base">Buku Tidak Ditemukan</p>
            </div>
        )}
        </section>
    );
    }