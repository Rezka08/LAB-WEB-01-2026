export default function RingkasanPesanan({ menus, keranjang, jumlahPesanan, totalHarga, formatRupiah, onUbahJumlah }) {
  const itemDipesan = menus.filter((menu) => (keranjang[menu.id] || 0) > 0);

  return (
    <section className="rounded-3xl border border-[#E7E4D9] bg-white p-5 shadow-soft sm:p-7" aria-labelledby="ringkasan-title">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf">Pilihanmu</p>
          <h2 id="ringkasan-title" className="mt-1 text-2xl font-black text-forest">Ringkasan pesanan</h2>
        </div>
        <span className="flex h-11 min-w-11 items-center justify-center rounded-2xl bg-mint px-3 font-black text-forest">{jumlahPesanan}</span>
      </div>

      <div className="mt-6 space-y-4">
        {itemDipesan.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#D9DDD3] bg-cream/70 px-5 py-9 text-center">
            <span className="text-4xl" aria-hidden="true">🧺</span>
            <p className="mt-3 font-bold text-forest">Belum ada pesanan</p>
            <p className="mt-1 text-sm text-gray-500">Pilih menu yang kamu suka untuk mulai.</p>
          </div>
        ) : itemDipesan.map((menu) => (
          <div key={menu.id} className="flex items-center gap-3 border-b border-[#F0EEE7] pb-4 last:border-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream text-2xl">{menu.emoji}</div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-bold text-forest">{menu.nama}</p>
              <p className="mt-1 text-xs text-gray-500">{formatRupiah(menu.harga)} / item</p>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-cream p-1">
              <button type="button" aria-label={`Kurangi ${menu.nama}`} onClick={() => onUbahJumlah(menu.id, -1)} className="flex h-7 w-7 items-center justify-center rounded-full bg-white font-bold text-forest shadow-sm hover:bg-mint">−</button>
              <span className="w-4 text-center text-sm font-bold text-forest">{keranjang[menu.id]}</span>
              <button type="button" aria-label={`Tambah ${menu.nama}`} onClick={() => onUbahJumlah(menu.id, 1)} className="flex h-7 w-7 items-center justify-center rounded-full bg-forest font-bold text-white hover:bg-leaf">+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl bg-forest p-5 text-white">
        <div className="flex items-center justify-between text-sm text-white/70">
          <span>Total item</span><span>{jumlahPesanan} item</span>
        </div>
        <div className="mt-3 flex items-end justify-between gap-3">
          <span className="text-sm font-semibold">Total pembayaran</span>
          <span className="text-2xl font-black text-lime-300">{formatRupiah(totalHarga)}</span>
        </div>
      </div>
      <p className="mt-3 text-xs leading-5 text-gray-400">Jumlah dan total dihitung langsung dari keranjang pesanan.</p>
    </section>
  );
}