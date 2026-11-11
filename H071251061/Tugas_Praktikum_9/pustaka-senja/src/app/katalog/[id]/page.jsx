import Link from "next/link";
import pool from "@/lib/db";
import DetailActions from "@/components/DetailActions";
import FocusReaderMode from "@/components/FocusReaderMode";
import AdminDetailControls from "@/components/AdminDetailControls";

export default async function DetailBukuPage({ params }) {
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
                Pustaka Tidak Ditemukan
                </h1>
                <p className="text-zinc-400 text-xs mb-6">
                Buku dengan ID #{resolvedParams.id} tidak terdaftar di database PostgreSQL.
                </p>
                <Link
                href="/katalog"
                className="inline-block px-5 py-2.5 rounded-lg bg-zinc-800 text-amber-300 text-xs"
                >
                &larr; Kembali ke Katalog
                </Link>
            </div>
            );
        }

        return (
            <article className="max-w-3xl mx-auto bg-zinc-900/90 border border-zinc-800 rounded-2xl p-8 sm:p-10 shadow-2xl my-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-800">
                <span className="text-xs font-semibold uppercase px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30">
                {buku.kategori} &bull; Kode Pustaka #{buku.id}
                </span>
                <AdminDetailControls bukuId={buku.id} />
            </div>

            <div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-100 mb-3">
                {buku.judul}
                </h1>
                <p className="text-zinc-400 text-sm font-light">
                Penulis: <span className="text-zinc-200 font-medium">{buku.penulis}</span> | Tahun:{" "}
                <span className="text-zinc-200 font-medium">{buku.tahun}</span>
                </p>
            </div>

            <FocusReaderMode>
                <div className="bg-zinc-950/90 border border-zinc-800/80 rounded-xl p-6 sm:p-8">
                <h2 className="text-xs uppercase tracking-widest text-amber-500/90 font-semibold mb-3">
                    Sinopsis & Ulasan Pustaka
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
                    {buku.sinopsis}
                </p>
                </div>
            </FocusReaderMode>

            <DetailActions buku={buku} />

            <div className="pt-2">
                <Link
                href="/katalog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-950 hover:bg-zinc-850 text-zinc-300 hover:text-amber-300 text-xs font-medium border border-zinc-800 transition-colors"
                >
                &larr; Kembali ke Lembaran Katalog
                </Link>
            </div>
            </article>
        );
}