import Link from "next/link";
import TambahBukuForm from "@/components/TambahBukuForm";

export default function TambahBukuPage() {
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
        <span className="text-ink">Tambah Buku</span>
      </nav>

      <header className="border-b-[3px] border-ink pb-6">
        <div className="flex items-center gap-3">
          <span className="border-2 border-ink bg-sun px-2.5 py-1 font-mono text-xs font-bold text-on-fill">
            Koleksi Baru
          </span>
          <span className="font-mono text-xs font-bold text-ink/60">Operasi Create (INSERT INTO)</span>
        </div>
        <h1 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">Tambah Buku ke Koleksi</h1>
        <p className="mt-2 text-base text-ink/80">
          Isi formulir di bawah ini untuk menambahkan buku baru ke basis data PostgreSQL Pustaka Senja.
        </p>
      </header>

      <div className="border-[3px] border-ink bg-surface p-6 shadow-brut md:p-8">
        <TambahBukuForm />
      </div>
    </div>
  );
}

