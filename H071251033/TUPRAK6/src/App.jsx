import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="w-full bg-[#FFFDF5] text-stone-800 font-sans scroll-smooth min-h-screen selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;