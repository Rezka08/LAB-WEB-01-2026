import React, { useState } from "react";

const formatRupiah = (angka) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(angka);

export default function MenuCard({ menu, jumlah, onTambah }) {
  const [detailTerbuka, setDetailTerbuka] = useState(false);

  return (
    <article className={`group overflow-hidden rounded-3xl border bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl ${menu.tersedia ? "border-[#E9E6DC]" : "border-gray-200"}`}>
      <div className={`relative flex h-44 items-center justify-center overflow-hidden ${menu.kategori === "Kopi" ? "bg-[#E8DDC8]" : menu.kategori === "Non-Kopi" ? "bg-[#E6EEE3]" : "bg-[#F1E7D9]"}`}>
        <div className="absolute -right-5 -top-10 h-36 w-36 rounded-full border-[22px] border-white/40" />
        <div className="absolute bottom-[-34px] left-[-20px] h-28 w-28 rounded-full bg-white/30 blur-sm" />
        <span className="relative text-8xl drop-shadow-sm transition duration-300 group-hover:scale-110" aria-hidden="true">{menu.emoji}</span>
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1.5 text-[11px] font-bold text-forest backdrop-blur">{menu.tag}</span>
        {!menu.tersedia && (
          <div className="absolute inset-0 flex items-center justify-center bg-forest/45">
            <span className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-gray-600">Sedang habis</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-leaf">{menu.kategori}</p>
            <h3 className="mt-1 text-xl font-extrabold text-forest">{menu.nama}</h3>
          </div>
          <p className="whitespace-nowrap pt-1 text-sm font-extrabold text-forest">{formatRupiah(menu.harga)}</p>
        </div>
        <p className="mt-3 min-h-[42px] text-sm leading-6 text-gray-500">{menu.deskripsi}</p>

        {detailTerbuka && (
          <div className="mt-3 rounded-xl bg-cream p-3 text-sm leading-6 text-gray-600">
            <p><span className="font-bold text-forest">Detail:</span> {menu.deskripsi}</p>
            <p className="mt-1"><span className="font-bold text-forest">Status:</span> {menu.tersedia ? "Siap dipesan" : "Untuk sementara belum tersedia"}</p>
          </div>
        )}

        <div className="mt-5 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDetailTerbuka((terbuka) => !terbuka)}
            aria-expanded={detailTerbuka}
            className="rounded-xl border border-[#E1E2D9] px-3 py-3 text-sm font-bold text-forest transition hover:bg-cream"
          >
            {detailTerbuka ? "Tutup detail" : "Detail"}
          </button>
          <button
            type="button"
            onClick={onTambah}
            disabled={!menu.tersedia}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${
              menu.tersedia ? "bg-forest text-white hover:bg-leaf" : "cursor-not-allowed bg-gray-100 text-gray-400"
            }`}
          >
            {menu.tersedia ? <><span>+</span> Tambah {jumlah > 0 ? `(${jumlah})` : ""}</> : "Tidak tersedia"}
          </button>
        </div>
      </div>
    </article>
  );
}