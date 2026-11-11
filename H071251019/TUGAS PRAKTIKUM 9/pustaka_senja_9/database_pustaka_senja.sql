-- Hapus tabel lama (jika ada) agar skrip bisa dijalankan ulang
-- DROP TABLE IF EXISTS buku;

-- Tabel utama koleksi buku
CREATE TABLE buku (
    id SERIAL PRIMARY KEY,
    judul VARCHAR(200) NOT NULL,
    penulis VARCHAR(100) NOT NULL,
    kategori VARCHAR(50)  NOT NULL,
    tahun INTEGER NOT NULL,
    tersedia BOOLEAN NOT NULL DEFAULT TRUE,
    sinopsis TEXT NOT NULL,
    gambar VARCHAR(255) NOT NULL DEFAULT 'no-cover.svg'
);

-- Sembilan data awal 
INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis, gambar) 
VALUES
	('Clean Code', 'Robert C. Martin', 'Teknologi', 2008, TRUE,
	 'Panduan menulis kode perangkat lunak yang bersih, mudah dibaca, dan mudah dipelihara oleh tim pengembang.',
	 'clean-code.webp'),
	
	('Designing Data-Intensive Applications', 'Martin Kleppmann', 'Teknologi', 2017, TRUE,
	 'Pembahasan mendalam mengenai arsitektur sistem terdistribusi, basis data, dan pengolahan data skala besar.',
	 'DDIA.webp'),
	
	('Refactoring', 'Martin Fowler', 'Teknologi', 2018, TRUE,
	 'Teknik sistematis untuk memperbaiki struktur internal kode program tanpa mengubah perilaku eksternalnya.',
	 'refactoring.webp'),
	
	('Laut Bercerita', 'Leila S. Chudori', 'Fiksi', 2017, TRUE,
	 'Kisah persahabatan, perjuangan, dan kehilangan para aktivis mahasiswa di penghujung era Orde Baru.',
	 'laut-bercerita.webp'),
	
	('Bumi Manusia', 'Pramoedya Ananta Toer', 'Fiksi', 1980, TRUE,
	 'Perjalanan Minke, seorang pemuda pribumi terpelajar, dalam menghadapi ketidakadilan hukum kolonial di awal abad ke-20.',
	 'bumi-manusia.webp'),
	
	('Cantik Itu Luka', 'Eka Kurniawan', 'Fiksi', 2002, TRUE,
	 'Epos keluarga Dewi Ayu di kota pesisir Halimunda yang memadukan sejarah kelam dengan unsur realisme magis.',
	 'CIL.webp'),
	
	('Atomic Habits', 'James Clear', 'Pengembangan Diri', 2018, TRUE,
	 'Cara membangun kebiasaan baik yang bertahan lama dan menghentikan kebiasaan buruk melalui perubahan kecil setiap hari.',
	 'atomic-habits.webp'),
	
	('Deep Work', 'Cal Newport', 'Pengembangan Diri', 2016, TRUE,
	 'Strategi melatih fokus mendalam tanpa distraksi untuk menghasilkan karya bernilai tinggi di era digital.',
	 'deepwork.webp'),
	
	('Filosofi Teras', 'Henry Manampiring', 'Pengembangan Diri', 2018, FALSE,
	 'Penerapan filsafat Stoisisme kuno untuk menjaga ketenangan mental dan mengelola emosi negatif di kehidupan modern.',
	 'fisolofi-teras.webp');

-- Verifikasi: harus muncul 9 baris
SELECT id, judul, penulis, kategori, tahun, tersedia, gambar 
FROM buku 
ORDER BY id;
