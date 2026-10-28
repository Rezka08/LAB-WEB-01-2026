import { useState } from 'react'

export default function MenuCard({
  nama,
  kategori,
  deskripsi,
  harga,
  tersedia,
  jumlah,
  gambar,
  onTambah,
}) {
  // Setiap kartu punya state sendiri, sehingga membuka detail tidak memengaruhi menu lain
  const [tampilDetail, setTampilDetail] = useState(false)

  return (
    <article
      className={`group flex flex-col rounded-2xl bg-putih p-5 shadow-sm transition duration-300 ${tersedia
          ? 'hover:-translate-y-1 hover:shadow-lg'
          : 'opacity-60'
        }`}
    >
      {/* Gambar Menu atau Placeholder (Disesuaikan untuk rasio potret 4:5) */}
      <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-xl bg-abu-muda">
        {gambar ? (
          <img
            src={gambar}
            alt={nama}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 bg-abu-muda text-merah">
            <svg
              className="h-10 w-10 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 2v2M10 2v2M14 2v2"
              />
            </svg>
            <span className="text-xs font-medium text-abu">Tanamera Coffee</span>
          </div>
        )}

        {/* Label Status Habis di Pojok Kiri Atas */}
        {!tersedia && (
          <span className="absolute left-3 top-3 rounded-full bg-hitam/80 px-2.5 py-1 text-xs font-medium text-putih shadow-sm backdrop-blur-sm">
            Habis
          </span>
        )}

        {/* Badge Jumlah Pesanan di Pojok Kanan Atas */}
        {jumlah > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-merah px-2.5 py-1 text-xs font-semibold text-putih shadow-md">
            x{jumlah}
          </span>
        )}
      </div>

      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-serif text-lg font-bold text-hitam">{nama}</h3>
          <p className="text-xs text-abu">{kategori}</p>
        </div>
      </div>

      <p className="mt-2 font-semibold text-merah">
        Rp {harga.toLocaleString('id-ID')}
      </p>

      {tampilDetail && (
        <p className="mt-3 text-sm leading-relaxed text-hitam/80">{deskripsi}</p>
      )}

      <div className="mt-auto flex gap-2 pt-4">
        <button
          type="button"
          onClick={() => setTampilDetail((prev) => !prev)}
          aria-expanded={tampilDetail}
          className="rounded-full border border-garis px-4 py-2 text-sm font-medium text-hitam transition hover:bg-abu-muda"
        >
          {tampilDetail ? 'Tutup' : 'Detail'}
        </button>

        {tersedia ? (
          <button
            type="button"
            onClick={onTambah}
            className="flex-1 translate-y-2 rounded-full bg-hitam px-4 py-2 text-sm font-semibold text-putih opacity-0 transition duration-300 hover:bg-merah hover:text-putih group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100"
          >
            Tambah
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="flex-1 cursor-not-allowed rounded-full bg-hitam/30 px-4 py-2 text-sm font-semibold text-putih"
          >
            Habis
          </button>
        )}
      </div>
    </article>
  )
}
