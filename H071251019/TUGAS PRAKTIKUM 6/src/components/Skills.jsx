import karakter1 from "../assets/characters/charachter-unhas.svg";

function Skills() {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "Python & Java",
    "Git & GitHub",
    "Ilustrasi",
    "Problem Solving",
  ];

  const warna = [
    "bg-navy text-white",
    "bg-fox text-white",
    "bg-crimson text-white",
    "bg-royal text-white",
  ];

  const pita = [...skills, ...skills, ...skills, ...skills];

  return (
    <section id="skills" className="relative scroll-mt-24 py-16">
      <div className="px-4 sm:px-6">
        <div className="reveal relative mx-auto max-w-6xl rounded-[2.5rem] bg-cream p-6 shadow-[0_30px_80px_rgba(29,43,95,0.18)] ring-1 ring-white sm:p-10 lg:p-14">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="inline-block rounded-full bg-crimson px-5 py-1.5 font-display text-sm font-semibold tracking-wide text-white uppercase shadow-md">
                Skills
              </p>
              <h2 className="mt-5 font-display text-4xl leading-tight font-bold text-navy sm:text-5xl">
                <span className="text-fox">Rangkaian Tools & Keahlian Utama</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
                Serangkaian tools dan skill set yang terus saya asah melalui berbagai proyek untuk menghadirkan pengalaman digital yang intuitif.
              </p>

              <ul className="mt-8 flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="animate-float"
                    style={{ animationDelay: `${index * 0.45}s` }}
                  >
                    <span
                      className={`block cursor-default rounded-full px-5 py-3 font-display text-base font-semibold shadow-lg transition-all duration-300 hover:scale-110 hover:-rotate-3 hover:shadow-2xl sm:text-lg ${warna[index % warna.length]}`}
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto grid w-full max-w-xs place-items-center">
              <div
                aria-hidden="true"
                className="absolute inset-2 animate-spin-slow rounded-full border-4 border-dashed border-copper/50"
              />
              <div
                aria-hidden="true"
                className="absolute inset-8 rounded-full bg-linear-to-br from-fox to-crimson opacity-90 shadow-2xl"
              />
              <img
                src={karakter1}
                alt="Karakter fafa pakai almet unhas"
                className="relative w-52 animate-float drop-shadow-2xl hover:animate-jiggle sm:w-64 lg:w-72"/>
            </div>
          </div>
        </div>
      </div>

      {/* Pita tanpa henti */}
      <div aria-hidden="true" className="mt-14 -rotate-2 overflow-hidden bg-fox py-4 shadow-xl">
        <div className="flex w-max animate-marquee">
          {pita.map((skill, index) => (
            <span
              key={index}
              className="flex items-center font-display text-2xl font-semibold whitespace-nowrap text-white sm:text-3xl"
            >
              <span className="px-6">{skill}</span>
              <span className="text-navy">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
