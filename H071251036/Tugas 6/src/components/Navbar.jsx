const menus = [
  { id: 1, nama: 'Home', href: '#home' },
  { id: 2, nama: 'About', href: '#about' },
  { id: 3, nama: 'Skills', href: '#skills' },
  { id: 4, nama: 'Gallery', href: '#gallery' },
]

export default function Navbar() {
  const handleClick = (nama) => {
    console.log(`Menu diklik: ${nama}`)
  }

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#home" className="text-lg font-bold tracking-wide text-emerald-400 sm:text-xl">
          SEKEN.dev
        </a>
        <ul className="flex flex-wrap items-center gap-2 text-sm sm:gap-4 sm:text-base">
          {menus.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.href}
                onClick={() => handleClick(menu.nama)}
                className="rounded-md px-2 py-1 transition hover:bg-emerald-500/20 hover:text-emerald-300 sm:px-3"
              >
                {menu.nama}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}