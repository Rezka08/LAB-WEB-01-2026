    "use client";

    import { useState } from "react";

    export default function UsulanPage() {
    const [namaPengusul, setNamaPengusul] = useState("");
    const [judulBuku, setJudulBuku] = useState("");
    const [kategori, setKategori] = useState("Teknologi");
    const [alasan, setAlasan] = useState("");

    const [pesanError, setPesanError] = useState("");
    const [pesanSukses, setPesanSukses] = useState("");
    const [daftarUsulan, setDaftarUsulan] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        setPesanError("");
        setPesanSukses("");

        if (
        !namaPengusul.trim() ||
        !judulBuku.trim() ||
        !kategori.trim() ||
        !alasan.trim()
        ) {
        setPesanError("Mohon lengkapi seluruh isian formulir sebelum mengirimkan usulan.");
        return;
        }

        const usulanBaru = {
        id: Date.now(),
        namaPengusul,
        judulBuku,
        kategori,
        alasan,
        votes: 1
        };

        setDaftarUsulan([usulanBaru, ...daftarUsulan]);
        setPesanSukses("Terima kasih! Aspirasi dan usulan buku Anda telah kami catat.");

        setNamaPengusul("");
        setJudulBuku("");
        setKategori("Teknologi");
        setAlasan("");
    }

    function handleVote(id) {
        setDaftarUsulan((prev) =>
        prev.map((item) =>
            item.id === id ? { ...item, votes: item.votes + 1 } : item
        )
        );
    }

    return (
        <section className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h1 className="font-serif text-2xl font-bold text-zinc-100 mb-2">
            Titip Usulan Pustaka
            </h1>
            <p className="text-zinc-400 text-xs mb-6">
            Punya judul literatur yang ingin dibahas dan dihadirkan di Pustaka Senja? Sampaikan rekomendasi Anda.
            </p>

            {pesanError && (
            <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                ⚠️ {pesanError}
            </div>
            )}

            {pesanSukses && (
            <div className="mb-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                ✓ {pesanSukses}
            </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                Nama Pengusul
                </label>
                <input
                type="text"
                placeholder="Masukkan nama Anda"
                value={namaPengusul}
                onChange={(e) => setNamaPengusul(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                />
            </div>

            <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                Judul Pustaka yang Diusulkan
                </label>
                <input
                type="text"
                placeholder="Judul buku & nama penulis (jika ada)"
                value={judulBuku}
                onChange={(e) => setJudulBuku(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                />
            </div>

            <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1">
                Kategori Disiplin
                </label>
                <select
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                >
                <option value="Teknologi">Teknologi</option>
                <option value="Fiksi">Fiksi</option>
                <option value="Pengembangan Diri">Pengembangan Diri</option>
                <option value="Lainnya">Lainnya</option>
                </select>
            </div>

            <div>
                <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-medium text-zinc-300">
                    Alasan Rekomendasi
                </label>
                <span className="text-[10px] text-zinc-500">
                    {alasan.length}/200 karakter
                </span>
                </div>
                <textarea
                rows={3}
                maxLength={200}
                placeholder="Mengapa karya ini penting untuk dibaca bersama..."
                value={alasan}
                onChange={(e) => setAlasan(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2 text-xs text-zinc-100 focus:outline-none focus:border-amber-500/70"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            >
                Kirim Rekomendasi
            </button>
            </form>
        </div>

        <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 space-y-2">
            <p className="text-[10px] uppercase tracking-wider font-semibold text-amber-400">
                Pratinjau Kartu Usulan
            </p>
            <div className="bg-zinc-950 border border-zinc-850 rounded-xl p-4 text-xs space-y-1">
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                {kategori}
                </span>
                <h4 className="font-serif font-semibold text-zinc-100 pt-1">
                {judulBuku || "Judul karya akan tampil di sini..."}
                </h4>
                <p className="text-zinc-400 text-[11px]">
                Diusulkan oleh: <span className="text-zinc-200">{namaPengusul || "Sahabat Pustaka"}</span>
                </p>
                <p className="text-zinc-500 italic text-[11px] pt-1 leading-relaxed">
                &quot;{alasan || "Alasan dan pandangan Anda mengenai buku ini akan tercantum di sini..."}&quot;
                </p>
            </div>
            </div>

            {daftarUsulan.length > 0 && (
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 space-y-3">
                <h2 className="font-serif text-sm font-bold text-zinc-100">
                Aspirasi Sahabat ({daftarUsulan.length})
                </h2>
                <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
                {daftarUsulan.map((item) => (
                    <div
                    key={item.id}
                    className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs flex justify-between items-start gap-2"
                    >
                    <div className="space-y-1 flex-1">
                        <span className="font-serif font-semibold text-amber-300 block">
                        {item.judulBuku}
                        </span>
                        <p className="text-zinc-400 text-[11px]">
                        Oleh {item.namaPengusul} ({item.kategori})
                        </p>
                    </div>
                    <button
                        onClick={() => handleVote(item.id)}
                        className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-amber-400 hover:bg-zinc-800 text-[11px] flex items-center gap-1 transition-colors"
                    >
                        <span>▲</span>
                        <span>{item.votes}</span>
                    </button>
                    </div>
                ))}
                </div>
            </div>
            )}
        </div>
        </section>
    );
    }