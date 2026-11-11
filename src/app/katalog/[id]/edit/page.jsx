import Link from "next/link";
import { notFound } from "next/navigation";
import pool from "@/lib/db";
import EditBukuForm from "@/EditBukuForm";

export const dynamic = "force-dynamic";

export default async function EditBukuPage({ params }) {
  const { id } = await params;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) {
    notFound();
  }

  // Raw SQL query untuk mengambil data buku berdasarkan ID
  const result = await pool.query("SELECT * FROM buku WHERE id = $1;", [parsedId]);

  if (result.rows.length === 0) {
    notFound();
  }

  const buku = result.rows[0];

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold text-ink/70">
        <Link href="/" className="underline underline-offset-4 hover:text-sun">
          Beranda
        </Link>
        <span>/</span>
        <Link href="/katalog" className="underline underline-offset-4 hover:text-sun">
          Katalog
        </Link>
        <span>/</span>
        <Link href={`/katalog/${buku.id}`} className="underline underline-offset-4 hover:text-sun">
          {buku.judul}
        </Link>
        <span>/</span>
        <span className="text-ink">Edit</span>
      </nav>

      <header className="border-b-[3px] border-ink pb-6">
        <div className="flex items-center gap-3">
          <span className="border-2 border-ink bg-sun px-2.5 py-1 font-mono text-xs font-bold text-on-fill">
            Buku #{buku.id}
          </span>
          <span className="font-mono text-xs font-bold text-ink/60">Operasi Update</span>
        </div>
        <h1 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Edit Informasi Buku</h1>
        <p className="mt-2 text-base text-ink/80">
          Ubah detail buku di bawah ini. Perubahan akan disimpan langsung ke database PostgreSQL menggunakan query UPDATE.
        </p>
      </header>

      <div className="border-[3px] border-ink bg-surface p-6 shadow-brut md:p-8">
        <EditBukuForm buku={buku} />
      </div>
    </div>
  );
}

