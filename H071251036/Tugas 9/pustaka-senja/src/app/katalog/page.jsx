import Link from "next/link";
import { pool } from "@/lib/db";
import FilterKatalog from "@/components/FilterKatalog";
export const dynamic = "force-dynamic";
export default async function KatalogPage({ searchParams }) {
  const params = await searchParams;
  const hasil = await pool.query("SELECT * FROM buku ORDER BY id ASC");
  const pesan = { ditambahkan: "Buku berhasil ditambahkan.", dihapus: "Buku berhasil dihapus.", "tidak-ditemukan": "Buku tidak ditemukan." }[params?.status];
  return <div><div className="mb-9 flex flex-wrap items-end justify-between gap-4"><div className="max-w-2xl"><p className="eyebrow">THE BOOKSHELF</p><h1 className="section-title mt-2">Temukan cerita <span className="italic text-[#a47a56]">favoritmu.</span></h1><p className="mt-3 leading-7 text-[#827161]">Jelajahi koleksi pilihan Pustaka Senja. Siapa tahu, buku berikutnya akan jadi teman terbaikmu.</p></div><Link href="/katalog/tambah" className="rounded-full bg-[#493326] px-5 py-3 text-sm font-bold text-white hover:bg-[#654936]">+ Tambah buku</Link></div>
    {pesan && <p className="mb-5 rounded-xl border border-[#cbd9c2] bg-[#edf4e9] px-4 py-3 text-sm text-[#526c49]">{pesan}</p>}
    <FilterKatalog buku={hasil.rows} />
  </div>;
}
