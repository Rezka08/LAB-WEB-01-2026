"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X, Radio } from "lucide-react";

const navItems = [
  { label: "Beranda", path: "/" },
  { label: "Katalog", path: "/katalog" },
  { label: "Usulan Buku", path: "/usulan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(path) {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-400/25 bg-[#020604]/90 backdrop-blur-xl">
      <div className="container flex min-h-[76px] items-center justify-between gap-4">
        <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-300/70 bg-emerald-300/10 text-emerald-300 shadow-[0_0_18px_#42ff9138]">
            <Terminal size={21} />
          </span>
          <span>
            <b className="block text-sm tracking-[.16em] text-white">PUSTAKA <span className="neon">SENJA</span></b>
            <small className="font-mono text-[8px] tracking-[.25em] text-emerald-100/45">CYBER ARCHIVE // NODE 01</small>
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-1 rounded-lg border border-emerald-300/20 bg-black/30 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              aria-current={isActive(item.path) ? "page" : undefined}
              className={`nav-link ${isActive(item.path) ? "nav-active" : ""}`}
            >
              <span className="text-emerald-500">›</span>
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 font-mono text-[9px] text-emerald-300 sm:flex">
          <Radio size={13} /> SYSTEM ONLINE
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-emerald-300/40 text-emerald-200 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {menuOpen && (
        <nav aria-label="Navigasi mobile" className="border-t border-emerald-300/20 bg-[#030b07] p-3 md:hidden">
          <div className="container flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`rounded-md px-4 py-3 font-mono text-xs ${
                  isActive(item.path) ? "bg-emerald-300/10 text-emerald-200" : "text-slate-300 hover:bg-white/5"
                }`}
              >
                › {item.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
