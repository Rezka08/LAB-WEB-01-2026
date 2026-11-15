import Link from "next/link";
import { notFound } from "next/navigation";
import pool from "@/lib/db";
import { warnaKategori } from "@/data/dataBuku";
import BukuCard from "@/components/BukuCard";
import DetailActionButtons from "@/components/DetailActionButtons";

export const dynamic = "force-dynamic";

export default async function DetailBuku({ params }) {
  const { id } = await params;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    notFound();
  }

  // Raw SQL query dengan parameterized query
  const result = await pool.query("SELECT * FROM buku WHERE id = $1;", [parsedId]);

  if (result.rows.length === 0) {
    notFound();
  }

  const buku = result.rows[0];

  // Buku terkait dari kategori yang sama menggunakan parameterized query
  const terkaitResult = await pool.query(
    "SELECT * FROM buku WHERE kategori = $1 AND id != $2 ORDER BY id ASC LIMIT 3;",
    [buku.kategori, buku.id]
  );
  const bukuTerkait = terkaitResult.rows;

  const warnaBadge = warnaKategori[buku.kategori] || "bg-cobalt text-on-fill";

  return (
    <div className="space-y-12">
      {/* Breadcrumbs & Kembali */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold text-ink/70">
        <Link href="/" className="underline underline-offset-4 hover:text-sun">
          Beranda
        </Link>
        <span>/</span>
        <Link href="/katalog" className="underline underline-offset-4 hover:text-sun">
          Katalog
        </Link>
        <span>/</span>
        <span className="text-ink">{buku.judul}</span>
      </nav>

      {/* Main Detail Article */}
      <article className="grid border-[3px] border-ink bg-surface shadow-brut-lg md:grid-cols-2">
        {/* Cover / Title Column */}
        <div
          className={`flex min-h-80 flex-col justify-between border-b-[3px] border-ink p-8 md:border-b-0 md:border-r-[3px] ${warnaBadge}`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm font-bold">Buku #{buku.id}</span>
            <span className="border-2 border-current px-2.5 py-0.5 font-mono text-xs font-bold">
              {buku.kategori}
            </span>
          </div>

          <h1 className="my-8 text-4xl font-black leading-[0.95] md:text-5xl">{buku.judul}</h1>

          <p className="font-mono text-sm opacity-80">Pustaka Senja • Koleksi Terpilih</p>
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-between gap-8 p-8">
          <div className="space-y-6">
            <dl className="grid grid-cols-2 gap-6 font-mono text-sm">
              <div>
                <dt className="text-ink/60">Penulis</dt>
                <dd className="mt-1 font-bold text-ink">{buku.penulis}</dd>
              </div>
              <div>
                <dt className="text-ink/60">Kategori</dt>
                <dd className="mt-1 font-bold text-ink">{buku.kategori}</dd>
              </div>
              <div>
                <dt className="text-ink/60">Tahun Terbit</dt>
                <dd className="mt-1 font-bold text-ink">{buku.tahun}</dd>
              </div>
              <div>
                <dt className="text-ink/60">Status Ketersediaan</dt>
                <dd
                  className={`mt-1 inline-block border-2 border-ink px-2.5 py-1 font-bold ${
                    buku.tersedia ? "bg-volt text-on-fill" : "bg-bubble text-on-fill"
                  }`}
                >
                  {buku.tersedia ? "Tersedia di Rak" : "Sedang Dipinjam"}
                </dd>
              </div>
            </dl>

            <div className="border-t-[2px] border-dashed border-ink/30 pt-6">
              <h2 className="text-xl font-black">Sinopsis</h2>
              <p className="mt-3 text-base leading-relaxed text-ink/85">{buku.sinopsis || "Belum ada sinopsis untuk buku ini."}</p>
            </div>
          </div>

          {/* Interactive Action Buttons */}
          <DetailActionButtons buku={buku} />
        </div>
      </article>

      {/* Rekomendasi Buku Terkait */}
      {bukuTerkait.length > 0 && (
        <section className="space-y-6 border-t-[3px] border-ink pt-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-sun">
                Rekomendasi Terkait
              </span>
              <h2 className="mt-1 text-2xl font-black">Buku lain dalam kategori {buku.kategori}</h2>
            </div>
            <Link
              href="/katalog"
              className="hidden font-mono text-xs font-bold text-ink underline underline-offset-4 hover:text-sun md:inline-block"
            >
              Lihat semua di katalog →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bukuTerkait.map((item) => (
              <BukuCard key={item.id} buku={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
