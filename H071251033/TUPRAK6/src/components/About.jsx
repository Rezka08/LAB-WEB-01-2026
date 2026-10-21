function About() {
  const biodata = [
    { id: 1, label: "Program Studi", value: "Sistem Informasi", bg: "bg-purple-100/80" },
    { id: 2, label: "Universitas", value: "Universitas Hasanuddin (Unhas)", bg: "bg-amber-100/80" },
    { id: 3, label: "Fokus Minat", value: "Management of Information Systems (MSI)", bg: "bg-amber-100/80" },
    { id: 4, label: "Domisili", value: "Makassar, Sulawesi Selatan", bg: "bg-purple-100/80" },
  ];

  return (
    <section id="about" className="bg-[#FAF7E8] text-stone-800 py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b-2 border-stone-800/10 w-full">
      <div className="w-full text-center">
        <div className="flex justify-center items-center gap-3 mb-3">
          <span className="w-3 h-3 bg-amber-400 rounded-full"></span>
          <h2 className="text-3xl md:text-4xl font-black text-purple-950 font-serif">Tentang Saya</h2>
          <span className="w-3 h-3 bg-purple-400 rounded-sm"></span>
        </div>
        <div className="w-20 h-1.5 bg-stone-900 mx-auto mb-8 rounded-full"></div>

        <p className="text-stone-700 text-lg md:text-xl leading-relaxed mb-12 max-w-4xl mx-auto font-medium">
          Saya adalah mahasiswa semester dua yang memiliki ketertarikan pada bagaimana teknologi informasi dapat diintegrasikan ke dalam proses bisnis. Berfokus pada pemecahan masalah nyata melalui pendekatan sistematis dan terstruktur.
        </p>

        {/* Kartu Biodata Bauhaus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left w-full">
          {biodata.map((item) => (
            <div
              key={item.id}
              className={`${item.bg} p-6 rounded-2xl border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,0.85)] hover:-translate-y-1 transition-transform flex flex-col justify-center min-h-[140px] space-y-2`}
            >
              <span className="text-xs text-purple-900 font-extrabold uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-2 h-2 bg-stone-900 rounded-full inline-block"></span>
                {item.label}
              </span>
              <p className="text-base md:text-lg font-bold text-stone-900">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;