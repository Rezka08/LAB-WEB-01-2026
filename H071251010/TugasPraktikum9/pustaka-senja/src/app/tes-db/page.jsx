import Link from "next/link";
import { CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react";
import pool from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function TesDatabasePage() {
  const { rows } = await pool.query(
    "SELECT id, judul, penulis FROM buku ORDER BY id ASC"
  );

  return (
    <div className="container py-10">
      <section className="terminal-panel mx-auto max-w-3xl p-6 sm:p-9">
        <p className="eyebrow">DATABASE / CONNECTION TEST</p>
        <div className="mt-4 flex items-center gap-3">
          {rows.length >= 9 ? <CheckCircle2 className="text-emerald-300" size={28} /> : <AlertCircle className="text-amber-300" size={28} />}
          <div>
            <h1 className="text-2xl font-black text-white">PostgreSQL Connection</h1>
            <p className="mt-1 text-xs text-slate-400">Query SELECT berhasil dijalankan melalui pg Pool.</p>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-3">
          <div className="stat-card"><p className="eyebrow">DATA TERBACA</p><p className="mt-3 font-mono text-4xl font-black text-emerald-300">{rows.length}</p></div>
          <div className="stat-card"><p className="eyebrow">STATUS</p><p className="mt-3 text-xl font-black text-cyan-300">CONNECTED</p></div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead><tr className="border-b border-emerald-300/30 text-emerald-300"><th className="py-3">ID</th><th>JUDUL</th><th>PENULIS</th></tr></thead>
            <tbody>{rows.map((buku) => <tr key={buku.id} className="border-b border-emerald-300/10 text-slate-300"><td className="py-3">{buku.id}</td><td>{buku.judul}</td><td>{buku.penulis}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="mt-5 text-[10px] leading-5 text-slate-500">Untuk bukti praktikum, ambil tangkapan layar halaman ini setelah sembilan data awal berhasil dimasukkan ke PostgreSQL.</p>
        <Link href="/katalog" className="btn-secondary mt-6"><ArrowLeft size={13} /> KEMBALI KE KATALOG</Link>
      </section>
    </div>
  );
}
