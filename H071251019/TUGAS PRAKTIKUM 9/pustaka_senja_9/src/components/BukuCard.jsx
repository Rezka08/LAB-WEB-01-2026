"use client";

import { useState } from "react";
import Link from "next/link";

const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";
const sunken = "shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080,inset_-2px_-2px_#e8e4da,inset_2px_2px_#0a0a0a]";

function BukuCard({ id, judul, penulis, kategori, tahun, tersedia, gambar }) {
  const [favorit, setFavorit] = useState(false);

  return (
    <article className={`${raised} flex flex-col p-1`}>
      <div className="flex items-center justify-between bg-linear-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1 text-xs font-bold text-[#0b2a55]">
        <span>{kategori}</span>
        <span
          className={`${raised} grid h-4 w-4 place-items-center font-normal`}
          aria-hidden="true"> × </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <img
          src={`/buku/${gambar}`}
          alt={`Sampul ${judul}`}
          className={`${sunken} aspect-2/3 w-full bg-white object-cover p-1`}
        />
        <h3 className="text-lg font-bold leading-tight text-[#1b3c70]">
          {judul}
        </h3>
        <p className="text-sm">{penulis}</p>
        <p className="text-sm text-[#404040]">
          {kategori} &bull; {tahun}
        </p>
        <span
          className={`w-fit px-2 py-0.5 text-xs font-bold text-white ${
            tersedia ? "bg-[#1e7a2e]" : "bg-[#b3261e]"
          }`}
        >
          {tersedia ? "✔ Tersedia" : "✖ Sedang Dipinjam"}
        </span>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <button
            onClick={() => setFavorit((sebelumnya) => !sebelumnya)}
            className={`px-3 py-1 text-sm active:translate-y-px ${favorit ? `${sunken} bg-[#e8e4da] font-bold` : raised}`}
          >
            {favorit ? "♥ Tersimpan" : "♡ Simpan"}
          </button>
          <Link
            href={`/katalog/${id}`}
            className={`${raised} px-3 py-1 text-sm hover:bg-[#e8e4da]`}
          >
            Lihat Detail
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BukuCard;
