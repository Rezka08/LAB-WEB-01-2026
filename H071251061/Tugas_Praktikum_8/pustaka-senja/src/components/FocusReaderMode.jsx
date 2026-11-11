    "use client";

    import { useState } from "react";

    export default function FocusReaderMode({ children }) {
    const [isFocusMode, setIsFocusMode] = useState(false);

    return (
        <div className="relative">
        <div className="flex justify-end mb-3">
            <button
            onClick={() => setIsFocusMode(!isFocusMode)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isFocusMode
                ? "bg-amber-500 text-zinc-950 font-bold border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-amber-300"
            }`}
            >
            {isFocusMode ? "☀️ Keluar Mode Fokus" : "💡 Lampu Fokus Baca"}
            </button>
        </div>

        {isFocusMode && (
            <div className="fixed inset-0 z-[90] bg-black/92 backdrop-blur-md pointer-events-none transition-opacity duration-500" />
        )}

        <div className={isFocusMode ? "relative z-[95] shadow-[0_0_50px_rgba(245,158,11,0.15)] rounded-xl" : ""}>
            {children}
        </div>
        </div>
    );
    }