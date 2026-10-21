function Skills() {
  const skillsList = [
    "HTML & CSS",
    "JavaScript Dasar",
    "Pemrograman Java (OOP)",
    "Python Programming",
    "Analisis Proses Bisnis",
    "Database & SQL",
  ];

  return (
    <section id="skills" className="bg-[#FFFDF4] text-stone-800 py-16 md:py-24 px-6 md:px-12 lg:px-20 border-b-2 border-stone-800/10 w-full">
      <div className="w-full text-center">
        <div className="flex justify-center items-center gap-3 mb-3">
          <span className="w-4 h-4 bg-purple-300 rounded-sm rotate-45"></span>
          <h2 className="text-3xl md:text-4xl font-black text-purple-950 font-serif">Keahlian & Kompetensi</h2>
          <span className="w-4 h-4 bg-amber-300 rounded-full"></span>
        </div>
        <div className="w-20 h-1.5 bg-stone-900 mx-auto mb-4 rounded-full"></div>
        <p className="text-stone-700 mb-12 text-lg font-medium">Beberapa teknologi dan bidang keahlian yang sedang saya pelajari dan kembangkan.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch w-full max-w-6xl mx-auto">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border-2 border-stone-900 shadow-[3px_3px_0px_0px_rgba(28,25,23,0.8)] transition-all duration-200 flex items-center justify-center text-center min-h-[100px] w-full ${
                index % 2 === 0 ? "bg-amber-100/70" : "bg-purple-100/70"
              }`}
            >
              <span className="font-extrabold text-stone-900 text-base md:text-lg tracking-wide">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;