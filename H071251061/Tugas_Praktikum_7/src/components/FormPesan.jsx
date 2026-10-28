    function FormPesan({ nama, setNama, nomorMeja, setNomorMeja, onSubmit }) {
    return (
        <div className="bg-white rounded-3xl p-6 border border-[#E6DFD3] shadow-sm">
        <h2 className="text-base font-extrabold text-[#291E19] mb-4 flex items-center gap-2">
            <span>📋</span> Informasi Pemesan
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
            <div>
            <label className="block text-xs font-bold text-[#291E19] mb-1.5">
                Nama Pelanggan <span className="text-rose-500">*</span>
            </label>
            <input
                type="text"
                placeholder="Masukkan nama Anda"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E6DFD3] bg-[#F6F3ED] text-[#1C1917] placeholder:text-[#A8A29E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#007849]/20 focus:border-[#007849] transition-all"
            />
            </div>

            <div>
            <label className="block text-xs font-bold text-[#291E19] mb-1.5">
                Nomor Meja <span className="text-rose-500">*</span>
            </label>
            <input
                type="text"
                placeholder="Contoh: 05"
                value={nomorMeja}
                onChange={(e) => setNomorMeja(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E6DFD3] bg-[#F6F3ED] text-[#1C1917] placeholder:text-[#A8A29E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#007849]/20 focus:border-[#007849] transition-all"
            />
            </div>

            <button
            type="submit"
            className="w-full py-3 mt-2 bg-[#004D2E] hover:bg-[#003B23] text-white font-bold text-xs rounded-xl shadow-md active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
            >
            Kirim Pesanan Sekarang
            </button>
        </form>
        </div>
    );
    }

    export default FormPesan;