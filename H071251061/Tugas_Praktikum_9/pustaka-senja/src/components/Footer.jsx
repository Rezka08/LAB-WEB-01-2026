    export default function Footer() {
    return (
        <footer className="mt-auto bg-zinc-950 border-t border-zinc-800/80 py-8 text-zinc-500 text-xs">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-amber-400 text-sm">
                Pustaka Senja
            </span>
            <span>&bull; Ruang Baca & Suaka Literasi</span>
            </div>
            <p className="text-center sm:text-right text-zinc-500">
            &copy; 2026 Pustaka Senja.
            </p>
        </div>
        </footer>
    );
    }