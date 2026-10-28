import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";
import { formatRupiah } from "./utils/formatRupiah.js";

// Satu sumber data menu sesuai soal: data ditulis sekali di App.jsx.
const menuKedai = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren.", gambar: "/images/menu/kopi-susu.jpg" },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih.", gambar: "/images/menu/americano.jpg" },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal.", gambar: "/images/menu/cappuccino.jpg" },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu.", gambar: "/images/menu/matcha-latte.jpg" },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: true, deskripsi: "Teh susu yang ditarik hingga berbusa.", gambar: "/images/menu/teh-tarik.jpg" },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat.", gambar: "/images/menu/cokelat-panas.jpg" },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju.", gambar: "/images/menu/roti-bakar.jpg" },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju.", gambar: "/images/menu/pisang-goreng.jpg" },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi.", gambar: "/images/menu/nasi-goreng.jpg" },
];

const validasiKosong = { nama: "", meja: "", pesanan: "" };

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("All");
  const [kataKunci, setKataKunci] = useState("");
  const [pesanan, setPesanan] = useState({});
  const [namaPelanggan, setNamaPelanggan] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [pesanValidasi, setPesanValidasi] = useState(validasiKosong);
  const [pesananSukses, setPesananSukses] = useState(null);
  const [metodePembayaran, setMetodePembayaran] = useState("QRIS");
  const [menungguPembayaran, setMenungguPembayaran] = useState(null);

  // Sapaan mengikuti waktu lokal perangkat/tablet saat halaman dibuka.
  const jamSekarang = new Date().getHours();
  const sapaan = jamSekarang < 11
    ? "Good morning"
    : jamSekarang < 17
      ? "Good afternoon"
      : jamSekarang < 21
        ? "Good evening"
        : "Good night";

  // Jumlah item dan total harga diturunkan dari satu state keranjang.
  const jumlahItem = Object.values(pesanan).reduce((total, jumlah) => total + jumlah, 0);
  const totalHarga = menuKedai.reduce(
    (total, item) => total + item.harga * (pesanan[item.id] || 0),
    0
  );

  function handleTambah(id) {
    const menuDipilih = menuKedai.find((item) => item.id === id);
    if (!menuDipilih || !menuDipilih.tersedia) return;

    setPesanan((pesananLama) => ({
      ...pesananLama,
      [id]: (pesananLama[id] || 0) + 1,
    }));
    setPesanValidasi((pesanLama) => ({ ...pesanLama, pesanan: "" }));
  }

  function handleKurangi(id) {
    setPesanan((pesananLama) => {
      const jumlahSekarang = pesananLama[id] || 0;
      if (jumlahSekarang <= 1) {
        const pesananBaru = { ...pesananLama };
        delete pesananBaru[id];
        return pesananBaru;
      }
      return { ...pesananLama, [id]: jumlahSekarang - 1 };
    });
  }

  function handleNamaChange(nilai) {
    setNamaPelanggan(nilai);
    setPesanValidasi((pesanLama) => ({ ...pesanLama, nama: "" }));
  }

  function handleMejaChange(nilai) {
    setNomorMeja(nilai);
    setPesanValidasi((pesanLama) => ({ ...pesanLama, meja: "" }));
  }

  function handleKirimPesanan(event) {
    event.preventDefault();

    const namaBersih = namaPelanggan.trim();
    const mejaBersih = nomorMeja.trim();
    const mejaAngka = Number(mejaBersih);
    const validasiBaru = {
      nama: namaBersih.length >= 2 ? "" : "Masukkan nama minimal 2 karakter.",
      meja: mejaBersih !== "" && Number.isInteger(mejaAngka) && mejaAngka > 0
        ? ""
        : "Masukkan nomor meja berupa bilangan bulat lebih dari 0.",
      pesanan: jumlahItem > 0 ? "" : "Pilih minimal satu menu sebelum mengirim pesanan.",
    };
    setPesanValidasi(validasiBaru);

    if (Object.values(validasiBaru).some((pesan) => pesan !== "")) return;

    const rincian = menuKedai
      .filter((item) => (pesanan[item.id] || 0) > 0)
      .map((item) => ({
        id: item.id,
        nama: item.nama,
        gambar: item.gambar,
        jumlah: pesanan[item.id],
        subtotal: item.harga * pesanan[item.id],
      }));

    // Tahap checkout pertama: tampilkan pilihan/konfirmasi pembayaran dahulu.
    setMenungguPembayaran({
      nama: namaBersih,
      meja: mejaBersih,
      rincian,
      subtotal: totalHarga,
      diskon: 0,
      pajak: 0,
      total: totalHarga,
      jumlah: jumlahItem,
      metode: metodePembayaran,
      nomor: `KS-${Date.now().toString().slice(-6)}`,
    });
  }

  function handleKonfirmasiPembayaran() {
    if (!menungguPembayaran) return;
    // Demo lokal: tidak memproses uang atau terhubung ke payment gateway.
    setPesananSukses(menungguPembayaran);
    setMenungguPembayaran(null);
    setNamaPelanggan("");
    setNomorMeja("");
    setPesanan({});
    setKategoriAktif("All");
    setKataKunci("");
    setPesanValidasi(validasiKosong);
  }

  return (
    <div className={`app-root min-h-screen bg-senja-paper text-senja-ink ${jumlahItem > 0 ? "has-cart" : ""}`}>
      <Navbar
        jumlahItem={jumlahItem}
        totalHarga={totalHarga}
        onKategoriChange={setKategoriAktif}
      />

      <main>
        <section id="beranda" className="welcome-wrap mx-auto w-full max-w-[1480px] px-4 pt-5 sm:px-6 sm:pt-7 lg:px-10 lg:pt-9">
          <div className="welcome-panel grid overflow-hidden rounded-[28px]">
            <div className="welcome-copy">
              <span className="welcome-eyebrow"><span className="live-dot" /> ORDER FROM YOUR TABLE</span>
              <p className="greeting-line">{sapaan},</p>
              <h1>what sounds<br /><span>good today?</span></h1>
              <p className="welcome-description">Your favourite coffee, a refreshing drink, or a little something to eat. Make this moment yours.</p>
              <a href="#menu" className="primary-button welcome-button">Explore the menu <span aria-hidden="true">→</span></a>
              <div className="welcome-footnote"><span className="footnote-rule" /> Good coffee. Good mood. Better days.</div>
            </div>
            <div className="welcome-photo-wrap">
              <img className="welcome-photo" src="/images/hero-kedai.jpg" alt="Suasana coffeehouse Kedai Kopi Senja" />
              <div className="photo-caption"><span>YOUR DAILY RITUAL</span><strong>Take a moment for yourself.</strong></div>
            </div>
          </div>
        </section>

        <section className="quick-info mx-auto grid w-full max-w-[1480px] grid-cols-1 gap-3 px-4 py-4 sm:grid-cols-3 sm:px-6 lg:px-10 lg:py-5" aria-label="Keunggulan pemesanan">
          <div className="quick-info-item"><span className="quick-info-number">01</span><div><strong>Made for your moment</strong><small>Explore nine items from one screen.</small></div></div>
          <div className="quick-info-item"><span className="quick-info-number">02</span><div><strong>Simple table ordering</strong><small>Your quantity and total stay in sync.</small></div></div>
          <div className="quick-info-item"><span className="quick-info-number">03</span><div><strong>Something for everyone</strong><small>Coffee, non-coffee drinks, and food.</small></div></div>
        </section>

        <div className="workspace mx-auto grid w-full max-w-[1480px] gap-7 px-4 pb-16 pt-5 sm:px-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(330px,0.85fr)] lg:gap-8 lg:px-10 lg:pb-20 lg:pt-6">
          <div className="menu-column min-w-0">
            <MenuList
              menu={menuKedai}
              kategoriAktif={kategoriAktif}
              onKategoriChange={setKategoriAktif}
              kataKunci={kataKunci}
              onKataKunciChange={setKataKunci}
              pesanan={pesanan}
              onTambah={handleTambah}
              onKurangi={handleKurangi}
            />
          </div>

          <aside className="checkout-column min-w-0" id="pesanan">
            <div className="checkout-intro"><span className="section-overline">YOUR ORDER</span><h2>Order summary</h2><p>One place for all your favourites.</p></div>
            <RingkasanPesanan
              menu={menuKedai}
              pesanan={pesanan}
              totalItem={jumlahItem}
              totalHarga={totalHarga}
              onTambah={handleTambah}
              onKurangi={handleKurangi}
            />
            <FormPesan
              namaPelanggan={namaPelanggan}
              onNamaChange={handleNamaChange}
              nomorMeja={nomorMeja}
              onMejaChange={handleMejaChange}
              pesanValidasi={pesanValidasi}
              jumlahItem={jumlahItem}
              metodePembayaran={metodePembayaran}
              onMetodePembayaranChange={setMetodePembayaran}
              onSubmit={handleKirimPesanan}
            />
            <p className="checkout-footnote"><span className="footnote-rule" /> This is a local ordering demo. No data is sent to a server.</p>
          </aside>
        </div>
      </main>

      <Footer />

      {jumlahItem > 0 && (
        <a href="#pesanan" className="mobile-order-bar" aria-label={`View order, ${jumlahItem} items, ${formatRupiah(totalHarga)}`}>
          <span className="mobile-order-copy"><strong>{jumlahItem} {jumlahItem === 1 ? "item" : "items"}</strong><small>{formatRupiah(totalHarga)}</small></span>
          <span className="mobile-order-action">View order <span aria-hidden="true">→</span></span>
        </a>
      )}

      {menungguPembayaran && (
        <div className="success-overlay" role="presentation">
          <section className="payment-modal" role="dialog" aria-modal="true" aria-labelledby="payment-title">
            <button type="button" className="modal-close" onClick={() => setMenungguPembayaran(null)} aria-label="Close payment">×</button>
            <span className="section-overline">CHECKOUT · STEP 2 OF 2</span>
            <h2 id="payment-title">Choose how to pay</h2>
            <p className="payment-copy">Review your order before confirming. This is a front-end demo, so no real payment will be taken.</p>
            <div className="payment-methods">
              <label className={`payment-method ${metodePembayaran === "QRIS" ? "selected" : ""}`}><input type="radio" name="payment" value="QRIS" checked={metodePembayaran === "QRIS"} onChange={(event) => setMetodePembayaran(event.target.value)} /><span className="payment-method-icon">QR</span><span><strong>QRIS</strong><small>Simulated QR payment</small></span><span className="payment-radio" /></label>
              <label className={`payment-method ${metodePembayaran === "Cash at cashier" ? "selected" : ""}`}><input type="radio" name="payment" value="Cash at cashier" checked={metodePembayaran === "Cash at cashier"} onChange={(event) => setMetodePembayaran(event.target.value)} /><span className="payment-method-icon">IDR</span><span><strong>Cash at cashier</strong><small>Pay in person at the counter</small></span><span className="payment-radio" /></label>
            </div>
            <div className="payment-total-line"><span>Total to pay</span><strong>{formatRupiah(menungguPembayaran.total)}</strong></div>
            <div className="payment-breakdown"><span>Subtotal</span><strong>{formatRupiah(menungguPembayaran.subtotal)}</strong><span>Discount (0%)</span><strong>{formatRupiah(0)}</strong><span>Tax / Service (0%)</span><strong>{formatRupiah(0)}</strong></div>
            <button type="button" className="primary-button success-action" onClick={handleKonfirmasiPembayaran}>Confirm demo payment <span aria-hidden="true">→</span></button>
            <button type="button" className="payment-back" onClick={() => setMenungguPembayaran(null)}>Back to order details</button>
          </section>
        </div>
      )}

      {pesananSukses && (
        <div className="success-overlay" role="presentation">
          <section className="success-modal" role="dialog" aria-modal="true" aria-labelledby="success-title">
            <button type="button" className="modal-close" onClick={() => setPesananSukses(null)} aria-label="Close confirmation">×</button>
            <div className="success-check" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5"/><path d="m14 24 7 7 14-15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <span className="section-overline">ORDER RECEIVED</span>
            <h2 id="success-title">Thank you, {pesananSukses.nama}.</h2>
            <p className="success-copy">Your order for table <strong>{pesananSukses.meja}</strong> has been recorded in this demo.</p>
            <div className="receipt-paper">
              <div className="receipt-brand">KEDAI KOPI SENJA</div>
              <div className="receipt-subbrand">COFFEEHOUSE · TABLE ORDER</div>
              <div className="receipt-dash" />
              <div className="receipt-meta"><span>RECEIPT</span><strong>#{pesananSukses.nomor}</strong></div>
              <div className="receipt-meta"><span>Customer</span><strong>{pesananSukses.nama}</strong></div>
              <div className="receipt-meta"><span>Table</span><strong>{pesananSukses.meja}</strong></div>
              <div className="receipt-meta"><span>Payment</span><strong>{pesananSukses.metode}</strong></div>
              <div className="receipt-dash" />
              <div className="receipt-items-heading"><span>ITEM</span><span>AMOUNT (IDR)</span></div>
              {pesananSukses.rincian.map((item) => (
                <div className="success-receipt-row" key={item.id}>
                  <div className="receipt-product"><img src={item.gambar} alt=""/><span>{item.nama}<small>{item.jumlah} × {formatRupiah(item.subtotal / item.jumlah)}</small></span></div>
                  <strong>{formatRupiah(item.subtotal)}</strong>
                </div>
              ))}
              <div className="receipt-dash" />
              <div className="receipt-calc"><span>Subtotal</span><strong>{formatRupiah(pesananSukses.subtotal)}</strong></div>
              <div className="receipt-calc"><span>Discount (0%)</span><strong>{formatRupiah(pesananSukses.diskon)}</strong></div>
              <div className="receipt-calc"><span>Tax / Service (0%)</span><strong>{formatRupiah(pesananSukses.pajak)}</strong></div>
              <div className="receipt-dash" />
              <div className="success-receipt-total"><span>TOTAL · IDR</span><strong>{formatRupiah(pesananSukses.total)}</strong></div>
              <div className="receipt-thanks">THANK YOU FOR STOPPING BY</div>
              <div className="receipt-barcode" aria-label="Decorative receipt barcode" />
              <div className="receipt-subbrand">THIS IS A DEMO RECEIPT — NOT A TAX INVOICE</div>
            </div>
            <p className="success-reset-note">Your payment step is confirmed in this demo. Your form and basket are now empty.</p>
            <button type="button" className="primary-button success-action" onClick={() => setPesananSukses(null)}>Back to menu <span aria-hidden="true">→</span></button>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
