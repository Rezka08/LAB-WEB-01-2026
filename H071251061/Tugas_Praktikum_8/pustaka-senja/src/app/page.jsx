import Hero from "@/components/Hero";
import LiteraryQuote from "@/components/LiteraryQuote";
import BrassSeparator from "@/components/BrassSeparator";
import { dataBuku } from "@/data/dataBuku";

export default function HomePage() {
  const totalBuku = dataBuku.length;
  const bukuTersedia = dataBuku.filter((buku) => buku.tersedia).length;
  const bukuDipinjam = dataBuku.filter((buku) => !buku.tersedia).length;

  return (
    <div>
      <Hero />
      <LiteraryQuote />
      <BrassSeparator />

      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-2xl font-bold text-zinc-100">
              Denyut Koleksi Pustaka
            </h2>
            <p className="text-zinc-400 text-xs mt-1">
              Ringkasan ketersediaan buku dan bahan bacaan secara presisi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-amber-500" />
            <p className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
              Keseluruhan Koleksi
            </p>
            <p className="font-serif text-4xl font-bold text-zinc-100 mt-2">
              {totalBuku} <span className="text-sm font-sans font-normal text-zinc-400">Judul Pustaka</span>
            </p>
          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500" />
            <p className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
              Siap Dibaca & Dipinjam
            </p>
            <p className="font-serif text-4xl font-bold text-emerald-400 mt-2">
              {bukuTersedia} <span className="text-sm font-sans font-normal text-zinc-400">Tersedia di Rak</span>
            </p>
          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-rose-500" />
            <p className="text-xs uppercase tracking-wider text-zinc-500 font-medium">
              Sedang Menjelajah
            </p>
            <p className="font-serif text-4xl font-bold text-rose-400 mt-2">
              {bukuDipinjam} <span className="text-sm font-sans font-normal text-zinc-400">Dalam Peminjaman</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}