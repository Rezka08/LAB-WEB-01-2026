import Link from "next/link";

const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";

// Tampilan "tidak ditemukan", dipakai oleh halaman detail dan edit.
export default function BukuTidakDitemukan({ id }) {
  const tampilId = String(id).slice(0, 40);
  return (
    <section className={`${raised} mx-auto max-w-md p-1`}>
      <div className="bg-linear-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1 text-sm font-bold text-[#0b2a55]">
        Error
      </div>
      <div className="space-y-4 p-6 text-center">
        <p className="text-4xl" aria-hidden="true">❌</p>
        <h1 className="text-lg font-bold">
          Buku dengan ID &quot;{tampilId}&quot; tidak ditemukan!
        </h1>
        <Link href="/katalog" className={`${raised} inline-block px-5 py-1 hover:bg-[#e8e4da]`}>
          &larr; Kembali ke Katalog
        </Link>
      </div>
    </section>
  );
}
