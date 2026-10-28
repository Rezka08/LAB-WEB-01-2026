export default function Navbar({ jumlahPesanan, totalHarga }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E8E5DB] bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Kedai Kopi Senja, beranda">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-2xl text-white">☕</span>
          <span>
            <span className="block text-lg font-black leading-tight tracking-tight text-forest">kopi Rusdi<span className="text-leaf">.</span></span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Coffee & comfort</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-gray-600 md:flex">
          <a className="transition hover:text-leaf" href="#menu">Menu</a>
          <a className="transition hover:text-leaf" href="#pesanan">Pesanan</a>
          <a className="transition hover:text-leaf" href="#tentang">Tentang kami</a>
        </nav>
        <a href="#pesanan" className="flex items-center gap-3 rounded-full bg-forest px-4 py-2.5 text-white transition hover:bg-leaf">
          <span className="relative text-lg" aria-hidden="true">🛍️</span>
          <span className="hidden text-left sm:block">
            <span className="block text-xs font-bold">{jumlahPesanan} item</span>
            <span className="block text-[10px] text-white/70">{totalHarga}</span>
          </span>
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-lime-300 px-1.5 text-xs font-black text-forest sm:hidden">{jumlahPesanan}</span>
        </a>
      </div>
    </header>
  );
}