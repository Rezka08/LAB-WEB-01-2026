    import { useState } from "react";

    const Navbar = ({ isDark, toggleDarkMode }) => {
    const [activeTab, setActiveTab] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: "Home", href: "#home" },
        { label: "About Me", href: "#about" },
        { label: "Experience", href: "#experience" },
        { label: "Skills", href: "#skills" },
        { label: "Projects & Certs", href: "#credentials" },
        { label: "Contact", href: "#contact" }
    ];

    const handleNavClick = (label) => {
        setActiveTab(label);
        setIsOpen(false);
    };

    return (
        <aside
        className={`w-full lg:w-64 shrink-0 self-start sticky top-4 lg:top-8 z-50 p-4 lg:p-6 rounded-3xl border shadow-xl flex flex-col justify-between gap-4 lg:gap-6 lg:max-h-[calc(100vh-4rem)] transition-colors duration-300 ${
            isDark
            ? "bg-[#1d1b1a] border-[#2a2725] text-stone-100"
            : "bg-[#fcf9f2] border-[#e8e2d5] text-stone-800"
        }`}
        >
        <div className="flex items-center justify-between lg:flex-col lg:items-center lg:text-center gap-3">
            <div className="flex items-center lg:flex-col gap-3">
            <img
                src="/profile.jpeg"
                alt="Andika Rahman"
                className="w-10 h-10 lg:w-24 lg:h-24 rounded-full object-cover border-2 border-[#c05621] shadow-md"
            />
            <div>
                <h2 className="text-sm lg:text-lg font-bold">Andika Rahman</h2>
                <p className="text-[10px] lg:text-xs opacity-60">H071251061 • Sistem Informasi</p>
            </div>
            </div>

            <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden px-3 py-1.5 rounded-xl border border-stone-300/30 dark:border-stone-800 text-sm font-bold"
            >
            {isOpen ? "✕" : "☰"}
            </button>
        </div>

        <nav className={`${isOpen ? "block" : "hidden"} lg:block my-auto pt-2 lg:pt-0`}>
            <ul className="space-y-1.5">
            {menuItems.map((item, index) => {
                const isActive = activeTab === item.label;
                return (
                <li key={index}>
                    <a
                    href={item.href}
                    onClick={() => handleNavClick(item.label)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                        isActive
                        ? isDark
                            ? "bg-[#2c2724] text-[#e0692b]"
                            : "bg-[#ebdcc9] text-[#c05621]"
                        : isDark
                        ? "text-stone-400 hover:bg-[#252220]"
                        : "text-stone-600 hover:bg-[#f2ece0]"
                    }`}
                    >
                    {item.label}
                    </a>
                </li>
                );
            })}
            </ul>
        </nav>

        <div
            className={`${
            isOpen
                ? "block space-y-4 pt-4 border-t border-stone-300/30 dark:border-stone-800"
                : "hidden lg:block space-y-4 pt-4 border-t border-stone-300/30 dark:border-stone-800"
            }`}
        >
            <button
            type="button"
            onClick={toggleDarkMode}
            className={`w-full py-2.5 px-4 text-xs font-medium rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer border ${
                isDark
                ? "bg-[#252220] hover:bg-[#2e2a27] text-stone-300 border-[#332f2c]"
                : "bg-[#f2ece0] hover:bg-[#e8dfd1] text-stone-700 border-[#e2d8c7]"
            }`}
            >
            {isDark ? "🌙 Mode Terang" : "☼ Mode Gelap"}
            </button>

            <div className="flex justify-center items-center gap-3">
            <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs hover:text-[#c05621] transition-colors ${
                isDark ? "bg-[#252220]" : "bg-[#f2ece0]"
                }`}
            >
                🐱
            </a>
            <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs hover:text-[#c05621] transition-colors ${
                isDark ? "bg-[#252220]" : "bg-[#f2ece0]"
                }`}
            >
                in
            </a>
            <a
                href="mailto:ndkrhmnn@gmail.com"
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs hover:text-[#c05621] transition-colors ${
                isDark ? "bg-[#252220]" : "bg-[#f2ece0]"
                }`}
            >
                ✉
            </a>
            </div>

            <p className="text-[10px] text-center opacity-50">
            &copy; 2026 Andika Rahman
            </p>
        </div>
        </aside>
    );
    };

    export default Navbar;