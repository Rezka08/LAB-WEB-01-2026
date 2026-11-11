"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const daftarMenu = [
    { nama: "Beranda", path: "/" },
    { nama: "Katalog", path: "/katalog" },
    { nama: "Usulan Buku", path: "/usulan" },
    ];

const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";
const sunken = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080,inset_-2px_-2px_#e8e4da,inset_2px_2px_#0a0a0a]";

    function Navbar() {
    const pathname = usePathname();

    return (
        <nav className={`${raised} sticky top-0 z-10 p-1`}>
        <div className="flex items-center justify-between bg-linear-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1">
            <Link href="/" className="text-sm font-bold text-[#0b2a55]">
            📚 Pustaka Senja
            </Link>
            <div className="flex gap-1" aria-hidden="true">
            <span className={`${raised} grid h-5 w-5 place-items-center text-xs`}>_</span>
            <span className={`${raised} grid h-5 w-5 place-items-center text-xs`}>□</span>
            <span className={`${raised} grid h-5 w-5 place-items-center text-xs`}>×</span>
            </div>
        </div>
        <ul className="flex flex-wrap gap-1 pt-1">
            {daftarMenu.map((item) => {
            const isActive =
                item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
                <li key={item.path}>
                <Link
                    href={item.path}
                    className={`block px-4 py-1 text-sm ${
                    isActive
                        ? `${sunken} font-bold underline underline-offset-4`
                        : `${raised} hover:bg-[#e8e4da]`
                    }`}
                >
                    {item.nama}
                </Link>
                </li>
            );
            })}
        </ul>
        </nav>
    );
}

export default Navbar;
