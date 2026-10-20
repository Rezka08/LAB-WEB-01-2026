import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans p-4 md:p-8 flex flex-col lg:flex-row lg:items-start gap-8 bg-dot-pattern ${
        isDark
          ? "dark bg-[#141312] text-stone-100"
          : "bg-[#f5f0e6] text-stone-900"
      }`}
    >
      <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

      <main className="flex-1 min-w-0 space-y-16 overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}

export default App;