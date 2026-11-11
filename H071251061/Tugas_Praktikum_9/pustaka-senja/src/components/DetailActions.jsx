"use client";

import { useState, useTransition } from "react";
import PinjamBuku from "@/components/PinjamBuku";
import { ubahStatusPeminjamanAction } from "@/app/katalog/actions";

export default function DetailActions({ buku }) {
    const [dibaca, setDibaca] = useState(false);
    const [terkopal, setTerkopal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [infoPinjam, setInfoPinjam] = useState(null);
    const [isPending, startTransition] = useTransition();

    const isTersedia = buku ? buku.tersedia : true;

    function handleSalinLink() {
        navigator.clipboard.writeText(window.location.href);
        setTerkopal(true);
        setTimeout(() => setTerkopal(false), 2500);
    }

    function handleSuksesPinjam(data) {
        setInfoPinjam(data);
    }

    function handleKembalikan() {
        startTransition(async () => {
        await ubahStatusPeminjamanAction(buku.id, true);
        setInfoPinjam(null);
        });
    }

    return (
        <div className="space-y-4 pt-4 border-t border-zinc-800">
        <div className="flex items-center gap-2">
            <span
            className={`text-xs font-semibold px-3.5 py-1 rounded-full border transition-all ${
                isTersedia
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                : "bg-rose-500/10 text-rose-400 border-rose-500/30"
            }`}
            >
            {isTersedia ? "Status: Tersedia" : "Status: Sedang Dipinjam"}
            </span>
        </div>

        {infoPinjam && !isTersedia && (
            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs space-y-1">
            <p className="text-amber-300 font-semibold">
                ✓ Berhasil Dipinjam oleh {infoPinjam.namaPeminjam}
            </p>
            <p className="text-zinc-400">
                Tanggal Pinjam: <span className="text-zinc-200">{infoPinjam.tanggalPinjam}</span> | Batas Pengembalian: <span className="text-amber-400 font-medium">{infoPinjam.tanggalKembali}</span>
            </p>
            </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
            {isTersedia ? (
            <button
                onClick={() => setShowModal(true)}
                disabled={isPending}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-zinc-950 transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)] disabled:opacity-50"
            >
                📖 Pinjam Buku Ini
            </button>
            ) : (
            <button
                onClick={handleKembalikan}
                disabled={isPending}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold bg-zinc-950 text-zinc-300 border border-zinc-800 hover:bg-zinc-850 disabled:opacity-50"
            >
                {isPending ? "Mengembalikan..." : "↩️ Kembalikan Buku"}
            </button>
            )}

            <button
            onClick={() => setDibaca(!dibaca)}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                dibaca
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-zinc-200"
            }`}
            >
            {dibaca ? "✓ Selesai Dibaca" : "+ Tandai Sudah Dibaca"}
            </button>

            <button
            onClick={handleSalinLink}
            className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-zinc-950 text-zinc-400 border border-zinc-800 hover:text-amber-300 hover:border-amber-500/30 transition-all"
            >
            {terkopal ? "✓ Tautan Tersalin!" : "🔗 Bagikan Buku"}
            </button>
        </div>

        {buku && (
            <PinjamBuku
            buku={buku}
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onSuccess={handleSuksesPinjam}
            />
        )}
        </div>
    );
}