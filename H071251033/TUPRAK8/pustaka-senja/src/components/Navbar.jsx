"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { nama: "Beranda", path: "/" },
  { nama: "Katalog", path: "/katalog" },
  { nama: "Usulan Buku", path: "/usulan" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#C9B6E4]/90 backdrop-blur-md border-b border-[#B8A2D6] shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#382933] flex items-center gap-2.5"
        >
          <span className="w-3.5 h-3.5 rounded-full bg-[#E06D53] inline-block shadow-sm"></span>
          <span style={{ fontFamily: "var(--font-fraunces)" }}>Pustaka Senja</span>
        </Link>

        <nav>
          <ul className="flex items-center gap-2 sm:gap-4">
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.path);

              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`text-sm sm:text-base font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
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
    </header>
  );
}