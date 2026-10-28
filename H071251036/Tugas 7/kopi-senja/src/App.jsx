import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MenuList from "./components/MenuList";
import RingkasanPesanan from "./components/RingkasanPesanan";
import FormPesan from "./components/FormPesan";
import Footer from "./components/Footer";

const dataMenu = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren.", emoji: "☕", tag: "Favorit" },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih.", emoji: "🖤", tag: "Bold & clean" },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal.", emoji: "🥛", tag: "Creamy" },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu.", emoji: "🍵", tag: "Matcha time" },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa.", emoji: "🧋", tag: "Segera hadir" },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat.", emoji: "🍫", tag: "Comfort drink" },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju.", emoji: "🍞", tag: "Teman ngopi" },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju.", emoji: "🍌", tag: "Segera hadir" },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi.", emoji: "🍳", tag: "Mengenyangkan" }
];

const formatRupiah = (angka) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(angka);

export default function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [keranjang, setKeranjang] = useState({});
  const [namaPelanggan, setNamaPelanggan] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [pesanError, setPesanError] = useState("");
  const [pesanSukses, setPesanSukses] = useState("");

  const menuTampil = kategoriAktif === "Semua"
    ? dataMenu
    : dataMenu.filter((menu) => menu.kategori === kategoriAktif);

  const jumlahPesanan = Object.values(keranjang).reduce((jumlah, qty) => jumlah + qty, 0);
  const totalHarga = dataMenu.reduce((total, menu) => total + menu.harga * (keranjang[menu.id] || 0), 0);

  function tambahPesanan(id) {
    const menu = dataMenu.find((item) => item.id === id);
    if (!menu || !menu.tersedia) return;
    setKeranjang((sebelumnya) => ({ ...sebelumnya, [id]: (sebelumnya[id] || 0) + 1 }));
    setPesanError("");
    setPesanSukses("");
  }

  function ubahJumlah(id, perubahan) {
    setKeranjang((sebelumnya) => {
      const jumlahBaru = (sebelumnya[id] || 0) + perubahan;
      const hasil = { ...sebelumnya };
      if (jumlahBaru <= 0) delete hasil[id];
      else hasil[id] = jumlahBaru;
      return hasil;
    });
    setPesanSukses("");
  }

  function kirimPesanan(event) {
    event.preventDefault();
    if (!namaPelanggan.trim() || !nomorMeja.trim()) {
      setPesanError("Nama dan nomor meja wajib diisi terlebih dahulu.");
      setPesanSukses("");
      return;
    }
    if (!/^[0-9]+$/.test(nomorMeja.trim())) {
      setPesanError("Nomor meja harus berupa angka.");
      setPesanSukses("");
      return;
    }
    if (jumlahPesanan === 0) {
      setPesanError("Pesanan masih kosong. Silakan pilih menu terlebih dahulu.");
      setPesanSukses("");
      return;
    }
    setPesanSukses(`Terima kasih, ${namaPelanggan.trim()}! Pesanan untuk meja ${nomorMeja} berhasil dikirim.`);
    setPesanError("");
    setKeranjang({});
    setNamaPelanggan("");
    setNomorMeja("");
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navbar
        jumlahPesanan={jumlahPesanan}
        totalHarga={formatRupiah(totalHarga)}
      />

      <main>
        <section className="relative overflow-hidden bg-forest text-white">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[42px] border-white/5" />
          <div className="absolute bottom-[-100px] right-[20%] h-56 w-56 rounded-full bg-leaf/40 blur-2xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:py-20">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-mint">
                <span className="h-2 w-2 rounded-full bg-lime-300" />
                BREWED FOR YOUR MOMENT
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Temukan jeda,<br />nikmati <span className="text-lime-300">senja.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
                Secangkir rasa hangat untuk menemani harimu. Pilih menu favorit, pesan langsung dari meja, dan nikmati waktumu.
              </p>
              <a href="#menu" className="mt-8 inline-flex items-center gap-3 rounded-full bg-lime-300 px-6 py-3.5 font-bold text-forest transition hover:bg-lime-200">
                Lihat Menu <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="mx-auto flex w-full max-w-sm justify-center">
              <div className="relative flex aspect-square w-full items-center justify-center rounded-[2.5rem] bg-[#1D5039] p-8 shadow-2xl">
                <div className="absolute inset-5 rounded-[2rem] border border-white/10" />
                <div className="text-center">
                  <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-[#E8DDC8] text-8xl shadow-lg sm:h-48 sm:w-48 sm:text-9xl">☕</div>
                  <p className="mt-6 text-xs font-bold tracking-[0.35em] text-lime-200">KOPI • CERITA • SENJA</p>
                  <p className="mt-2 font-serif text-2xl italic text-white/90">Your daily little pause.</p>
                </div>
                <div className="absolute -right-2 top-8 rounded-2xl bg-white px-4 py-3 text-forest shadow-lg">
                  <span className="block text-xs text-gray-500">Mulai dari</span>
                  <strong className="text-lg">Rp12.000</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16" id="menu">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-leaf">Dibuat dengan sepenuh hati</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-forest sm:text-4xl">Menu pilihan kami</h2>
              <p className="mt-2 text-gray-600">Temukan teman terbaik untuk momenmu hari ini.</p>
            </div>
            <div className="rounded-2xl border border-[#E5E3D9] bg-white px-4 py-3 text-sm text-gray-600">
              <span className="font-bold text-forest">{dataMenu.length} menu</span> tersedia di katalog
            </div>
          </div>

          <MenuList
            menus={menuTampil}
            kategoriAktif={kategoriAktif}
            onPilihKategori={setKategoriAktif}
            keranjang={keranjang}
            onTambah={tambahPesanan}
          />

          <section className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]" id="pesanan">
            <RingkasanPesanan
              menus={dataMenu}
              keranjang={keranjang}
              jumlahPesanan={jumlahPesanan}
              totalHarga={totalHarga}
              formatRupiah={formatRupiah}
              onUbahJumlah={ubahJumlah}
            />
            <FormPesan
              namaPelanggan={namaPelanggan}
              nomorMeja={nomorMeja}
              onNamaChange={setNamaPelanggan}
              onMejaChange={setNomorMeja}
              onSubmit={kirimPesanan}
              pesanError={pesanError}
              pesanSukses={pesanSukses}
              jumlahPesanan={jumlahPesanan}
              totalHarga={formatRupiah(totalHarga)}
            />
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}