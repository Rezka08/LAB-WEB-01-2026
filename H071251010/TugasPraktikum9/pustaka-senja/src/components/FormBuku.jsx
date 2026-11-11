import Link from "next/link";
import CoverUpload from "@/components/CoverUpload";

const fieldClass = "terminal-input";

export default function FormBuku({
  action,
  buku = null,
  submitLabel = "SIMPAN BUKU",
  errorMessage = "",
}) {
  return (
    <form action={action} encType="multipart/form-data" className="terminal-panel p-5 sm:p-8">
      {buku && <input type="hidden" name="id" value={buku.id} />}

      {errorMessage && (
        <div role="alert" className="mb-6 border border-rose-300/35 bg-rose-300/5 p-4 text-xs leading-6 text-rose-200">
          {errorMessage}
        </div>
      )}

      <div className="mb-6 flex items-center justify-between border-b border-emerald-300/15 pb-4">
        <div>
          <p className="eyebrow">BOOK DATA FORM</p>
          <h2 className="mt-2 text-lg font-bold text-white">Informasi koleksi</h2>
        </div>
        <span className="font-mono text-[9px] tracking-widest text-emerald-300">{buku ? `RECORD #${buku.id}` : "NEW RECORD"}</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="form-label">JUDUL BUKU *</span>
          <input name="judul" type="text" required maxLength={200} defaultValue={buku?.judul || ""} placeholder="Masukkan judul buku..." className={fieldClass} />
        </label>

        <label className="block">
          <span className="form-label">PENULIS *</span>
          <input name="penulis" type="text" required maxLength={150} defaultValue={buku?.penulis || ""} placeholder="Nama penulis..." className={fieldClass} />
        </label>

        <label className="block">
          <span className="form-label">KATEGORI *</span>
          <select name="kategori" required defaultValue={buku?.kategori || "Teknologi"} className={fieldClass}>
            <option value="Teknologi">Teknologi</option>
            <option value="Fiksi">Fiksi</option>
            <option value="Pengembangan Diri">Pengembangan Diri</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </label>

        <label className="block">
          <span className="form-label">TAHUN TERBIT *</span>
          <input name="tahun" type="number" required min="1000" max="2100" step="1" defaultValue={buku?.tahun || ""} placeholder="Contoh: 2024" className={fieldClass} />
        </label>

        <label className="block">
          <span className="form-label">STATUS KETERSEDIAAN *</span>
          <select name="tersedia" required defaultValue={buku ? String(buku.tersedia) : "true"} className={fieldClass}>
            <option value="true">Tersedia</option>
            <option value="false">Sedang Dipinjam</option>
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="form-label">SINOPSIS *</span>
          <textarea name="sinopsis" required rows={6} maxLength={3000} defaultValue={buku?.sinopsis || ""} placeholder="Tuliskan sinopsis buku..." className={`${fieldClass} resize-y`} />
        </label>

        <div className="sm:col-span-2">
          <span className="form-label">COVER / GAMBAR BUKU</span>
          <CoverUpload initialCover={buku?.cover_url || ""} title={`Sampul ${buku?.judul || "buku baru"}`} />
        </div>
      </div>

      <div className="mt-7 flex flex-col-reverse gap-3 border-t border-emerald-300/15 pt-5 sm:flex-row">
        <Link href="/katalog" className="btn-ghost">BATAL</Link>
        <button type="submit" className="btn-primary sm:ml-auto">{submitLabel}</button>
      </div>
    </form>
  );
}
