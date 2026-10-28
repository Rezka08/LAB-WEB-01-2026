function Footer() {
  return (
    <footer id="tentang" className="site-footer">
      <div className="footer-main mx-auto grid w-full max-w-[1480px] gap-8 px-4 py-9 sm:px-6 md:grid-cols-[1.2fr_1fr_auto] lg:px-10 lg:py-12">
        <a className="brand-lockup footer-brand" href="#beranda" aria-label="Kedai Kopi Senja home">
          <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5"/><path d="M13 20h19v8.5A8.5 8.5 0 0 1 23.5 37h-2A8.5 8.5 0 0 1 13 28.5V20Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M32 22h2.5a4 4 0 0 1 0 8H32M18 14c-2 2 2 3 0 5m6-6c-2 2 2 3 0 5m6-3c-2 2 2 3 0 5M15 39h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></span>
          <span className="brand-copy"><strong>Kedai Kopi Senja</strong><small>GOOD COFFEE. GOOD MOOD.</small></span>
        </a>
        <div className="footer-message"><h2>Take a pause.<br/><span>Make it a good one.</span></h2><p>A little coffee, a little comfort, and a moment just for you.</p></div>
        <div className="footer-links"><a href="#menu">Browse menu</a><a href="#pesanan">Your order</a><a href="#form-pesan">Checkout</a></div>
      </div>
      <div className="footer-bottom mx-auto flex w-full max-w-[1480px] flex-col gap-2 px-4 py-4 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-10"><span>© 2026 Kedai Kopi Senja · Practicum project</span><span>Good coffee. Better moments.</span></div>
    </footer>
  );
}

export default Footer;
