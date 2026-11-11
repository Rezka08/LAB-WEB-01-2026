import Link from "next/link";
import BukuCard from "@/components/BukuCard";
import pool from "@/lib/db";
import { DAFTAR_KATEGORI } from "@/lib/konstanta";

// Data selalu diambil ulang dari PostgreSQL setiap halaman dibuka.
export const dynamic = "force-dynamic";

const daftarKategori = ["Semua", ...DAFTAR_KATEGORI];

const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";
const sunken = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080,inset_-2px_-2px_#e8e4da,inset_2px_2px_#0a0a0a]";
const inputClass = "bg-white shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080,inset_-2px_-2px_#e8e4da,inset_2px_2px_#0a0a0a] flex-1 min-w-0 px-2 py-1 focus:outline-2 focus:outline-dotted focus:outline-black";

// Karakter khusus LIKE (% dan _) di-escape agar dicari apa adanya.
function escapeLike(teks) {
  return teks.replace(/[\\%_]/g, "\\$&");
}

function buatHref(kategori, q) {
  const params = new URLSearchParams();
  if (kategori !== "Semua") params.set("kategori", kategori);
  if (q) params.set("q", q);
  const qs = params.toString();
  return qs ? `/katalog?${qs}` : "/katalog";
}

export default async function KatalogPage({ searchParams }) {
  const sp = await searchParams;
  const q = (typeof sp?.q === "string" ? sp.q : "").trim().slice(0, 100);
  const kategoriParam = typeof sp?.kategori === "string" ? sp.kategori : "Semua";
  const kategoriAktif = daftarKategori.includes(kategoriParam) ? kategoriParam : "Semua";

  // WHERE disusun dari potongan SQL tetap; semua nilai dari pengguna dikirim lewat $1, $2, ...
  const kondisi = [];
  const nilai = [];
  if (kategoriAktif !== "Semua") {
    nilai.push(kategoriAktif);
    kondisi.push(`kategori = $${nilai.length}`);
  }
  if (q) {
    nilai.push(`%${escapeLike(q)}%`);
    const p = `$${nilai.length}`;
    kondisi.push(
      `(judul ILIKE ${p} OR penulis ILIKE ${p} OR sinopsis ILIKE ${p} OR tahun::text ILIKE ${p})`
    );
  }
  const where = kondisi.length > 0 ? `WHERE ${kondisi.join(" AND ")}` : "";

  const { rows: bukuTampil } = await pool.query(
    `SELECT id, judul, penulis, kategori, tahun, tersedia, gambar
        FROM buku
        ${where}
      ORDER BY id`,
    nilai
  );

  return (
    <section className={`${raised} p-1`}>
      <div className="bg-linear-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1 text-sm font-bold text-[#0b2a55]">
        C:\Pustaka\Katalog
      </div>
      <div className="space-y-4 p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-[#1b3c70]">Katalog Buku</h1>
            <p className="text-sm">Cari judul atau pilih kategori untuk menyaring koleksi.</p>
          </div>
          <Link href="/katalog/tambah" className={`${raised} px-5 py-2 font-bold hover:bg-[#e8e4da]`}>
            + Tambah Buku
          </Link>
        </div>

        <form action="/katalog" method="GET" className="flex gap-2">
          {kategoriAktif !== "Semua" && <input type="hidden" name="kategori" value={kategoriAktif} />}
          <input
            type="search"
            name="q"
            defaultValue={q}
            maxLength={100}
            placeholder="Cari judul, penulis, atau tahun..."
            aria-label="Cari buku"
            className={inputClass}
          />
          <button type="submit" className={`${raised} px-4 py-1 text-sm font-bold hover:bg-[#e8e4da] active:translate-y-px`}>
            🔍 Cari
          </button>
          {q && (
            <Link href={buatHref(kategoriAktif, "")} className={`${raised} px-4 py-1 text-sm hover:bg-[#e8e4da]`}>
              Reset
            </Link>
          )}
        </form>

        <div className="flex flex-wrap gap-2">
          {daftarKategori.map((kategori) => (
            <Link
              key={kategori}
              href={buatHref(kategori, q)}
              className={`inline-block px-4 py-1 text-sm ${
                kategoriAktif === kategori ? `${sunken} font-bold underline underline-offset-4` : `${raised} hover:bg-[#e8e4da]`
              }`}
            >
              {kategori}
            </Link>
          ))}
        </div>

        <p className="text-sm">
          {bukuTampil.length} objek ditemukan{q ? ` untuk "${q}"` : ""}
        </p>

        {bukuTampil.length === 0 ? (
          <p className={`${sunken} p-6 text-center text-sm`}>
            <span className="mb-2 block text-3xl" aria-hidden="true">📭</span>
            Tidak ada buku yang cocok dengan pencarian Anda.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bukuTampil.map((buku) => (
              <BukuCard
                key={buku.id}
                id={buku.id}
                judul={buku.judul}
                penulis={buku.penulis}
                kategori={buku.kategori}
                tahun={buku.tahun}
                tersedia={buku.tersedia}
                gambar={buku.gambar}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
