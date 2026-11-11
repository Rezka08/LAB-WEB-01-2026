"use client";

import Link from "next/link";
import TombolHapus from "@/components/TombolHapus";
import { toggleSimpanBuku } from "@/app/katalog/actions";

export default function BukuCard({ buku }) {
  return (
    <article className="bg-[#FFF2CC] border-2 border-[#FFE699] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#E06D53]/40 transition-all flex flex-col justify-between">
      <div>
        <div className="w-full aspect-[3/4] bg-[#F5EFEB] border-b border-[#FFE699] overflow-hidden flex items-center justify-center">
          {buku.cover ? (
            <img
              src={buku.cover}
              alt={`Cover ${buku.judul}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-[#4E3A47]/50 gap-1">
              <span className="text-xs font-semibold">Belum Ada Cover</span>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/80 text-[#382933] border border-[#FFE699] font-bold">
              {buku.kategori}
            </span>
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                buku.tersedia
                  ? "bg-emerald-100 text-emerald-800 border-emerald-300"
                  : "bg-rose-100 text-rose-700 border-rose-300"
              }`}
            >
              {buku.tersedia ? "Tersedia" : "Dipinjam"}
            </span>
          </div>

          <h3
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="text-lg font-bold text-[#382933] leading-snug line-clamp-1"
          >
            {buku.judul}
          </h3>
          <p className="text-xs font-medium text-[#4E3A47] mt-1">
            {buku.penulis} &bull; {buku.tahun}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 pt-3 border-t border-[#FFE699] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <form action={toggleSimpanBuku}>
            <input type="hidden" name="id" value={buku.id} />
            <button
              type="submit"
              title={buku.disimpan ? "Hapus dari Tersimpan" : "Simpan Buku"}
              className={`text-xs font-bold px-2.5 py-1.5 rounded-lg border transition-all active:scale-95 ${
                buku.disimpan
                  ? "bg-[#C9B6E4] border-[#B8A2D6] text-[#382933] shadow-sm"
                  : "bg-white border-[#C9B6E4] text-[#382933] hover:bg-[#F5EFEB]"
              }`}
            >
              {buku.disimpan ? "Tersimpan" : "Simpan"}
            </button>
          </form>

          <Link
            href={`/katalog/${buku.id}/edit`}
            className="text-xs font-bold bg-[#C9B6E4]/70 hover:bg-[#C9B6E4] text-[#382933] border border-[#B8A2D6] px-2.5 py-1.5 rounded-lg transition"
          >
            Edit
          </Link>

          <TombolHapus id={buku.id} />
        </div>

        <Link
          href={`/katalog/${buku.id}`}
          className="text-xs font-bold bg-[#E06D53] hover:bg-[#CC5A40] text-white px-3 py-1.5 rounded-lg shadow-sm transition"
        >
          Detail &rarr;
        </Link>
      </div>
    </article>
  );
}