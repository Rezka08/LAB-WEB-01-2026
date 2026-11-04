import Link from "next/link";
import { dataBuku } from "@/data/dataBuku";

export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <div className="text-center py-20 bg-white border border-[#C9B6E4] rounded-3xl p-8 shadow-sm">
        <h1
          style={{ fontFamily: "var(--font-fraunces)" }}
          className="text-2xl font-bold text-rose-700 mb-3"
        >
          Buku Tidak Ditemukan!
        </h1>
        <p className="text-[#4E3A47] text-sm mb-6 font-medium">
          Buku dengan ID &quot;{id}&quot; tidak terdaftar di dalam koleksi kami.
        </p>
        <Link
          href="/katalog"
          className="inline-block bg-[#C9B6E4] hover:bg-[#B8A2D6] text-[#382933] text-sm font-bold px-6 py-2.5 rounded-xl transition"
        >
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto bg-[#FFF2CC] border-2 border-[#FFE699] rounded-3xl p-6 sm:p-10 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#FFE699]">
        <span className="text-xs bg-white text-[#382933] border border-[#FFE699] px-3.5 py-1 rounded-full font-bold">
          {buku.kategori}
        </span>
        <span
          className={`text-xs px-3.5 py-1 rounded-full font-bold border ${
            buku.tersedia
              ? "bg-emerald-100 text-emerald-800 border-emerald-300"
              : "bg-rose-100 text-rose-700 border-rose-300"
          }`}
        >
          {buku.tersedia ? "Status: Tersedia" : "Status: Sedang Dipinjam"}
        </span>
      </div>

      <div className="py-6">
        {/* Judul: Fraunces + Charcoal Plum */}
        <h1
          style={{ fontFamily: "var(--font-fraunces)" }}
          className="text-3xl sm:text-4xl font-bold text-[#382933] mb-2"
        >
          {buku.judul}
        </h1>

        {/* Metadata: Charcoal Plum */}
        <p className="text-sm font-medium text-[#4E3A47]">
          Penulis: <span className="text-[#382933] font-bold">{buku.penulis}</span> &bull; Tahun Terbit:{" "}
          <span className="text-[#382933] font-bold">{buku.tahun}</span>
        </p>

        {/* Sinopsis: Plus Jakarta Sans */}
        <div className="mt-8 bg-white p-6 rounded-2xl border border-[#C9B6E4]/50">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#4E3A47] mb-2">
            Sinopsis Buku
          </h2>
          <p className="text-[#382933] leading-relaxed text-sm sm:text-base font-normal">
            {buku.sinopsis}
          </p>
        </div>
      </div>

      <div className="pt-6 border-t border-[#FFE699] flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/katalog"
          className="inline-block bg-white hover:bg-[#F5EFEB] text-[#382933] border border-[#C9B6E4] text-sm font-bold px-5 py-2.5 rounded-xl transition active:scale-95"
        >
          &larr; Kembali ke Katalog
        </Link>

        {/* Tombol Pinjam Buku: Sunset Terracotta */}
        {buku.tersedia && (
          <button
            type="button"
            className="bg-[#E06D53] hover:bg-[#CC5A40] text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-md transition active:scale-95"
          >
            Pinjam Buku Ini
          </button>
        )}
      </div>
    </article>
  );
}