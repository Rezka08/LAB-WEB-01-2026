import Link from "next/link";
import { ArrowLeft, CalendarDays, CheckCircle2, AlertCircle } from "lucide-react";
import dataBuku from "@/data/dataBuku";

// Server Component: Next.js 15 menyediakan params secara asynchronous.
export default async function DetailBukuPage({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((item) => item.id === id);

  if (!buku) {
    return (
      <div className="container py-20">
        <div className="terminal-panel mx-auto max-w-xl p-9 text-center">
          <p className="font-mono text-xs tracking-widest text-pink-300">ERROR 404 // RECORD NOT FOUND</p>
          <h1 className="mt-4 text-3xl font-black text-white">Arsip tidak ditemukan.</h1>
          <p className="mt-3 text-sm text-slate-400">ID {id} tidak terdaftar di koleksi Pustaka Senja.</p>
          <Link href="/katalog" className="btn-primary mt-7">KEMBALI KE KATALOG <ArrowLeft size={14} /></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-9 sm:py-12">
      <Link href="/katalog" className="font-mono text-[10px] tracking-widest text-cyan-300 hover:text-white">
        <ArrowLeft size={13} className="mr-1 inline" /> BACK TO COLLECTION
      </Link>

      <article className="terminal-panel mt-6 overflow-hidden">
        <div className="terminal-bar">
          <span>BOOK_RECORD // ID_{id.padStart(3, "0")}</span>
          <span className="text-cyan-300">READ ONLY</span>
        </div>

        <div className="grid lg:grid-cols-[.78fr_1.22fr]">
          <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden border-b border-emerald-300/20 bg-[radial-gradient(circle_at_50%_40%,rgba(66,255,145,.18),transparent_50%),linear-gradient(145deg,#0b2719,#030806)] p-7 lg:border-b-0 lg:border-r">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(66,255,145,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(66,255,145,.12) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
            <div className="relative w-full max-w-[260px] overflow-hidden rounded-lg border border-emerald-300/50 bg-black/50 shadow-[0_0_30px_rgba(66,255,145,.13)]">
              <img src={buku.cover} alt={`Sampul sementara ${buku.judul}`} className="block aspect-[3/4] w-full object-cover" />
              <p className="bg-black/75 px-2 py-2 text-center font-mono text-[8px] tracking-widest text-emerald-200">COVER SEMENTARA · GANTI FILE DI public/covers/</p>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            <p className="eyebrow">FULL RECORD / DATA FILE</p>
            <span className="chip mt-5">{buku.kategori}</span>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">{buku.judul}</h1>
            <p className="mt-3 text-sm text-slate-400">AUTHOR // {buku.penulis}</p>

            <div className="my-8 grid grid-cols-2 gap-3">
              <div className="border border-emerald-300/25 bg-black/25 p-4">
                <CalendarDays size={16} className="text-cyan-300" />
                <p className="mt-3 font-mono text-[9px] text-slate-500">PUBLISHED</p>
                <p className="mt-1 text-xl font-bold text-white">{buku.tahun}</p>
              </div>
              <div className="border border-emerald-300/25 bg-black/25 p-4">
                {buku.tersedia ? <CheckCircle2 size={16} className="text-emerald-300" /> : <AlertCircle size={16} className="text-pink-300" />}
                <p className="mt-3 font-mono text-[9px] text-slate-500">AVAILABILITY</p>
                <p className={`mt-1 text-sm font-bold ${buku.tersedia ? "text-emerald-300" : "text-pink-300"}`}>
                  {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
                </p>
              </div>
            </div>

            <div className="border-t border-dashed border-emerald-300/25 pt-6">
              <p className="eyebrow">SYNOPSIS // DESCRIPTION</p>
              <p className="mt-4 text-sm leading-8 text-slate-300">{buku.sinopsis}</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-emerald-300/15 pt-5">
              <span className="font-mono text-[9px] text-slate-600">END OF RECORD // {id}</span>
              <Link href="/katalog" className="btn-secondary"><ArrowLeft size={14} /> KEMBALI KE KATALOG</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
