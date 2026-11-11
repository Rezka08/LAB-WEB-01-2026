"use client";

import { hapusBuku } from "@/app/katalog/actions";

export default function TombolHapus({ id }) {
  return (
    <form
      action={hapusBuku}
      onSubmit={(e) => {
        if (!confirm("Yakin ingin menghapus buku ini dari koleksi?")) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="text-xs font-bold bg-rose-100 hover:bg-rose-200 text-rose-700 border border-rose-300 px-3 py-2 rounded-lg transition active:scale-95"
      >
        Hapus
      </button>
    </form>
  );
}