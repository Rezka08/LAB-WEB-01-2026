import BukuForm from "@/components/BukuForm";
import { tambahBuku } from "../actions";

const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";

const nilaiAwal = {
  judul: "",
  penulis: "",
  kategori: "",
  tahun: "",
  tersedia: "true",
  sinopsis: "",
};

export default function TambahBukuPage() {
  return (
    <section className={`${raised} mx-auto max-w-xl p-1`}>
      <div className="bg-linear-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1 text-sm font-bold text-[#0b2a55]">
        Tambah_Buku.exe
      </div>
      <div className="space-y-4 p-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1b3c70]">Tambah Buku</h1>
          <p className="text-sm">Tambahkan judul baru ke koleksi Pustaka Senja.</p>
        </div>
        <BukuForm
          action={tambahBuku}
          awal={nilaiAwal}
          labelSubmit="Simpan Buku"
          hrefBatal="/katalog"
        />
      </div>
    </section>
  );
}
