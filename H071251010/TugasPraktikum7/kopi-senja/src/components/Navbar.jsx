import { formatRupiah } from "../utils/formatRupiah.js";

function Navbar({ jumlahItem, totalHarga, onKategoriChange }) {
  function pilihKategori(kategori) {
    onKategoriChange(kategori);
  }

  return (
    <>
      <div className="topline"><span>GOOD COFFEE</span><span className="topline-dot" /><span>GOOD MOOD</span><span className="topline-spacer" /><span>TABLE ORDERING · KEDAI KOPI SENJA</span></div>
      <header className="site-header sticky top-0 z-40">
        <a className="brand-lockup" href="#beranda" aria-label="Kedai Kopi Senja home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5"/><path d="M13 20h19v8.5A8.5 8.5 0 0 1 23.5 37h-2A8.5 8.5 0 0 1 13 28.5V20Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M32 22h2.5a4 4 0 0 1 0 8H32M18 14c-2 2 2 3 0 5m6-6c-2 2 2 3 0 5m6-3c-2 2 2 3 0 5M15 39h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
          </span>
          <span className="brand-copy"><strong>Kedai Kopi Senja</strong><small>COFFEE · FOOD · STORIES</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#menu" onClick={() => pilihKategori("All")}>Menu</a>
          <a href="#menu" onClick={() => pilihKategori("Beverages")}>Beverages</a>
          <a href="#menu" onClick={() => pilihKategori("Food")}>Food</a>
          <a href="#pesanan">Your order</a>
        </nav>

        <a className="header-order" href="#pesanan" aria-label={`Your order: ${jumlahItem} items, ${formatRupiah(totalHarga)}`}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9.5" cy="19.5" r="1.25" fill="currentColor"/><circle cx="17.5" cy="19.5" r="1.25" fill="currentColor"/></svg>
          <span className="header-order-copy"><strong>{jumlahItem} {jumlahItem === 1 ? "item" : "items"}</strong><small>{formatRupiah(totalHarga)}</small></span>
          <span className="header-order-count">{jumlahItem}</span>
        </a>
      </header>
    </>
  );
}

export default Navbar;
