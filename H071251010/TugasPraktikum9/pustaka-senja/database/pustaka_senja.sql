CREATE TABLE IF NOT EXISTS buku (
    id SERIAL PRIMARY KEY,
    judul VARCHAR(200) NOT NULL,
    penulis VARCHAR(150) NOT NULL,
    kategori VARCHAR(100) NOT NULL,
    tahun INTEGER NOT NULL,
    tersedia BOOLEAN NOT NULL DEFAULT TRUE,
    sinopsis TEXT NOT NULL,
    cover_url TEXT
);

INSERT INTO buku (judul, penulis, kategori, tahun, tersedia, sinopsis, cover_url) VALUES
('Clean Code', 'Robert C. Martin', 'Teknologi', 2008, TRUE,
 'Panduan menulis perangkat lunak yang bersih, mudah dibaca, dan mudah dipelihara oleh tim pengembang.', '/covers/clean-code.png'),
('Designing Data-Intensive Applications', 'Martin Kleppmann', 'Teknologi', 2017, TRUE,
 'Pembahasan mendalam mengenai arsitektur sistem terdistribusi, basis data, dan pengolahan data skala besar.', '/covers/designing-data-intensive.png'),
('Refactoring', 'Martin Fowler', 'Teknologi', 2018, FALSE,
 'Teknik sistematis untuk memperbaiki struktur internal kode tanpa mengubah perilaku eksternalnya.', '/covers/refactoring.png'),
('Laut Bercerita', 'Leila S. Chudori', 'Fiksi', 2017, TRUE,
 'Kisah persahabatan, perjuangan, dan kehilangan para aktivis mahasiswa di penghujung era Orde Baru.', '/covers/laut-bercerita.png'),
('Bumi Manusia', 'Pramoedya Ananta Toer', 'Fiksi', 1980, TRUE,
 'Perjalanan Minke, seorang pemuda pribumi terpelajar, dalam menghadapi ketidakadilan hukum kolonial di awal abad ke-20.', '/covers/bumi-manusia.png'),
('Cantik Itu Luka', 'Eka Kurniawan', 'Fiksi', 2002, FALSE,
 'Epos keluarga Dewi Ayu di kota pesisir Halimunda yang memadukan sejarah kelam dengan unsur realisme magis.', '/covers/cantik-itu-luka.png'),
('Atomic Habits', 'James Clear', 'Pengembangan Diri', 2018, TRUE,
 'Cara membangun kebiasaan baik yang bertahan lama dan menghentikan kebiasaan buruk melalui perubahan kecil setiap hari.', '/covers/atomic-habits.png'),
('Deep Work', 'Cal Newport', 'Pengembangan Diri', 2016, TRUE,
 'Strategi melatih fokus mendalam tanpa distraksi untuk menghasilkan karya bernilai tinggi di era digital.', '/covers/deep-work.png'),
('Filosofi Teras', 'Henry Manampiring', 'Pengembangan Diri', 2018, TRUE,
 'Penerapan filsafat Stoisisme kuno untuk menjaga ketenangan mental dan mengelola emosi negatif di kehidupan modern.', '/covers/filosofi-teras.png');

SELECT * FROM buku ORDER BY id;
