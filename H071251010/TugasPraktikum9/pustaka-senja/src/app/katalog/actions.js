"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { randomUUID } from "node:crypto";
import { mkdir, writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import pool from "@/lib/db";
import { isValidId } from "@/lib/book-utils";

const MAX_COVER_SIZE = 4 * 1024 * 1024;
const MIME_TO_EXTENSION = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/avif": ".avif",
};

function readBookForm(formData) {
  const judul = String(formData.get("judul") ?? "").trim();
  const penulis = String(formData.get("penulis") ?? "").trim();
  const kategori = String(formData.get("kategori") ?? "").trim();
  const tahunText = String(formData.get("tahun") ?? "").trim();
  const sinopsis = String(formData.get("sinopsis") ?? "").trim();
  const tersediaText = String(formData.get("tersedia") ?? "");
  const tahun = Number(tahunText);

  if (!judul || !penulis || !kategori || !tahunText || !sinopsis) {
    return { error: "required" };
  }

  if (judul.length > 200 || penulis.length > 150 || kategori.length > 100 || sinopsis.length > 3000) {
    return { error: "length" };
  }

  if (!Number.isInteger(tahun) || tahun < 1000 || tahun > 2100) {
    return { error: "year" };
  }

  if (tersediaText !== "true" && tersediaText !== "false") {
    return { error: "status" };
  }

  return {
    data: {
      judul,
      penulis,
      kategori,
      tahun,
      tersedia: tersediaText === "true",
      sinopsis,
    },
  };
}

function isUploadedFile(value) {
  return (
    value &&
    typeof value === "object" &&
    typeof value.arrayBuffer === "function" &&
    typeof value.size === "number" &&
    value.size > 0
  );
}

async function saveCover(file) {
  if (!isUploadedFile(file)) return null;

  const extension = MIME_TO_EXTENSION[file.type];
  if (!extension) {
    throw new Error("INVALID_COVER_TYPE");
  }

  if (file.size > MAX_COVER_SIZE) {
    throw new Error("COVER_TOO_LARGE");
  }

  const uploadDirectory = path.join(
    process.cwd(),
    "public",
    "uploads",
    "covers"
  );
  await mkdir(uploadDirectory, { recursive: true });

  const fileName = `${randomUUID()}${extension}`;
  const filePath = path.join(uploadDirectory, fileName);
  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(filePath, bytes);

  return `/uploads/covers/${fileName}`;
}

async function removeUploadedCover(coverUrl) {
  if (!coverUrl || !coverUrl.startsWith("/uploads/covers/")) return;

  const fileName = path.basename(coverUrl);
  const filePath = path.join(
    process.cwd(),
    "public",
    "uploads",
    "covers",
    fileName
  );

  try {
    await unlink(filePath);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

function refreshBookPages(id) {
  revalidatePath("/");
  revalidatePath("/katalog");
  revalidatePath(`/katalog/${id}`);
  revalidatePath(`/katalog/${id}/edit`);
}

export async function tambahBuku(formData) {
  const parsed = readBookForm(formData);
  if (parsed.error) redirect(`/katalog/tambah?error=${parsed.error}`);

  let coverUrl = null;
  try {
    coverUrl = await saveCover(formData.get("cover"));
  } catch (error) {
    const code = error.message === "COVER_TOO_LARGE" ? "cover-size" : "cover-type";
    redirect(`/katalog/tambah?error=${code}`);
  }

  let newId;
  try {
    const { rows } = await pool.query(
      `INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis, cover_url)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id`,
      [
        parsed.data.judul,
        parsed.data.penulis,
        parsed.data.kategori,
        parsed.data.tahun,
        parsed.data.tersedia,
        parsed.data.sinopsis,
        coverUrl,
      ]
    );
    newId = rows[0].id;
  } catch (error) {
    if (coverUrl) await removeUploadedCover(coverUrl);
    console.error("Gagal menambahkan buku:", error);
    redirect("/katalog/tambah?error=database");
  }

  refreshBookPages(newId);
  redirect("/katalog?status=added");
}

export async function ubahBuku(formData) {
  const idText = String(formData.get("id") ?? "");
  if (!isValidId(idText)) redirect("/katalog?status=invalid-id");
  const id = Number(idText);

  const parsed = readBookForm(formData);
  if (parsed.error) redirect(`/katalog/${id}/edit?error=${parsed.error}`);

  const { rows: existingRows } = await pool.query(
    "SELECT id, cover_url FROM buku WHERE id = $1",
    [id]
  );
  const existingBook = existingRows[0];
  if (!existingBook) redirect("/katalog?status=not-found");

  let newCoverUrl = existingBook.cover_url;
  let uploadedCoverUrl = null;
  try {
    uploadedCoverUrl = await saveCover(formData.get("cover"));
    if (uploadedCoverUrl) newCoverUrl = uploadedCoverUrl;
  } catch (error) {
    const code = error.message === "COVER_TOO_LARGE" ? "cover-size" : "cover-type";
    redirect(`/katalog/${id}/edit?error=${code}`);
  }

  try {
    await pool.query(
      `UPDATE buku
       SET judul = $1, penulis = $2, kategori = $3, tahun = $4,
           tersedia = $5, sinopsis = $6, cover_url = $7
       WHERE id = $8`,
      [
        parsed.data.judul,
        parsed.data.penulis,
        parsed.data.kategori,
        parsed.data.tahun,
        parsed.data.tersedia,
        parsed.data.sinopsis,
        newCoverUrl,
        id,
      ]
    );
  } catch (error) {
    if (uploadedCoverUrl) await removeUploadedCover(uploadedCoverUrl);
    console.error("Gagal memperbarui buku:", error);
    redirect(`/katalog/${id}/edit?error=database`);
  }

  if (uploadedCoverUrl && existingBook.cover_url) {
    await removeUploadedCover(existingBook.cover_url);
  }

  refreshBookPages(id);
  redirect(`/katalog?status=updated`);
}

export async function hapusBuku(formData) {
  const idText = String(formData.get("id") ?? "");
  if (!isValidId(idText)) redirect("/katalog?status=invalid-id");
  const id = Number(idText);

  let deletedRows;
  try {
    const result = await pool.query(
      "DELETE FROM buku WHERE id = $1 RETURNING cover_url",
      [id]
    );
    deletedRows = result.rows;
  } catch (error) {
    console.error("Gagal menghapus buku:", error);
    redirect("/katalog?status=delete-error");
  }

  if (deletedRows.length === 0) redirect("/katalog?status=not-found");

  try {
    await removeUploadedCover(deletedRows[0].cover_url);
  } catch (error) {
    console.error("Cover lama tidak berhasil dihapus:", error);
  }

  refreshBookPages(id);
  redirect("/katalog?status=deleted");
}
