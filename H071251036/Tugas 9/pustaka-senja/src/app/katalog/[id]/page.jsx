import Link from "next/link";
import { notFound } from "next/navigation";
import { pool } from "@/lib/db";
import TombolHapus from "@/components/TombolHapus";
export const dynamic = "force-dynamic";
export default async function DetailBuku({ params }) {
  const { id } = await params;
  if (!/^\d+$/.test(id)) notFound();
  const hasil = await pool.query("SELECT * FROM buku WHERE id=$1", [Number(id)]);
  const buku = hasil.rows[0];
  if (!buku) notFound();
  return <div className="mx-auto max-w-3xl"><Link href="/katalog" className="text-sm font-bold text-[#9a704c] hover:text-[#493326]">← Kembali ke katalog</Link><div className="mt-6 overflow-hidden rounded-3xl border border-[#e8ddcf] bg-[#fffdf9]"><div className="hero-pattern p-8 text-[#fff4e5] sm:p-12"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#e7c9a6]">PUSTAKA SENJA · {buku.kategori}</p><h1 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl">{buku.judul}</h1><p className="mt-3 text-[#ead8c4]">{buku.penulis} · {buku.tahun}</p></div><div className="p-7 sm:p-10"><span className={`rounded-full px-3 py-1 text-xs font-bold ${buku.tersedia ? "bg-[#eaf1e5] text-[#64805b]" : "bg-[#f7e9e4] text-[#a56a5d]"}`}>{buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}</span><h2 className="mt-8 font-serif text-2xl font-bold text-[#493326]">Tentang buku ini</h2><p className="mt-3 leading-8 text-[#806e5e]">{buku.sinopsis}</p><div className="mt-8 flex flex-wrap gap-3"><Link href={`/katalog/${buku.id}/edit`} className="rounded-full bg-[#493326] px-6 py-3 text-sm font-bold text-white hover:bg-[#654936]">Edit buku</Link><TombolHapus id={buku.id} compact /></div></div></div></div>;
}
