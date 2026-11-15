import { Pool } from "pg";

const connectionString =
  process.env.DATABASE_URL || "postgresql://macbook@localhost:5432/pustaka_senja";

const pool = new Pool({ connectionString });

async function init() {
  const client = await pool.connect();
  try {
    console.log("Memeriksa dan membuat tabel buku...");
    await client.query(`
      CREATE TABLE IF NOT EXISTS buku (
        id SERIAL PRIMARY KEY,
        judul VARCHAR(255) NOT NULL,
        penulis VARCHAR(255) NOT NULL,
        kategori VARCHAR(100) NOT NULL,
        tahun INTEGER NOT NULL,
        tersedia BOOLEAN NOT NULL DEFAULT true,
        sinopsis TEXT
      );
    `);

    const countRes = await client.query("SELECT COUNT(*) FROM buku;");
    const count = parseInt(countRes.rows[0].count, 10);
    console.log(`Jumlah baris buku saat ini: ${count}`);

    if (count === 0) {
      console.log("Menyisipkan 9 data awal buku...");
      const dataBukuAwal = [
        {
          id: 1,
          judul: "Clean Code",
          penulis: "Robert C. Martin",
          kategori: "Teknologi",
          tahun: 2008,
          tersedia: true,
          sinopsis:
            "Panduan menulis kode perangkat lunak yang bersih, mudah dibaca, dan mudah dipelihara oleh tim pengembang.",
        },
        {
          id: 2,
          judul: "Designing Data-Intensive Applications",
          penulis: "Martin Kleppmann",
          kategori: "Teknologi",
          tahun: 2017,
          tersedia: true,
          sinopsis:
            "Pembahasan mendalam mengenai arsitektur sistem terdistribusi, basis data, dan pengolahan data skala besar.",
        },
        {
          id: 3,
          judul: "Refactoring",
          penulis: "Martin Fowler",
          kategori: "Teknologi",
          tahun: 2018,
          tersedia: false,
          sinopsis:
            "Teknik sistematis untuk memperbaiki struktur internal kode program tanpa mengubah perilaku eksternalnya.",
        },
        {
          id: 4,
          judul: "Laut Bercerita",
          penulis: "Leila S. Chudori",
          kategori: "Fiksi",
          tahun: 2017,
          tersedia: true,
          sinopsis:
            "Kisah persahabatan, perjuangan, dan kehilangan para aktivis mahasiswa di penghujung era Orde Baru.",
        },
        {
          id: 5,
          judul: "Bumi Manusia",
          penulis: "Pramoedya Ananta Toer",
          kategori: "Fiksi",
          tahun: 1980,
          tersedia: true,
          sinopsis:
            "Perjalanan Minke, seorang pemuda pribumi terpelajar, dalam menghadapi ketidakadilan hukum kolonial di awal abad ke-20.",
        },
        {
          id: 6,
          judul: "Cantik Itu Luka",
          penulis: "Eka Kurniawan",
          kategori: "Fiksi",
          tahun: 2002,
          tersedia: false,
          sinopsis:
            "Epos keluarga Dewi Ayu di kota pesisir Halimunda yang memadukan sejarah kelam dengan unsur realisme magis.",
        },
        {
          id: 7,
          judul: "Atomic Habits",
          penulis: "James Clear",
          kategori: "Pengembangan Diri",
          tahun: 2018,
          tersedia: true,
          sinopsis:
            "Cara membangun kebiasaan baik yang bertahan lama dan menghentikan kebiasaan buruk melalui perubahan kecil setiap hari.",
        },
        {
          id: 8,
          judul: "Deep Work",
          penulis: "Cal Newport",
          kategori: "Pengembangan Diri",
          tahun: 2016,
          tersedia: true,
          sinopsis:
            "Strategi melatih fokus mendalam tanpa distraksi untuk menghasilkan karya bernilai tinggi di era digital.",
        },
        {
          id: 9,
          judul: "Filosofi Teras",
          penulis: "Henry Manampiring",
          kategori: "Pengembangan Diri",
          tahun: 2018,
          tersedia: true,
          sinopsis:
            "Penerapan filsafat Stoisisme kuno untuk menjaga ketenangan mental dan mengelola emosi negatif di kehidupan modern.",
        },
      ];

      for (const item of dataBukuAwal) {
        await client.query(
          `INSERT INTO buku (id, judul, penulis, kategori, tahun, tersedia, sinopsis)
           VALUES ($1, $2, $3, $4, $5, $6, $7);`,
          [
            item.id,
            item.judul,
            item.penulis,
            item.kategori,
            item.tahun,
            item.tersedia,
            item.sinopsis,
          ]
        );
      }

      await client.query(
        "SELECT setval(pg_get_serial_sequence('buku', 'id'), (SELECT MAX(id) FROM buku));"
      );
      console.log("9 data awal berhasil dimasukkan!");
    }

    const res = await client.query("SELECT * FROM buku ORDER BY id ASC;");
    console.log(`Daftar buku di database (${res.rows.length} buku):`);
    res.rows.forEach((b) => {
      console.log(`- #${b.id}: "${b.judul}" oleh ${b.penulis} (${b.tahun}) [${b.kategori}] - Tersedia: ${b.tersedia}`);
    });
  } finally {
    client.release();
    await pool.end();
  }
}

init().catch((err) => {
  console.error("Error inisialisasi database:", err);
  process.exit(1);
});

