import { formatRupiah } from "../utils/formatRupiah.js";

function RingkasanPesanan({ menu, pesanan, totalItem, totalHarga, onTambah, onKurangi }) {
  const itemPesanan = menu.filter((item) => (pesanan[item.id] || 0) > 0);

  return (
    <section className="summary-card" aria-labelledby="summary-title">
      <div className="summary-heading"><div><span className="section-overline">YOUR PICKS</span><h3 id="summary-title">Order summary</h3></div><span className="summary-count">{totalItem} {totalItem === 1 ? "item" : "items"}</span></div>

      {itemPesanan.length === 0 ? (
        <div className="empty-cart-state">
          <div className="empty-cart-art" aria-hidden="true"><svg viewBox="0 0 72 72" fill="none"><circle cx="36" cy="36" r="33" stroke="currentColor" strokeDasharray="3 4"/><path d="M20 30h27v13a11 11 0 0 1-11 11h-5a11 11 0 0 1-11-11V30Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M47 33h5a6 6 0 0 1 0 12h-5M27 23c-3 3 3 4 0 7m9-9c-3 3 3 4 0 7M21 59h29" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></div>
          <strong>Your order is waiting</strong><p>Add something you love and it will appear here.</p><a href="#menu" className="text-action">Explore menu <span aria-hidden="true">→</span></a>
        </div>
      ) : (
        <div className="summary-items">
          {itemPesanan.map((item) => {
            const jumlah = pesanan[item.id];
            return (
              <div className="summary-row" key={item.id}>
                <img src={item.gambar} alt={item.nama} className="summary-thumbnail" loading="lazy" />
                <div className="summary-item-info"><strong>{item.nama}</strong><small>{formatRupiah(item.harga)} each</small><div className="quantity-control"><button type="button" onClick={() => onKurangi(item.id)} aria-label={`Reduce ${item.nama}`}>−</button><span>{jumlah}</span><button type="button" disabled={!item.tersedia} onClick={() => onTambah(item.id)} aria-label={`Add ${item.nama}`}>+</button></div></div>
                <div className="summary-row-total"><strong>{formatRupiah(item.harga * jumlah)}</strong></div>
              </div>
            );
          })}
        </div>
      )}

      <div className="summary-total-row"><div><strong>Total</strong><small>{totalItem} {totalItem === 1 ? "item selected" : "items selected"}</small></div><strong className="summary-total-value">{formatRupiah(totalHarga)}</strong></div>
      <a href="#form-pesan" className={`primary-button summary-continue ${totalItem === 0 ? "summary-continue-empty" : ""}`}>Continue to checkout <span aria-hidden="true">→</span></a>
      <p className="summary-note">Your quantity and total update automatically.</p>
    </section>
  );
}

export default RingkasanPesanan;
