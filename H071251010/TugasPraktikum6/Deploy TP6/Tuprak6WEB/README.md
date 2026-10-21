# DWI — Digital Space Portfolio (React + Vite)

Portofolio ini merupakan konversi dari website HTML/CSS/JavaScript sebelumnya ke React + Vite dan Tailwind CSS. Konten, foto, link, animasi, dan interaksi dipertahankan sejauh memungkinkan sambil menyesuaikan batasan Tugas Praktikum 6.

## Menjalankan project

```bash
npm install
npm run dev
```

Buka alamat lokal yang diberikan Vite. Untuk memeriksa project:

```bash
npm run build
npm run lint
```

## Struktur penting

```text
public/
  foto-profil.PNG
src/
  assets/gallery/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Gallery.jsx
    Footer.jsx
  App.jsx
  index.css
  portfolio.css
  portfolioEffects.js
  main.jsx
```

## Penyesuaian untuk Praktikum 6

- `App.jsx` memanggil Navbar, Hero, About, Skills, Gallery, dan Footer secara berurutan.
- Ada tepat enam file komponen pada `src/components/`.
- Tidak menggunakan `useState` dan tidak menggunakan `props`.
- Navbar, data diri, pengalaman, musik, daftar repositori awal, keahlian, dan proyek menggunakan `const` serta `.map()`.
- Navbar mencetak label menu ke Console ketika menu diklik. Tombol Hero juga mencetak pesan ke Console.
- Foto profil dibaca dari `public/foto-profil.PNG`. Foto pengalaman dan proyek diimpor dari `src/assets/gallery/`.
- Styling memakai Tailwind CSS v4 melalui plugin Vite, ditambah stylesheet visual portofolio lama untuk mempertahankan efek 3D, gradasi, loading screen, glassmorphism, hover, reveal, parallax, card tilt, dan layout responsif.
- Modal detail proyek, filter kategori, theme toggle, menu mobile, GitHub API, serta form kontak tetap disediakan. Form kontak menyimpan data di localStorage browser untuk demonstrasi; tidak mengirim email.

## Catatan

Google Fonts, Spotify embeds, dan pembaruan daftar repository dari GitHub API memerlukan koneksi internet. Jika GitHub API tidak tersedia, daftar repository awal dari data portofolio tetap ditampilkan. Foto profil dan foto lainnya berasal dari ZIP portofolio yang disediakan.
