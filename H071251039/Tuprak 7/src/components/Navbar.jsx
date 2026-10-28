export default function Navbar({
  kategoriList,
  kategoriAktif,
  onPilihKategori,
  totalItem,
  totalHarga,
}) {
  return (
    <header className="sticky top-0 z-10 bg-hitam text-putih shadow-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 pb-3 pt-5">
        <div>
          <h1>
            <img
              src="/images/logo.png"
              alt="Tanamera Coffee"
              className="h-8 w-auto object-contain sm:h-10"
            />
          </h1>
          <p className="mt-1 text-xs text-putih/70 sm:text-sm">
            Pilih menu dan pesan dari meja Anda
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-full bg-putih/10 px-5 py-2 text-sm transition-all duration-300 ease-in-out">
          <span>{totalItem} item</span>
          <span className="font-semibold text-merah">
            Rp {totalHarga.toLocaleString('id-ID')}
          </span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-6xl justify-center overflow-x-auto px-6 pb-4">
        <div className="flex gap-1 rounded-full bg-putih/10 p-1 shadow-inner">
          {kategoriList.map((kategori) => {
            const aktif = kategori === kategoriAktif
            return (
              <button
                key={kategori}
                type="button"
                aria-pressed={aktif}
                onClick={() => onPilihKategori(kategori)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-merah ${
                  aktif
                    ? 'bg-merah text-putih shadow-md'
                    : 'text-putih/80 hover:bg-putih/10 hover:text-putih'
                }`}
              >
                {kategori}
              </button>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
