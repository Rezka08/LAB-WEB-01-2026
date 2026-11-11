"use client";
import { hapusBuku } from "@/app/katalog/actions";

export default function TombolHapus({ id, compact = false }) {
  async function aksi(formData) {
    const yakin = window.confirm("Yakin ingin menghapus buku ini? Data yang dihapus tidak dapat dikembalikan.");
    if (yakin) await hapusBuku(formData);
  }
  return <form action={aksi}>
    <input type="hidden" name="id" value={id} />
    <button type="submit" className={`rounded-full border border-[#d9b7aa] px-4 py-2 text-xs font-bold text-[#a35e4e] transition hover:bg-[#f8e9e4] ${compact ? "" : "w-full"}`}>Hapus</button>
  </form>;
}
