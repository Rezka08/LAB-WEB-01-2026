export default function FormPesan({ namaPelanggan, nomorMeja, onNamaChange, onMejaChange, onSubmit, pesanError, pesanSukses, jumlahPesanan, totalHarga }) {
  return (
    <section className="rounded-3xl border border-[#E7E4D9] bg-[#F0F2E9] p-5 sm:p-7" aria-labelledby="form-title">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">Satu langkah lagi</p>
      <h2 id="form-title" className="mt-1 text-2xl font-black text-forest">Selesaikan pesanan</h2>
      <p className="mt-2 text-sm leading-6 text-gray-600">Isi data di bawah ini. Pesananmu akan kami siapkan dengan sepenuh hati.</p>

      {pesanSukses && (
        <div role="status" className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4">
          <p className="font-extrabold text-green-900">✓ Pesanan berhasil!</p>
          <p className="mt-1 text-sm leading-6 text-green-800">{pesanSukses}</p>
        </div>
      )}
      {pesanError && (
        <div role="alert" className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium leading-6 text-red-800">
          {pesanError}
        </div>
      )}

      <form className="mt-6 space-y-5" onSubmit={onSubmit} noValidate>
        <div>
          <label htmlFor="nama-pelanggan" className="mb-2 block text-sm font-bold text-forest">Nama pelanggan</label>
          <input
            id="nama-pelanggan"
            name="namaPelanggan"
            type="text"
            autoComplete="name"
            value={namaPelanggan}
            onChange={(event) => onNamaChange(event.target.value)}
            placeholder="Masukkan nama kamu"
            className="w-full rounded-2xl border border-[#D8DCCF] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-leaf focus:ring-4 focus:ring-leaf/10"
          />
        </div>
        <div>
          <label htmlFor="nomor-meja" className="mb-2 block text-sm font-bold text-forest">Nomor meja</label>
          <input
            id="nomor-meja"
            name="nomorMeja"
            type="text"
            inputMode="numeric"
            value={nomorMeja}
            onChange={(event) => onMejaChange(event.target.value)}
            placeholder="Contoh: 05"
            className="w-full rounded-2xl border border-[#D8DCCF] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-leaf focus:ring-4 focus:ring-leaf/10"
          />
        </div>

        <div className="rounded-2xl border border-[#DCE1D5] bg-white/70 p-4">
          <div className="flex justify-between gap-3 text-sm">
            <span className="text-gray-500">Jumlah pesanan</span>
            <span className="font-bold text-forest">{jumlahPesanan} item</span>
          </div>
          <div className="mt-2 flex justify-between gap-3 text-sm">
            <span className="text-gray-500">Total pembayaran</span>
            <span className="font-extrabold text-forest">{totalHarga}</span>
          </div>
        </div>

        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-forest px-5 py-4 font-extrabold text-white shadow-lg shadow-forest/10 transition hover:bg-leaf focus:outline-none focus:ring-4 focus:ring-leaf/20">
          Kirim pesanan <span aria-hidden="true">→</span>
        </button>
        <p className="text-center text-xs leading-5 text-gray-500">Pastikan nama, nomor meja, dan menu sudah benar sebelum mengirim.</p>
      </form>
    </section>
  );
}