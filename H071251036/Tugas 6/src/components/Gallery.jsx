import foto1 from '../assets/Gallery/Foto1.png'
import foto2 from '../assets/Gallery/Foto2.png'
import foto3 from '../assets/Gallery/Foto3.png'
import foto4 from '../assets/Gallery/Foto4.png'

const daftarGaleri = [
  { id: 1, src: foto1, judul: 'Proyek Kalkulator' },
  { id: 2, src: foto2, judul: 'Proyek Aimbot' },
  { id: 3, src: foto3, judul: 'Proyek Web Pernikahan' },
  { id: 4, src: foto4, judul: 'Proyek Aimbot' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Galeri Proyek
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {daftarGaleri.map((foto) => (
            <figure
              key={foto.id}
              className="group overflow-hidden rounded-xl bg-white shadow-md"
            >
              <img
                src={foto.src}
                alt={foto.judul}
                className="h-44 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-48"
              />
              <figcaption className="p-3 text-center text-sm font-medium text-slate-700">
                {foto.judul}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}