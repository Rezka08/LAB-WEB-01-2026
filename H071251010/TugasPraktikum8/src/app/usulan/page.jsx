"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, ClipboardList, Send } from "lucide-react";

const formAwal = { nama: "", judul: "", kategori: "", alasan: "" };

// Client Component karena form memakai state dan event handler.
export default function UsulanPage() {
  const [form, setForm] = useState(formAwal);
  const [pesan, setPesan] = useState("");
  const [jenisPesan, setJenisPesan] = useState("");
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((formSebelumnya) => ({ ...formSebelumnya, [name]: value }));
    if (pesan) setPesan("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    // trim() memastikan input yang hanya berisi spasi dianggap kosong.
    const semuaKolomTerisi = Object.values(form).every((nilai) => nilai.trim() !== "");
    if (!semuaKolomTerisi) {
      setJenisPesan("error");
      setPesan("Masih ada kolom kosong. Lengkapi seluruh formulir sebelum mengirim.");
      return;
    }

    const usulanBaru = { ...form, id: `${Date.now()}-${form.judul}` };
    setDaftarUsulan((daftarSebelumnya) => [usulanBaru, ...daftarSebelumnya]);
    setForm(formAwal);
    setJenisPesan("success");
    setPesan("Usulan berhasil dikirim dan dicatat selama sesi ini.");
  }

  return (
    <div className="container py-9 sm:py-12">
      <section className="terminal-panel p-6 sm:p-9">
        <p className="eyebrow">/ COMMUNITY INPUT / PORTAL 03</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">SUBMIT A <span className="neon">BOOK_</span></h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">Punya rekomendasi bacaan yang ingin hadir di Pustaka Senja? Kirimkan detailnya melalui portal komunitas ini.</p>
      </section>

      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1.15fr_.85fr]">
        <form onSubmit={handleSubmit} className="terminal-panel p-5 sm:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-emerald-300/20 pb-4">
            <div>
              <p className="eyebrow">FORM // NEW SUBMISSION</p>
              <h2 className="mt-2 text-xl font-bold text-white">Input proposal</h2>
            </div>
            <ClipboardList size={23} className="text-cyan-300" />
          </div>

          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] tracking-widest text-emerald-100/70">NAMA PENGUSUL *</span>
              <input name="nama" value={form.nama} onChange={handleChange} placeholder="Masukkan nama..." className="terminal-input" />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] tracking-widest text-emerald-100/70">JUDUL BUKU *</span>
              <input name="judul" value={form.judul} onChange={handleChange} placeholder="Judul buku yang diusulkan..." className="terminal-input" />
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] tracking-widest text-emerald-100/70">KATEGORI *</span>
              <select name="kategori" value={form.kategori} onChange={handleChange} className="terminal-input">
                <option value="">Pilih kategori...</option>
                <option value="Teknologi">Teknologi</option>
                <option value="Fiksi">Fiksi</option>
                <option value="Pengembangan Diri">Pengembangan Diri</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block font-mono text-[10px] tracking-widest text-emerald-100/70">ALASAN USULAN *</span>
              <textarea name="alasan" value={form.alasan} onChange={handleChange} rows={5} placeholder="Mengapa buku ini layak ditambahkan?" className="terminal-input resize-y" />
            </label>
          </div>

          {pesan && (
            <p role="status" className={`mt-5 flex items-start gap-2 border p-3 text-xs leading-6 ${jenisPesan === "success" ? "border-emerald-300/35 bg-emerald-300/5 text-emerald-200" : "border-rose-300/35 bg-rose-300/5 text-rose-200"}`}>
              {jenisPesan === "success" ? <CheckCircle2 size={16} /> : <AlertTriangle size={16} />}
              {pesan}
            </p>
          )}

          <button type="submit" className="btn-primary mt-6 w-full"><Send size={14} /> TRANSMIT PROPOSAL</button>
          <p className="mt-3 text-center font-mono text-[8px] tracking-widest text-slate-600">LOCAL SESSION ONLY // NO DATABASE CONNECTION</p>
        </form>

        <aside className="space-y-5">
          <section className="terminal-panel p-6">
            <p className="eyebrow">SUBMISSION PROTOCOL</p>
            <h3 className="mt-3 text-xl font-bold text-white">How it works.</h3>
            <ol className="mt-5 space-y-4 text-xs leading-6 text-slate-400">
              <li><b className="text-emerald-300">01 //</b> Isi nama pengusul.</li>
              <li><b className="text-emerald-300">02 //</b> Masukkan judul dan kategori.</li>
              <li><b className="text-emerald-300">03 //</b> Jelaskan alasan usulan.</li>
              <li><b className="text-emerald-300">04 //</b> Kirim dan lihat hasilnya di session log.</li>
            </ol>
          </section>

          <section className="terminal-panel p-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow">SESSION LOG</p>
              <span className="font-mono text-[10px] text-cyan-300">{daftarUsulan.length} RECORD(S)</span>
            </div>
            {daftarUsulan.length === 0 ? (
              <p className="mt-4 font-mono text-[10px] leading-6 text-slate-600">[ EMPTY ] Belum ada usulan yang dikirim.</p>
            ) : (
              <div className="mt-4 space-y-4">
                {daftarUsulan.map((item) => (
                  <article key={item.id} className="border-l-2 border-emerald-300 pl-3">
                    <h4 className="text-sm font-bold text-white">{item.judul}</h4>
                    <p className="mt-1 font-mono text-[9px] text-cyan-300">{item.nama} // {item.kategori}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-400">{item.alasan}</p>
                  </article>
                ))}
              </div>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
}
