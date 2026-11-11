import FormBuku from "@/components/FormBuku";
import { tambahBuku } from "@/app/katalog/actions";
export default function TambahBukuPage() {
  return <div className="mx-auto max-w-3xl"><p className="eyebrow">ADD TO THE SHELF</p><h1 className="section-title mt-2">Tambahkan buku.</h1><p className="mb-8 mt-3 text-sm leading-6 text-[#827161]">Lengkapi informasi buku baru untuk koleksi Pustaka Senja.</p><FormBuku action={tambahBuku} /></div>;
}
