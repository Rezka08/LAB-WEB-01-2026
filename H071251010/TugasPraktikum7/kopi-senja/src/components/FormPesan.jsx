function FormPesan({ namaPelanggan, onNamaChange, nomorMeja, onMejaChange, pesanValidasi, jumlahItem, metodePembayaran, onMetodePembayaranChange, onSubmit }) {
  return (
    <section id="form-pesan" className="form-card" aria-labelledby="form-title">
      <div className="form-heading"><span className="section-overline">ALMOST THERE</span><h3 id="form-title">Where should we bring it?</h3><p>Tell us who's ordering and which table you're at.</p></div>
      <form onSubmit={onSubmit} noValidate>
        <div className="form-field"><label htmlFor="nama-pelanggan">Your name</label><input id="nama-pelanggan" type="text" autoComplete="name" placeholder="Enter your name" value={namaPelanggan} onChange={(event) => onNamaChange(event.target.value)} aria-invalid={Boolean(pesanValidasi.nama)} aria-describedby={pesanValidasi.nama ? "error-nama" : undefined}/>{pesanValidasi.nama && <p className="field-error" id="error-nama" role="alert">{pesanValidasi.nama}</p>}</div>
        <div className="form-field"><label htmlFor="nomor-meja">Table number</label><input id="nomor-meja" type="number" inputMode="numeric" min="1" step="1" placeholder="e.g. 5" value={nomorMeja} onChange={(event) => onMejaChange(event.target.value)} aria-invalid={Boolean(pesanValidasi.meja)} aria-describedby={pesanValidasi.meja ? "error-meja" : undefined}/>{pesanValidasi.meja && <p className="field-error" id="error-meja" role="alert">{pesanValidasi.meja}</p>}</div>
        <div className="form-field payment-select-field"><label htmlFor="metode-pembayaran">Payment method</label><select id="metode-pembayaran" value={metodePembayaran} onChange={(event) => onMetodePembayaranChange(event.target.value)}><option value="QRIS">QRIS (demo)</option><option value="Cash at cashier">Cash at cashier</option></select><small className="payment-hint">Payment is simulated; no real transaction is processed.</small></div>
        {pesanValidasi.pesanan && <div className="form-alert" role="alert"><span className="alert-mark" aria-hidden="true">!</span><p>{pesanValidasi.pesanan}</p></div>}
        <div className="form-readiness"><span className={`readiness-dot ${jumlahItem > 0 ? "ready" : ""}`} /><span>{jumlahItem > 0 ? `${jumlahItem} ${jumlahItem === 1 ? "item is" : "items are"} ready to order` : "Your order is currently empty"}</span></div>
        <button type="submit" className="primary-button form-submit-button">Continue to payment <span aria-hidden="true">→</span></button>
        <p className="form-disclaimer">You will review payment and the receipt before completing this demo order.</p>
      </form>
    </section>
  );
}

export default FormPesan;
