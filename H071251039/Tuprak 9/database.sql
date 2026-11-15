-- SQL Script untuk Tugas Praktikum 9: Pustaka Senja
-- Buat database jika belum ada:
-- CREATE DATABASE pustaka_senja;

-- Buat tabel buku:
CREATE TABLE IF NOT EXISTS buku (
  id SERIAL PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  penulis VARCHAR(255) NOT NULL,
  kategori VARCHAR(100) NOT NULL,
  tahun INTEGER NOT NULL,
  tersedia BOOLEAN NOT NULL DEFAULT true,
  sinopsis TEXT
);

-- Masukkan 9 data buku awal dari Praktikum 8:
INSERT INTO buku (id, judul, penulis, kategori, tahun, tersedia, sinopsis) VALUES
(1, 'Clean Code', 'Robert C. Martin', 'Teknologi', 2008, true, 'Panduan menulis kode perangkat lunak yang bersih, mudah dibaca, dan mudah dipelihara oleh tim pengembang.'),
(2, 'Designing Data-Intensive Applications', 'Martin Kleppmann', 'Teknologi', 2017, true, 'Pembahasan mendalam mengenai arsitektur sistem terdistribusi, basis data, dan pengolahan data skala besar.'),
(3, 'Refactoring', 'Martin Fowler', 'Teknologi', 2018, false, 'Teknik sistematis untuk memperbaiki struktur internal kode program tanpa mengubah perilaku eksternalnya.'),
(4, 'Laut Bercerita', 'Leila S. Chudori', 'Fiksi', 2017, true, 'Kisah persahabatan, perjuangan, dan kehilangan para aktivis mahasiswa di penghujung era Orde Baru.'),
(5, 'Bumi Manusia', 'Pramoedya Ananta Toer', 'Fiksi', 1980, true, 'Perjalanan Minke, seorang pemuda pribumi terpelajar, dalam menghadapi ketidakadilan hukum kolonial di awal abad ke-20.'),
(6, 'Cantik Itu Luka', 'Eka Kurniawan', 'Fiksi', 2002, false, 'Epos keluarga Dewi Ayu di kota pesisir Halimunda yang memadukan sejarah kelam dengan unsur realisme magis.'),
(7, 'Atomic Habits', 'James Clear', 'Pengembangan Diri', 2018, true, 'Cara membangun kebiasaan baik yang bertahan lama dan menghentikan kebiasaan buruk melalui perubahan kecil setiap hari.'),
(8, 'Deep Work', 'Cal Newport', 'Pengembangan Diri', 2016, true, 'Strategi melatih fokus mendalam tanpa distraksi untuk menghasilkan karya bernilai tinggi di era digital.'),
(9, 'Filosofi Teras', 'Henry Manampiring', 'Pengembangan Diri', 2018, true, 'Penerapan filsafat Stoisisme kuno untuk menjaga ketenangan mental dan mengelola emosi negatif di kehidupan modern.')
ON CONFLICT (id) DO NOTHING;

-- Sinkronkan urutan sequence ID otomatis:
SELECT setval(pg_get_serial_sequence('buku', 'id'), COALESCE((SELECT MAX(id) FROM buku), 1));

