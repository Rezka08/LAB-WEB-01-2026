"use client";

import { hapusBuku } from "@/app/katalog/actions";

const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";

// Client Component: butuh confirm() milik browser.
export default function TombolHapus({ id, judul }) {
  return (
    <form
      action={hapusBuku}
      onSubmit={(e) => {
        if (!confirm(`Yakin hapus buku "${judul}"?`)) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className={`${raised} px-5 py-1 font-bold text-[#b3261e] hover:bg-[#e8e4da] active:translate-y-px`}
      >
        🗑️ Hapus
      </button>
    </form>
  );
}
