# Pustaka Senja — Praktikum 9

Website Next.js App Router dengan tema Warm Minimalist & Coffee Vibe. Data koleksi dibaca dari PostgreSQL dan dikelola menggunakan raw SQL melalui driver `pg` (tanpa ORM).

## 1. Siapkan database di pgAdmin
1. Buka pgAdmin dan hubungkan ke server PostgreSQL lokal.
2. Klik kanan **Databases** → **Create** → **Database...**.
3. Isi nama database `pustaka_senja`, lalu klik **Save**.
4. Klik database `pustaka_senja`, buka **Tools → Query Tool**.
5. Buka file `database.sql`, salin seluruh isinya ke Query Tool, lalu tekan **Execute (▶)**.
6. Jalankan `SELECT * FROM buku ORDER BY id;`. Pastikan sembilan buku tampil.

## 2. Hubungkan Next.js ke PostgreSQL
1. Pastikan PostgreSQL berjalan. Di pgAdmin, klik kanan server → **Properties → Connection** untuk melihat host, port, dan username yang dipakai.
2. Di root folder proyek (sejajar dengan `package.json`), salin `.env.local.example` dan ubah nama salinannya menjadi `.env.local`.
3. Buka `.env.local`, lalu isi `DATABASE_URL` sesuai konfigurasi PostgreSQL Anda. Contoh format:
   `DATABASE_URL=postgresql://postgres:PASSWORD_ANDA@localhost:5432/pustaka_senja`
   Ganti `PASSWORD_ANDA` dengan password PostgreSQL lokal Anda. Jangan membagikan file `.env.local` atau mengunggahnya ke repositori.
4. Jika password mengandung karakter khusus seperti `@`, `#`, `/`, atau `:`, URL-encode karakter tersebut.

## 3. Jalankan website
Buka terminal pada folder proyek, kemudian jalankan:

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. Pastikan halaman Beranda menampilkan statistik dari database dan halaman `/katalog` menampilkan sembilan buku.

## 4. Uji fitur CRUD
- **Create:** klik `Katalog` → `+ Tambah buku`, isi formulir, lalu simpan.
- **Read:** buka katalog dan klik `Lihat detail` pada salah satu buku.
- **Update:** pada halaman detail, klik `Edit buku`, ubah data, lalu simpan perubahan.
- **Delete:** pada halaman detail, klik `Hapus` dan setujui konfirmasi. Batalkan konfirmasi untuk memastikan data tidak terhapus.
- Periksa ulang `SELECT * FROM buku ORDER BY id;` di pgAdmin. Data harus tetap tersimpan setelah browser dimuat ulang.

## Catatan teknis
- Semua query database berada di server menggunakan `pool.query()`.
- Query dinamis menggunakan parameter `$1`, `$2`, dan seterusnya.
- Operasi tambah, ubah, hapus memakai Server Actions dan `revalidatePath()`.
- Query `UPDATE` dan `DELETE` menggunakan `WHERE id = ...`.
- `dataBuku.js` tidak lagi digunakan untuk mengambil data aplikasi.
