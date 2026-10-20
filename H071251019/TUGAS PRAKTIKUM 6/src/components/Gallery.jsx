import project1 from "../assets/gallery/project-ap2health.svg";
import project2 from "../assets/gallery/project-healiin.svg";
import project3 from "../assets/gallery/project-milupis.svg";
import project4 from "../assets/gallery/portofolio-ilustrator.svg";
import karakter2 from "../assets/characters/character-self.svg";

function Gallery() {
  const galeriFoto = [
    {
      id: 1,
      src: project1,
      judul: "AP-2-HEALTH",
      deskripsi: "Aplikasi pemantauan kesehatan berbasis Python untuk gaya hidup lebih sehat.",
      teknologi: "Python",
      tautan: [
        {
          id: 1,
          nama: "GitHub",
          href: "https://github.com/arenjiee/AP-2-HEALTH.git",
          warna: "bg-navy hover:bg-royal",
        },
      ],
      rotasi: "-rotate-3",
      tape: "bg-fox/80",
    },
    {
      id: 2,
      src: project2,
      judul: "HEALIIN HOTEL",
      deskripsi: "Sistem manajemen reservasi dan operasional hotel berbasis JavaFX & SQLite.",
      teknologi: "Java • JavaFX • SQLite",
      tautan: [
        {
          id: 1,
          nama: "GitHub",
          href: "https://github.com/fadhiyahsyafikah/Final-Project-PBO2026-Kelompok-6-Healinn.git",
          warna: "bg-navy hover:bg-royal",
        },
      ],
      rotasi: "rotate-2",
      tape: "bg-crimson/70",
    },
    {
      id: 3,
      src: project3,
      judul: "MILUPIS",
      deskripsi: "Inovasi lembaran organik penyerap minyak ramah lingkungan dari limbah serat pertanian.",
      teknologi: "Program PKM-K",
      tautan: [
        {
          id: 1,
          nama: "Instagram",
          href: "https://instagram.com/selembarmilupis",
          warna: "bg-crimson hover:bg-fox",
        },
      ],
      rotasi: "-rotate-2",
      tape: "bg-royal/70",
    },
    {
      id: 4,
      src: project4,
      judul: "ILLUSTRATOR",
      deskripsi: "Kumpulan desain maskot, ilustrasi digital, dan aset visual kreatif.",
      teknologi: "IbisPaint X • Canva",
      tautan: [
        {
          id: 1,
          nama: "Drive",
          href: "https://drive.google.com/drive/folders/1eOf8fh7ZPNek40qi_lTZ0Mz95GjDLBR7?usp=sharing",
          warna: "bg-crimson hover:bg-fox",
        },
      ],
      rotasi: "rotate-3",
      tape: "bg-copper/80",
    },
  ];

  return (
    <section id="project" className="relative scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="reveal relative mx-auto max-w-6xl rounded-[2.5rem] bg-linear-to-b from-sky to-mist/70 p-6 shadow-[0_30px_80px_rgba(29,43,95,0.2)] ring-1 ring-white/70 sm:p-10 lg:p-14">
        <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="inline-block rounded-full bg-royal px-5 py-1.5 font-display text-sm font-semibold tracking-wide text-white uppercase shadow-md">
              Project
            </p>
            <h2 className="mt-5 font-display text-4xl leading-tight font-bold text-navy sm:text-5xl">
              <span className="text-crimson">Galeri Karya</span>
            </h2>
          </div>
          <img
            src={karakter2}
            alt="Karakter fafa dengan baju navy"
            className="-mb-2 hidden w-24 origin-bottom animate-sway drop-shadow-xl hover:animate-jiggle sm:block"
          />
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8">
          {galeriFoto.map((foto) => (
            <figure
              key={foto.id}
              className={`group relative flex flex-col rounded-2xl bg-white p-3 shadow-xl transition-all duration-500 hover:z-10 hover:scale-105 hover:rotate-0 hover:shadow-2xl ${foto.rotasi}`}>
              
              <span
                aria-hidden="true"
                className={`absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 rounded-sm shadow-sm ${foto.tape}`}/>
              
              <div className="overflow-hidden rounded-xl">
                <img
                  src={foto.src}
                  alt={foto.judul}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <figcaption className="mt-3 flex flex-1 flex-col px-1">
                <span className="w-fit rounded-full bg-sky px-3 py-0.5 text-xs font-semibold text-royal">
                  {foto.teknologi}
                </span>
                <span className="mt-2 font-display text-lg leading-tight font-semibold text-navy">
                  {foto.judul}
                </span>
                <span className="mt-1 text-sm leading-snug text-ink/70">{foto.deskripsi}</span>

                <span className="mt-auto flex gap-2 pt-4">
                  {foto.tautan.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex-1 rounded-full px-3 py-2 text-center text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${link.warna}`}
                    >
                      {link.nama}
                    </a>
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;