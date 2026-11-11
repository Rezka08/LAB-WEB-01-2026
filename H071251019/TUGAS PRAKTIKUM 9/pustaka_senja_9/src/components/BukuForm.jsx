"use client";

import { useActionState } from "react";
import Link from "next/link";
import { DAFTAR_KATEGORI } from "@/lib/konstanta";

const raised =
  "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";
const sunken =
  "bg-white shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080,inset_-2px_-2px_#e8e4da,inset_2px_2px_#0a0a0a]";
const inputClass = `${sunken} w-full px-2 py-1 focus:outline-2 focus:outline-dotted focus:outline-black`;

// Form bersama untuk Tambah dan Ubah buku.
export default function BukuForm({ action, awal, id, coverSaatIni, labelSubmit, hrefBatal }) {
  const [state, formAction, pending] = useActionState(action, null);

  // Jika server mengembalikan error, isi form diisi ulang dari nilai yang tadi dikirim.
  const v = state?.values ?? awal;

  return (
    <form key={state?.ts ?? "awal"} action={formAction} className="space-y-3">
      {id !== undefined && <input type="hidden" name="id" value={id} />}

      {state?.errors?.length > 0 && (
        <div role="alert" className={`${sunken} flex gap-2 p-3 text-sm`}>
          <span className="text-2xl" aria-hidden="true">⚠️</span>
          <ul className="list-inside list-disc">
            {state.errors.map((pesan) => (
              <li key={pesan}>{pesan}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <label htmlFor="judul" className="mb-1 block text-sm font-bold">Judul Buku</label>
        <input id="judul" name="judul" type="text" required maxLength={200} defaultValue={v.judul} placeholder="Contoh: The Pragmatic Programmer" className={inputClass} />
      </div>

      <div>
        <label htmlFor="penulis" className="mb-1 block text-sm font-bold">Penulis</label>
        <input id="penulis" name="penulis" type="text" required maxLength={100} defaultValue={v.penulis} placeholder="Nama penulis" className={inputClass} />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div>
          <label htmlFor="kategori" className="mb-1 block text-sm font-bold">Kategori</label>
          <select id="kategori" name="kategori" required defaultValue={v.kategori} className={inputClass}>
            <option value="">-- Pilih kategori --</option>
            {DAFTAR_KATEGORI.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="tahun" className="mb-1 block text-sm font-bold">Tahun Terbit</label>
          <input id="tahun" name="tahun" type="number" required min="1000" max={new Date().getFullYear() + 1} defaultValue={v.tahun} placeholder="2018" className={inputClass} />
        </div>
        <div>
          <label htmlFor="tersedia" className="mb-1 block text-sm font-bold">Status</label>
          <select id="tersedia" name="tersedia" required defaultValue={v.tersedia} className={inputClass}>
            <option value="true">✔ Tersedia</option>
            <option value="false">✖ Sedang Dipinjam</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="sinopsis" className="mb-1 block text-sm font-bold">Sinopsis</label>
        <textarea id="sinopsis" name="sinopsis" rows={5} required maxLength={2000} defaultValue={v.sinopsis} placeholder="Ringkasan isi buku" className={inputClass} />
      </div>

      <div>
        <label htmlFor="gambar" className="mb-1 block text-sm font-bold">
          Sampul Buku {coverSaatIni ? "(opsional, kosongkan untuk mempertahankan sampul saat ini)" : "(opsional)"}
        </label>
        {coverSaatIni && (
          <img
            src={`/buku/${coverSaatIni}`}
            alt="Sampul saat ini"
            className={`${sunken} mb-2 aspect-2/3 w-24 object-cover p-1`}
          />
        )}
        <input id="gambar" name="gambar" type="file" accept="image/jpeg,image/png,image/webp,image/gif" className={`${inputClass} text-sm`} />
        <p className="mt-1 text-xs text-[#404040]">Format JPG, PNG, WEBP, atau GIF. Maksimal 2 MB.</p>
      </div>

      <div className="flex flex-wrap gap-3 pt-1">
        <button
          type="submit"
          disabled={pending}
          className={`${raised} px-6 py-1.5 font-bold hover:bg-[#e8e4da] active:translate-y-px disabled:opacity-60`}
        >
          {pending ? "Menyimpan..." : labelSubmit}
        </button>
        <Link href={hrefBatal} className={`${raised} px-6 py-1.5 hover:bg-[#e8e4da]`}>
          Batal
        </Link>
      </div>
    </form>
  );
}
