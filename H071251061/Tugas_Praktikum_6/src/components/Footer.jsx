    const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Pesan berhasil dikirim via formulir kontak.");
        alert("Pesan Anda telah berhasil dikirim!");
    };

    return (
        <footer id="contact" className="space-y-8 pt-8 border-t border-[#e8e2d5] dark:border-[#2a2725]">
        <div>
            <span className="text-xs font-bold tracking-widest text-[#c05621] uppercase">
            KOMUNIKASI
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-white mt-1">
            Kontak & Formulir Pesan
            </h2>
            <p className="text-xs md:text-sm text-stone-600 dark:text-stone-400 mt-1">
            Kirimkan pesan langsung yang akan tersimpan secara lokal melalui localStorage.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-[#fcf9f2] dark:bg-[#1d1b1a] p-6 rounded-2xl border border-[#e8e2d5] dark:border-[#2a2725] space-y-4 shadow-md"
            >
            <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                Nama Lengkap
                </label>
                <input
                type="text"
                required
                placeholder="Masukkan nama Anda..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#f5f0e6] dark:bg-[#252220] border border-[#e2d8c7] dark:border-[#332f2c] text-xs text-stone-900 dark:text-white focus:outline-none focus:border-[#c05621]"
                />
            </div>

            <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                Alamat Email
                </label>
                <input
                type="email"
                required
                placeholder="nama@domain.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#f5f0e6] dark:bg-[#252220] border border-[#e2d8c7] dark:border-[#332f2c] text-xs text-stone-900 dark:text-white focus:outline-none focus:border-[#c05621]"
                />
            </div>

            <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                Pesan
                </label>
                <textarea
                rows="4"
                required
                placeholder="Tuliskan pesan atau penawaran kerja sama..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#f5f0e6] dark:bg-[#252220] border border-[#e2d8c7] dark:border-[#332f2c] text-xs text-stone-900 dark:text-white focus:outline-none focus:border-[#c05621]"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-[#c05621] hover:bg-[#a84815] text-white text-xs font-bold rounded-xl transition-all shadow-md cursor-pointer"
            >
                Kirim Pesan
            </button>
            </form>

            <div className="space-y-4">
            <div className="bg-[#fcf9f2] dark:bg-[#1d1b1a] p-5 rounded-2xl border border-[#e8e2d5] dark:border-[#2a2725] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c05621]/10 text-[#c05621] flex items-center justify-center font-bold text-sm shrink-0">
                ✉
                </div>
                <div>
                <span className="text-[10px] font-bold text-stone-500 uppercase">EMAIL RESMI</span>
                <p className="text-xs font-medium text-stone-900 dark:text-white">ndkrhmnn@gmail.com</p>
                </div>
            </div>

            <div className="bg-[#fcf9f2] dark:bg-[#1d1b1a] p-5 rounded-2xl border border-[#e8e2d5] dark:border-[#2a2725] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c05621]/10 text-[#c05621] flex items-center justify-center font-bold text-sm shrink-0">
                📍
                </div>
                <div>
                <span className="text-[10px] font-bold text-stone-500 uppercase">DOMISILI</span>
                <p className="text-xs font-medium text-stone-900 dark:text-white">Makassar, Sulawesi Selatan</p>
                </div>
            </div>

            <div className="bg-[#fcf9f2] dark:bg-[#1d1b1a] p-5 rounded-2xl border border-[#e8e2d5] dark:border-[#2a2725] flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#c05621]/10 text-[#c05621] flex items-center justify-center font-bold text-sm shrink-0">
                🎓
                </div>
                <div>
                <span className="text-[10px] font-bold text-stone-500 uppercase">INSTITUSI</span>
                <p className="text-xs font-medium text-stone-900 dark:text-white">Universitas Hasanuddin (Tamalanrea)</p>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;