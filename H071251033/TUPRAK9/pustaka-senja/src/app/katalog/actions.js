"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import pool from "@/lib/db";

async function simpanCover(file) {
  if (!file || typeof file === "string" || file.size === 0) {
    return null;
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
  const fileName = `${Date.now()}-${safeName}`;
  const filePath = path.join(uploadDir, fileName);

  await writeFile(filePath, buffer);
  return `/uploads/${fileName}`;
}

export async function tambahBuku(formData) {
  const judul = formData.get("judul")?.toString().trim();
  const penulis = formData.get("penulis")?.toString().trim();
  const kategori = formData.get("kategori")?.toString().trim();
  const tahun = Number(formData.get("tahun"));
  const tersedia = formData.get("tersedia") === "true";
  const sinopsis = formData.get("sinopsis")?.toString().trim();
  const coverFile = formData.get("cover");

  if (!judul || !penulis || !kategori || Number.isNaN(tahun) || !sinopsis) {
    return;
  }

  const coverPath = await simpanCover(coverFile);

  await pool.query(
    "INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis, cover) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [judul, penulis, kategori, tahun, tersedia, sinopsis, coverPath]
  );

  revalidatePath("/katalog");
  revalidatePath("/");
}

export async function ubahBuku(formData) {
  const id = Number(formData.get("id"));
  const judul = formData.get("judul")?.toString().trim();
  const penulis = formData.get("penulis")?.toString().trim();
  const kategori = formData.get("kategori")?.toString().trim();
  const tahun = Number(formData.get("tahun"));
  const tersedia = formData.get("tersedia") === "true";
  const sinopsis = formData.get("sinopsis")?.toString().trim();
  const coverFile = formData.get("cover");

  if (Number.isNaN(id) || !judul || !penulis || !kategori || Number.isNaN(tahun) || !sinopsis) {
    return;
  }

  const coverPathBaru = await simpanCover(coverFile);

  if (coverPathBaru) {
    await pool.query(
      "UPDATE buku SET judul = $1, penulis = $2, kategori = $3, tahun = $4, tersedia = $5, sinopsis = $6, cover = $7 WHERE id = $8",
      [judul, penulis, kategori, tahun, tersedia, sinopsis, coverPathBaru, id]
    );
  } else {
    await pool.query(
      "UPDATE buku SET judul = $1, penulis = $2, kategori = $3, tahun = $4, tersedia = $5, sinopsis = $6 WHERE id = $7",
      [judul, penulis, kategori, tahun, tersedia, sinopsis, id]
    );
  }

  revalidatePath("/katalog");
  revalidatePath(`/katalog/${id}`);
  revalidatePath("/");
  redirect("/katalog");
}

export async function hapusBuku(formData) {
  const id = Number(formData.get("id"));
  if (Number.isNaN(id)) return;

  await pool.query("DELETE FROM buku WHERE id = $1", [id]);

  revalidatePath("/katalog");
  revalidatePath("/");
}

export async function pinjamBuku(formData) {
  const id = Number(formData.get("id"));
  if (Number.isNaN(id)) return;

  await pool.query("UPDATE buku SET tersedia = false WHERE id = $1", [id]);

  revalidatePath("/katalog");
  revalidatePath(`/katalog/${id}`);
  revalidatePath("/");
}

export async function toggleSimpanBuku(formData) {
  const id = Number(formData.get("id"));
  if (Number.isNaN(id)) return;

  await pool.query("UPDATE buku SET disimpan = NOT disimpan WHERE id = $1", [
    id,
  ]);

  revalidatePath("/katalog");
  revalidatePath("/tersimpan");
}