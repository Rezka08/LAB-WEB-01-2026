    "use client";

    import { useState, useEffect } from "react";
    import { useRouter } from "next/navigation";
    import { dataBuku } from "@/data/dataBuku";

    export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            setIsOpen((prev) => !prev);
        }
        if (e.key === "Escape") {
            setIsOpen(false);
        }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    if (!isOpen) return null;

    const results = dataBuku.filter(
        (b) =>
        b.judul.toLowerCase().includes(query.toLowerCase()) ||
        b.penulis.toLowerCase().includes(query.toLowerCase()) ||
        b.kategori.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="fixed inset-0 z-[110] bg-black/75 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
        <div className="fixed inset-0" onClick={() => setIsOpen(false)} />
        <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10">
            <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
            <span className="text-amber-400 font-bold">🔍</span>
            <input
                type="text"
                autoFocus
                placeholder="Cari buku, penulis, atau kategori... (Tekan Esc untuk keluar)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none"
            />
            <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-1 rounded font-mono">
                ESC
            </span>
            </div>

            <div className="max-h-72 overflow-y-auto p-2 divide-y divide-zinc-800/40">
            {results.length > 0 ? (
                results.map((buku) => (
                <button
                    key={buku.id}
                    onClick={() => {
                    setIsOpen(false);
                    router.push(`/katalog/${buku.id}`);
                    }}
                    className="w-full text-left p-3 rounded-lg hover:bg-zinc-800/80 transition-colors flex items-center justify-between group"
                >
                    <div>
                    <p className="font-serif text-xs font-semibold text-zinc-200 group-hover:text-amber-300">
                        {buku.judul}
                    </p>
                    <p className="text-[11px] text-zinc-500">
                        {buku.penulis} &bull; {buku.kategori}
                    </p>
                    </div>
                    <span className="text-[10px] text-amber-400/80 font-mono">
                    #{buku.id}
                    </span>
                </button>
                ))
            ) : (
                <div className="p-6 text-center text-xs text-zinc-500">
                Tidak ada hasil yang ditemukan untuk &quot;{query}&quot;
                </div>
            )}
            </div>
        </div>
        </div>
    );
    }