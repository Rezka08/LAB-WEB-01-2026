import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import MusicPlayer from './components/MusicPlayer'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Gallery />
        <MusicPlayer /> {/* Menampilkan pemutar musik dari folder public */}
      </main>
      <Footer />
    </div>
  )
}