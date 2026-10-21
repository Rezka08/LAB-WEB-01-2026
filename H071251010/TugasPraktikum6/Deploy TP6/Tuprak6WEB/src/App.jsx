import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-slate-950 text-slate-100 selection:bg-violet-400/30 selection:text-white">
      <Navbar />
      <main>
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
