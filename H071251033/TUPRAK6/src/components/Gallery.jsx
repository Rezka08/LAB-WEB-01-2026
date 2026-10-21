import foto1 from "../assets/gallery/foto1.png";
import foto2 from "../assets/gallery/foto2.png";
import foto3 from "../assets/gallery/foto3.png";
import foto4 from "../assets/gallery/foto4.png";

function Gallery() {
  const galeriFoto = [
    { id: 1, src: foto1, judul: "Website Wisata sebagai tugas kuliah" },
    { id: 2, src: foto2, judul: "Website Komunitas sebagai tugas kuliah" },
    { id: 3, src: foto3, judul: "Website Sistem Laporan Praktikum sebagai tugas kuliah" },
    { id: 4, src: foto4, judul: "Website Tugas Tim sebagai tugas kuliah" },
  ];

  return (
    <section id="gallery" className="bg-[#FAF7E8] text-stone-800 py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b-2 border-stone-800/10">
      <div className="w-full text-center">
        <div className="flex justify-center items-center gap-3 mb-3">
          <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
          <h2 className="text-3xl md:text-4xl font-black text-purple-950 font-serif">Galeri Hasil Proyek</h2>
          <span className="w-3 h-3 bg-amber-400 rounded-sm"></span>
        </div>
        <div className="w-20 h-1.5 bg-stone-900 mx-auto mb-4 rounded-full"></div>
        <p className="text-stone-700 mb-12 text-lg font-medium">Dokumentasi hasil proyek dan pengembangan sistem yang pernah saya kerjakan.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {galeriFoto.map((foto) => (
            <figure
              key={foto.id}
              className="bg-[#FFFDF4] rounded-2xl overflow-hidden border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.85)] hover:-translate-y-1 transition-transform duration-300 flex flex-col"
            >
              <div className="h-56 overflow-hidden border-b-2 border-stone-900 bg-amber-100/50">
                <img
                  src={foto.src}
                  alt={foto.judul}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <figcaption className="p-5 text-stone-900 font-bold text-sm md:text-base my-auto leading-snug">
                {foto.judul}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;