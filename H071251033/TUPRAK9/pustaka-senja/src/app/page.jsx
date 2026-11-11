import Hero from "@/components/Hero";
import pool from "@/lib/db";


export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { rows } = await pool.query("SELECT tersedia FROM buku");

  const totalKoleksi = rows.length;
  const bukuTersedia = rows.filter((buku) => buku.tersedia).length;
  const bukuDipinjam = rows.filter((buku) => !buku.tersedia).length;

  return (
    <div className="space-y-12">
      <Hero
        nama="Pustaka Senja"
        slogan="Tempat teduh untuk membaca, berdiskusi, dan meminjam koleksi bacaan pilihan bersama komunitas di dekat kampus."
        lokasiJam="Jl. Damai No. 12, Samping Kampus • Buka Setiap Hari (10.00 - 21.00 WITA)"
      />

      <section>
        <h2
          style={{ fontFamily: "var(--font-fraunces)" }}
          className="text-2xl font-bold text-[#382933] mb-5"
        >
          Ringkasan Koleksi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#FFF2CC] border-2 border-[#FFE699] rounded-2xl p-6 text-center shadow-sm">
            <p className="text-sm font-bold text-[#382933]">Total Koleksi Buku</p>
            <p className="text-4xl font-extrabold text-[#E06D53] mt-2">
              {totalKoleksi}
            </p>
            <p className="text-xs font-medium text-[#4E3A47] mt-1">
              Judul buku terdaftar
            </p>
          </div>

          <div className="bg-[#C9B6E4] border-2 border-[#B8A2D6] rounded-2xl p-6 text-center shadow-sm">
            <p className="text-sm font-bold text-[#382933]">Buku Tersedia</p>
            <p className="text-4xl font-extrabold text-[#382933] mt-2">
              {bukuTersedia}
            </p>
            <p className="text-xs font-medium text-[#4E3A47] mt-1">
              Siap untuk dipinjam
            </p>
          </div>

          <div className="bg-white border-2 border-[#C9B6E4]/40 rounded-2xl p-6 text-center shadow-sm">
            <p className="text-sm font-bold text-[#4E3A47]">Buku Dipinjam</p>
            <p className="text-4xl font-extrabold text-[#4E3A47] mt-2">
              {bukuDipinjam}
            </p>
            <p className="text-xs font-medium text-[#4E3A47]/70 mt-1">
              Sedang dibaca rekan lain
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}