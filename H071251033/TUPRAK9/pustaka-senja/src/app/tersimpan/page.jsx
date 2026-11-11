import Link from "next/link";
import pool from "@/lib/db";
import BukuCard from "@/components/BukuCard";

export const dynamic = "force-dynamic";

export default async function TersimpanPage() {
  const { rows } = await pool.query(
    "SELECT * FROM buku WHERE disimpan = true ORDER BY id DESC"
  );

  return (
    <div className="space-y-8">
      <div>
        <h1
          style={{ fontFamily: "var(--font-fraunces)" }}
          className="text-3xl sm:text-4xl font-bold text-[#382933]"
        >
          Buku Tersimpan
        </h1>
        <p className="text-[#4E3A47] text-sm mt-1 font-medium">
          Daftar koleksi buku yang telah kamu tandai untuk dibaca nanti.
        </p>
      </div>

      {rows.length === 0 ? (
        <div className="text-center py-16 bg-white border-2 border-[#C9B6E4]/50 rounded-3xl p-8 shadow-sm">
          <p className="text-4xl mb-3">🔖</p>
          <h2
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-xl font-bold text-[#382933] mb-2"
          >
            Belum Ada Buku Tersimpan
          </h2>
          <p className="text-[#4E3A47] text-sm mb-6 font-medium">
            Klik ikon bookmark pada kartu buku di katalog untuk menyimpannya ke daftar ini.
          </p>
          <Link
            href="/katalog"
            className="inline-block bg-[#E06D53] hover:bg-[#CC5A40] text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-md transition active:scale-95"
          >
            Jelajahi Katalog
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {rows.map((buku) => (
            <BukuCard key={buku.id} buku={buku} />
          ))}
        </div>
      )}
    </div>
  );
}