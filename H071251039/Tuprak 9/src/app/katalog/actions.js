"use server";

import pool from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/**
 * Server Action: Tambah Buku Baru
 * Menggunakan raw SQL INSERT INTO dengan parameterized query.
 */
export async function tambahBuku(formData) {
  const judul = formData.get("judul")?.toString().trim();
  const penulis = formData.get("penulis")?.toString().trim();
  const kategori = formData.get("kategori")?.toString().trim();
  const tahunRaw = formData.get("tahun")?.toString().trim();
  const sinopsis = formData.get("sinopsis")?.toString().trim() || "";
  const statusRaw = formData.get("tersedia");

  const tahun = parseInt(tahunRaw, 10);
  const tersedia = statusRaw === "true" || statusRaw === "on";

  // Validasi input
  if (!judul || !penulis || !kategori || isNaN(tahun) || tahun < 1000 || tahun > 2100) {
    throw new Error("Mohon lengkapi semua data buku dengan benar.");
  }

  const query = `
    INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id;
  `;

  await pool.query(query, [judul, penulis, kategori, tahun, tersedia, sinopsis]);

  revalidatePath("/katalog");
  revalidatePath("/");
  redirect("/katalog");
}

/**
 * Server Action: Ubah Data Buku
 * Menggunakan raw SQL UPDATE dengan klausa WHERE berdasarkan ID dan parameterized query.
 */
export async function ubahBuku(formData) {
  const idRaw = formData.get("id")?.toString().trim();
  const judul = formData.get("judul")?.toString().trim();
  const penulis = formData.get("penulis")?.toString().trim();
  const kategori = formData.get("kategori")?.toString().trim();
  const tahunRaw = formData.get("tahun")?.toString().trim();
  const sinopsis = formData.get("sinopsis")?.toString().trim() || "";
  const statusRaw = formData.get("tersedia");

  const id = parseInt(idRaw, 10);
  const tahun = parseInt(tahunRaw, 10);
  const tersedia = statusRaw === "true" || statusRaw === "on";

  // Validasi input
  if (isNaN(id) || !judul || !penulis || !kategori || isNaN(tahun) || tahun < 1000 || tahun > 2100) {
    throw new Error("Mohon lengkapi semua data buku dengan benar.");
  }

  const query = `
    UPDATE buku
    SET judul = $1, penulis = $2, kategori = $3, tahun = $4, tersedia = $5, sinopsis = $6
    WHERE id = $7;
  `;

  await pool.query(query, [judul, penulis, kategori, tahun, tersedia, sinopsis, id]);

  revalidatePath("/katalog");
  revalidatePath(`/katalog/${id}`);
  revalidatePath("/");
  redirect(`/katalog/${id}`);
}

/**
 * Server Action: Hapus Buku
 * Menggunakan raw SQL DELETE dengan klausa WHERE berdasarkan ID dan parameterized query.
 */
export async function hapusBuku(id) {
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    throw new Error("ID buku tidak valid.");
  }

  const query = `
    DELETE FROM buku
    WHERE id = $1;
  `;

  await pool.query(query, [parsedId]);

  revalidatePath("/katalog");
  revalidatePath("/");

  return { success: true };
}

