"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { hapusBuku } from "@/app/katalog/actions";
import { useBookmark } from "@/context/BookmarkContext";

export default function TombolHapus({ id, judul, redirectTo, className = "" }) {
  const [konfirmasiTerbuka, setKonfirmasiTerbuka] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { showToast } = useBookmark();

  const handleHapus = () => {
    startTransition(async () => {
      try {
        await hapusBuku(id);
        setKonfirmasiTerbuka(false);
        showToast(`Buku "${judul}" berhasil dihapus dari koleksi.`, "info");
        if (redirectTo) {
          router.push(redirectTo);
        } else {
          router.refresh();
        }
      } catch (err) {
        console.error("Gagal menghapus buku:", err);
        showToast("Terjadi kesalahan saat menghapus buku.", "error");
      }
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setKonfirmasiTerbuka(true)}
        className={`border-[3px] border-ink bg-coral px-4 py-2 font-bold text-on-fill shadow-brut-sm transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none ${className}`}
        aria-label={`Hapus buku ${judul}`}
      >
        Hapus
      </button>

      {/* Modal Dialog Konfirmasi Penghapusan */}
      {konfirmasiTerbuka && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-hapus-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
        >
          <div className="w-full max-w-md border-[3px] border-ink bg-surface p-6 shadow-brut-lg">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-coral">
              Konfirmasi Penghapusan
            </span>
            <h3 id="modal-hapus-title" className="mt-2 text-2xl font-black text-ink">
              Hapus buku ini?
            </h3>
            <p className="mt-3 text-sm text-ink/80">
              Apakah Anda yakin ingin menghapus buku{" "}
              <strong className="text-ink">&ldquo;{judul}&rdquo;</strong> (ID #{id})?
              Data yang dihapus akan hilang secara permanen dari basis data.
            </p>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                disabled={isPending}
                onClick={() => setKonfirmasiTerbuka(false)}
                className="border-[3px] border-ink bg-surface px-4 py-2 font-bold text-ink shadow-brut-sm transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50"
              >
                Batal
              </button>
              <button
                type="button"
                disabled={isPending}
                onClick={handleHapus}
                className="border-[3px] border-ink bg-coral px-5 py-2 font-bold text-on-fill shadow-brut transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50"
              >
                {isPending ? "Menghapus..." : "Ya, Hapus Buku"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
