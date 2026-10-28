import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

// Import logo dari assets
import logoStarbucks from "./assets/starbucks-logo.png";

// Import gambar lokal dari folder assets
import imgAmericano from "./assets/menu/americano.jpg";
import imgCaramelMacchiato from "./assets/menu/IcedCaramelMacchiato.jpg";
import imgLatte from "./assets/menu/IcedLatte.jpg";
import imgMatcha from "./assets/menu/MatchaLatte.jpg";
import imgChai from "./assets/menu/ChaiTea.jpg";
import imgChocolate from "./assets/menu/SignatureChocolate.jpg";
import imgCroissant from "./assets/menu/ButterCroissant.jpg";
import imgCinnamonRoll from "./assets/menu/CinnamonRoll.jpg";
import imgChocoCroissant from "./assets/menu/ChocoCroissant.jpg";

const DAFTAR_MENU = [
  {
    id: 1,
    nama: "Caffè Americano",
    kategori: "Kopi",
    harga: 41000,
    tersedia: true,
    gambar: imgAmericano,
    deskripsi: "Tembakan espresso kaya rasa yang dipadukan dengan air panas menghasilkan lapisan crema lembut.",
  },
  {
    id: 2,
    nama: "Caramel Macchiato",
    kategori: "Kopi",
    harga: 60000,
    tersedia: true,
    gambar: imgCaramelMacchiato,
    deskripsi: "Susu kukus segar dengan sirup vanila, dilapisi espresso dan drizzle saus karamel lezat.",
  },
  {
    id: 3,
    nama: "Caffè Latte",
    kategori: "Kopi",
    harga: 49000,
    tersedia: true,
    gambar: imgLatte,
    deskripsi: "Espresso panggang pekat berpadu seimbang dengan susu steamed halus dan lapisan buih tipis.",
  },
  {
    id: 4,
    nama: "Pure Matcha Latte",
    kategori: "Non-Kopi",
    harga: 57000,
    tersedia: true,
    gambar: imgMatcha,
    deskripsi: "Bubuk teh hijau matcha murni tanpa pemanis yang dikocok sempurna bersama susu segar hangat.",
  },
  {
    id: 5,
    nama: "Chai Tea Latte",
    kategori: "Non-Kopi",
    harga: 53000,
    tersedia: false,
    gambar: imgChai,
    deskripsi: "Konsentrat teh hitam berempah kapulaga, kayu manis, dan jahe yang dipadukan dengan susu.",
  },
  {
    id: 6,
    nama: "Signature Chocolate",
    kategori: "Non-Kopi",
    harga: 55000,
    tersedia: true,
    gambar: imgChocolate,
    deskripsi: "Cokelat khas Starbucks dengan susu hangat yang lembut serta taburan bubuk kakao di atasnya.",
  },
  {
    id: 7,
    nama: "Butter Croissant",
    kategori: "Makanan",
    harga: 32000,
    tersedia: true,
    gambar: imgCroissant,
    deskripsi: "Pastry mentega klasik ala Prancis yang renyah di luar dengan rongga lembut bermentega di dalam.",
  },
  {
    id: 8,
    nama: "Cinnamon Roll",
    kategori: "Makanan",
    harga: 35000,
    tersedia: false,
    gambar: imgCinnamonRoll,
    deskripsi: "Roti gulung kayu manis hangat disiram dengan lapisan cream cheese frosting manis gurih.",
  },
  {
    id: 9,
    nama: "Chocolate Croissant",
    kategori: "Makanan",
    harga: 58000,
    tersedia: true,
    gambar: imgChocoCroissant,
    deskripsi: "Pastry mentega klasik ala Prancis yang renyah di luar dengan cokelat di dalam.",
  },
];

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [keranjang, setKeranjang] = useState([]);

  function handleTambahMenu(item) {
    if (!item.tersedia) return;

    setKeranjang((prevKeranjang) => {
      const itemAda = prevKeranjang.find((i) => i.id === item.id);
      if (itemAda) {
        return prevKeranjang.map((i) =>
          i.id === item.id ? { ...i, jumlah: i.jumlah + 1 } : i
        );
      }
      return [...prevKeranjang, { ...item, jumlah: 1 }];
    });
  }

  function handleKurangMenu(id) {
    setKeranjang((prevKeranjang) => {
      const itemAda = prevKeranjang.find((i) => i.id === id);
      if (itemAda && itemAda.jumlah === 1) {
        return prevKeranjang.filter((i) => i.id !== id);
      }
      return prevKeranjang.map((i) =>
        i.id === id ? { ...i, jumlah: i.jumlah - 1 } : i
      );
    });
  }

  function handleResetKeranjang() {
    setKeranjang([]);
  }

  const filteredMenu =
    kategoriAktif === "Semua"
      ? DAFTAR_MENU
      : DAFTAR_MENU.filter((m) => m.kategori === kategoriAktif);

  const totalItem = keranjang.reduce((sum, item) => sum + item.jumlah, 0);
  const totalHarga = keranjang.reduce(
    (sum, item) => sum + item.harga * item.jumlah,
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9F8]">
      <Navbar
        logo={logoStarbucks}
        kategoriAktif={kategoriAktif}
        onSelectKategori={setKategoriAktif}
        totalItem={totalItem}
        totalHarga={totalHarga}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 lg:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <section className="lg:col-span-8">
            <div className="mb-5 flex items-baseline justify-between">
              <div>
                <h2 className="text-xl font-normal text-stone-900 tracking-tight">
                  Katalog Menu
                </h2>
                <p className="text-xs text-stone-400 font-light mt-0.5">
                  Menampilkan kategori{" "}
                  <span className="font-medium text-starbucks-primary">{kategoriAktif}</span>
                </p>
              </div>
              <span className="text-xs font-light px-3 py-1 rounded-full bg-white border border-stone-200/60 text-stone-500">
                {filteredMenu.length} Pilihan
              </span>
            </div>

            <MenuList menuList={filteredMenu} onTambah={handleTambahMenu} />
          </section>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <RingkasanPesanan
                keranjang={keranjang}
                onTambah={handleTambahMenu}
                onKurang={handleKurangMenu}
              />
              <FormPesan
                keranjang={keranjang}
                onPesananBerhasil={handleResetKeranjang}
              />
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;