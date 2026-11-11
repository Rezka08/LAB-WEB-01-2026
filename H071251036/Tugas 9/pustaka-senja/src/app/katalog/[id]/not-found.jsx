import Link from "next/link";
export default function NotFound() {
  return <div className="mx-auto max-w-xl rounded-3xl border border-[#e8ddcf] bg-[#fffdf9] p-10 text-center"><p className="text-4xl">📚</p><h1 className="mt-4 font-serif text-3xl font-bold text-[#493326]">Buku tidak ditemukan</h1><p className="mt-3 text-sm leading-6 text-[#827161]">Buku yang kamu cari mungkin sudah tidak tersedia di rak Pustaka Senja.</p><Link href="/katalog" className="mt-6 inline-flex rounded-full bg-[#493326] px-6 py-3 text-sm font-bold text-white">Kembali ke katalog</Link></div>;
}
