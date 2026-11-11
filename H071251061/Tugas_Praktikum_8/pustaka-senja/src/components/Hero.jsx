    import Link from "next/link";

    export default function Hero({
    namaRuangBaca = "Pustaka Senja",
    slogan = "Ketika langit meredup dan waktu melambat, biarkan kehangatan kata menemani perenungan mu di antara heningnya senja.",
    lokasi = "Jl.Jalanin Aja Dulu No. 31, Senja Kala Itu",
    jamBuka = "Senin – Sabtu | 10.00 – 21.00 WITA"
    }) {
    return (
        <section className="relative overflow-hidden rounded-2xl bg-zinc-900/90 border border-zinc-800 p-8 md:p-12 shadow-2xl mb-12">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Selamat Datang di {namaRuangBaca}
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-zinc-100 leading-tight mb-4 tracking-tight">
            Sudut Tenang Literasi
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed mb-8 italic">
            {slogan}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 px-5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 mb-8 text-xs sm:text-sm">
            <div className="flex items-start gap-2 text-zinc-300">
                <span className="text-amber-400 font-serif font-bold">📍</span>
                <div>
                <p className="text-zinc-500 text-[11px] uppercase tracking-wider">Lokasi Ruang Baca</p>
                <p className="font-medium text-zinc-200">{lokasi}</p>
                </div>
            </div>
            <div className="flex items-start gap-2 text-zinc-300">
                <span className="text-amber-400 font-serif font-bold">🕒</span>
                <div>
                <p className="text-zinc-500 text-[11px] uppercase tracking-wider">Waktu Kunjungan</p>
                <p className="font-medium text-zinc-200">{jamBuka}</p>
                </div>
            </div>
            </div>

            <div className="flex flex-wrap gap-4">
            <Link
                href="/katalog"
                className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]"
            >
                Jelajahi Lembaran Katalog &rarr;
            </Link>
            <Link
                href="/usulan"
                className="px-6 py-3 rounded-lg bg-zinc-950 hover:bg-zinc-850 text-zinc-300 border border-zinc-700 font-medium text-sm transition-colors"
            >
                Titip Usulan Pustaka
            </Link>
            </div>
        </div>
        </section>
    );
    }