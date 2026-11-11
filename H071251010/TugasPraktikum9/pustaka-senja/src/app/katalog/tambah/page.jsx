import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FormBuku from "@/components/FormBuku";
import { tambahBuku } from "@/app/katalog/actions";

export const dynamic = "force-dynamic";

const errorMessages = {
  required: "Judul, penulis, kategori, tahun, dan sinopsis wajib diisi.",
  length: "Judul, penulis, kategori, atau sinopsis melebihi batas panjang yang diizinkan.",
  year: "Tahun terbit harus berupa bilangan bulat antara 1000 dan 2100.",
  status: "Pilih status ketersediaan yang valid.",
  "cover-type": "Format cover tidak didukung. Gunakan JPG, PNG, WEBP, atau AVIF.",
  "cover-size": "Ukuran cover terlalu besar. Maksimal 4 MB.",
  database: "Data belum berhasil disimpan. Periksa koneksi database dan struktur tabel.",
};

export default async function TambahBukuPage({ searchParams }) {
  const params = await searchParams;
  return (
    <div className="container py-9 sm:py-12">
      <Link href="/katalog" className="font-mono text-[10px] tracking-widest text-cyan-300 hover:text-white"><ArrowLeft size={13} className="mr-1 inline" /> KEMBALI KE KATALOG</Link>
      <section className="mb-6 mt-5 terminal-panel p-6 sm:p-9">
        <p className="eyebrow">/ ARCHIVE / NEW RECORD</p>
        <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">ADD NEW <span className="neon">BOOK_</span></h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">Tambahkan koleksi baru ke arsip Pustaka Senja. Data akan disimpan secara permanen ke PostgreSQL.</p>
      </section>
      <FormBuku action={tambahBuku} submitLabel="SIMPAN BUKU BARU" errorMessage={errorMessages[params?.error] || ""} />
    </div>
  );
}
