import Link from "next/link";
import { notFound } from "next/navigation";
import { pool } from "@/lib/db";
import { ubahBuku } from "@/app/katalog/actions";
import FormBuku from "@/components/FormBuku";
export const dynamic = "force-dynamic";
export default async function EditBukuPage({ params }) {
  const { id } = await params;
  if (!/^\d+$/.test(id)) notFound();
  const hasil = await pool.query("SELECT * FROM buku WHERE id=$1", [Number(id)]);
  const buku = hasil.rows[0];
  if (!buku) notFound();
  const action = ubahBuku.bind(null, Number(id));
  return <div className="mx-auto max-w-3xl"><Link href={`/katalog/${id}`} className="text-sm font-bold text-[#9a704c]">← Kembali ke detail</Link><p className="eyebrow mt-7">UPDATE THE SHELF</p><h1 className="section-title mt-2">Edit informasi buku.</h1><p className="mb-8 mt-3 text-sm text-[#827161]">Perbarui data {buku.judul}.</p><FormBuku action={action} buku={buku} /></div>;
}
