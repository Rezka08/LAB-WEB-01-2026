import pool from "@/lib/db";
import KatalogClient from "./KatalogClient";

export const dynamic = "force-dynamic";

export default async function KatalogPage() {
  // Raw SQL SELECT query untuk mengambil semua data buku dari PostgreSQL
  const result = await pool.query("SELECT * FROM buku ORDER BY id ASC;");
  const bukuList = result.rows;

  return <KatalogClient bukuList={bukuList} />;
}
