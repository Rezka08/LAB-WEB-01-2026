import pool from "@/lib/db";
import KatalogBrowser from "@/components/KatalogBrowser";

export const dynamic = "force-dynamic";

const statusMessages = {
  added: "Buku baru berhasil ditambahkan dan disimpan ke PostgreSQL.",
  updated: "Data buku berhasil diperbarui.",
  deleted: "Buku berhasil dihapus dari koleksi.",
  "not-found": "Buku yang dipilih tidak ditemukan atau sudah dihapus.",
  "invalid-id": "ID buku tidak valid.",
  "delete-error": "Buku belum berhasil dihapus. Periksa koneksi database lalu coba lagi.",
};

export default async function KatalogPage({ searchParams }) {
  const params = await searchParams;
  const { rows } = await pool.query(
    `SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis, cover_url
     FROM buku
     ORDER BY id ASC`
  );
  const statusMessage = statusMessages[params?.status] || "";

  return (
    <div className="container py-9 sm:py-12">
      <KatalogBrowser buku={rows} statusMessage={statusMessage} initialQuery={params?.q || ""} />
    </div>
  );
}
