import Link from "next/link";
import { notFound } from "next/navigation";
import pool from "@/lib/db";
import { ubahBuku } from "../../actions";

export const dynamic = "force-dynamic";

export default async function EditBukuPage({ params }) {
  const { id } = await params;
  const numericId = Number(id);

  if (!Number.isInteger(numericId)) {
    notFound();
  }

  const { rows } = await pool.query("SELECT * FROM buku WHERE id = $1", [
    numericId,
  ]);
  const buku = rows[0];

  if (!buku) {
    notFound();
  }

  return (
    <section className="max-w-2xl mx-auto bg-white border-2 border-[#C9B6E4]/60 rounded-3xl p-6 sm:p-10 shadow-sm">
      <h1
        style={{ fontFamily: "var(--font-fraunces)" }}
        className="text-2xl sm:text-3xl font-bold text-[#382933] mb-6"
      >
        Edit Buku #{buku.id}
      </h1>

      <form action={ubahBuku} className="space-y-4">
        <input type="hidden" name="id" value={buku.id} />

        <div>
          <label className="block text-sm font-bold text-[#382933] mb-1">
            Judul Buku
          </label>
          <input
            name="judul"
            type="text"
            defaultValue={buku.judul}
            required
            className="w-full bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-sm text-[#382933] font-medium focus:outline-none focus:border-[#E06D53]"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-[#382933] mb-1">
            Penulis
          </label>
          <input
            name="penulis"
            type="text"
            defaultValue={buku.penulis}
            required
            className="w-full bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-sm text-[#382933] font-medium focus:outline-none focus:border-[#E06D53]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-[#382933] mb-1">
              Kategori
            </label>
            <select
              name="kategori"
              defaultValue={buku.kategori}
              className="w-full bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-sm text-[#382933] font-medium focus:outline-none focus:border-[#E06D53]"
            >
              <option value="Teknologi">Teknologi</option>
              <option value="Fiksi">Fiksi</option>
              <option value="Pengembangan Diri">Pengembangan Diri</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#382933] mb-1">
              Tahun Terbit
            </label>
            <input
              name="tahun"
              type="number"
              defaultValue={buku.tahun}
              required
              className="w-full bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-sm text-[#382933] font-medium focus:outline-none focus:border-[#E06D53]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-[#382933] mb-1">
            Status Ketersediaan
          </label>
          <select
            name="tersedia"
            defaultValue={String(buku.tersedia)}
            className="w-full bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-sm text-[#382933] font-medium focus:outline-none focus:border-[#E06D53]"
          >
            <option value="true">Tersedia</option>
            <option value="false">Sedang Dipinjam</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-[#382933] mb-1">
            Ganti Cover Buku (Opsional)
          </label>
          <input
            name="cover"
            type="file"
            accept="image/*"
            className="w-full text-xs text-[#4E3A47] file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#C9B6E4] file:text-[#382933] hover:file:bg-[#B8A2D6] cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-[#382933] mb-1">
            Sinopsis
          </label>
          <textarea
            name="sinopsis"
            rows={4}
            defaultValue={buku.sinopsis}
            required
            className="w-full bg-[#F5EFEB] border border-[#C9B6E4] rounded-xl px-4 py-2.5 text-sm text-[#382933] font-medium focus:outline-none focus:border-[#E06D53]"
          />
        </div>

        <div className="pt-4 flex items-center gap-3">
          <button
            type="submit"
            className="bg-[#E06D53] hover:bg-[#CC5A40] text-white font-bold px-6 py-2.5 rounded-xl shadow-md transition active:scale-95 text-sm"
          >
            Simpan Perubahan
          </button>
          <Link
            href="/katalog"
            className="bg-[#F5EFEB] hover:bg-white text-[#382933] border border-[#C9B6E4] font-bold px-5 py-2.5 rounded-xl transition text-sm"
          >
            Batal
          </Link>
        </div>
      </form>
    </section>
  );
}