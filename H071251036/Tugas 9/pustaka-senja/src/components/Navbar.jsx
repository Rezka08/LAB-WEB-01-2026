"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const menus = [{ label: "Beranda", path: "/" }, { label: "Katalog", path: "/katalog" }, { label: "Usulan Buku", path: "/usulan" }];
export default function Navbar() {
  const pathname = usePathname();
  return <header className="sticky top-0 z-50 border-b border-[#e9dfd2]/80 bg-[#fbf8f2]/90 backdrop-blur-xl">
    <nav className="container-shell flex h-[76px] items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#493326] text-xl text-[#f8ead6] shadow-sm">☕</span>
        <span><span className="block font-serif text-xl font-bold tracking-tight text-[#3e2c22]">Pustaka Senja</span><span className="block text-[10px] font-semibold uppercase tracking-[.22em] text-[#a17d5d]">Ruang baca & cerita</span></span>
      </Link>
      <div className="flex items-center gap-1 sm:gap-2">{menus.map((menu) => {
        const active = menu.path === "/" ? pathname === "/" : pathname === menu.path || pathname.startsWith(`${menu.path}/`);
        return <Link key={menu.path} href={menu.path} className={`rounded-full px-3 py-2 text-xs font-semibold transition sm:px-5 sm:text-sm ${active ? "bg-[#493326] text-[#fff8ed] shadow-sm" : "text-[#786657] hover:bg-[#efe7dc] hover:text-[#3e2c22]"}`}>{menu.label}</Link>;
      })}</div>
    </nav>
  </header>;
}
