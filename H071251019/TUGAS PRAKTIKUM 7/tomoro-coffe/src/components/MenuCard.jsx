import { useState } from "react";

function MenuCard({ nama, kategori, harga, tersedia, deskripsi, gambar, jumlah, onTambah }) {
    const [terbuka, setTerbuka] = useState(false);

    return (
        <>
        <article
            className={
            tersedia
                ? "flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm"
                : "flex flex-col overflow-hidden rounded-3xl bg-white/60 opacity-70"
            }
        >
            <img
            src={gambar}
            alt={nama}
            className={
                tersedia
                ? "aspect-4/3 w-full object-cover"
                : "aspect-4/3 w-full object-cover grayscale"
            }
            />
            <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-2">
                <div>
                <p className="text-xs font-semibold text-orange-tua">{kategori}</p>
                <h3 className="mt-1 text-lg font-bold">{nama}</h3>
                </div>
                {!tersedia && (
                <span className="rounded-full bg-arang px-3 py-1 text-xs font-semibold text-white">
                    Habis
                </span>
                )}
                {tersedia && jumlah > 0 && (
                <span className="rounded-full bg-orange-pumpkin px-3 py-1 text-xs font-semibold text-white">
                    {jumlah} dipesan
                </span>
                )}
            </div>

            <p className="mt-2 text-lg font-extrabold">
                Rp {harga.toLocaleString("id-ID")}
            </p>

            <div className="mt-auto flex gap-2 pt-4">
                <button
                onClick={() => setTerbuka(true)}
                className="rounded-full px-4 py-2 text-sm font-semibold ring-1 ring-black/15 hover:bg-black/5"
                >
                Lihat detail
                </button>
                <button
                onClick={onTambah}
                disabled={!tersedia}
                className="flex-1 rounded-full bg-orange-pumpkin px-4 py-2 text-sm font-bold text-white hover:bg-orange-tua disabled:cursor-not-allowed disabled:bg-black/20 disabled:text-black/40"
                >
                {tersedia ? "Tambah" : "Habis"}
                </button>
            </div>
            </div>
        </article>

        {terbuka && (
            <div
            onClick={() => setTerbuka(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            >
            <div
                onClick={(e) => e.stopPropagation()}
                className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white shadow-xl"
            >
                <div className="relative">
                <img
                    src={gambar}
                    alt={nama}
                    className={
                    tersedia
                        ? "aspect-16/10 w-full object-cover"
                        : "aspect-16/10 w-full object-cover grayscale"
                    }
                />
                <button
                    onClick={() => setTerbuka(false)}
                    aria-label="Tutup detail"
                    className="absolute right-3 top-3 h-9 w-9 rounded-full bg-white font-bold shadow hover:bg-krem"
                >
                    X
                </button>
                </div>

                <div className="p-6">
                <p className="text-xs font-semibold text-orange-tua">{kategori}</p>
                <h3 className="mt-1 text-2xl font-extrabold">{nama}</h3>
                <p className="mt-2 text-xl font-extrabold text-orange-tua">
                    Rp {harga.toLocaleString("id-ID")}
                </p>
                <p className="mt-3 text-black/70">{deskripsi}</p>
                <p className="mt-3 text-sm font-semibold">
                    {tersedia ? "Tersedia" : "Sedang habis"}
                    {tersedia && jumlah > 0 && " - " + jumlah + " dipesan"}
                </p>

                <div className="mt-5 flex gap-2">
                    <button
                    onClick={() => setTerbuka(false)}
                    className="rounded-full px-5 py-3 text-sm font-semibold ring-1 ring-black/15 hover:bg-black/5"
                    >
                    Tutup
                    </button>
                    <button
                    onClick={onTambah}
                    disabled={!tersedia}
                    className="flex-1 rounded-full bg-orange-pumpkin px-5 py-3 text-sm font-bold text-white hover:bg-orange-tua disabled:cursor-not-allowed disabled:bg-black/20 disabled:text-black/40"
                    >
                    {tersedia ? "Tambah ke pesanan" : "Habis"}
                    </button>
                </div>
                </div>
            </div>
            </div>
        )}
        </>
    );
    }

export default MenuCard;