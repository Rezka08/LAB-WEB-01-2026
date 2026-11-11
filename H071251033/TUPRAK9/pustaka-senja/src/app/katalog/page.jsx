import pool from "@/lib/db";
import { tambahBuku } from "./actions";
import KatalogClient from "@/components/KatalogClient";

export const dynamic = "force-dynamic";

export default async function KatalogPage() {
  const { rows } = await pool.query("SELECT * FROM buku ORDER BY id DESC");

  return (
    <div className="space-y-10">
      <div>
        <h1
          style={{ fontFamily: "var(--font-fraunces)" }}
          className="text-3xl sm:text-4xl font-bold text-[#382933]"
        >
          Katalog Buku
        </h1>
        <p className="text-[#4E3A47] text-sm mt-1 font-medium">
          Jelajahi, cari, dan kelola koleksi buku Pustaka Senja.
        </p>
      </div>

      {/* Form Tambah Buku Baru */}
      <section className="bg-white border-2 border-[#C9B6E4]/60 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2
          style={{ fontFamily: "var(--font-fraunces)" }}
          className="text-xl font-bold text-[#382933] mb-4"
        >
          + Tambah Buku Baru
        </h2>
        <form action={tambahBuku} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="judul"
            type="text"
            placeholder="Judul Buku"
            required
            className="bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-sm text-[#382933] font-medium focus:outline-none focus:border-[#E06D53]"
          />
          <input
            name="penulis"
            type="text"
            placeholder="Nama Penulis"
            required
            className="bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-sm text-[#382933] font-medium focus:outline-none focus:border-[#E06D53]"
          />
          <select
            name="kategori"
            required
            className="bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-sm text-[#382933] font-medium focus:outline-none focus:border-[#E06D53]"
          >
            <option value="Teknologi">Teknologi</option>
            <option value="Fiksi">Fiksi</option>
            <option value="Pengembangan Diri">Pengembangan Diri</option>
          </select>
          <input
            name="tahun"
            type="number"
            min="1900"
            max="2026"
            placeholder="Tahun Terbit (cth: 2024)"
            required
            className="bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-sm text-[#382933] font-medium focus:outline-none focus:border-[#E06D53]"
          />
          <select
            name="tersedia"
            defaultValue="true"
            className="bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-sm text-[#382933] font-medium focus:outline-none focus:border-[#E06D53]"
          >
            <option value="true">Status: Tersedia</option>
            <option value="false">Status: Sedang Dipinjam</option>
          </select>
          <div className="flex flex-col justify-center">
            <input
              name="cover"
              type="file"
              accept="image/*"
              className="text-xs text-[#4E3A47] file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#C9B6E4] file:text-[#382933] hover:file:bg-[#B8A2D6] cursor-pointer"
            />
          </div>
          <textarea
            name="sinopsis"
            rows={2}
            placeholder="Sinopsis singkat buku..."
            required
            className="sm:col-span-2 bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-sm text-[#382933] font-medium focus:outline-none focus:border-[#E06D53]"
          />
          <div className="sm:col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-[#E06D53] hover:bg-[#CC5A40] text-white font-bold px-6 py-2.5 rounded-xl shadow-sm transition active:scale-95 text-sm"
            >
              Simpan Buku
            </button>
          </div>
        </form>
      </section>

      {/* Daftar Buku dengan Pencarian & Filter */}
      <KatalogClient daftarBuku={rows} />
    </div>
  );
}