import pool from "@/lib/db";

// Halaman sementara untuk bukti koneksi PostgreSQL (F1). Boleh dihapus setelah screenshot.
export const dynamic = "force-dynamic";

const raised = "bg-[#dcd6c8] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#fff,inset_-2px_-2px_#808080,inset_2px_2px_#e8e4da]";
const sunken = "bg-white shadow-[inset_-1px_-1px_#fff,inset_1px_1px_#808080,inset_-2px_-2px_#e8e4da,inset_2px_2px_#0a0a0a]";

export default async function TesDbPage() {
  let rows = [];
  let galat = null;

  try {
    const hasil = await pool.query("SELECT id, judul FROM buku ORDER BY id");
    rows = hasil.rows;
  } catch (err) {
    // Hanya pesan umum yang ditampilkan; detail (bisa memuat kredensial) cukup di terminal.
    console.error("Tes koneksi gagal:", err.message);
    galat = "Koneksi ke database gagal. Periksa DATABASE_URL di .env.local dan pastikan PostgreSQL berjalan.";
  }

  return (
    <section className={`${raised} mx-auto max-w-xl p-1`}>
      <div className="bg-linear-to-r from-[#6fa8e0] to-[#b9d8f4] px-2 py-1 text-sm font-bold text-[#0b2a55]">
        Tes_Koneksi_DB.exe
      </div>
      <div className="space-y-3 p-4">
        {galat ? (
          <p role="alert" className={`${sunken} p-3 text-sm`}>❌ {galat}</p>
        ) : (
          <>
            <p className={`${sunken} p-3 text-sm font-bold`}>
              ✅ Terhubung ke Database: PostgreSQL. Jumlah buku di database: {rows.length}
            </p>
            <ol className={`${sunken} list-inside list-decimal p-3 text-sm`}>
              {rows.map((b) => (
                <li key={b.id}>{b.judul}</li>
              ))}
            </ol>
          </>
        )}
      </div>
    </section>
  );
}
