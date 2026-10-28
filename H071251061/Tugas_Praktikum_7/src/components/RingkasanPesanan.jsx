    function RingkasanPesanan({ pesanan, totalJumlah, totalHarga, onTambah, onKurang, onHapus }) {
    return (
        <div className="bg-white rounded-3xl p-6 border border-[#E6DFD3] shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-[#E6DFD3]">
            <h2 className="text-base font-extrabold text-[#291E19] flex items-center gap-2">
            <span>🛒</span> Ringkasan Pesanan
            </h2>
            <span className="text-xs font-bold bg-[#E6F4ED] text-[#004D2E] px-2.5 py-1 rounded-full">
            {totalJumlah} Item
            </span>
        </div>

        <div className="mt-4 space-y-3 max-h-60 overflow-y-auto pr-1">
            {pesanan.length === 0 ? (
            <p className="text-xs text-center py-8 text-stone-400 italic">
                Belum ada menu yang dipilih. Klik "+ Tambah" pada menu.
            </p>
            ) : (
            pesanan.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-2xl bg-[#F6F3ED] border border-[#E6DFD3]">
                <div className="flex-1 min-w-0 pr-2">
                    <p className="text-xs font-bold text-[#291E19] truncate">{p.nama}</p>
                    <p className="text-[11px] font-bold text-[#007849] mt-0.5">
                    Rp {(p.harga * p.jumlah).toLocaleString('id-ID')}
                    </p>
                </div>

                <div className="flex items-center gap-1.5">
                    <button
                    onClick={() => onKurang(p.id)}
                    className="w-6 h-6 rounded-lg bg-white border border-[#E6DFD3] text-[#291E19] font-bold text-xs flex items-center justify-center hover:bg-stone-100 active:scale-90"
                    >
                    -
                    </button>
                    <span className="text-xs font-extrabold text-[#291E19] w-5 text-center">
                    {p.jumlah}
                    </span>
                    <button
                    onClick={() => onTambah(p)}
                    className="w-6 h-6 rounded-lg bg-[#004D2E] text-white font-bold text-xs flex items-center justify-center hover:bg-[#003B23] active:scale-90"
                    >
                    +
                    </button>
                    <button
                    onClick={() => onHapus(p.id)}
                    className="ml-1 text-stone-300 hover:text-rose-500 text-xs p-1"
                    title="Hapus item"
                    >
                    ✕
                    </button>
                </div>
                </div>
            ))
            )}
        </div>

        <div className="mt-5 pt-4 border-t border-[#E6DFD3] flex items-center justify-between">
            <span className="text-xs font-bold text-[#78716C] uppercase">Total Bayar</span>
            <span className="text-lg font-black text-[#007849]">
            Rp {totalHarga.toLocaleString('id-ID')}
            </span>
        </div>
        </div>
    );
    }

    export default RingkasanPesanan;