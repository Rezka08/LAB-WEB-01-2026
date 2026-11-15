import Link from "next/link";

const daftarTautan = [
  { nama: "Beranda", path: "/" },
  { nama: "Katalog", path: "/katalog" },
  { nama: "Usulan Buku", path: "/usulan" },
];

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-paper dark:bg-surface dark:text-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-sm">© 2026 Pustaka Senja. Dibangun dengan Next.js dan Tailwind CSS.</p>
        <ul className="flex gap-5 font-mono text-sm">
          {daftarTautan.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="underline underline-offset-4 hover:text-sun">
                {item.nama}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
