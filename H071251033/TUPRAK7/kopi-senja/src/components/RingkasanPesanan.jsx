function RingkasanPesanan({ keranjang, onTambah, onKurang }) {
  const totalHarga = keranjang.reduce(
    (sum, item) => sum + item.harga * item.jumlah,
    0
  );

  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-stone-200/80">
      <div className="flex items-center justify-between pb-3.5 border-b border-stone-100">
        <div>
          <h2 className="text-base font-bold text-stone-900 tracking-tight">
            Ringkasan Pesanan
          </h2>
          <p className="text-[11px] text-stone-400">Daftar item pesanan di meja Anda</p>
        </div>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-starbucks-soft text-starbucks-primary">
          {keranjang.length} Jenis
        </span>
      </div>

      {keranjang.length === 0 ? (
        <div className="py-10 text-center text-stone-400 text-xs">
          Belum ada item dipilih. Silakan klik <span className="font-semibold text-stone-600">+ Tambah</span> pada katalog.
        </div>
      ) : (
        <div className="mt-2 divide-y divide-stone-100">
          <div className="max-h-64 overflow-y-auto divide-y divide-stone-100 pr-1">
            {keranjang.map((item) => (
              <div key={item.id} className="py-3 flex justify-between items-center gap-2">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-stone-900 text-xs truncate">
                    {item.nama}
                  </p>
                  <p className="text-[11px] text-stone-400 font-medium">
                    Rp {item.harga.toLocaleString("id-ID")}
                  </p>
                </div>

                {/* Kontrol Kuantitas */}
                <div className="flex items-center gap-2 bg-[#F4F9F6] p-1 rounded-xl border border-emerald-100">
                  <button
                    type="button"
                    onClick={() => onKurang(item.id)}
                    className="w-5 h-5 flex items-center justify-center rounded-lg bg-white text-stone-700 hover:bg-stone-200 text-xs font-bold shadow-sm transition"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold w-4 text-center text-stone-900">
                    {item.jumlah}
                  </span>
                  <button
                    type="button"
                    onClick={() => onTambah(item)}
                    className="w-5 h-5 flex items-center justify-center rounded-lg bg-starbucks-primary text-white hover:bg-starbucks-hover text-xs font-bold shadow-sm transition"
                  >
                    +
                  </button>
                </div>

                <div className="text-right min-w-[70px]">
                  <p className="text-xs font-bold text-stone-900">
                    Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 mt-2 flex justify-between items-baseline">
            <span className="font-semibold text-stone-500 text-xs">Total Pesanan</span>
            <span className="font-extrabold text-lg text-starbucks-primary tracking-tight">
              Rp {totalHarga.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default RingkasanPesanan;