import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Gallery from "./components/Gallery.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 animate-blob bg-fox/25 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-112 w-md animate-blob bg-royal/25 blur-3xl [animation-delay:-3s]" />
        <div className="absolute -bottom-32 left-1/4 h-96 w-96 animate-blob bg-crimson/15 blur-3xl [animation-delay:-6s]" />
      </div>
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
