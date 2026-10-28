function Navbar({ logo, kategoriAktif, onSelectKategori, totalItem, totalHarga }) {
  const categories = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

  return (
    <header className="sticky top-0 z-40 bg-starbucks-primary text-white shadow-sm transition-all">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Logo Starbucks & Identitas */}
        <div className="flex items-center gap-3.5">
            <img src={logo} alt="Starbucks Logo" className="w-12 h-12 object-contain rounded-full shadow-sm bg-white p-0.5 shrink-0"/>
            <div>
                <h1 className="text-lg lg:text-xl font-normal tracking-wide text-white leading-tight">
                    Starbucks Coffee
                </h1>
                <p className="text-[10px] font-light tracking-widest text-emerald-100/80 uppercase">
                Tablet Ordering System
                </p>
            </div>
        </div>

        {/* Ringkasan Cepat Pesanan */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></div>
          <div className="text-right">
            <p className="text-[10px] uppercase font-light tracking-widest text-emerald-100">
              Pesanan
            </p>
            <p className="text-xs sm:text-sm font-medium text-white tracking-wide">
              {totalItem} Item <span className="text-white/30 mx-1">|</span> Rp {totalHarga.toLocaleString("id-ID")}
            </p>
          </div>
        </div>
      </div>

      {/* Navigasi Kategori */}
      <div className="border-t border-white/10 bg-starbucks-hover">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-2 flex items-center gap-2 overflow-x-auto">
          {categories.map((kat) => {
            const isActive = kategoriAktif === kat;
            return (
              <button
                key={kat}
                type="button"
                onClick={() => onSelectKategori(kat)}
                className={`px-5 py-1.5 rounded-full text-xs tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-white text-starbucks-primary font-medium shadow-sm"
                    : "bg-transparent text-emerald-50/80 hover:bg-white/10 font-light"
                }`}
              >
                {kat}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Navbar;