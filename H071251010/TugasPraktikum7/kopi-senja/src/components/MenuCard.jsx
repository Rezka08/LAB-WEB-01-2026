import { useState } from "react";
import { formatRupiah } from "../utils/formatRupiah.js";

function MenuCard({ menu, jumlah, onTambah, onKurangi }) {
  const [detailTerbuka, setDetailTerbuka] = useState(false);
  const labelKategori = menu.kategori === "Makanan" ? "Food" : menu.kategori === "Kopi" ? "Coffee" : "Non-Coffee";

  return (
    <>
      <article className={`product-card ${!menu.tersedia ? "product-card-soldout" : ""}`}>
        <div className="product-card-topline"><span className="product-type">{labelKategori}</span>{jumlah > 0 && <span className="product-quantity">{jumlah} in order</span>}</div>
        <button type="button" className="product-photo-button" onClick={() => setDetailTerbuka(true)} aria-label={`Open ${menu.nama} details`}>
          <span className="product-photo-orbit"><img src={menu.gambar} alt={menu.nama} className="product-photo" loading="lazy" /></span>
          {!menu.tersedia && <span className="sold-out-badge">Sold out</span>}
          <span className="photo-zoom-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg></span>
        </button>
        <button type="button" className="product-title-button" onClick={() => setDetailTerbuka(true)}><h4>{menu.nama}</h4><span className="product-title-arrow" aria-hidden="true">↗</span></button>
        <p className="product-description">{menu.deskripsi}</p>
        <div className="product-card-bottom"><strong className="product-price">{formatRupiah(menu.harga)}</strong><button type="button" className={`product-add-button ${!menu.tersedia ? "is-disabled" : ""}`} onClick={() => onTambah(menu.id)} disabled={!menu.tersedia}>{menu.tersedia ? <><span aria-hidden="true">+</span><span>Add</span></> : "Sold out"}</button></div>
      </article>

      {detailTerbuka && (
        <div className="detail-backdrop" role="presentation" onClick={(event) => { if (event.target === event.currentTarget) setDetailTerbuka(false); }}>
          <section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby={`detail-title-${menu.id}`}>
            <button type="button" className="modal-close" onClick={() => setDetailTerbuka(false)} aria-label="Close menu details">×</button>
            <div className="detail-photo-wrap"><img src={menu.gambar} alt={menu.nama} className="detail-photo" /></div>
            <div className="detail-content"><span className="section-overline">{labelKategori.toUpperCase()}</span><h2 id={`detail-title-${menu.id}`}>{menu.nama}</h2><strong className="detail-price">{formatRupiah(menu.harga)}</strong><p className="detail-description">{menu.deskripsi}</p>
              <span className={`availability-pill ${menu.tersedia ? "available" : "unavailable"}`}><span className="availability-indicator" />{menu.tersedia ? "Available to order" : "Currently sold out"}</span>
              {jumlah > 0 && <div className="detail-quantity-control"><span>In your order</span><div><button type="button" onClick={() => onKurangi(menu.id)} aria-label={`Reduce ${menu.nama} quantity`}>−</button><strong>{jumlah}</strong><button type="button" disabled={!menu.tersedia} onClick={() => onTambah(menu.id)} aria-label={`Add one ${menu.nama}`}>+</button></div></div>}
              <button type="button" className="primary-button detail-add-button" disabled={!menu.tersedia} onClick={() => { onTambah(menu.id); setDetailTerbuka(false); }}>{menu.tersedia ? "Add to your order" : "Currently unavailable"}<span aria-hidden="true">→</span></button>
              <p className="detail-note">Prices are in Indonesian rupiah. Menu availability follows the practicum data.</p>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default MenuCard;
