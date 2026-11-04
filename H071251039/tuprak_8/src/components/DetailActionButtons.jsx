"use client";

import { useState } from "react";
import { useBookmark } from "@/context/BookmarkContext";

export default function DetailActionButtons({ buku }) {
  const { isFavorit, toggleFavorit, showToast } = useBookmark();
  const [sudahDipinjam, setSudahDipinjam] = useState(false);
  const [modalBuka, setModalBuka] = useState(false);

  const favorit = isFavorit(buku.id);
  const statusTersedia = buku.tersedia && !sudahDipinjam;

  const handlePinjam = () => {
    setSudahDipinjam(true);
    setModalBuka(false);
    showToast(`Berhasil meminjam "${buku.judul}". Silakan ambil di meja sirkulasi.`, "sukses");
  };

  const handleSalinTautan = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      showToast("Tautan halaman buku berhasil disalin!", "info");
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-center gap-3 border-t-[3px] border-ink pt-6">
        {statusTersedia ? (
          <button
            type="button"
            onClick={() => setModalBuka(true)}
            className="border-[3px] border-ink bg-sun px-6 py-3 font-bold text-on-fill shadow-brut transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Pinjam Buku Ini
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="cursor-not-allowed border-[3px] border-ink bg-volt/60 px-6 py-3 font-bold text-on-fill/60 shadow-none"
          >
            {sudahDipinjam ? "Sedang Kamu Pinjam" : "Sedang Dipinjam"}
          </button>
        )}

        <button
          type="button"
          onClick={() => toggleFavorit(buku.id, buku.judul)}
          aria-pressed={favorit}
          className={`border-[3px] border-ink px-5 py-3 font-bold transition hover:translate-x-[2px] hover:translate-y-[2px] ${
            favorit
              ? "bg-sun text-on-fill shadow-none"
              : "bg-surface text-ink shadow-brut-sm hover:shadow-none"
          }`}
        >
          {favorit ? "★ Tersimpan" : "☆ Simpan ke Favorit"}
        </button>

        <button
          type="button"
          onClick={handleSalinTautan}
          aria-label="Salin tautan buku"
          className="border-[3px] border-ink bg-surface px-4 py-3 font-mono text-sm font-bold text-ink shadow-brut-sm transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          ⎘ Salin Tautan
        </button>
      </div>

      {/* Modal Konfirmasi Peminjaman */}
      {modalBuka && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md border-[3px] border-ink bg-surface p-6 shadow-brut-lg">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-sun">
              Konfirmasi Peminjaman
            </span>
            <h3 className="mt-2 text-2xl font-black">{buku.judul}</h3>
            <p className="mt-1 font-mono text-xs text-ink/60">Penulis: {buku.penulis}</p>

            <div className="mt-4 border-l-[3px] border-ink bg-volt text-on-fill p-3 font-mono text-xs">
              <p>Durasi: <strong>14 Hari</strong></p>
              <p className="mt-1 opacity-80">Kembalikan sebelum tanggal jatuh tempo di meja sirkulasi.</p>
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalBuka(false)}
                className="border-[3px] border-ink bg-surface px-4 py-2 font-bold text-ink shadow-brut-sm hover:shadow-none"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handlePinjam}
                className="border-[3px] border-ink bg-sun px-5 py-2 font-bold text-on-fill shadow-brut hover:shadow-none"
              >
                Ya, Pinjam Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

