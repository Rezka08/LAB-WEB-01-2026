function Navbar() {
  const nama = "Fadhiyah Syafikah Firman";
  const menu = ["Home", "About", "Skills", "Project", "Contact"];

  // yg muncul di console
  const handleMenuClick = (namaMenu) => {
    console.log(`Menu diklik: ${namaMenu}`);
    const toggle = document.getElementById("nav-toggle");
    if (toggle) toggle.checked = false;
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:px-6">
      <nav className="relative mx-auto flex max-w-5xl animate-drop-in items-center justify-between rounded-full border border-white/70 bg-cream/80 px-3 py-2 shadow-[0_10px_35px_rgba(29,43,95,0.18)] backdrop-blur-xl">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 rounded-full pr-3 font-display text-lg font-semibold text-navy"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-linear-to-br from-fox to-crimson text-white shadow-md transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            ♥
          </span>
          {nama}
        </a>

        <input
          id="nav-toggle"
          type="checkbox"
          aria-label="Buka atau tutup menu"
          className="peer sr-only"
        />
        <label
          htmlFor="nav-toggle"
          className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full bg-navy transition-transform active:scale-90 peer-focus-visible:outline-3 peer-focus-visible:outline-fox md:hidden peer-checked:[&>span:nth-child(1)]:translate-y-2 peer-checked:[&>span:nth-child(1)]:rotate-45 peer-checked:[&>span:nth-child(2)]:opacity-0 peer-checked:[&>span:nth-child(3)]:-translate-y-2 peer-checked:[&>span:nth-child(3)]:-rotate-45"
        >
          <span className="h-0.5 w-5 rounded bg-white transition-all duration-300" />
          <span className="h-0.5 w-5 rounded bg-white transition-all duration-300" />
          <span className="h-0.5 w-5 rounded bg-white transition-all duration-300" />
        </label>

        <ul className="absolute inset-x-0 top-full mt-3 hidden flex-col gap-1 rounded-3xl border border-white/70 bg-cream/95 p-3 shadow-xl backdrop-blur-xl peer-checked:flex md:static md:mt-0 md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
          {menu.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => handleMenuClick(item)}
                className="block rounded-full px-5 py-2.5 text-center text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-fox hover:text-white hover:shadow-lg active:scale-95">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;