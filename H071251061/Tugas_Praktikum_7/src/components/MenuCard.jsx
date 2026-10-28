    function MenuCard({ item, jumlahInCart, onTambah, onKurang, onDetail }) {
    const { id, nama, kategori, harga, tersedia, deskripsi } = item;

    return (
        <div 
        className={`group relative bg-white rounded-3xl p-5 border transition-all duration-300 flex flex-col justify-between ${
            tersedia 
            ? 'border-[#E6DFD3] hover:border-[#007849] hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] cursor-pointer' 
            : 'border-stone-200 bg-stone-50/70 opacity-75'
        }`}
        >
        <div>
            <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-extrabold text-[#7C4A27] bg-[#F6F3ED] px-2.5 py-1 rounded-lg border border-[#E6DFD3] uppercase tracking-wider">
                {kategori}
            </span>
            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                tersedia ? 'bg-[#E6F4ED] text-[#004D2E]' : 'bg-rose-100 text-rose-700'
            }`}>
                {tersedia ? 'Tersedia' : 'Habis'}
            </span>
            </div>

            <h3 className="text-base font-extrabold text-[#291E19] group-hover:text-[#007849] transition-colors">
            {nama}
            </h3>
            <p className="text-[#007849] font-black text-lg mt-1">
            Rp {harga.toLocaleString('id-ID')}
            </p>

            <p className="text-[#57534E] text-xs mt-2 line-clamp-2 leading-relaxed">
            {deskripsi}
            </p>
        </div>

        <div className="mt-5 pt-3 border-t border-[#E6DFD3] flex items-center justify-between gap-2">
            <button
            onClick={(e) => {
                e.stopPropagation();
                onDetail(item);
            }}
            className="text-xs font-bold text-[#7C4A27] hover:text-[#004D2E] underline decoration-[#E6DFD3] hover:decoration-[#004D2E] transition-all"
            >
            Detail
            </button>

            <div className="flex items-center gap-2">
            {jumlahInCart > 0 ? (
                <div className="flex items-center gap-1.5 bg-[#F6F3ED] border border-[#E6DFD3] p-1 rounded-xl">
                <button
                    onClick={(e) => {
                    e.stopPropagation();
                    onKurang(id);
                    }}
                    className="w-6 h-6 rounded-lg bg-white border border-[#E6DFD3] text-[#291E19] font-bold text-xs flex items-center justify-center hover:bg-stone-100 active:scale-90"
                >
                    -
                </button>
                <span className="text-xs font-black text-[#004D2E] w-5 text-center">
                    {jumlahInCart}
                </span>
                <button
                    onClick={(e) => {
                    e.stopPropagation();
                    onTambah(item);
                    }}
                    className="w-6 h-6 rounded-lg bg-[#004D2E] text-white font-bold text-xs flex items-center justify-center hover:bg-[#003B23] active:scale-90"
                >
                    +
                </button>
                </div>
            ) : (
                <button
                disabled={!tersedia}
                onClick={(e) => {
                    e.stopPropagation();
                    onTambah(item);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 shadow-sm ${
                    tersedia
                    ? 'bg-[#004D2E] text-white hover:bg-[#003B23] active:scale-95 group-hover:shadow-md'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
                >
                {tersedia ? '+ Tambah' : 'Habis'}
                </button>
            )}
            </div>
        </div>
        </div>
    );
    }

    export default MenuCard;