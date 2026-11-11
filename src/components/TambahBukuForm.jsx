"use client";

import { useState, useTransition } from "react";
import { tambahBuku } from "@/app/katalog/actions";
import { daftarKategori } from "@/data/dataBuku";

const kelasInput =
  "w-full border-[3px] border-ink bg-surface text-ink px-4 py-3 font-mono text-sm outline-none transition focus:shadow-brut-sm";

export default function TambahBukuForm({ onCancel }) {
  const [isPending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        await tambahBuku(formData);
      } catch (err) {
        // Next.js redirect throws a special internal error; we let it pass
        if (err.message && !err.message.includes("NEXT_REDIRECT")) {
          setErrorMsg(err.message);
        }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMsg && (
        <div
          role="alert"
          className="border-[3px] border-ink bg-coral p-4 font-bold text-on-fill shadow-brut-sm"
        >
          {errorMsg}
        </div>
      )}

      <div>
        <label htmlFor="tambah-judul" className="mb-2 block font-bold text-ink">
          Judul Buku <span className="text-coral">*</span>
        </label>
        <input
          id="tambah-judul"
          name="judul"
          type="text"
          required
          placeholder="Contoh: The Pragmatic Programmer"
          className={kelasInput}
        />
      </div>

      <div>
        <label htmlFor="tambah-penulis" className="mb-2 block font-bold text-ink">
          Penulis <span className="text-coral">*</span>
        </label>
        <input
          id="tambah-penulis"
          name="penulis"
          type="text"
          required
          placeholder="Contoh: Andrew Hunt & David Thomas"
          className={kelasInput}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="tambah-kategori" className="mb-2 block font-bold text-ink">
            Kategori <span className="text-coral">*</span>
          </label>
          <select
            id="tambah-kategori"
            name="kategori"
            required
            defaultValue={daftarKategori[0]}
            className={kelasInput}
          >
            {daftarKategori.map((kat) => (
              <option key={kat} value={kat}>
                {kat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="tambah-tahun" className="mb-2 block font-bold text-ink">
            Tahun Terbit <span className="text-coral">*</span>
          </label>
          <input
            id="tambah-tahun"
            name="tahun"
            type="number"
            min="1000"
            max="2100"
            required
            defaultValue={new Date().getFullYear()}
            placeholder="Contoh: 2024"
            className={kelasInput}
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-bold text-ink">
          Status Ketersediaan <span className="text-coral">*</span>
        </label>
        <div className="flex flex-wrap gap-4 pt-1">
          <label className="flex cursor-pointer items-center gap-2 border-[3px] border-ink bg-surface px-4 py-2 font-bold shadow-brut-sm hover:shadow-none">
            <input
              type="radio"
              name="tersedia"
              value="true"
              defaultChecked
              className="accent-ink"
            />
            <span className="text-sm">Tersedia di Rak</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 border-[3px] border-ink bg-surface px-4 py-2 font-bold shadow-brut-sm hover:shadow-none">
            <input
              type="radio"
              name="tersedia"
              value="false"
              className="accent-ink"
            />
            <span className="text-sm">Sedang Dipinjam</span>
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="tambah-sinopsis" className="mb-2 block font-bold text-ink">
          Sinopsis
        </label>
        <textarea
          id="tambah-sinopsis"
          name="sinopsis"
          rows={4}
          placeholder="Tuliskan ringkasan singkat mengenai buku ini..."
          className={kelasInput}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-4">
        <button
          type="submit"
          disabled={isPending}
          className="border-[3px] border-ink bg-sun px-6 py-3 font-bold text-on-fill shadow-brut transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50"
        >
          {isPending ? "Menyimpan ke Database..." : "+ Simpan Buku Baru"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="border-[3px] border-ink bg-surface px-6 py-3 font-bold text-ink shadow-brut-sm transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          >
            Tutup
          </button>
        )}
      </div>
    </form>
  );
}

