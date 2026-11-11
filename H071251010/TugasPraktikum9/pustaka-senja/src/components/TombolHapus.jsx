"use client";

import { Trash2 } from "lucide-react";
import { hapusBuku } from "@/app/katalog/actions";

export default function TombolHapus({ id, judul }) {
  return (
    <form
      action={hapusBuku}
      onSubmit={(event) => {
        if (!window.confirm(`Yakin ingin menghapus buku "${judul}"?`)) {
          event.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="inline-flex min-h-9 items-center gap-2 rounded border border-rose-400/35 px-3 text-[9px] font-bold tracking-widest text-rose-300 transition hover:border-rose-300 hover:bg-rose-400/10" aria-label={`Hapus ${judul}`}>
        <Trash2 size={13} /> HAPUS
      </button>
    </form>
  );
}
