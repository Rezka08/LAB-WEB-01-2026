"use client";

import { useTransition, useState } from "react";
import Link from "next/link";
import { ubahBuku } from "@/app/katalog/actions";
import { daftarKategori } from "@/data/dataBuku";

const kelasInput =
  "w-full border-[3px] border-ink bg-surface text-ink px-4 py-3 font-mono text-sm outline-none transition focus:shadow-brut-sm";

export default function EditBukuForm({ buku }) {
  const [isPending, startTransition] = useTransition();
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        await ubahBuku(formData);
      } catch (err) {
        console.error(err);
        setErrorMsg(err.message || "Gagal menyimpan perubahan buku.");
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

      {/* Hidden ID */}
      <input type="hidden" name="id" value={buku.id} />

      <div>
        <label htmlFor="judul" className="mb-2 block font-bold text-ink">
          Judul Buku <span className="text-coral">*</span>
        </label>
        <input
          id="judul"
          name="judul"
          type="text"
          required
          defaultValue={buku.judul}
          placeholder="Contoh: Clean Architecture"
          className={kelasInput}
        />
      </div>

      <div>
        <label htmlFor="penulis" className="mb-2 block font-bold text-ink">
          Penulis <span className="text-coral">*</span>
        </label>
        <input
          id="penulis"
          name="penulis"
          type="text"
          required
          defaultValue={buku.penulis}
          placeholder="Contoh: Robert C. Martin"
          className={kelasInput}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="kategori" className="mb-2 block font-bold text-ink">
            Kategori <span className="text-coral">*</span>
          </label>
          <select
            id="kategori"
            name="kategori"
            required
            defaultValue={buku.kategori}
            className={kelasInput}
          >
            {daftarKategori.map((kat) => (
              <option key={kat} value={kat}>
                {kat}
              </option>
            ))}
            {!daftarKategori.includes(buku.kategori) && (
              <option value={buku.kategori}>{buku.kategori}</option>
            )}
          </select>
        </div>

        <div>
          <label htmlFor="tahun" className="mb-2 block font-bold text-ink">
            Tahun Terbit <span className="text-coral">*</span>
          </label>
          <input
            id="tahun"
            name="tahun"
            type="number"
            min="1000"
            max="2100"
            required
            defaultValue={buku.tahun}
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
              defaultChecked={buku.tersedia}
              className="accent-ink"
            />
            <span className="text-sm">Tersedia di Rak</span>
          </label>
          <label className="flex cursor-pointer items-center gap-2 border-[3px] border-ink bg-surface px-4 py-2 font-bold shadow-brut-sm hover:shadow-none">
            <input
              type="radio"
              name="tersedia"
              value="false"
              defaultChecked={!buku.tersedia}
              className="accent-ink"
            />
            <span className="text-sm">Sedang Dipinjam</span>
          </label>
        </div>
      </div>

      <div>
        <label htmlFor="sinopsis" className="mb-2 block font-bold text-ink">
          Sinopsis
        </label>
        <textarea
          id="sinopsis"
          name="sinopsis"
          rows={4}
          defaultValue={buku.sinopsis || ""}
          placeholder="Ringkasan singkat mengenai buku ini..."
          className={kelasInput}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-4">
        <button
          type="submit"
          disabled={isPending}
          className="border-[3px] border-ink bg-volt px-6 py-3 font-bold text-on-fill shadow-brut transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none disabled:opacity-50"
        >
          {isPending ? "Menyimpan Perubahan..." : "Simpan Perubahan"}
        </button>
        <Link
          href={`/katalog/${buku.id}`}
          className="border-[3px] border-ink bg-surface px-6 py-3 font-bold text-ink shadow-brut-sm transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          Batal
        </Link>
      </div>
    </form>
  );
}

