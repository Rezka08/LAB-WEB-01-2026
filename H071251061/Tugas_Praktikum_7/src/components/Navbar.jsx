    function Navbar({ navAktif, setNavAktif, totalJumlah, totalHarga }) {
    const menuNav = [
        { id: 'home', label: 'Home' },
        { id: 'menu', label: 'Menu Utama' },
        { id: 'tentang', label: 'Tentang Kami' },
        { id: 'kontak', label: 'Kontak' }
    ];

    return (
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E6DFD3] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setNavAktif('menu')}>
                <div className="w-10 h-10 rounded-2xl bg-[#F6F3ED] border border-[#E6DFD3] flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 40 40" className="w-7 h-7 text-[#007849]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="6" width="28" height="28" rx="9" />
                    <path d="M20 2 C20 2 20 38 20 38" />
                    <path d="M20 27 C14.5 27 12.5 21.5 12.5 17 C12.5 12 16.5 9.5 20 9.5 C23.5 9.5 27.5 12 27.5 17 C27.5 22.5 20 27 20 27 Z" />
                </svg>
                </div>
                <div>
                <h1 className="text-xl font-black text-[#291E19] tracking-tight leading-none">
                    fore <span className="text-[#007849]">coffee</span>
                </h1>
                <span className="text-[10px] font-bold text-[#7C4A27] uppercase tracking-widest">Self Service</span>
                </div>
            </div>

            <nav className="hidden md:flex items-center gap-1.5 bg-[#F6F3ED] p-1.5 rounded-2xl border border-[#E6DFD3]">
                {menuNav.map((item) => {
                const active = navAktif === item.id;
                return (
                    <button
                    key={item.id}
                    onClick={() => setNavAktif(item.id)}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        active
                        ? 'bg-[#004D2E] text-white shadow-sm'
                        : 'text-[#57534E] hover:text-[#291E19] hover:bg-white/70'
                    }`}
                    >
                    {item.label}
                    </button>
                );
                })}
            </nav>
            </div>

            <div className="flex items-center gap-3 bg-[#E6F4ED] border border-[#BBE3D0] px-4 py-2 rounded-2xl">
            <div className="text-right">
                <p className="text-[10px] font-bold text-[#004D2E] uppercase tracking-wider">Status Pesanan</p>
                <p className="text-xs sm:text-sm font-black text-[#291E19]">
                {totalJumlah} Item <span className="text-stone-300 mx-1">|</span> Rp {totalHarga.toLocaleString('id-ID')}
                </p>
            </div>
            </div>
        </div>

        <div className="md:hidden flex border-t border-[#E6DFD3] bg-[#F6F3ED] px-4 py-2 gap-2 overflow-x-auto no-scrollbar">
            {menuNav.map((item) => {
            const active = navAktif === item.id;
            return (
                <button
                key={item.id}
                onClick={() => setNavAktif(item.id)}
                className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap ${
                    active ? 'bg-[#004D2E] text-white' : 'text-[#57534E] bg-white border border-[#E6DFD3]'
                }`}
                >
                {item.label}
                </button>
            );
            })}
        </div>
        </header>
    );
    }

    export default Navbar;