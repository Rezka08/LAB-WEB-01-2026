"use client";

import { useState, useSyncExternalStore } from "react";
import { daftarKategori, warnaKategori } from "@/data/dataBuku";

const formAwal = { nama: "", judul: "", kategori: daftarKategori[0], alasan: "" };

const kelasInput =
  "w-full border-[3px] border-ink bg-surface text-ink px-4 py-3 outline-none transition focus:bg-sun focus:text-on-fill focus:shadow-brut-sm";

function getSnapshot() {
  if (typeof window === "undefined") return "[]";
  return localStorage.getItem("pustaka_usulan") || "[]";
}

function getServerSnapshot() {
  return "[]";
}

function subscribe(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("pustaka_usulan_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("pustaka_usulan_change", callback);
  };
}

function buatIdUsulan() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export default function UsulanBuku() {
  const [form, setForm] = useState(formAwal);
  const [pesan, setPesan] = useState(null);

  const rawUsulan = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  let daftarUsulan = [];
  try {
    daftarUsulan = JSON.parse(rawUsulan);
  } catch {
    daftarUsulan = [];
  }

  function simpanUsulanBaru(baru) {
    const listBaru = [baru, ...daftarUsulan];
    try {
      localStorage.setItem("pustaka_usulan", JSON.stringify(listBaru));
      window.dispatchEvent(new Event("pustaka_usulan_change"));
    } catch {
      // ignore
    }
  }

  function hapusUsulan(id) {
    const sisa = daftarUsulan.filter((item) => item.id !== id);
    try {
      localStorage.setItem("pustaka_usulan", JSON.stringify(sisa));
      window.dispatchEvent(new Event("pustaka_usulan_change"));
    } catch {
      // ignore
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const bersih = {
      nama: form.nama.trim(),
      judul: form.judul.trim(),
      kategori: form.kategori.trim(),
      alasan: form.alasan.trim(),
    };

    const adaKosong = Object.values(bersih).some((nilai) => nilai === "");
    if (adaKosong) {
      setPesan({ tipe: "error", teks: "Lengkapi semua kolom sebelum mengirim usulan." });
      return;
    }

    const itemBaru = { id: buatIdUsulan(), ...bersih };
    simpanUsulanBaru(itemBaru);
    setForm(formAwal);
    setPesan({ tipe: "sukses", teks: "Usulan berhasil dikirim. Terima kasih sudah membantu melengkapi koleksi!" });
  }

  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">Usulkan buku</h1>
        <p className="mt-3 max-w-xl text-lg text-ink/80">
          Punya judul yang ingin ada di Pustaka Senja? Isi formulir di bawah ini agar kami pertimbangkan untuk pengadaan berikutnya.
        </p>
      </header>

      <form onSubmit={handleSubmit} noValidate className="max-w-2xl space-y-6 border-[3px] border-ink bg-surface p-6 shadow-brut md:p-8">
        {pesan && (
          <div
            role="alert"
            className={`border-[3px] border-ink p-4 font-bold shadow-brut-sm ${
              pesan.tipe === "error" ? "bg-coral text-on-fill" : "bg-volt text-on-fill"
            }`}
          >
            {pesan.teks}
          </div>
        )}

        <div>
          <label htmlFor="nama" className="mb-2 block font-bold">
            Nama pengusul <span className="text-sun">*</span>
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            required
            placeholder="Contoh: Budi Santoso"
            value={form.nama}
            onChange={handleChange}
            className={kelasInput}
          />
        </div>

        <div>
          <label htmlFor="judul" className="mb-2 block font-bold">
            Judul buku yang diusulkan <span className="text-sun">*</span>
          </label>
          <input
            id="judul"
            name="judul"
            type="text"
            required
            placeholder="Contoh: The Pragmatic Programmer"
            value={form.judul}
            onChange={handleChange}
            className={kelasInput}
          />
        </div>

        <div>
          <label htmlFor="kategori" className="mb-2 block font-bold">
            Kategori buku <span className="text-sun">*</span>
          </label>
          <select id="kategori" name="kategori" value={form.kategori} onChange={handleChange} className={kelasInput}>
            {daftarKategori.map((kategori) => (
              <option key={kategori} value={kategori}>
                {kategori}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="alasan" className="font-bold">
              Alasan usulan <span className="text-sun">*</span>
            </label>
            <span className="font-mono text-xs text-ink/50">{form.alasan.length} karakter</span>
          </div>
          <textarea
            id="alasan"
            name="alasan"
            rows={4}
            required
            placeholder="Mengapa buku ini penting untuk ada di koleksi Pustaka Senja?"
            value={form.alasan}
            onChange={handleChange}
            className={`${kelasInput} resize-y`}
          />
        </div>

        <button
          type="submit"
          className="border-[3px] border-ink bg-sun px-6 py-3 font-bold text-on-fill shadow-brut transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          Kirim usulan →
        </button>
      </form>

      <section className="space-y-6">
        <div className="flex items-center justify-between border-b-[3px] border-ink pb-3">
          <h2 className="text-2xl font-black">Daftar Usulan Komunitas ({daftarUsulan.length})</h2>
          {daftarUsulan.length > 0 && (
            <span className="font-mono text-xs text-ink/60">Tersimpan di perangkat ini</span>
          )}
        </div>

        {daftarUsulan.length === 0 ? (
          <p className="border-[3px] border-dashed border-ink p-8 text-center font-mono text-ink/60">
            Belum ada usulan buku. Jadilah yang pertama mengusulkan judul favoritmu!
          </p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2">
            {daftarUsulan.map((usulan) => (
              <li key={usulan.id} className="relative space-y-3 border-[3px] border-ink bg-surface p-6 shadow-brut-sm">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-block border-2 border-ink px-2 py-0.5 font-mono text-xs font-bold ${
                      warnaKategori[usulan.kategori] || "bg-ink text-paper"
                    }`}
                  >
                    {usulan.kategori}
                  </span>
                  <button
                    type="button"
                    onClick={() => hapusUsulan(usulan.id)}
                    aria-label={`Hapus usulan ${usulan.judul}`}
                    title="Hapus usulan"
                    className="font-mono text-xs text-ink/40 hover:text-sun hover:font-bold"
                  >
                    ✕ Hapus
                  </button>
                </div>
                <h3 className="text-xl font-black">{usulan.judul}</h3>
                <p className="font-mono text-xs text-ink/70">
                  Diusulkan oleh <strong>{usulan.nama}</strong> {usulan.tanggal && `• ${usulan.tanggal}`}
                </p>
                <p className="border-l-[3px] border-ink pl-3 text-sm italic text-ink/90">&quot;{usulan.alasan}&quot;</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
