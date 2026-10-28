    import { useState } from 'react';
    import MenuCard from './MenuCard';

    function MenuList({ menuData, kategoriTerpilih, setKategoriTerpilih, pesanan, onTambah, onKurang, onDetail }) {
    const [kataKunci, setKataKunci] = useState('');
    const [urutkan, setUrutkan] = useState('default');

    const daftarKategori = [
        'Fore Signature',
        'Americano Series',
        'Coffee',
        'Coffee of The Day',
        'FOREveryone 1L',
        'Favorite Choice',
        'Fore Deli',
        'Fore Junior',
        'Non Coffee',
        'Refresher',
        'Tea',
        'The Unexpected Twist',
        'Fore x Citilink',
        'Ice Blended',
        'Merchandise',
        'Merchandise Accessories',
        'Others'
    ];

    if (!kategoriTerpilih) {
        return (
        <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-[#E6DFD3] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <span className="text-xs font-bold text-[#7C4A27] uppercase tracking-wider">Kategori Menu</span>
                <h2 className="text-xl font-black text-[#291E19]">Pilih Kategori Menu</h2>
                <p className="text-xs text-[#78716C] mt-1">
                Klik salah satu kategori di bawah untuk melihat pilihan menu spesifik.
                </p>
            </div>
            <span className="text-xs font-bold bg-[#E6F4ED] text-[#004D2E] px-3.5 py-1.5 rounded-full self-start sm:self-auto border border-[#BBE3D0]">
                {daftarKategori.length} Kategori
            </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {daftarKategori.map((kat) => {
                const jumlahItem = menuData.filter((item) => item.kategori === kat).length;

                return (
                <div
                    key={kat}
                    onClick={() => setKategoriTerpilih(kat)}
                    className="group relative bg-white rounded-3xl p-6 border border-[#E6DFD3] hover:border-[#007849] hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.03] transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#E6F4ED] to-transparent rounded-bl-full pointer-events-none group-hover:from-[#007849]/10 transition-all"></div>

                    <div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-2xl bg-[#F6F3ED] group-hover:bg-[#004D2E] text-[#004D2E] group-hover:text-white font-extrabold text-lg flex items-center justify-center transition-all duration-300 shadow-inner">
                        ☕
                        </div>
                        <span className="text-xs font-bold bg-[#F6F3ED] text-[#7C4A27] px-2.5 py-1 rounded-full border border-[#E6DFD3]">
                        {jumlahItem} Menu
                        </span>
                    </div>

                    <h3 className="text-lg font-black text-[#291E19] group-hover:text-[#007849] transition-colors leading-snug">
                        {kat}
                    </h3>
                    <p className="text-xs text-[#78716C] mt-1 line-clamp-2">
                        Jelajahi kelezatan varian {kat} khas Fore Coffee.
                    </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-[#E6DFD3] flex items-center justify-between text-xs font-bold text-[#007849]">
                    <span>Lihat Menu</span>
                    <span className="transform group-hover:translate-x-1.5 transition-transform">➔</span>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        );
    }

    let menuTersaring = menuData.filter((item) => {
        const cocokKategori = item.kategori === kategoriTerpilih;
        const cocokCari = item.nama.toLowerCase().includes(kataKunci.toLowerCase()) ||
                        item.deskripsi.toLowerCase().includes(kataKunci.toLowerCase());
        return cocokKategori && cocokCari;
    });

    if (urutkan === 'termurah') {
        menuTersaring = [...menuTersaring].sort((a, b) => a.harga - b.harga);
    } else if (urutkan === 'termahal') {
        menuTersaring = [...menuTersaring].sort((a, b) => b.harga - a.harga);
    }

    return (
        <div className="space-y-6">
        <div className="bg-white rounded-3xl p-6 border border-[#E6DFD3] shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
                onClick={() => setKategoriTerpilih(null)}
                className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F6F3ED] hover:bg-[#E6DFD3] text-[#291E19] font-bold text-xs transition-all border border-[#E6DFD3]"
            >
                <span>←</span> Kembali ke Kategori Menu
            </button>

            <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:w-56">
                <input
                    type="text"
                    placeholder="Cari di kategori ini..."
                    value={kataKunci}
                    onChange={(e) => setKataKunci(e.target.value)}
                    className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-[#E6DFD3] bg-[#F6F3ED] text-[#1C1917] placeholder:text-[#A8A29E] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#007849]/20 focus:border-[#007849] transition-all"
                />
                <span className="absolute left-3 top-2.5 text-stone-400 text-xs">🔍</span>
                </div>

                <select
                value={urutkan}
                onChange={(e) => setUrutkan(e.target.value)}
                className="text-xs px-3 py-2.5 rounded-xl border border-[#E6DFD3] bg-[#F6F3ED] text-[#291E19] font-semibold focus:outline-none focus:border-[#007849]"
                >
                <option value="default">Urutkan</option>
                <option value="termurah">Harga: Termurah</option>
                <option value="termahal">Harga: Termahal</option>
                </select>
            </div>
            </div>

            <div className="pt-2 border-t border-[#E6DFD3] flex items-center justify-between">
            <div>
                <span className="text-xs font-bold text-[#7C4A27] uppercase tracking-wider">Kategori Terpilih</span>
                <h2 className="text-xl font-black text-[#291E19]">{kategoriTerpilih}</h2>
            </div>
            <span className="text-xs font-bold bg-[#E6F4ED] text-[#004D2E] px-3 py-1.5 rounded-full border border-[#BBE3D0]">
                {menuTersaring.length} Menu Ditampilkan
            </span>
            </div>
        </div>

        {menuTersaring.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-[#E6DFD3]">
            <p className="text-stone-400 text-sm font-medium">Tidak ada menu yang sesuai dalam kategori ini.</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {menuTersaring.map((item) => {
                const itemPesanan = pesanan.find((p) => p.id === item.id);
                const jumlahPesanan = itemPesanan ? itemPesanan.jumlah : 0;

                return (
                <MenuCard
                    key={item.id}
                    item={item}
                    jumlahInCart={jumlahPesanan}
                    onTambah={onTambah}
                    onKurang={onKurang}
                    onDetail={onDetail}
                />
                );
            })}
            </div>
        )}
        </div>
    );
    }

    export default MenuList;