"use client";

import Link from "next/link";
import { useRole } from "@/context/RoleContext";
import TombolHapus from "@/components/TombolHapus";
import { hapusBukuAction } from "@/app/katalog/actions";

export default function AdminDetailControls({ bukuId }) {
    const { role } = useRole();

    if (role !== "admin") return null;

    return (
        <div className="flex items-center gap-2">
        <Link
            href={`/katalog/${bukuId}/edit`}
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-zinc-700 transition-all"
        >
            ✏️ Edit Buku
        </Link>
        <TombolHapus id={bukuId} hapusAction={hapusBukuAction} />
        </div>
    );
}