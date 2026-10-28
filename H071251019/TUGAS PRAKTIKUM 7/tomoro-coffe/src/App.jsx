import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

// menu
const menuData = [
  { id: 1, nama: "Brave Latte", kategori: "Kopi", harga: 32000, tersedia: true, 
    deskripsi: "Menggunakan half & half susu segar dan krim untuk membuat minuman kopi susu yang lembut dan lebih creamy.", gambar: "/images/menu/latte.webp" },

  { id: 2, nama: "Americano", kategori: "Kopi", harga: 20000, tersedia: true, 
    deskripsi: "Rasa Espresso yang kaya dituangkan ke dalam air panas mempertahankan crema yang sempurna.", gambar: "/images/menu/americano.webp" },

  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 26000, tersedia: true, 
    deskripsi: "Cappuccino membutuhkan keterampilan dari barista terbaik, perpaduan espresso yang sempurna dengan susu dan busa susu yang lebih tebal.", gambar: "/images/menu/cappuccino.webp" },

  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 30000, tersedia: true, 
    deskripsi: "Kombinasi premium matcha yang wangi dan susu segar.", gambar: "/images/menu/matcha-latte.webp" },

  { id: 5, nama: "Peach Olong Milk Tea", kategori: "Non-Kopi", harga: 24000, tersedia: false, 
    deskripsi: "Perpaduan elegan antara teh oolong harum dan aroma peach yang manis serta menyegarkan, dipadukan dengan susu creamy untuk menghadirkan pengalaman milk tea yang lembut dan fruity.", gambar: "/images/menu/peach-olong-milktea.webp" },

  { id: 6, nama: "Chocolate", kategori: "Non-Kopi", harga: 27000, tersedia: true, 
    deskripsi: "Kombinasi cokelat premium dan susu segar, menghasilkan rasa yang kaya dan lembut.", gambar: "/images/menu/chocolate.webp" },

  { id: 7, nama: "Butter Croissant", kategori: "Makanan", harga: 22000, tersedia: true, 
    deskripsi: "Butter croissant klasik dengan lapisan yang renyah dan aroma butter asli yang khas didalamnya.", gambar: "/images/menu/butter-croissant.webp" },

  { id: 8, nama: "Choco Muffin", kategori: "Makanan", harga: 34000, tersedia: false, 
    deskripsi: "Muffin yang lembut dengan cita rasa cokelat yang kuat, ideal untuk dinikmati sebagai hidangan penutup", gambar: "/images/menu/choco-muffin.webp" },

  { id: 9, nama: "Beef Pizza Baguette", kategori: "Makanan", harga: 34000, tersedia: true, 
    deskripsi: "Baguette renyah dengan topping daging sapi cincang gurih, saus tomat yang kaya rasa, dan keju leleh untuk camilan sederhana yang mengenyangkan.", gambar: "/images/menu/beef-pizza-baguette.webp" },
];

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  // pesanan = jumlah tiap menu, urutannya sama dengan menuData
  const [pesanan, setPesanan] = useState(menuData.map(() => 0));

  // Dihitung dari satu state yang sama, lalu dikirim ke semua komponen
  const jumlahItem = pesanan.reduce((total, jumlah) => total + jumlah, 0);
  const totalHarga = pesanan.reduce(
    (total, jumlah, index) => total + jumlah * menuData[index].harga,
    0
  );

  function handleTambah(id) {
    setPesanan(
      pesanan.map((jumlah, index) =>
        menuData[index].id === id && menuData[index].tersedia ? jumlah + 1 : jumlah
      )
    );
  }

  function handleKurangi(id) {
    setPesanan(
      pesanan.map((jumlah, index) =>
        menuData[index].id === id && jumlah > 0 ? jumlah - 1 : jumlah
      )
    );
  }

  function handleKosongkanPesanan() {
    setPesanan(menuData.map(() => 0));
  }

  return (
    <div className="min-h-screen bg-krem text-arang">
      <Navbar jumlahItem={jumlahItem} totalHarga={totalHarga} />

      <section className="bg-orange-pumpkin text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            HEY !
            <br />
            ENJOY YOUR COFFEE TIME
            <br />
            100% ARABICA COFFEE
            <br />
            FRESHLY ROASTED & BREWED
            <br />
            @TOMORO
          </h1>
          <p className="mt-3 max-w-md text-white">
            Pilih menu, isi nama dan nomor meja, lalu kirim. Tidak perlu antre di kasir.
          </p>
        </div>
      </section>

      <main className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_380px]">
        <MenuList
          menu={menuData}
          pesanan={pesanan}
          kategoriAktif={kategoriAktif}
          onPilihKategori={setKategoriAktif}
          onTambah={handleTambah}
        />
        <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
          <RingkasanPesanan
            menu={menuData}
            pesanan={pesanan}
            jumlahItem={jumlahItem}
            totalHarga={totalHarga}
            onKurangi={handleKurangi}
          />
          <FormPesan jumlahItem={jumlahItem} onKirim={handleKosongkanPesanan} />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
