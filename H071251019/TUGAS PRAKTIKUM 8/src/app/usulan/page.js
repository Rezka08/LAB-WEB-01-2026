"use client";

import { useState } from "react";

const daftarKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];

const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";
const sunken = "bg-white shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080,inset_-2px_-2px_#e8e4da,inset_2px_2px_#0a0a0a]";
const inputClass = `${sunken} w-full px-2 py-1 focus:outline-2 focus:outline-dotted focus:outline-black`;

export default function UsulanPage() {
const [nama, setNama] = useState("");
const [judul, setJudul] = useState("");
const [kategori, setKategori] = useState("");
const [alasan, setAlasan] = useState("");
const [status, setStatus] = useState("");
const [daftarUsulan, setDaftarUsulan] = useState([]);

function handleSubmit(e) {
    e.preventDefault();

        const belumLengkap = [nama, judul, kategori, alasan].some(
        (isi) => isi.trim() === ""
        );

        if (belumLengkap) {
        setStatus("error");
        return;
        }

        const usulanBaru = {
        id: `${Date.now()}`,
        nama: nama.trim(),
        judul: judul.trim(),
        kategori,
        alasan: alasan.trim(),
        };

        setDaftarUsulan([usulanBaru, ...daftarUsulan]);
        setStatus("sukses");
        setNama("");
        setJudul("");
        setKategori("");
        setAlasan("");
    }

    return (
        <div className="space-y-6">
        <section className={`${raised} mx-auto max-w-xl p-1`}>
            <div className="bg-gradient-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1 text-sm font-bold text-[#0b2a55]">
            Usulan_Buku.exe
            </div>
            <div className="space-y-4 p-4">
            <div>
                <h1 className="text-2xl font-bold text-[#1b3c70]">Usulan Buku</h1>
                <p className="text-sm">Usulkan judul baru untuk koleksi Pustaka Senja.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                <label htmlFor="nama" className="mb-1 block text-sm font-bold">Nama Pengusul</label>
                <input id="nama" type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Masukkan nama Anda" className={inputClass} />
                </div>
                <div>
                <label htmlFor="judul" className="mb-1 block text-sm font-bold">Judul Buku yang Diusulkan</label>
                <input id="judul" type="text" value={judul} onChange={(e) => setJudul(e.target.value)} placeholder="Contoh: The Pragmatic Programmer" className={inputClass} />
                </div>
                <div>
                <label htmlFor="kategori" className="mb-1 block text-sm font-bold">Kategori</label>
                <select id="kategori" value={kategori} onChange={(e) => setKategori(e.target.value)} className={inputClass}>
                    <option value="">-- Pilih kategori --</option>
                    {daftarKategori.map((item) => (
                    <option key={item} value={item}>{item}</option>
                    ))}
                </select>
                </div>
                <div>
                <label htmlFor="alasan" className="mb-1 block text-sm font-bold">Alasan Usulan</label>
                <textarea id="alasan" rows={4} value={alasan} onChange={(e) => setAlasan(e.target.value)} placeholder="Mengapa buku ini perlu ada?" className={inputClass} />
                </div>
                <button type="submit" className={`${raised} px-6 py-1.5 font-bold active:translate-y-px hover:bg-[#e8e4da]`}>
                Kirim Usulan
                </button>
            </form>

            {status === "error" && (
                <p role="alert" className={`${sunken} flex items-center gap-2 p-3 text-sm`}>
                <span className="text-2xl" aria-hidden="true">⚠️</span>
                Semua kolom wajib diisi sebelum usulan dikirim.
                </p>
            )}
            {status === "sukses" && (
                <p role="status" className={`${sunken} flex items-center gap-2 p-3 text-sm`}>
                <span className="text-2xl" aria-hidden="true">✅</span>
                Usulan berhasil dikirim. Terima kasih!
                </p>
            )}
            </div>
        </section>

        {daftarUsulan.length > 0 && (
            <section className={`${raised} mx-auto max-w-xl p-1`}>
            <div className="bg-gradient-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1 text-sm font-bold text-[#0b2a55]">
                Usulan_Terkirim ({daftarUsulan.length})
            </div>
            <ul className="space-y-2 p-4">
                {daftarUsulan.map((usulan) => (
                <li key={usulan.id} className={`${sunken} p-3 text-sm`}>
                    <p className="font-bold text-[#1b3c70]">{usulan.judul}</p>
                    <p>{usulan.kategori} &bull; diusulkan oleh {usulan.nama}</p>
                    <p className="mt-1">{usulan.alasan}</p>
                </li>
                ))}
            </ul>
            </section>
        )}
        </div>
    );
}
