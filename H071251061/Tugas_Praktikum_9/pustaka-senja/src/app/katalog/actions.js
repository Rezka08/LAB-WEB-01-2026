"use server";

import pool from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function tambahBukuAction(formData) {
    const judul = formData.get("judul");
    const penulis = formData.get("penulis");
    const kategori = formData.get("kategori");
    const tahun = parseInt(formData.get("tahun"));
    const tersedia = formData.get("tersedia") === "true";
    const sinopsis = formData.get("sinopsis");

    if (!judul || !penulis || !kategori || !tahun || !sinopsis) {
        throw new Error("Semua kolom formulir wajib diisi!");
    }

    const query = `
    INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis)
    VALUES ($1, $2, $3, $4, $5, $6)
    `;
    const values = [judul, penulis, kategori, tahun, tersedia, sinopsis];

    await pool.query(query, values);

    revalidatePath("/katalog");
    revalidatePath("/");
}

export async function editBukuAction(id, formData) {
    const judul = formData.get("judul");
    const penulis = formData.get("penulis");
    const kategori = formData.get("kategori");
    const tahun = parseInt(formData.get("tahun"));
    const tersedia = formData.get("tersedia") === "true";
    const sinopsis = formData.get("sinopsis");

    if (!judul || !penulis || !kategori || !tahun || !sinopsis) {
        throw new Error("Semua kolom formulir wajib diisi!");
    }

    const query = `
    UPDATE buku
    SET judul = $1, penulis = $2, kategori = $3, tahun = $4, tersedia = $5, sinopsis = $6
    WHERE id = $7
    `;
    const values = [judul, penulis, kategori, tahun, tersedia, sinopsis, id];

    await pool.query(query, values);

    revalidatePath("/katalog");
    revalidatePath(`/katalog/${id}`);
    revalidatePath("/");

    redirect(`/katalog/${id}`);
}

export async function ubahStatusPeminjamanAction(id, tersediaStatus) {
    const query = "UPDATE buku SET tersedia = $1 WHERE id = $2";
    await pool.query(query, [tersediaStatus, id]);

    revalidatePath("/katalog");
    revalidatePath(`/katalog/${id}`);
    revalidatePath("/");
}

export async function hapusBukuAction(id) {
    const query = "DELETE FROM buku WHERE id = $1";
    await pool.query(query, [id]);

    revalidatePath("/katalog");
    revalidatePath("/");

    redirect("/katalog");
}
