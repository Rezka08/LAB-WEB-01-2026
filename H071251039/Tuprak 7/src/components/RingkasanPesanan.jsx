export default function RingkasanPesanan({
  daftarPesanan,
  totalItem,
  totalHarga,
  onTambah,
  onKurangi,
}) {
  return (
    <section className="rounded-2xl bg-putih p-5 shadow-sm">
      <h2 className="font-serif text-xl font-bold text-hitam">Ringkasan Pesanan</h2>

      {daftarPesanan.length === 0 ? (
        <p className="mt-3 text-sm text-abu">
          Belum ada pesanan. Tekan Tambah pada menu yang Anda inginkan.
        </p>
      ) : (
        <ul className="mt-3 divide-y divide-garis">
          {daftarPesanan.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-3 py-3">
              <div>
                <p className="font-medium text-hitam">{item.nama}</p>
                <p className="text-xs text-abu">
                  Rp {item.harga.toLocaleString('id-ID')} × {item.jumlah}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onKurangi(item.id)}
                  aria-label={`Kurangi ${item.nama}`}
                  className="h-7 w-7 rounded-full border border-garis text-hitam transition hover:bg-abu-muda"
                >
                  −
                </button>
                <span className="w-5 text-center text-sm font-semibold text-hitam">{item.jumlah}</span>
                <button
                  type="button"
                  onClick={() => onTambah(item.id)}
                  aria-label={`Tambah ${item.nama}`}
                  className="h-7 w-7 rounded-full bg-hitam text-putih transition hover:bg-merah hover:text-putih"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex items-center justify-between border-t border-garis pt-4 font-semibold text-hitam">
        <span>Total ({totalItem} item)</span>
        <span className="text-merah">Rp {totalHarga.toLocaleString('id-ID')}</span>
      </div>
    </section>
  )
}
