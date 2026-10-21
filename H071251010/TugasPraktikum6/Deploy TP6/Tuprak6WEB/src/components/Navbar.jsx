function Navbar() {
  const menu = [
    { id: 1, label: 'Home', href: '#home' },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Experience', href: '#experience' },
    { id: 4, label: 'Projects', href: '#projects' },
    { id: 5, label: 'GitHub', href: '#github' },
    { id: 6, label: 'Skills', href: '#skills' },
    { id: 7, label: 'Contact', href: '#contact' },
  ];

  function handleMenuToggle() {
    const nav = document.getElementById('mainNav');
    const isOpen = nav?.classList.toggle('open') ?? false;
    document.getElementById('menuToggle')?.setAttribute('aria-expanded', String(isOpen));
  }

  function handleThemeToggle() {
    document.body.classList.toggle('light');
    const theme = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('portfolioTheme', theme);
    console.log(`Theme changed: ${theme}`);
  }

  function handleMenuClick(item) {
    console.log(item.label);
    document.getElementById('mainNav')?.classList.remove('open');
    document.getElementById('menuToggle')?.setAttribute('aria-expanded', 'false');
  }

  return (
    <header className="site-header" id="siteHeader">
      <a className="brand group flex items-center gap-2" href="#home" aria-label="Dwi Hartanto home">
        <span className="brand-mark brand-cube">DH</span>
        <span className="font-display font-bold tracking-tight">Dwi Hartanto</span>
      </a>
      <button
        className="menu-toggle rounded-xl p-2 transition hover:bg-white/10"
        id="menuToggle"
        type="button"
        aria-label="Buka menu"
        aria-expanded="false"
        onClick={handleMenuToggle}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className="nav" id="mainNav" aria-label="Navigasi utama">
        {menu.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={() => handleMenuClick(item)}
            className="nav-link rounded-xl px-3 py-2 transition duration-300 hover:bg-violet-400/10 hover:text-cyan-200"
          >
            {item.label}
          </a>
        ))}
        <button
          className="theme-btn transition hover:-rotate-12 hover:border-cyan-300/60 hover:text-cyan-200"
          id="themeToggle"
          type="button"
          aria-label="Ganti tema"
          title="Ganti tema gelap/terang"
          onClick={handleThemeToggle}
        >
          ☼
        </button>
      </nav>
    </header>
  );
}

export default Navbar;