import Link from "next/link";
import BukuTidakDitemukan from "@/components/BukuTidakDitemukan";
import TombolHapus from "@/components/TombolHapus";
import pool from "@/lib/db";
import { parseId } from "@/lib/validasi";

export const dynamic = "force-dynamic";

const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";
const sunken = "bg-white shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080,inset_-2px_-2px_#e8e4da,inset_2px_2px_#0a0a0a]";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;

  // ID dari URL divalidasi dulu supaya /katalog/abc tidak membuat query error.
  const idAngka = parseId(id);
  let buku = null;
  if (idAngka !== null) {
    const { rows } = await pool.query("SELECT * FROM buku WHERE id = $1", [idAngka]);
    buku = rows[0] ?? null;
  }

  if (!buku) return <BukuTidakDitemukan id={id} />;

  return (
    <article className={`${raised} p-1`}>
      <div className="bg-linear-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1 text-sm font-bold text-[#0b2a55]">
        C:\Pustaka\Katalog\buku_{buku.judul}.exe
      </div>
      <div className="grid gap-6 p-4 md:grid-cols-[240px_1fr]">
        <img
          src={`/buku/${buku.gambar}`}
          alt={`Sampul ${buku.judul}`}
          className={`${sunken} w-full object-cover aspect-2/3 p-1`}
        />
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-[#1b3c70]">{buku.judul}</h1>
          <dl className="grid grid-cols-[110px_1fr] gap-y-1 text-sm">
            <dt className="font-bold">Penulis</dt>
            <dd>{buku.penulis}</dd>
            <dt className="font-bold">Kategori</dt>
            <dd>{buku.kategori}</dd>
            <dt className="font-bold">Tahun terbit</dt>
            <dd>{buku.tahun}</dd>
            <dt className="font-bold">Status</dt>
            <dd>
              <span
                className={`px-2 py-0.5 text-xs font-bold text-white ${
                  buku.tersedia ? "bg-[#1e7a2e]" : "bg-[#b3261e]"
                }`}
              >
                {buku.tersedia ? "✔ Tersedia" : "✖ Sedang Dipinjam"}
              </span>
            </dd>
          </dl>
          <div>
            <h2 className="mb-1 font-bold">Sinopsis</h2>
            <p className={`${sunken} whitespace-pre-line p-3 leading-relaxed`}>{buku.sinopsis}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/katalog" className={`${raised} inline-block px-5 py-1 hover:bg-[#e8e4da]`}>
              &larr; Kembali ke Katalog
            </Link>
            <Link href={`/katalog/${buku.id}/edit`} className={`${raised} inline-block px-5 py-1 hover:bg-[#e8e4da]`}>
              ✏️ Edit
            </Link>
            <TombolHapus id={buku.id} judul={buku.judul} />
          </div>
        </div>
      </div>
    </article>
  );
}
