import Link from "next/link";
import Hero from "@/components/Hero";
import pool from "@/lib/db";

// Statistik dihitung dari database, jadi halaman harus selalu diambil ulang.
export const dynamic = "force-dynamic";

const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";
const sunken = "bg-white shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080,inset_-2px_-2px_#e8e4da,inset_2px_2px_#0a0a0a]";

export default async function HomePage() {
  const { rows } = await pool.query(
    `SELECT COUNT(*)::int AS total,
            COUNT(*) FILTER (WHERE tersedia)::int AS tersedia,
            COUNT(*) FILTER (WHERE NOT tersedia)::int AS dipinjam
        FROM buku`
  );
  const { total, tersedia, dipinjam } = rows[0];
  const persen = total > 0 ? Math.round((tersedia / total) * 100) : 0;

  const statistik = [
    { label: "Total Koleksi Buku", nilai: total, ikon: "📚" },
    { label: "Buku Tersedia", nilai: tersedia, ikon: "💿" },
    { label: "Buku Dipinjam", nilai: dipinjam, ikon: "📤" },
  ];

  return (
    <div className="space-y-6">
      <Hero
        nama="Pustaka Senja"
        slogan="Ruang baca dan perpustakaan komunitas di dekat kampus. Pinjam, baca, dan bagikan tautan buku favoritmu."
        jamBuka="Senin–Sabtu, 09.00–20.00"
      />

      <section className={`${raised} p-1`}>
        <div className="bg-linear-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1 text-sm font-bold text-[#0b2a55]">
          Ringkasan_Koleksi.exe
        </div>
        <div className="space-y-4 p-4">
          <ul className="grid gap-3 sm:grid-cols-3">
            {statistik.map((item) => (
              <li key={item.label} className={`${sunken} p-3 text-center`}>
                <div className="text-3xl" aria-hidden="true">{item.ikon}</div>
                <p className="text-3xl font-bold text-[#1b3c70]">{item.nilai}</p>
                <p className="text-sm">{item.label}</p>
              </li>
            ))}
          </ul>
          <div>
            <p className="mb-1 text-sm">Ketersediaan koleksi: {persen}%</p>
            <div className={`${sunken} h-6 p-0.5`}>
              <div
                className="h-full bg-[repeating-linear-gradient(90deg,#1f4fa3_0_10px,transparent_10px_12px)]"
                style={{ width: `${persen}%` }}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/katalog" className={`${raised} px-5 py-2 hover:bg-[#e8e4da]`}>
              📖 Buka Katalog
            </Link>
            <Link href="/usulan" className={`${raised} px-5 py-2 hover:bg-[#e8e4da]`}>
              ✉️ Usulkan Buku
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
