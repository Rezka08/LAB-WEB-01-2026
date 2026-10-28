import MenuCard from "./MenuCard";

const kategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

export default function MenuList({ menus, kategoriAktif, onPilihKategori, keranjang, onTambah }) {
  return (
    <div>
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter kategori menu">
        {kategori.map((namaKategori) => (
          <button
            key={namaKategori}
            type="button"
            onClick={() => onPilihKategori(namaKategori)}
            aria-pressed={kategoriAktif === namaKategori}
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
              kategoriAktif === namaKategori
                ? "bg-forest text-white shadow-md"
                : "border border-[#E3E1D7] bg-white text-gray-600 hover:border-leaf hover:text-leaf"
            }`}
          >
            {namaKategori}
          </button>
        ))}
      </div>

      {menus.length === 0 ? (
        <p className="rounded-3xl bg-white p-8 text-center text-gray-500">Belum ada menu pada kategori ini.</p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menus.map((menu) => (
            <MenuCard
              key={menu.id}
              menu={menu}
              jumlah={keranjang[menu.id] || 0}
              onTambah={() => onTambah(menu.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}