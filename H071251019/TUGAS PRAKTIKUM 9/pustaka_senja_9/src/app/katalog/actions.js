"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import pool from "@/lib/db";
import { COVER_DEFAULT } from "@/lib/konstanta";
import { hapusCover, simpanCover } from "@/lib/upload";
import { parseId, validasiBuku } from "@/lib/validasi";

const PESAN_DB_GAGAL = "Terjadi kesalahan pada database. Coba lagi beberapa saat.";

// State yang dikembalikan ke form saat gagal. "ts" membuat form dirender ulang sehingga
// semua field (termasuk <select>) terisi kembali dari nilai yang tadi dikirim.
function gagal(errors, values) {
  return { errors, values, ts: Date.now() };
}

// Halaman yang menampilkan data buku/statistik harus diambil ulang setelah mutasi.
function segarkanHalaman(id) {
  revalidatePath("/");
  revalidatePath("/katalog");
  if (id) revalidatePath(`/katalog/${id}`);
}

// ---------- CREATE ----------
// Dipakai lewat useActionState, jadi menerima (stateSebelumnya, formData)
export async function tambahBuku(_stateSebelumnya, formData) {
  const { data, errors, values } = validasiBuku(formData);

  const cover = await simpanCover(formData.get("gambar"));
  if (cover.error) errors.push(cover.error);

  if (errors.length > 0) {
    if (cover.nama) await hapusCover(cover.nama);
    return gagal(errors, values);
  }

  let client;

  try {
    client = await pool.connect();
    await client.query("BEGIN");
    await client.query("LOCK TABLE buku IN SHARE ROW EXCLUSIVE MODE");

    const hasilId = await client.query(`
      SELECT nomor.id
      FROM generate_series(
        1,
        (SELECT COALESCE(MAX(id), 0) + 1 FROM buku)
      ) AS nomor(id)
      WHERE NOT EXISTS (
        SELECT 1
        FROM buku
        WHERE buku.id = nomor.id
      )
      ORDER BY nomor.id
      LIMIT 1
    `);
    const id = hasilId.rows[0].id;

    await client.query(
      `INSERT INTO buku
        (id, judul, penulis, kategori, tahun, tersedia, sinopsis, gambar)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        id,
        data.judul,
        data.penulis,
        data.kategori,
        data.tahun,
        data.tersedia,
        data.sinopsis,
        cover.nama ?? COVER_DEFAULT,
      ]
    );

    await client.query(`
      SELECT setval(
        pg_get_serial_sequence('buku', 'id'),
        COALESCE(MAX(id), 1),
        COUNT(*) > 0
      )
      FROM buku
    `);
    await client.query("COMMIT");
  } catch (err) {
    if (client) {
      try {
        await client.query("ROLLBACK");
      } catch (rollbackErr) {
        console.error("Gagal membatalkan transaksi buku:", rollbackErr.message);
      }
    }

    console.error("Gagal INSERT buku:", err.message);
    if (cover.nama) await hapusCover(cover.nama);
    return gagal([PESAN_DB_GAGAL], values);
  } finally {
    if (client) client.release();
  }

  segarkanHalaman();
  redirect("/katalog");
}

// ---------- UPDATE ----------
export async function ubahBuku(_stateSebelumnya, formData) {
  const id = parseId(formData.get("id"));
  const { data, errors, values } = validasiBuku(formData);

  if (id === null) return gagal(["ID buku tidak valid."], values);

  const cover = await simpanCover(formData.get("gambar"));
  if (cover.error) errors.push(cover.error);

  if (errors.length > 0) {
    if (cover.nama) await hapusCover(cover.nama);
    return gagal(errors, values);
  }

  let gambarLama;
  try {
    const lama = await pool.query("SELECT gambar FROM buku WHERE id = $1", [id]);
    if (lama.rowCount === 0) {
      if (cover.nama) await hapusCover(cover.nama);
      return gagal(["Buku tidak ditemukan. Mungkin sudah dihapus."], values);
    }
    gambarLama = lama.rows[0].gambar;

    // WHERE id = $7 memastikan hanya buku yang dipilih yang berubah.
    // COALESCE: jika tidak ada cover baru ($8 = NULL), cover lama dipertahankan.
    await pool.query(
      `UPDATE buku
          SET judul = $1, penulis = $2, kategori = $3, tahun = $4,
              tersedia = $5, sinopsis = $6, gambar = COALESCE($8, gambar)
        WHERE id = $7`,
      [
        data.judul,
        data.penulis,
        data.kategori,
        data.tahun,
        data.tersedia,
        data.sinopsis,
        id,
        cover.nama ?? null,
      ]
    );
  } catch (err) {
    console.error("Gagal UPDATE buku:", err.message);
    if (cover.nama) await hapusCover(cover.nama);
    return gagal([PESAN_DB_GAGAL], values);
  }

  // Cover lama (jika hasil upload) dibersihkan setelah cover baru tersimpan.
  if (cover.nama) await hapusCover(gambarLama);

  segarkanHalaman(id);
  redirect(`/katalog/${id}`);
}

// ---------- DELETE ----------
export async function hapusBuku(formData) {
  const id = parseId(formData.get("id"));
  if (id === null) return;

  // WHERE id = $1 wajib agar hanya satu baris yang terhapus.
  const hasil = await pool.query("DELETE FROM buku WHERE id = $1 RETURNING gambar", [id]);
  if (hasil.rowCount > 0) await hapusCover(hasil.rows[0].gambar);

  segarkanHalaman(id);
  redirect("/katalog");
}
