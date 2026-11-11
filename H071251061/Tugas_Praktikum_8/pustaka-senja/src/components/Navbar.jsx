    "use client";

    import { useState } from "react";
    import Link from "next/link";
    import { usePathname } from "next/navigation";
    import AmbientSoundPlayer from "@/components/AmbientSoundPlayer";

    const navItems = [
    { nama: "Beranda", path: "/" },
    { nama: "Katalog Buku", path: "/katalog" },
    { nama: "Usulan Buku", path: "/usulan" }
    ];

    export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-700/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold text-xl group-hover:border-amber-400 group-hover:scale-105 transition-all">
                PS
            </div>
            <div>
                <span className="font-serif text-xl font-bold tracking-tight text-zinc-100 group-hover:text-amber-300 transition-colors block">
                Pustaka Senja
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-amber-500/80 block -mt-1 font-sans font-medium">
                Suaka Literasi
                </span>
            </div>
            </Link>

            {/* Desktop Menu & Ambient Player */}
            <div className="hidden md:flex items-center gap-4">
            <AmbientSoundPlayer />
            <nav>
                <ul className="flex items-center gap-2">
                {navItems.map((item) => {
                    const isActive =
                    item.path === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.path);

                    return (
                    <li key={item.path}>
                        <Link
                        href={item.path}
                        className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 block ${
                            isActive
                            ? "text-amber-300 bg-amber-500/10 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                            : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
                        }`}
                        >
                        {item.nama}
                        </Link>
                    </li>
                    );
                })}
                </ul>
            </nav>
            </div>

            {/* Mobile Header Right */}
            <div className="md:hidden flex items-center gap-2">
            <AmbientSoundPlayer />
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 transition-colors"
                aria-label="Toggle Navigation Menu"
            >
                {isOpen ? "✕" : "☰"}
            </button>
            </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isOpen && (
            <nav className="md:hidden border-b border-zinc-800 bg-zinc-950 px-6 py-4 space-y-2">
            {navItems.map((item) => {
                const isActive =
                item.path === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.path);

                return (
                <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                        ? "text-amber-300 bg-amber-500/10 border border-amber-500/30"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                    }`}
                >
                    {item.nama}
                </Link>
                );
            })}
            </nav>
        )}
        </header>
    );
    }