import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import pool from "@/lib/db";
import { isValidId } from "@/lib/book-utils";
import FormBuku from "@/components/FormBuku";
import { ubahBuku } from "@/app/katalog/actions";

export const dynamic = "force-dynamic";

const errorMessages = {
  required: "Judul, penulis, kategori, tahun, dan sinopsis wajib diisi.",
  length: "Judul, penulis, kategori, atau sinopsis melebihi batas panjang yang diizinkan.",
  year: "Tahun terbit harus berupa bilangan bulat antara 1000 dan 2100.",
  status: "Pilih status ketersediaan yang valid.",
  "cover-type": "Format cover tidak didukung. Gunakan JPG, PNG, WEBP, atau AVIF.",
  "cover-size": "Ukuran cover terlalu besar. Maksimal 4 MB.",
  database: "Perubahan belum berhasil disimpan. Periksa koneksi database.",
};

export default async function EditBukuPage({ params, searchParams }) {
  const { id } = await params;
  if (!isValidId(id)) notFound();

  const { rows } = await pool.query(
    "SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis, cover_url FROM buku WHERE id = $1",
    [Number(id)]
  );
  const buku = rows[0];
  if (!buku) notFound();

  const query = await searchParams;

  return (
    <div className="container py-9 sm:py-12">
      <Link href={`/katalog/${buku.id}`} className="font-mono text-[10px] tracking-widest text-cyan-300 hover:text-white"><ArrowLeft size={13} className="mr-1 inline" /> KEMBALI KE DETAIL</Link>
      <section className="mb-6 mt-5 terminal-panel p-6 sm:p-9">
        <p className="eyebrow">/ ARCHIVE / EDIT RECORD #{buku.id}</p>
        <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">EDIT <span className="neon">BOOK_</span></h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">Perbarui informasi buku. Cover lama akan tetap digunakan jika tidak mengunggah gambar baru.</p>
      </section>
      <FormBuku action={ubahBuku} buku={buku} submitLabel="SIMPAN PERUBAHAN" errorMessage={errorMessages[query?.error] || ""} />
    </div>
  );
}
