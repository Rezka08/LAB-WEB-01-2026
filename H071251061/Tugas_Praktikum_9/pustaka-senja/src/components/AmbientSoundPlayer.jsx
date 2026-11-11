    "use client";

    import { useState, useRef } from "react";

    export default function AmbientSoundPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleSound = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        } else {
        audioRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch((err) => console.log("Gagal memutar audio:", err));
        }
    };

    return (
        <div className="relative flex items-center">
        <audio ref={audioRef} loop src="/audio/lofi-senja.mp3" />

        <button
            onClick={toggleSound}
            title={isPlaying ? "Jeda Musik Lo-Fi Senja" : "Putar Musik Lo-Fi Senja"}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 flex items-center gap-2 ${
            isPlaying
                ? "bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
                : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200"
            }`}
        >
            <span className={isPlaying ? "animate-spin" : ""}>🎵</span>
            <span className="hidden sm:inline">
            {isPlaying ? "Lo-Fi Senja: Aktif" : "Musik Lo-Fi Senja"}
            </span>
        </button>
        </div>
    );
    }