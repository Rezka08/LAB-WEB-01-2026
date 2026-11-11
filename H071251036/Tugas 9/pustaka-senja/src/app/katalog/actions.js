"use server";

import { pool } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function ambilData(formData) {
  const judul = String(formData.get("judul") ?? "").trim();
  const penulis = String(formData.get("penulis") ?? "").trim();
  const kategori = String(formData.get("kategori") ?? "").trim();
  const tahun = Number(formData.get("tahun"));
  const tersedia = formData.get("tersedia") === "true";
  const sinopsis = String(formData.get("sinopsis") ?? "").trim();
  if (!judul || !penulis || !kategori || !sinopsis) throw new Error("Semua kolom wajib diisi.");
  if (!Number.isInteger(tahun) || tahun < 0 || tahun > new Date().getFullYear()) throw new Error("Tahun terbit tidak valid.");
  return { judul, penulis, kategori, tahun, tersedia, sinopsis };
}

export async function tambahBuku(formData) {
  const b = ambilData(formData);
  await pool.query(
    "INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis) VALUES ($1, $2, $3, $4, $5, $6)",
    [b.judul, b.penulis, b.kategori, b.tahun, b.tersedia, b.sinopsis]
  );
  revalidatePath("/"); revalidatePath("/katalog");
  redirect("/katalog?status=ditambahkan");
}

export async function ubahBuku(id, formData) {
  const b = ambilData(formData);
  const hasil = await pool.query(
    "UPDATE buku SET judul=$1, penulis=$2, kategori=$3, tahun=$4, tersedia=$5, sinopsis=$6 WHERE id=$7 RETURNING id",
    [b.judul, b.penulis, b.kategori, b.tahun, b.tersedia, b.sinopsis, id]
  );
  if (hasil.rowCount === 0) redirect("/katalog?status=tidak-ditemukan");
  revalidatePath("/"); revalidatePath("/katalog"); revalidatePath(`/katalog/${id}`);
  redirect(`/katalog/${id}?status=diubah`);
}

export async function hapusBuku(formData) {
  const id = Number(formData.get("id"));
  if (!Number.isInteger(id) || id < 1) throw new Error("ID buku tidak valid.");
  await pool.query("DELETE FROM buku WHERE id=$1", [id]);
  revalidatePath("/"); revalidatePath("/katalog");
  redirect("/katalog?status=dihapus");
}
