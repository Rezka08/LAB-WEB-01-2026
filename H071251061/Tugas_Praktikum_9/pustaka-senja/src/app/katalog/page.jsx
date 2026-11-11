import pool from "@/lib/db";
import BukuCard from "@/components/BukuCard";
import FormTambahBuku from "@/components/FormTambahBuku";

export default async function KatalogPage() {
    const result = await pool.query("SELECT * FROM buku ORDER BY id ASC");
    const daftarBuku = result.rows;

    return (
        <section className="space-y-8">
        <div className="border-b border-zinc-800 pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <h1 className="font-serif text-3xl font-bold text-zinc-100">
                Etalase & Arsip Pustaka
                </h1>
                <p className="text-zinc-400 text-sm mt-1">
                Koleksi buku terhubung langsung dengan database PostgreSQL.
                </p>
            </div>

            <FormTambahBuku />
            </div>
        </div>

        <div className="relative pb-6 space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {daftarBuku.map((buku) => (
                <BukuCard key={buku.id} buku={buku} />
            ))}
            </div>

            <div className="h-4 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border-t border-amber-500/30 border-b border-black rounded-sm shadow-[0_8px_20px_rgba(0,0,0,0.9)] relative" />
        </div>
        </section>
    );
}