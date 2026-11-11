export default function FormBuku({ action, buku }) {
  return <form action={action} className="space-y-5 rounded-3xl border border-[#e8ddcf] bg-[#fffdf9] p-6 shadow-sm sm:p-8">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="field-label sm:col-span-2">Judul buku<input className="field-input" name="judul" required defaultValue={buku?.judul ?? ""} placeholder="Masukkan judul buku" /></label>
      <label className="field-label">Penulis<input className="field-input" name="penulis" required defaultValue={buku?.penulis ?? ""} placeholder="Nama penulis" /></label>
      <label className="field-label">Kategori<select className="field-input" name="kategori" required defaultValue={buku?.kategori ?? "Teknologi"}><option>Teknologi</option><option>Fiksi</option><option>Pengembangan Diri</option></select></label>
      <label className="field-label">Tahun terbit<input className="field-input" type="number" name="tahun" min="0" max={new Date().getFullYear()} required defaultValue={buku?.tahun ?? new Date().getFullYear()} /></label>
      <label className="field-label">Status ketersediaan<select className="field-input" name="tersedia" defaultValue={String(buku?.tersedia ?? true)}><option value="true">Tersedia</option><option value="false">Sedang dipinjam</option></select></label>
      <label className="field-label sm:col-span-2">Sinopsis<textarea className="field-input min-h-32 resize-y" name="sinopsis" required defaultValue={buku?.sinopsis ?? ""} placeholder="Tuliskan ringkasan singkat buku..." /></label>
    </div>
    <div className="flex flex-wrap gap-3"><button className="rounded-full bg-[#493326] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#654936]" type="submit">{buku ? "Simpan perubahan" : "Tambahkan buku"}</button><a href={buku ? `/katalog/${buku.id}` : "/katalog"} className="rounded-full border border-[#e6dbce] px-6 py-3 text-sm font-bold text-[#806e5e] hover:bg-[#f5eee5]">Batal</a></div>
  </form>;
}
