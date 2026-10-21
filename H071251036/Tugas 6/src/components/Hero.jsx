export default function Hero() {
  const handleKlikTombol = () => {
    console.log('Tombol Hero diklik: Ayo bekerja sama!')
  }

  return (
    <section id="home" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 sm:px-6 md:flex-row md:justify-between md:py-24">
        <div className="max-w-xl text-center md:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Halo, selamat datang!
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Saya <span className="text-emerald-400">Gamaliel B.M.</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Seorang pengembang web dan cheat pemula yang senang membangun antarmuka
            modern, responsif, dan Bersenang senang dengan game yang di cheat
          </p>
          <button
            type="button"
            onClick={handleKlikTombol}
            className="mt-8 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-emerald-400 hover:shadow-emerald-500/40 sm:text-base"
          >
            Ayo Bekerja Sama🥵
          </button>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-emerald-500/30 blur-2xl" />
          
          <img
            src="/Pf1.png" 
            alt="Foto profil"
            className="relative h-48 w-48 rounded-full border-4 border-emerald-400 object-cover shadow-xl sm:h-60 sm:w-60 md:h-72 md:w-72"
          />
        </div>
      </div>
    </section>
  )
}