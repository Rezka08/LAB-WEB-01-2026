# Tanamera Coffee

Halaman pemesanan mandiri untuk tablet di meja Tanamera Coffee, dibangun dengan React (Vite), JavaScript (JSX), dan Tailwind CSS.

Nama folder proyek tetap `kopi-senja` sesuai ketentuan soal.

## Cara Menjalankan

1. Pastikan Node.js sudah terpasang.
2. Masuk ke folder proyek lalu pasang dependensi:

   ```bash
   cd kopi-senja
   npm install
   ```

3. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

4. Buka alamat yang muncul di terminal, biasanya `http://localhost:5173`.

## Fitur

- Menampilkan sembilan menu beserta harganya.
- Filter kategori Kopi, Non-Kopi, dan Makanan. Daftar menu menyesuaikan otomatis.
- Tombol Detail membuka deskripsi satu menu tanpa memengaruhi menu lain.
- Menu yang habis ditandai dan tidak bisa dipesan.
- Jumlah item dan total harga di header, kartu menu, dan ringkasan pesanan selalu sama, karena dihitung dari satu sumber state.
- Form nama dan nomor meja divalidasi. Jika pesanan kosong atau data belum lengkap, halaman menampilkan pesan error.
- Setelah pesanan terkirim, halaman menampilkan ucapan terima kasih, mengosongkan form, dan mengosongkan pesanan.

## Struktur Utama

- `src/App.jsx` berisi data menu dan state utama (kategori aktif, keranjang, form, notifikasi).
- `src/components/` berisi komponen anak yang menerima data dan fungsi lewat props.
- `vite.config.js` adalah konfigurasi standar Vite untuk plugin React. Berkas ini tidak tercantum di daftar struktur soal, tetapi diperlukan agar JSX berjalan.
- `src/main.jsx` hanya dipakai untuk memasang aplikasi ke elemen `#root`, sesuai template Vite.

## Catatan Desain

Nama brand dan nuansa tampilan mengikuti Tanamera Coffee: cokelat espresso, krem, karamel, dan hijau daun. Warna ini adalah interpretasi visual, bukan panduan merek resmi. Isi menu tetap mengikuti data pada soal, sehingga nama dan harga di halaman tidak mewakili menu asli Tanamera.
