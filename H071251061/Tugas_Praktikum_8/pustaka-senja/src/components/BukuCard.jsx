    "use client";

    import { useState } from "react";
    import Link from "next/link";

    export default function BukuCard({ buku }) {
    const [favorit, setFavorit] = useState(false);
    const estimasiBaca = Math.max(2, Math.ceil(buku.sinopsis.length / 80));

    return (
        <article className="group perspective-1000 relative">
        <div className="relative transition-all duration-500 preserve-3d group-hover:[transform:rotateY(-8deg)_translateY(-6px)]">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-r-xl bg-zinc-800 border-r-2 border-b-2 border-zinc-700/70 shadow-[8px_8px_20px_rgba(0,0,0,0.85)] pointer-events-none" />
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-r-xl bg-zinc-850 border-r border-b border-zinc-750 pointer-events-none" />

            <div className="relative z-10 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 group-hover:border-amber-500/50 rounded-r-xl rounded-l-md p-6 flex flex-col justify-between min-h-[380px] shadow-2xl transition-colors duration-300 overflow-hidden">
            {favorit && (
                <div className="absolute top-0 right-6 z-20 w-4 h-10 bg-amber-500 shadow-[0_4px_10px_rgba(245,158,11,0.4)] [clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)] animate-bounce" />
            )}

            <div className="absolute left-3.5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-500/25 to-transparent pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/80 via-black/40 to-transparent rounded-l-md pointer-events-none" />

            <div className="pl-3">
                <div className="flex items-center justify-between gap-2 mb-4 pr-4">
                <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded bg-zinc-950 text-amber-400 border border-amber-500/30">
                    {buku.kategori}
                </span>

                <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                    buku.tersedia
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : "bg-rose-500/10 text-rose-400 border-rose-500/30"
                    }`}
                >
                    {buku.tersedia ? "Tersedia" : "Dipinjam"}
                </span>
                </div>

                <div className="p-4 rounded-lg bg-zinc-950/80 border border-zinc-800 group-hover:border-amber-500/30 transition-colors mb-3 relative overflow-hidden">
                <h3 className="font-serif text-xl font-bold text-zinc-100 group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
                    {buku.judul}
                </h3>
                <p className="text-zinc-400 text-xs mt-2 font-light">
                    Oleh <span className="text-amber-400/90 font-medium">{buku.penulis}</span> ({buku.tahun})
                </p>
                </div>

                <p className="text-zinc-400 text-xs line-clamp-3 leading-relaxed font-light mb-3">
                {buku.sinopsis}
                </p>

                <p className="text-[10px] text-zinc-500 font-medium flex items-center gap-1 mb-2">
                <span>⏱️</span> ~{estimasiBaca} menit waktu baca
                </p>
            </div>

            <div className="pl-3 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                <button
                onClick={() => setFavorit(!favorit)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-200 flex items-center gap-1.5 ${
                    favorit
                    ? "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                    : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700"
                }`}
                >
                <span>{favorit ? "★" : "☆"}</span>
                <span>{favorit ? "Tersimpan" : "Favorit"}</span>
                </button>

                <Link
                href={`/katalog/${buku.id}`}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 group/link"
                >
                Buka Pustaka
                <span className="group-hover/link:translate-x-1 transition-transform">
                    &rarr;
                </span>
                </Link>
            </div>
            </div>
        </div>
        </article>
    );
    }