"use client";
import { useState } from "react";
const initialForm = { nama: "", judul: "", kategori: "", alasan: "" };
export default function UsulanPage() {
  const [form, setForm] = useState(initialForm);
  const [pesan, setPesan] = useState("");
  const [peringatan, setPeringatan] = useState("");
  const [usulan, setUsulan] = useState([]);
  function handleChange(e) { setForm((prev) => ({ ...prev, [e.target.name]: e.target.value })); }
  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(form).some((value) => !value.trim())) { setPeringatan("Mohon lengkapi semua kolom sebelum mengirim usulan."); setPesan(""); return; }
    const item = { ...form, id: `${Date.now()}-${form.judul}` };
    setUsulan((prev) => [item, ...prev]); setForm(initialForm); setPeringatan(""); setPesan("Terima kasih! Usulan bukumu berhasil dikirim.");
  }
  return <div className="mx-auto max-w-3xl"><div className="mb-9"><p className="eyebrow">A NOTE FOR OUR BOOKSHELF</p><h1 className="section-title mt-2">Bantu kami memilih <span className="italic text-[#a47a56]">cerita berikutnya.</span></h1><p className="mt-3 leading-7 text-[#827161]">Ada buku yang ingin kamu temukan di Pustaka Senja? Ceritakan kepada kami.</p></div>
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[#e8ddcf] bg-[#fffdf9] p-6 shadow-[0_20px_55px_-45px_rgba(68,45,30,.45)] sm:p-9"><div className="grid gap-5 sm:grid-cols-2"><label className="field-label">Nama pengusul<input className="field-input" name="nama" value={form.nama} onChange={handleChange} placeholder="Nama kamu" /></label><label className="field-label">Judul buku<input className="field-input" name="judul" value={form.judul} onChange={handleChange} placeholder="Judul buku yang diusulkan" /></label><label className="field-label sm:col-span-2">Kategori<select className="field-input" name="kategori" value={form.kategori} onChange={handleChange}><option value="">Pilih kategori buku</option><option>Teknologi</option><option>Fiksi</option><option>Pengembangan Diri</option><option>Lainnya</option></select></label><label className="field-label sm:col-span-2">Alasan usulan<textarea className="field-input min-h-32 resize-y" name="alasan" value={form.alasan} onChange={handleChange} placeholder="Kenapa buku ini layak ada di Pustaka Senja?" /></label></div>
      {peringatan && <p role="alert" className="mt-5 rounded-xl bg-[#f9e8e2] px-4 py-3 text-sm text-[#9a5143]">{peringatan}</p>}{pesan && <p role="status" className="mt-5 rounded-xl bg-[#e9f0e4] px-4 py-3 text-sm text-[#58704f]">{pesan}</p>}<button type="submit" className="mt-7 w-full rounded-full bg-[#493326] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#654936] sm:w-auto">Kirim usulan <span className="ml-2">↗</span></button>
    </form>
    {usulan.length > 0 && <section className="mt-10"><p className="eyebrow">COMMUNITY PICKS</p><h2 className="mt-2 font-serif text-2xl font-bold text-[#493326]">Usulan dari pengunjung</h2><div className="mt-4 space-y-3">{usulan.map((item) => <article key={item.id} className="rounded-2xl border border-[#e8ddcf] bg-[#fffdf9] p-5"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="font-serif text-lg font-bold text-[#493326]">{item.judul}</h3><span className="rounded-full bg-[#f2e9dc] px-3 py-1 text-[10px] font-bold text-[#8c694c]">{item.kategori}</span></div><p className="mt-1 text-xs text-[#9b8877]">Diusulkan oleh {item.nama}</p><p className="mt-3 text-sm leading-6 text-[#806e5e]">{item.alasan}</p></article>)}</div></section>}
  </div>;
}
