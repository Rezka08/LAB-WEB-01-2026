function RingkasanPesanan({ menu, pesanan, jumlahItem, totalHarga, onKurangi }) {
    return (
        <section className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="text-xl font-extrabold">Ringkasan Pesanan</h2>

        {jumlahItem === 0 && (
            <p className="mt-3 text-sm text-black/60">
            Belum ada pesanan. Tekan Tambah pada menu yang kamu mau.
            </p>
        )}

        <ul className="mt-3 divide-y divide-black/10">
            {menu.map((item, index) =>
            pesanan[index] > 0 ? (
                <li key={item.id} className="flex items-center justify-between gap-3 py-3">
                <div>
                    <p className="font-semibold">{item.nama}</p>
                    <p className="text-sm text-black/60">
                    {pesanan[index]} x Rp {item.harga.toLocaleString("id-ID")}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <p className="text-sm font-bold">
                    Rp {(pesanan[index] * item.harga).toLocaleString("id-ID")}
                    </p>
                    <button
                    onClick={() => onKurangi(item.id)}
                    aria-label={"Kurangi " + item.nama}
                    className="h-8 w-8 rounded-full ring-1 ring-black/15 hover:bg-black/5"
                    >
                    -
                    </button>
                </div>
                </li>
            ) : null
            )}
        </ul>

        <div className="mt-4 flex items-center justify-between rounded-2xl bg-krem px-4 py-3">
            <p className="text-sm font-semibold">{jumlahItem} item</p>
            <p className="text-lg font-extrabold text-orange-pumpkin">
            Rp {totalHarga.toLocaleString("id-ID")}
            </p>
        </div>
        </section>
    );
}

export default RingkasanPesanan;
