export const kategoriBuku = [
  "Teknologi",
  "Fiksi",
  "Pengembangan Diri",
  "Lainnya",
];

export function getCoverUrl(buku) {
  const cover = buku?.cover_url || buku?.cover;

  if (!cover) return "/images/hero-library.png";

  if (cover.startsWith("http://") || cover.startsWith("https://") || cover.startsWith("/")) {
    return cover;
  }

  return `/uploads/covers/${cover}`;
}

export function isValidId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0;
}

export function formatStatus(tersedia) {
  return tersedia ? "Tersedia" : "Sedang Dipinjam";
}
