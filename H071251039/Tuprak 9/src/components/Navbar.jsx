"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { useBookmark } from "@/context/BookmarkContext";

const daftarMenu = [
  { nama: "Beranda", path: "/" },
  { nama: "Katalog", path: "/katalog" },
  { nama: "Jelajahi 3D", path: "/game" },
  { nama: "Usulan Buku", path: "/usulan" },
];

function cekAktif(pathname, path) {
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

function Navbar() {
  const pathname = usePathname();
  const { totalFavorit } = useBookmark();

  return (
    <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-sun text-on-fill">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="border-[3px] border-ink shadow-brut-sm transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
            <Logo size={42} />
          </div>
          <span className="text-xl font-black tracking-tight text-on-fill">Pustaka Senja</span>
        </Link>

        <ul className="flex flex-wrap items-center gap-3">
          {daftarMenu.map((item) => {
            const aktif = cekAktif(pathname, item.path);
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  aria-current={aktif ? "page" : undefined}
                  className={
                    aktif
                      ? "flex items-center gap-1.5 border-[3px] border-ink bg-ink px-4 py-2 font-bold text-paper translate-x-[3px] translate-y-[3px] shadow-none"
                      : "flex items-center gap-1.5 border-[3px] border-ink bg-surface px-4 py-2 font-bold text-ink shadow-brut-sm transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                  }
                >
                  <span>{item.nama}</span>
                  {item.path === "/katalog" && totalFavorit > 0 && (
                    <span
                      title={`${totalFavorit} buku tersimpan`}
                      className="border border-current px-1 py-0.2 text-[10px] font-mono font-bold"
                    >
                      ★{totalFavorit}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
          <li className="ml-1">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
