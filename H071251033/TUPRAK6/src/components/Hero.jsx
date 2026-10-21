function Hero() {
  const handleButtonClick = () => {
    console.log("Tombol Jelajahi Portofolio diklik");
  };

  return (
    <section id="hero" className="bg-[#FFFDF4] text-stone-800 py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b-2 border-stone-800/10 w-full relative overflow-hidden">
      {/* Dekorasi Geometris */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-200/40 rounded-full blur-xl -z-0"></div>
      <div className="absolute bottom-10 left-5 w-24 h-24 bg-amber-200/50 rounded-lg -z-0 rotate-12"></div>

      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left">
          {/* Badge Geometris Bauhaus */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-200/70 border border-stone-800/20 text-stone-900 text-sm font-bold mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            Sistem Informasi - Unhas
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight font-serif text-stone-900">
            <span className="text-purple-900">ST. NURFADHILLAH</span> <br />
            <span className="text-purple-800">FAUZIAH</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-700 mb-8 max-w-2xl leading-relaxed font-medium">
            Mahasiswa Sistem Informasi yang mendalami manajemen sistem informasi, pengembangan web, serta analisis proses bisnis.
          </p>

          <a
            href="#about"
            onClick={handleButtonClick}
            className="inline-block bg-purple-900 hover:bg-purple-950 text-amber-100 font-bold px-8 py-4 rounded-xl border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.9)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,0.9)] transition-all duration-200"
          >
            Jelajahi Portofolio →
          </a>
        </div>

        {/* Frame Profil Bauhaus */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            {/* Kotak Latar Belakang Offset */}
            <div className="absolute -inset-3 bg-amber-200 rounded-full border-2 border-stone-800/20 rotate-6"></div>
            <div className="absolute -inset-3 bg-purple-200/80 rounded-full border-2 border-stone-800/20 -rotate-3"></div>

            {/* Container Foto */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-stone-900 shadow-xl">
              <img
                src="/images/profile.jpg"
                alt="Foto Profil Dillah"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;