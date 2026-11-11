import BukuForm from "@/components/BukuForm";
import BukuTidakDitemukan from "@/components/BukuTidakDitemukan";
import pool from "@/lib/db";
import { parseId } from "@/lib/validasi";
import { ubahBuku } from "../../actions";

export const dynamic = "force-dynamic";

const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";

export default async function EditBukuPage({ params }) {
  const { id } = await params;

  const idAngka = parseId(id);
  let buku = null;
  if (idAngka !== null) {
    const { rows } = await pool.query("SELECT * FROM buku WHERE id = $1", [idAngka]);
    buku = rows[0] ?? null;
  }

  if (!buku) return <BukuTidakDitemukan id={id} />;

  const nilaiAwal = {
    judul: buku.judul,
    penulis: buku.penulis,
    kategori: buku.kategori,
    tahun: String(buku.tahun),
    tersedia: String(buku.tersedia),
    sinopsis: buku.sinopsis,
  };

  return (
    <section className={`${raised} mx-auto max-w-xl p-1`}>
      <div className="bg-linear-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1 text-sm font-bold text-[#0b2a55]">
        Edit_Buku_{buku.id}.exe
      </div>
      <div className="space-y-4 p-4">
        <div>
          <h1 className="text-2xl font-bold text-[#1b3c70]">Edit Buku #{buku.id}</h1>
          <p className="text-sm">Ubah informasi buku, lalu simpan perubahan.</p>
        </div>
        <BukuForm
          action={ubahBuku}
          awal={nilaiAwal}
          id={buku.id}
          coverSaatIni={buku.gambar}
          labelSubmit="Simpan Perubahan"
          hrefBatal={`/katalog/${buku.id}`}
        />
      </div>
    </section>
  );
}
