import MenuCard from "./MenuCard.jsx";

function MenuList({ menu, pesanan, kategoriAktif, onPilihKategori, onTambah }) {
    const kategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

    return (
        <section>
        <h2 className="text-2xl font-extrabold">Menu</h2>

        <ul className="mt-4 flex flex-wrap gap-2">
            {kategori.map((item) => (
            <li key={item}>
                <button
                onClick={() => onPilihKategori(item)}
                className={
                    item === kategoriAktif
                    ? "rounded-full bg-arang px-5 py-2 text-sm font-semibold text-white"
                    : "rounded-full bg-white px-5 py-2 text-sm font-semibold text-arang ring-1 ring-black/10 hover:bg-black/5"
                }
                >
                {item}
                </button>
            </li>
            ))}
        </ul>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {menu.map((item, index) =>
            kategoriAktif === "Semua" || item.kategori === kategoriAktif ? (
                <MenuCard
                key={item.id}
                nama={item.nama}
                kategori={item.kategori}
                harga={item.harga}
                tersedia={item.tersedia}
                deskripsi={item.deskripsi}
                gambar={item.gambar}
                jumlah={pesanan[index]}
                onTambah={() => onTambah(item.id)}
                />
            ) : null
            )}
        </div>
        </section>
    );
    }

export default MenuList;
