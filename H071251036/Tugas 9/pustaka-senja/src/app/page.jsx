
import Link from "next/link";
import Hero from "@/components/Hero";
import BukuCard from "@/components/BukuCard";
import { pool }from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Home() {
  // Mengambil statistik koleksi buku
  const statistik = await pool.query(`
    SELECT
      COUNT(*)::int AS total,
      COUNT(*) FILTER (WHERE tersedia = true)::int AS tersedia,
      COUNT(*) FILTER (WHERE tersedia = false)::int AS dipinjam
    FROM buku
  `);

  const { total, tersedia, dipinjam } = statistik.rows[0];

  // Mengambil 3 buku terbaru
  const terbaru = await pool.query(`
    SELECT *
    FROM buku
    ORDER BY id DESC
    LIMIT 3
  `);

  return (
    <div className="space-y-12">
      <Hero
        nama="Pustaka Senja"
        slogan="Di antara aroma kopi dan halaman buku, selalu ada ruang untuk jeda. Temukan bacaan yang menemani pikiranmu tumbuh."
        lokasi="Ruang baca yang nyaman · Temukan bacaan berikutnya"
      />

      {/* Statistik buku */}
      <section>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">OUR LITTLE COLLECTION</p>
            <h2 className="section-title mt-2">
              Cerita yang menunggu ditemukan.
            </h2>
          </div>

          <Link
            href="/katalog"
            className="text-sm font-bold text-[#9a704c] hover:text-[#493326]"
          >
            Lihat semua buku ↗
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="stat-card">
            <span className="text-2xl">📚</span>
            <p className="mt-4 text-sm text-[#8b7868]">
              Total koleksi buku
            </p>
            <p className="mt-1 font-serif text-4xl font-bold text-[#493326]">
              {total}
              <span className="ml-1 text-base font-normal text-[#9b8877]">
                buku
              </span>
            </p>
          </div>

          <div className="stat-card">
            <span className="text-2xl">☀️</span>
            <p className="mt-4 text-sm text-[#8b7868]">
              Buku tersedia
            </p>
            <p className="mt-1 font-serif text-4xl font-bold text-[#64805b]">
              {tersedia}
              <span className="ml-1 text-base font-normal text-[#9b8877]">
                buku
              </span>
            </p>
          </div>

          <div className="stat-card">
            <span className="text-2xl">📖</span>
            <p className="mt-4 text-sm text-[#8b7868]">
              Sedang dipinjam
            </p>
            <p className="mt-1 font-serif text-4xl font-bold text-[#a56a5d]">
              {dipinjam}
              <span className="ml-1 text-base font-normal text-[#9b8877]">
                buku
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Buku terbaru */}
      <section>
        <div className="mb-5">
          <p className="eyebrow">FRESH FROM THE SHELF</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#493326]">
            Baru ditambahkan
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {terbaru.rows.map((buku) => (
            <BukuCard key={buku.id} buku={buku} />
          ))}
        </div>
      </section>

      {/* Usulan buku */}
      <section className="rounded-3xl border border-[#e8ddcf] bg-[#f2eadf] p-7 sm:flex sm:items-center sm:justify-between sm:p-10">
        <div>
          <p className="eyebrow">YOUR NEXT CHAPTER</p>

          <h2 className="mt-2 font-serif text-3xl font-bold text-[#493326]">
            Punya rekomendasi bacaan?
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-[#806e5e]">
            Bantu kami melengkapi rak dengan judul yang ingin kamu baca.
          </p>
        </div>

        <Link
          href="/usulan"
          className="mt-6 inline-flex shrink-0 rounded-full bg-[#493326] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#654936] sm:mt-0"
        >
          Usulkan sebuah buku ↗
        </Link>
      </section>
    </div>
  );
}
