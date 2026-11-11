"use client";

import { useState } from "react";
import { tambahBukuAction } from "@/app/katalog/actions";
import { useRole } from "@/context/RoleContext";

export default function FormTambahBuku() {
    const [isOpen, setIsOpen] = useState(false);
    const { role } = useRole();

    if (role !== "admin") return null;

    return (
        <>
        <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
        >
            + Tambah Buku Baru
        </button>

        {isOpen && (
            <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
            <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl z-10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <h3 className="font-serif text-lg font-bold text-zinc-100">
                    Tambah Koleksi Buku (Admin)
                </h3>
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-500 hover:text-zinc-300 text-sm"
                >
                    ✕
                </button>
                </div>

                <form
                action={async (formData) => {
                    await tambahBukuAction(formData);
                    setIsOpen(false);
                }}
                className="space-y-3"
                >
                <div>
                    <label className="block text-xs text-zinc-300 mb-1">Judul Buku</label>
                    <input
                    type="text"
                    name="judul"
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                    <label className="block text-xs text-zinc-300 mb-1">Penulis</label>
                    <input
                        type="text"
                        name="penulis"
                        required
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                    />
                    </div>
                    <div>
                    <label className="block text-xs text-zinc-300 mb-1">Tahun</label>
                    <input
                        type="number"
                        name="tahun"
                        required
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                    />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div>
                    <label className="block text-xs text-zinc-300 mb-1">Kategori</label>
                    <select
                        name="kategori"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                    >
                        <option value="Teknologi">Teknologi</option>
                        <option value="Fiksi">Fiksi</option>
                        <option value="Pengembangan Diri">Pengembangan Diri</option>
                    </select>
                    </div>
                    <div>
                    <label className="block text-xs text-zinc-300 mb-1">Status Ketersediaan</label>
                    <select
                        name="tersedia"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                    >
                        <option value="true">Tersedia</option>
                        <option value="false">Sedang Dipinjam</option>
                    </select>
                    </div>
                </div>

                <div>
                    <label className="block text-xs text-zinc-300 mb-1">Sinopsis</label>
                    <textarea
                    name="sinopsis"
                    rows={3}
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                    />
                </div>

                <div className="flex gap-2 pt-2">
                    <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-2 rounded-lg bg-zinc-950 text-zinc-400 text-xs border border-zinc-800 hover:text-zinc-200 transition-colors"
                    >
                    Batal
                    </button>
                    <button
                    type="submit"
                    className="flex-1 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs transition-colors"
                    >
                    Simpan Buku
                    </button>
                </div>
                </form>
            </div>
            </div>
        )}
        </>
    );
}