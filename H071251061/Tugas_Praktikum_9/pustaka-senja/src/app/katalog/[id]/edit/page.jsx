import pool from "@/lib/db";
import Link from "next/link";
import { editBukuAction } from "../../actions";

export default async function EditBukuPage({ params }) {
    const resolvedParams = await params;
    const bookId = parseInt(resolvedParams.id, 10);

    let buku = null;
    if (!isNaN(bookId)) {
        const result = await pool.query("SELECT * FROM buku WHERE id = $1", [bookId]);
        buku = result.rows[0];
    }

    if (!buku) {
        return (
        <div className="max-w-md mx-auto text-center py-20 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 my-12">
            <h1 className="font-serif text-2xl font-bold text-zinc-100 mb-2">
            Buku Tidak Ditemukan
            </h1>
            <Link
            href="/katalog"
            className="inline-block px-5 py-2.5 rounded-lg bg-zinc-800 text-amber-300 text-xs"
            >
            &larr; Kembali ke Katalog
            </Link>
        </div>
        );
    }

    const editWithId = editBukuAction.bind(null, buku.id);

    return (
        <section className="max-w-2xl mx-auto bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl my-6">
        <h1 className="font-serif text-2xl font-bold text-zinc-100 mb-2">
            Edit Informasi Buku #{buku.id}
        </h1>
        <p className="text-zinc-400 text-xs mb-6">
            Perbarui data buku yang tersimpan di PostgreSQL.
        </p>

        <form action={editWithId} className="space-y-4">
            <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">Judul Buku</label>
            <input
                type="text"
                name="judul"
                defaultValue={buku.judul}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
            />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">Penulis</label>
                <input
                type="text"
                name="penulis"
                defaultValue={buku.penulis}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                />
            </div>

            <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">Tahun Terbit</label>
                <input
                type="number"
                name="tahun"
                defaultValue={buku.tahun}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                />
            </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">Kategori</label>
                <select
                name="kategori"
                defaultValue={buku.kategori}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                >
                <option value="Teknologi">Teknologi</option>
                <option value="Fiksi">Fiksi</option>
                <option value="Pengembangan Diri">Pengembangan Diri</option>
                </select>
            </div>

            <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">Status Ketersediaan</label>
                <select
                name="tersedia"
                defaultValue={buku.tersedia ? "true" : "false"}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                >
                <option value="true">Tersedia</option>
                <option value="false">Sedang Dipinjam</option>
                </select>
            </div>
            </div>

            <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">Sinopsis Buku</label>
            <textarea
                name="sinopsis"
                rows={4}
                defaultValue={buku.sinopsis}
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
            />
            </div>

            <div className="flex items-center gap-3 pt-2">
            <button
                type="submit"
                className="flex-1 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            >
                Simpan Perubahan
            </button>
            <Link
                href={`/katalog/${buku.id}`}
                className="px-5 py-2.5 rounded-lg bg-zinc-950 text-zinc-400 hover:text-zinc-200 border border-zinc-800 text-xs font-medium"
            >
                Batal
            </Link>
            </div>
        </form>
        </section>
    );
}