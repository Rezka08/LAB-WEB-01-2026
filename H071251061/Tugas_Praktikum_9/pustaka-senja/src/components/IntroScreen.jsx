    "use client";

    import { useState, useEffect } from "react";

    export default function IntroScreen() {
    const [show, setShow] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timerFade = setTimeout(() => {
        setFade(true);
        }, 2000);

        const timerHide = setTimeout(() => {
        setShow(false);
        }, 2700);

        return () => {
        clearTimeout(timerFade);
        clearTimeout(timerHide);
        };
    }, []);

    if (!show) return null;

    return (
        <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 transition-opacity duration-700 select-none ${
            fade ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        >
        <div className="relative flex flex-col items-center">
            <div className="absolute -inset-8 rounded-full bg-amber-500/10 blur-2xl animate-pulse" />

            <div className="relative w-20 h-20 rounded-2xl bg-zinc-900 border border-amber-500/40 flex items-center justify-center text-amber-400 font-serif font-bold text-4xl shadow-[0_0_35px_rgba(245,158,11,0.25)] animate-bounce transition-all">
            PS
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mt-6">
            Pustaka Senja
            </h1>

            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-500/60 to-transparent my-3" />

            <p className="text-[11px] uppercase tracking-[0.35em] text-amber-400/80 font-sans font-medium">
            Suaka Literasi
            </p>
        </div>
        </div>
    );
    }