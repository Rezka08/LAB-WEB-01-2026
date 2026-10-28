# AGENTS.md: Konteks Proyek Kopi Senja (Tugas Praktikum 7)

Berkas ini menjelaskan konteks tugas kepada agen AI (Antigravity) agar setiap perubahan sesuai dengan soal. Baca seluruh berkas ini sebelum mengubah kode.

## 1. Tujuan

Membangun halaman pemesanan mandiri untuk tablet di meja kedai, dengan React Hooks (state dan props). Brand yang dipakai adalah **Tanamera Coffee**, sesuai tema yang dipilih mahasiswa. Nama folder dan nama berkas tetap `kopi-senja` karena soal mewajibkannya.

Bahasa antarmuka dan semua teks yang dilihat pelanggan memakai Bahasa Indonesia yang natural, bukan terjemahan kaku. Komentar di kode juga memakai Bahasa Indonesia.

## 2. Alur Kerja yang Diminta Soal

- Halaman menampilkan semua menu beserta harga.
- Pelanggan bisa memilih kategori: Kopi, Non-Kopi, atau Makanan. Daftar menu harus menyesuaikan. Tab "Semua" juga disediakan sebagai tampilan awal.
- Setiap menu bisa dibuka detailnya. Membuka detail satu menu tidak boleh memengaruhi menu lain.
- Menu yang habis (`tersedia: false`) tidak boleh bisa dipesan.
- Setiap tekan Tambah, jumlah pesanan dan total harga harus langsung terlihat di bagian atas halaman dan di ringkasan pesanan. Angkanya harus selalu sama.
- Setelah memilih, pelanggan mengisi nama dan nomor meja.
- Jika data belum benar atau pesanan masih kosong, halaman harus memberi tahu pengguna. Jangan diam-diam menerima pesanan.
- Setelah pesanan terkirim, tampilkan ucapan terima kasih, kosongkan form, dan kosongkan pesanan.

## 3. Data Menu (JANGAN diubah)

Data menu ditulis sekali di `src/App.jsx` sebagai array objek. Semua mahasiswa memakai data yang sama. Harga bertipe `number` dan ketersediaan bertipe `boolean`.

| id | nama | kategori | harga (Rp) | tersedia |
|----|------|----------|-----------|----------|
| 1 | Kopi Susu | Kopi | 18000 | true |
| 2 | Americano | Kopi | 15000 | true |
| 3 | Cappuccino | Kopi | 22000 | true |
| 4 | Matcha Latte | Non-Kopi | 24000 | true |
| 5 | Teh Tarik | Non-Kopi | 14000 | false |
| 6 | Cokelat Panas | Non-Kopi | 20000 | true |
| 7 | Roti Bakar | Makanan | 16000 | true |
| 8 | Pisang Goreng | Makanan | 12000 | false |
| 9 | Nasi Goreng | Makanan | 25000 | true |

Setiap objek juga punya `deskripsi`. Jangan mengarang menu, harga, atau deskripsi baru.

## 4. Aturan Wajib dari Soal (Ketentuan Umum)

1. **Teknologi**: React (Vite) dengan JavaScript (JSX) dan function component. Styling wajib memakai **Tailwind CSS**. Dilarang memakai class component, library state management (Redux, Context, Zustand, dan sejenisnya), dan library komponen siap pakai (Bootstrap, MUI, Chakra UI, dan sejenisnya).
2. **Hook**: state hanya dibuat dengan `useState` yang diimpor sebagai named import. Pemanggilan hook harus di level paling atas komponen, tidak boleh di dalam `if`, perulangan, atau fungsi bersarang.
3. **State untuk data yang berubah**: data yang memengaruhi tampilan harus berupa state, bukan variabel `let`. State tidak boleh dimutasi langsung. Selalu gunakan fungsi setter, dan untuk objek atau array buat salinan baru.
4. **Props**: diterima dengan destructuring di parameter fungsi. Props tidak boleh diubah oleh komponen penerima. Angka dan boolean dikirim dengan kurung kurawal `{ }`.
5. **Daftar**: ditampilkan dengan `.map()` dan memakai `key` yang diambil dari `id` data, **bukan** dari index perulangan.
6. **Event dan DOM**: gunakan event props bawaan React (`onClick`, `onChange`, `onSubmit`). **Dilarang** memanipulasi DOM langsung (`document.getElementById`, `querySelector`, dan sejenisnya), serta dilarang memakai `innerHTML` atau `dangerouslySetInnerHTML`.
7. **Satu sumber data menu**: data menu hanya ada di `App.jsx`. Komponen anak hanya menerimanya lewat props.
8. **Satu data, satu state**: satu informasi tidak boleh disimpan di dua state berbeda. Contoh: `kategoriAktif` hanya ada di `App`, lalu diteruskan ke `Navbar` lewat props.
9. **Satu komponen, satu berkas**: setiap komponen ada di berkas sendiri di `src/components`, bernama PascalCase, dan memakai `export default`.
10. **Console bersih**: tidak boleh ada error maupun warning di Console browser, termasuk warning `key` dan warning controlled/uncontrolled input.

## 5. Struktur Berkas (nama harus sama persis)

```
kopi-senja/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── index.css          (berisi directives @tailwind)
    ├── App.jsx            (data menu + state utama)
    └── components/
        ├── Navbar.jsx
        ├── MenuList.jsx
        ├── MenuCard.jsx
        ├── RingkasanPesanan.jsx
        ├── FormPesan.jsx
        └── Footer.jsx
```

`vite.config.js` ditambahkan di luar daftar soal karena diperlukan agar JSX berjalan dengan plugin React. Jangan dihapus.

## 6. Keputusan Desain yang Sudah Diambil

Ikuti pola ini saat mengembangkan. Jangan memindahkan state ke tempat lain tanpa alasan kuat.

- **App.jsx** memegang: `kategoriAktif`, `keranjang` (objek `{ [id]: jumlah }`), `namaPelanggan`, `nomorMeja`, dan `notifikasi` (`null` atau `{ tipe, teks }`).
- **Total item, total harga, dan daftar pesanan dihitung** dari `keranjang` setiap render. Jangan simpan sebagai state terpisah, supaya angka di header dan ringkasan selalu sama.
- **MenuCard** memegang `tampilDetail` sendiri. Ini state lokal per kartu, sehingga detail satu menu tidak memengaruhi menu lain.
- **Validasi form** dilakukan di `kirimPesanan` dengan urutan: pesanan kosong, nama kosong, nomor meja kosong, lalu nomor meja harus angka. Pesan error ditampilkan lewat `notifikasi`.
- **Setelah sukses**: `keranjang`, `namaPelanggan`, dan `nomorMeja` dikosongkan, dan notifikasi sukses ditampilkan. Notifikasi dihapus saat pelanggan menambah menu lagi.
- **Menu habis** tetap tampil dengan opacity rendah. Tombolnya bertuliskan "Habis" dan `disabled`. `tambahMenu` juga menolak id yang tidak tersedia.
- Komponen `Navbar` hanya menerima `kategoriAktif` dan callback `onPilihKategori`. Navbar tidak menyimpan kategori sendiri.

## 7. Gaya Visual (Tanamera)

- Palet di `tailwind.config.js`: `espresso` (#3E2A1F), `cream` (#F7F1E6), `caramel` (#C68B59), `leaf` (#5B6B3A). Gunakan nama warna ini, jangan menambah warna acak.
- Font judul memakai `font-serif`. Teks biasa memakai font default.
- Layout: header sticky berisi brand dan tab kategori. Di desktop, area utama dibagi dua kolom: daftar menu (2/3) dan aside berisi ringkasan dan form (1/3). Di layar kecil, semua menumpuk.
- Hindari gaya generik seperti label huruf kapital berlebihan, panah `→` di tombol, dan pemisah `·`.
- Responsif sampai mobile. Pastikan fokus keyboard terlihat.

## 8. Yang TIDAK Boleh Dilakukan Agen

- Mengubah data menu, harga, atau status tersedia.
- Mengganti nama folder atau berkas dari struktur soal.
- Menambah library state management atau library komponen UI.
- Memakai `localStorage`, `sessionStorage`, atau sejenisnya. Data cukup disimpan di state selama sesi.
- Memakai class component, `document.getElementById` di dalam komponen, atau `innerHTML`.
- Menyimpan informasi yang sama di dua state.
- Membiarkan warning di Console.

## 9. Cara Memverifikasi Perubahan

Sebelum menyatakan pekerjaan selesai, pastikan:

1. `npm install` dan `npm run dev` berjalan tanpa error.
2. Console browser bersih: tidak ada warning `key`, tidak ada warning controlled input.
3. Filter kategori menampilkan item yang benar di setiap tab.
4. Tombol Detail hanya membuka satu kartu.
5. Teh Tarik dan Pisang Goreng tidak bisa ditambahkan.
6. Angka di header, ringkasan, dan badge kartu selalu sama setelah tambah, kurang, dan kirim.
7. Kirim dengan keranjang kosong, nama kosong, atau meja kosong/tidak angka menampilkan error.
8. Kirim yang valid menampilkan terima kasih, mengosongkan form, dan mengosongkan keranjang.

## 10. Catatan untuk Pengguna (Mahasiswa)

Pengguna adalah mahasiswa yang sedang belajar React. Saat menjelaskan perubahan, gunakan Bahasa Indonesia yang jelas dan sebutkan konsep yang dipakai (misalnya kenapa total dihitung, bukan disimpan). Jangan hanya menulis kode tanpa penjelasan singkat.
