"use client";

import { useTransition } from "react";

export default function TombolHapus({ id, hapusAction }) {
    const [isPending, startTransition] = useTransition();

    function handleHapus() {
        const konfirmasi = window.confirm(
        "Apakah Anda yakin ingin menghapus buku ini dari database Pustaka Senja?"
        );

        if (konfirmasi) {
        startTransition(async () => {
            await hapusAction(id);
        });
        }
    }

    return (
        <button
        onClick={handleHapus}
        disabled={isPending}
        className="px-4 py-2.5 rounded-lg text-xs font-semibold bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 transition-all disabled:opacity-50"
        >
        {isPending ? "Menghapus..." : "🗑️ Hapus Buku"}
        </button>
    );
}