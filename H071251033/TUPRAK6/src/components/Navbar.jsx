function Navbar() {
  const menuList = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Gallery", id: "gallery" },
  ];

  const handleMenuClick = (menuName, sectionId) => {
    console.log(`Menu diklik: ${menuName}`);
    const toggleCheckbox = document.getElementById("mobile-menu-toggle");
    if (toggleCheckbox) {
      toggleCheckbox.checked = false;
    }
  };

  return (
    <nav className="bg-[#FAF7E8]/95 backdrop-blur-md border-b-2 border-stone-800/20 sticky top-0 z-50 transition-all">
      <div className="w-full px-6 md:px-12 lg:px-20 py-4 flex justify-between items-center relative">
        <a
          href="#hero"
          className="flex items-center gap-2 text-2xl font-black tracking-wider text-purple-900 font-serif"
          onClick={() => console.log("Logo diklik: Dillah.")}
        >
          <span className="w-4 h-4 bg-amber-300 border border-stone-800/30 rounded-sm inline-block"></span>
          <span>Dillah</span>
          <span className="w-3 h-3 bg-purple-400 rounded-full inline-block"></span>
        </a>

        {/* Input & Label untuk Menu Burger */}
        <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
        <label
          htmlFor="mobile-menu-toggle"
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md border-2 border-stone-800/20 text-purple-900 cursor-pointer hover:bg-amber-200/50 transition-colors"
          aria-label="Toggle Navigation"
          onClick={() => console.log("Tombol Burger Navbar diklik")}
        >
          <span className="w-5 h-0.5 bg-stone-800 mb-1"></span>
          <span className="w-5 h-0.5 bg-stone-800 mb-1"></span>
          <span className="w-5 h-0.5 bg-stone-800"></span>
        </label>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuList.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.id}`}
                onClick={() => handleMenuClick(item.name, item.id)}
                className="text-stone-800 hover:text-purple-700 font-bold tracking-wide transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Dropdown */}
        <div className="peer-checked:flex hidden md:hidden flex-col absolute top-full left-0 right-0 bg-[#FAF7E8] border-b-2 border-stone-800/20 px-6 py-4 shadow-lg space-y-3">
          {menuList.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              onClick={() => handleMenuClick(item.name, item.id)}
              className="text-stone-800 hover:text-purple-700 font-bold py-2 border-b border-stone-300 last:border-none transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;