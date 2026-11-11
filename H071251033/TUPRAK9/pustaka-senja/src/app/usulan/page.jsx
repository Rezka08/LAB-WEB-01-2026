"use client";

import { useState } from "react";

export default function UsulanPage() {
  const [form, setForm] = useState({
    nama: "",
    judul: "",
    kategori: "Teknologi",
    alasan: "",
  });

  const [pesanError, setPesanError] = useState("");
  const [berhasil, setBerhasil] = useState(false);
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.nama.trim() ||
      !form.judul.trim() ||
      !form.kategori.trim() ||
      !form.alasan.trim()
    ) {
      setPesanError("Semua kolom formulir wajib diisi dan tidak boleh hanya berupa spasi.");
      setBerhasil(false);
      return;
    }

    const usulanBaru = {
      id: Date.now().toString(),
      nama: form.nama.trim(),
      judul: form.judul.trim(),
      kategori: form.kategori,
      alasan: form.alasan.trim(),
    };

    setDaftarUsulan((prev) => [usulanBaru, ...prev]);
    setBerhasil(true);
    setPesanError("");
    setForm({
      nama: "",
      judul: "",
      kategori: "Teknologi",
      alasan: "",
    });
  }

  return (
    <div className="max-w-2xl mx-auto space-y-10">
      <section className="bg-white border-2 border-[#C9B6E4]/60 rounded-3xl p-6 sm:p-10 shadow-sm">
        <h1
          style={{ fontFamily: "var(--font-fraunces)" }}
          className="text-2xl sm:text-3xl font-bold text-[#382933] mb-2"
        >
          Usulan Buku Baru
        </h1>
        <p className="text-[#4E3A47] text-sm mb-6 font-medium">
          Punya rekomendasi buku menarik untuk koleksi Pustaka Senja? Isi formulir di bawah ini.
        </p>

        {pesanError && (
          <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm font-bold">
            {pesanError}
          </div>
        )}

        {berhasil && (
          <div className="mb-6 p-4 rounded-xl bg-[#FFF2CC] border border-[#FFE699] text-[#382933] text-sm font-bold">
            Terima kasih! Rekomendasi buku Anda berhasil dicatat untuk dipertimbangkan.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-[#382933] mb-1">
              Nama Pengusul
            </label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Contoh: Budi Santoso"
              className="w-full bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-[#382933] font-medium focus:outline-none focus:border-[#E06D53] focus:bg-white text-sm transition"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#382933] mb-1">
              Judul Buku yang Diusulkan
            </label>
            <input
              type="text"
              name="judul"
              value={form.judul}
              onChange={handleChange}
              placeholder="Contoh: The Pragmatic Programmer"
              className="w-full bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-[#382933] font-medium focus:outline-none focus:border-[#E06D53] focus:bg-white text-sm transition"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#382933] mb-1">
              Kategori
            </label>
            <select
              name="kategori"
              value={form.kategori}
              onChange={handleChange}
              className="w-full bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-[#382933] font-medium focus:outline-none focus:border-[#E06D53] focus:bg-white text-sm transition"
            >
              <option value="Teknologi">Teknologi</option>
              <option value="Fiksi">Fiksi</option>
              <option value="Pengembangan Diri">Pengembangan Diri</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#382933] mb-1">
              Alasan Usulan
            </label>
            <textarea
              name="alasan"
              rows={4}
              value={form.alasan}
              onChange={handleChange}
              placeholder="Tulis alasan mengapa buku ini perlu dihadirkan..."
              className="w-full bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-[#382933] font-medium focus:outline-none focus:border-[#E06D53] focus:bg-white text-sm transition"
            />
          </div>

          {/* Tombol Kirim Usulan: Sunset Terracotta */}
          <button
            type="submit"
            className="w-full bg-[#E06D53] hover:bg-[#CC5A40] text-white font-bold py-3.5 rounded-xl shadow-md transition active:scale-95 text-base"
          >
            Kirim Usulan Buku
          </button>
        </form>
      </section>

      {daftarUsulan.length > 0 && (
        <section className="space-y-4">
          <h2
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-xl font-bold text-[#382933]"
          >
            Usulan Terkirim (Sesi Ini)
          </h2>
          <div className="space-y-3">
            {daftarUsulan.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFF2CC] border border-[#FFE699] rounded-2xl p-5 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3
                    style={{ fontFamily: "var(--font-fraunces)" }}
                    className="font-bold text-[#382933] text-lg"
                  >
                    {item.judul}
                  </h3>
                  <span className="text-xs bg-white text-[#382933] border border-[#FFE699] px-3 py-1 rounded-full font-bold">
                    {item.kategori}
                  </span>
                </div>
                <p className="text-xs text-[#4E3A47] mb-2 font-medium">
                  Diusulkan oleh: <span className="font-bold text-[#382933]">{item.nama}</span>
                </p>
                <p className="text-sm text-[#4E3A47] font-normal">{item.alasan}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}