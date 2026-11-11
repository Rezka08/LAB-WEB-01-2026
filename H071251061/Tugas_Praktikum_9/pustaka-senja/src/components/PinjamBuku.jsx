"use client";

import { useState, useTransition } from "react";
import { ubahStatusPeminjamanAction } from "@/app/katalog/actions";

export default function PinjamBuku({ buku, isOpen, onClose, onSuccess }) {
    const [namaPeminjam, setNamaPeminjam] = useState("");
    const [durasi, setDurasi] = useState("7 Hari");
    const [error, setError] = useState("");
    const [isPending, startTransition] = useTransition();

    if (!isOpen) return null;

    function handleSubmit(e) {
        e.preventDefault();
        if (!namaPeminjam.trim()) {
        setError("Nama peminjam wajib diisi.");
        return;
        }

        const tglPinjam = new Date();
        const tglKembali = new Date();
        const jumlahHari = parseInt(durasi);
        tglKembali.setDate(tglPinjam.getDate() + jumlahHari);

        const dataPeminjaman = {
        namaPeminjam,
        durasi,
        tanggalPinjam: tglPinjam.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric"
        }),
        tanggalKembali: tglKembali.toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric"
        })
        };

        startTransition(async () => {
        await ubahStatusPeminjamanAction(buku.id, false);
        onSuccess(dataPeminjaman);
        setError("");
        setNamaPeminjam("");
        onClose();
        });
    }

    return (
        <div className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="fixed inset-0" onClick={onClose} />
        
        <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl z-10 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div>
                <span className="text-[10px] uppercase tracking-widest text-amber-500 font-semibold">
                Formulir Peminjaman
                </span>
                <h3 className="font-serif text-lg font-bold text-zinc-100">
                {buku.judul}
                </h3>
            </div>
            <button
                onClick={onClose}
                className="text-zinc-500 hover:text-zinc-300 text-sm p-1"
            >
                ✕
            </button>
            </div>

            {error && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                ⚠️ {error}
            </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                Nama Lengkap Peminjam
                </label>
                <input
                type="text"
                placeholder="Masukkan nama Anda..."
                value={namaPeminjam}
                onChange={(e) => setNamaPeminjam(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                />
            </div>

            <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                Durasi Peminjaman
                </label>
                <select
                value={durasi}
                onChange={(e) => setDurasi(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                >
                <option value="3 Hari">3 Hari (Baca Cepat)</option>
                <option value="7 Hari">7 Hari (1 Minggu Standar)</option>
                <option value="14 Hari">14 Hari (2 Minggu Maksimal)</option>
                </select>
            </div>

            <div className="p-3 bg-zinc-950/80 rounded-lg border border-zinc-850 text-[11px] text-zinc-400 space-y-1">
                <p>📍 Lokasi Ambil: <span className="text-zinc-200">Meja Sirkulasi Pustaka Senja</span></p>
                <p>📖 Ketentuan: Harap merawat fisik buku dan mengembalikan tepat waktu.</p>
            </div>

            <div className="flex gap-2 pt-2">
                <button
                type="button"
                onClick={onClose}
                disabled={isPending}
                className="flex-1 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 text-xs hover:text-zinc-200"
                >
                Batal
                </button>
                <button
                type="submit"
                disabled={isPending}
                className="flex-1 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all disabled:opacity-50"
                >
                {isPending ? "Memproses..." : "Konfirmasi Pinjam"}
                </button>
            </div>
            </form>
        </div>
        </div>
    );
}