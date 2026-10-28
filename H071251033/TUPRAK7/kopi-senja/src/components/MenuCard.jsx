import { useState } from "react";

function MenuCard({ item, onTambah }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-emerald-300/80 transition-all flex flex-col justify-between group">
      <div>
        {/* Gambar Menu */}
        <div className="relative h-44 w-full overflow-hidden bg-stone-100">
          <img
            src={item.gambar}
            alt={item.nama}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              !item.tersedia ? "grayscale opacity-60" : ""
            }`}
          />
          <div className="absolute top-3 left-3">
            <span className="text-[10px] font-light tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-stone-700 shadow-sm">
              {item.kategori}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span
              className={`text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-sm ${
                item.tersedia
                  ? "bg-starbucks-soft text-starbucks-primary font-medium"
                  : "bg-stone-800/80 text-white font-light"
              }`}
            >
              {item.tersedia ? "Tersedia" : "Habis"}
            </span>
          </div>
        </div>

        {/* Konten Menu */}
        <div className="p-4">
          <h3 className="font-medium text-stone-900 text-base tracking-tight leading-snug">
            {item.nama}
          </h3>

          <p className="text-starbucks-primary font-semibold text-sm mt-1 tracking-wide">
            Rp {item.harga.toLocaleString("id-ID")}
          </p>

          <button
            type="button"
            onClick={() => setShowDetail(!showDetail)}
            className="text-[11px] font-light tracking-wide text-stone-400 hover:text-starbucks-primary mt-2.5 inline-flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>{showDetail ? "Tutup Informasi" : "Informasi Menu"}</span>
            <span className="text-[9px]">{showDetail ? "▲" : "▼"}</span>
          </button>

          {showDetail && (
            <p className="text-xs text-stone-500 font-light bg-[#F9FAF9] p-2.5 rounded-xl mt-2 border border-stone-100 leading-relaxed">
              {item.deskripsi}
            </p>
          )}
        </div>
      </div>

      {/* Tombol Pesan */}
      <div className="p-4 pt-0">
        <button
          type="button"
          disabled={!item.tersedia}
          onClick={() => onTambah(item)}
          className={`w-full py-2 px-4 rounded-full text-xs tracking-wider transition-all ${
            item.tersedia
              ? "bg-starbucks-primary hover:bg-starbucks-hover text-white font-light shadow-sm active:scale-[0.98] cursor-pointer"
              : "bg-stone-100 text-stone-400 cursor-not-allowed font-light"
          }`}
        >
          {item.tersedia ? "+ Tambah" : "Menu Habis"}
        </button>
      </div>
    </div>
  );
}

export default MenuCard;