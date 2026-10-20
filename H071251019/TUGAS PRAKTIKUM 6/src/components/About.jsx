import karakter2 from "../assets/characters/character-self.svg";

function About() {
  const perkenalan =
    "Halo! Saya Fadhiyah Syafikah Firman, mahasiswa Sistem Informasi di Universitas Hasanuddin yang suka membuat website yang rapi, nyaman dipakai, dan penuh karakter.";

  const dataDiri = [
    { id: 1, value: "Based in Makassar"},
    { id: 2, value: "Creative Thinker"},
    { id: 3, value: "Code & Canvas"},
    { id: 4, value: "Lifelong Learner"},
  ];

  return (
    <section id="about" className="relative scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="reveal relative mx-auto grid max-w-6xl items-stretch gap-8 rounded-[2.5rem] bg-linear-to-br from-navy via-royal to-mist p-6 shadow-[0_30px_80px_rgba(29,43,95,0.3)] sm:p-10 md:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col justify-center">
          <p className="w-fit rounded-full bg-fox px-5 py-1.5 font-display text-sm font-semibold tracking-wide text-white uppercase shadow-md">
            About me
          </p>
          <h2 className="mt-5 font-display text-4xl leading-tight font-bold text-white sm:text-5xl">
            Kreativitas tanpa batas <span className="text-fox">di setiap baris dan piksel.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">{perkenalan}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {dataDiri.map((item) => (
              <div
                key={item.id}
                className="group flex items-center gap-3 rounded-3xl bg-cream p-3.5 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:rotate-1 hover:shadow-2xl">
                <div className="min-w-0">
                  <p className="font-display text-base leading-snug font-semibold wrap-break-word text-navy">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto grid min-h-72 w-full max-w-sm place-items-center rounded-4xl border border-white/30 bg-white/15 p-6 shadow-xl backdrop-blur-xl md:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-6 animate-spin-slow rounded-full border-4 border-dashed border-white/30"
          />
          <img
            src={karakter2}
            alt="Karakter ilustrasi berjaket navy"
            className="relative w-52 origin-bottom animate-sway drop-shadow-2xl hover:animate-jiggle sm:w-64 lg:w-72"
          />
          <p
            className="absolute top-5 right-5 animate-pop rounded-2xl rounded-br-sm bg-white px-4 py-2 text-sm font-semibold text-navy shadow-lg"
            style={{ animationDelay: "0.5s" }}
          >
            Yuk kenalan!
          </p>
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 grid h-16 w-16 animate-heartbeat place-items-center rounded-full border-4 border-copper bg-cream text-2xl text-crimson shadow-xl"
          >
            ♥
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;