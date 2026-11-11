import Link from "next/link";
import Hero from "@/components/Hero";
import BukuCard from "@/components/BukuCard";
import pool from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function Beranda() {
  // Mengambil seluruh data buku langsung dari PostgreSQL menggunakan raw SQL
  const result = await pool.query("SELECT * FROM buku ORDER BY id ASC;");
  const dataBuku = result.rows;

  const totalBuku = dataBuku.length;
  const bukuTersedia = dataBuku.filter((buku) => buku.tersedia).length;
  const bukuDipinjam = dataBuku.filter((buku) => !buku.tersedia).length;

  // 3 Buku rekomendasi pilihan (1 dari tiap kategori berbeda jika tersedia)
  const kategoriUnik = [...new Set(dataBuku.map((b) => b.kategori))];
  const bukuPilihan = [];

  for (const kat of kategoriUnik) {
    const item = dataBuku.find((b) => b.kategori === kat);
    if (item && bukuPilihan.length < 3) {
      bukuPilihan.push(item);
    }
  }

  // Lengkapi hingga 3 buku jika kategori unik kurang dari 3
  if (bukuPilihan.length < 3) {
    for (const b of dataBuku) {
      if (!bukuPilihan.some((p) => p.id === b.id) && bukuPilihan.length < 3) {
        bukuPilihan.push(b);
      }
    }
  }

  const statistik = [
    { label: "Total koleksi", nilai: totalBuku, warna: "bg-cobalt text-on-fill" },
    { label: "Buku tersedia", nilai: bukuTersedia, warna: "bg-mint text-on-fill" },
    { label: "Buku dipinjam", nilai: bukuDipinjam, warna: "bg-bubble text-on-fill" },
  ];

  const keunggulan = [
    {
      nomor: "LAYANAN / 01",
      ikon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          aria-hidden="true"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="10" y1="7" x2="16" y2="7" stroke="var(--color-sun, #F7CB46)" strokeWidth="2.5" />
          <line x1="10" y1="11" x2="16" y2="11" stroke="var(--color-sun, #F7CB46)" strokeWidth="2.5" />
        </svg>
      ),
      judul: "Pinjam Tanpa Biaya",
      deskripsi: "Cukup daftar sebagai anggota komunitas untuk meminjam buku fisik hingga 14 hari.",
    },
    {
      nomor: "LAYANAN / 02",
      ikon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="9" y1="15" x2="15" y2="15" stroke="var(--color-sun, #F7CB46)" strokeWidth="2.5" />
        </svg>
      ),
      judul: "Koleksi Terbuka",
      deskripsi: "Siapa saja bisa mengusulkan judul buku baru agar koleksi perpustakaan terus relevan.",
    },
    {
      nomor: "LAYANAN / 03",
      ikon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="square"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 16 12" stroke="var(--color-sun, #F7CB46)" strokeWidth="2.5" />
        </svg>
      ),
      judul: "Ruang Baca Hening",
      deskripsi: "Dilengkapi meja baca bersekat, Wi-Fi cepat, dan suasana tenang untuk fokus belajar.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Header */}
      <Hero
        nama="Pustaka Senja"
        slogan="Ruang baca kecil di dekat kampus. Pinjam buku favoritmu, simpan yang ingin dibaca nanti, atau usulkan judul baru."
        lokasi="Dekat kampus"
        jam="09.00–21.00"
      />

      {/* Statistik Box */}
      <section className="grid gap-6 sm:grid-cols-3">
        {statistik.map((item) => (
          <div key={item.label} className={`border-[3px] border-ink p-6 shadow-brut ${item.warna}`}>
            <p className="font-mono text-sm">{item.label}</p>
            <p className="mt-3 font-mono text-5xl font-bold">{item.nilai}</p>
          </div>
        ))}
      </section>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/katalog"
          className="border-[3px] border-ink bg-sun px-6 py-3 text-lg font-bold text-on-fill shadow-brut transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          Jelajahi semua katalog →
        </Link>
        <Link
          href="/game"
          className="border-[3px] border-ink bg-volt px-6 py-3 text-lg font-bold text-on-fill shadow-brut transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          Jelajahi Ruang 3D ↗
        </Link>
        <Link
          href="/usulan"
          className="border-[3px] border-ink bg-surface px-6 py-3 text-lg font-bold text-ink shadow-brut transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          Usulkan judul baru
        </Link>
      </div>

      {/* Koleksi Pilihan / Rekomendasi Minggu Ini */}
      <section className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-[3px] border-ink pb-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-sun">
              Kurasi Pustaka
            </span>
            <h2 className="mt-1 text-3xl font-black md:text-4xl">Rekomendasi Minggu Ini</h2>
          </div>
          <Link
            href="/katalog"
            className="font-mono text-sm font-bold underline underline-offset-4 hover:text-sun"
          >
            Lihat semua {totalBuku} koleksi →
          </Link>
        </div>

        {bukuPilihan.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bukuPilihan.map((buku) => (
              <BukuCard key={buku.id} buku={buku} />
            ))}
          </div>
        ) : (
          <p className="font-mono text-sm text-ink/60">Belum ada buku di koleksi perpustakaan.</p>
        )}
      </section>

      {/* Tiga Pilar Fasilitas */}
      <section className="grid gap-6 md:grid-cols-3">
        {keunggulan.map((item) => (
          <div key={item.judul} className="flex flex-col justify-between border-[3px] border-ink bg-surface p-6 shadow-brut">
            <div>
              <div className="flex items-center justify-between border-b-2 border-ink/20 pb-4">
                <span className="font-mono text-xs font-bold tracking-wider text-ink/60">
                  {item.nomor}
                </span>
                <div className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-volt text-on-fill">
                  {item.ikon}
                </div>
              </div>
              <h3 className="mt-5 text-xl font-black">{item.judul}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.deskripsi}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
