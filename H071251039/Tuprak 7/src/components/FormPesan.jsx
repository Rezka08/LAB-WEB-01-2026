export default function FormPesan({
  namaPelanggan,
  nomorMeja,
  notifikasi,
  onNamaChange,
  onMejaChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-putih p-5 shadow-sm">
      <h2 className="font-serif text-xl font-bold text-hitam">Data Pemesan</h2>

      <label className="mt-4 block text-sm font-medium text-hitam">
        Nama
        <input
          type="text"
          value={namaPelanggan}
          onChange={(e) => onNamaChange(e.target.value)}
          placeholder="Contoh: Dimas"
          className="mt-1 w-full rounded-lg border border-garis bg-abu-muda/50 px-3 py-2 font-normal text-hitam placeholder:text-abu/60 focus:border-merah focus:outline-none focus:ring-2 focus:ring-merah/40"
        />
      </label>

      <label className="mt-4 block text-sm font-medium text-hitam">
        Nomor meja
        <input
          type="text"
          inputMode="numeric"
          value={nomorMeja}
          onChange={(e) => onMejaChange(e.target.value)}
          placeholder="Contoh: 7"
          className="mt-1 w-full rounded-lg border border-garis bg-abu-muda/50 px-3 py-2 font-normal text-hitam placeholder:text-abu/60 focus:border-merah focus:outline-none focus:ring-2 focus:ring-merah/40"
        />
      </label>

      {notifikasi && (
        <p
          role={notifikasi.tipe === 'error' ? 'alert' : 'status'}
          className={`mt-4 rounded-lg px-3 py-2 text-sm ${
            notifikasi.tipe === 'error'
              ? 'bg-merah/10 text-merah font-medium'
              : 'bg-merah/10 text-merah-gelap font-medium'
          }`}
        >
          {notifikasi.teks}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 w-full rounded-full bg-hitam py-3 font-semibold text-putih transition duration-300 hover:bg-merah hover:text-putih"
      >
        Kirim Pesanan
      </button>
    </form>
  )
}
