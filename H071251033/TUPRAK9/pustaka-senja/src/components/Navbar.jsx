"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { nama: "Beranda", path: "/" },
  { nama: "Katalog", path: "/katalog" },
  { nama: "Tersimpan", path: "/tersimpan" },
  { nama: "Usulan Buku", path: "/usulan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuTerbuka, setMenuTerbuka] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#C9B6E4]/95 backdrop-blur-md border-b border-[#B8A2D6] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setMenuTerbuka(false)}
          className="text-2xl font-bold tracking-tight text-[#382933] flex items-center gap-2.5"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-[#E06D53] inline-block shadow-sm"></span>
          <span style={{ fontFamily: "var(--font-fraunces)" }}>Pustaka Senja</span>
        </Link>

        {/* Tombol Burger (Hanya muncul di Mobile) */}
        <button
          type="button"
          onClick={() => setMenuTerbuka(!menuTerbuka)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-xl bg-[#F5EFEB]/80 border border-[#B8A2D6] text-[#382933] hover:bg-white transition"
        >
          {menuTerbuka ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-3">
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-[#FFF2CC] text-[#382933] font-bold shadow-sm border border-[#FFE699]"
                        : "text-[#382933]/85 hover:text-[#382933] hover:bg-white/30"
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

      {/* Dropdown Menu Mobile */}
      {menuTerbuka && (
        <nav className="md:hidden px-6 pb-4 pt-2 border-t border-[#B8A2D6]/60 bg-[#C9B6E4]">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setMenuTerbuka(false)}
                    className={`block text-sm font-semibold px-4 py-2.5 rounded-xl transition-all ${
                      isActive
                        ? "bg-[#FFF2CC] text-[#382933] font-bold shadow-sm border border-[#FFE699]"
                        : "text-[#382933]/90 hover:bg-white/30"
                    }`}
                  >
                    {item.nama}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}