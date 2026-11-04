# Pustaka Senja — Next.js App Router

Website katalog ruang baca dengan tema **Warm Minimalist & Coffee Vibe**.

## Menjalankan proyek
1. Pastikan Node.js versi 20 atau lebih baru sudah terpasang.
2. Buka terminal pada folder proyek `pustaka-senja`.
3. Jalankan `npm install`.
4. Jalankan `npm run dev`.
5. Buka http://localhost:3000.

## Fitur
- Navbar dan Footer bersama melalui Root Layout.
- Navigasi aktif menggunakan `usePathname()` dan `next/link`.
- Beranda dengan statistik yang dihitung dari satu sumber data.
- Katalog 9 buku dengan filter kategori dan tombol favorit.
- Halaman detail dinamis `/katalog/[id]`.
- Form usulan buku dengan validasi dan daftar usulan selama sesi halaman.

## Struktur
Mengikuti struktur tugas: `src/app`, `src/components`, dan `src/data/dataBuku.js`.
