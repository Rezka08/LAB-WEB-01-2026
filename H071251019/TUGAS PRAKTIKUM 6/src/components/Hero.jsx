import karakter1 from "../assets/characters/charachter-unhas.svg";
import karakter2 from "../assets/characters/character-self.svg";
import fotoProfil from "../assets/gallery/profile.svg";

function Hero() {
  const nama = "Fadhiyah Syafikah Firman";
  const sapaan = " Ars longa, vita brevis";
  const deskripsi =
    "Waktu terus berjalan, tetapi cerita dalam setiap karya akan selalu abadi. Dari sketsa pertama hingga piksel terakhir.";
  const peran = ["Pemrograman Web", "UX Research", "Ilustrator Karakter"];

  const statistik = [
    { id: 1, angka: "4+", label: "Project dibuat" },
    { id: 2, angka: "10+", label: "ilustrasi" },
  ];

  //yg muncul di console kalau tombolnya di klik
  const handleButtonClick = () => {
    console.log(`Tombol Hero diklik: halo, perkenalkan saya ${nama}!`);
    const target = document.getElementById("about");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative scroll-mt-24 px-4 pt-28 pb-16 sm:px-6 lg:pt-32">
      <div className="relative mx-auto max-w-6xl animate-rise rounded-[2.5rem] bg-linear-to-br from-mist via-sky to-cream p-6 shadow-[0_30px_80px_rgba(29,43,95,0.22)] ring-1 ring-white/70 sm:p-10 lg:p-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 animate-spin-slow rounded-full border-4 border-dashed border-fox/60 sm:h-56 sm:w-56"
        />

        <div className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-navy shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-fox" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-fox" />
              </span>
              {sapaan}
            </p>

            <h1 className="mt-5 font-display text-5xl leading-[1.05] font-bold text-navy sm:text-6xl xl:text-7xl">
              Hai, saya
              <span className="block animate-shimmer bg-linear-to-r from-fox via-crimson to-fox bg-size-[200%_auto] bg-clip-text text-transparent">
                {nama}
              </span>
            </h1>

            <div className="mt-6 inline-flex max-w-full items-center gap-3 rounded-full bg-white/85 py-2.5 pr-5 pl-4 shadow-inner ring-1 ring-navy/10">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-copper"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <span className="grid">
                {peran.map((item, index) => (
                  <span
                    key={index}
                    className="col-start-1 row-start-1 animate-typing-role text-sm font-semibold whitespace-nowrap text-navy sm:text-base"
                    style={{ animationDelay: `${-((peran.length - index) % peran.length) * 6}s` }}
                  >
                    {item}
                  </span>
                ))}
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg lg:mx-0">
              {deskripsi}
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleButtonClick}
                className="group flex cursor-pointer items-center gap-3 rounded-full bg-copper py-2 pr-7 pl-2 font-display text-lg font-semibold text-white shadow-[0_12px_30px_rgba(192,112,63,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-fox hover:shadow-[0_18px_40px_rgba(242,139,48,0.55)] active:translate-y-0 active:scale-95"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-cream text-2xl leading-none text-copper transition-transform duration-500 group-hover:rotate-180">
                  +
                </span>
                Kenalan Yuk
              </button>
            </div>

            <ul className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {statistik.map((item) => (
                <li
                  key={item.id}
                  className="rounded-2xl bg-white/80 px-4 py-2.5 text-left shadow-sm ring-1 ring-navy/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <span className="block bg-linear-to-r from-fox to-crimson bg-clip-text font-display text-2xl leading-none font-bold text-transparent">
                    {item.angka}
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-ink/70">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto mb-10 w-full max-w-xs sm:max-w-sm lg:mb-0">
            <div className="relative aspect-4/5 animate-blob overflow-hidden bg-linear-to-b from-navy via-royal to-mist shadow-[0_25px_60px_rgba(29,43,95,0.35)] ring-8 ring-cream">
              <div
                aria-hidden="true"
                className="absolute top-8 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-fox/90 blur-[2px] sm:h-56 sm:w-56"
              />
              <img
                src={fotoProfil}
                alt="Foto profil"
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
              />
            </div>

            <img
              src={karakter2}
              alt="Karakter ilustrasi berjaket navy"
              className="absolute -top-12 -left-6 w-24 animate-float drop-shadow-xl transition-all hover:animate-jiggle sm:-left-14 sm:w-32"
              style={{ animationDelay: "0.8s" }}
            />

            <img
              src={karakter1}
              alt="Karakter ilustrasi berjaket merah"
              className="absolute -right-4 -bottom-10 w-28 origin-bottom animate-sway drop-shadow-xl hover:animate-jiggle sm:-right-14 sm:w-40"
            />

            <p className="absolute top-2 left-24 animate-pop rounded-2xl rounded-bl-sm bg-white px-4 py-2 text-sm font-semibold text-navy shadow-lg sm:left-28">
              Halo! ( •̀ ω •́ )✧
            </p>
            <p
              className="absolute right-6 -bottom-16 animate-pop rounded-2xl rounded-tr-sm bg-white px-4 py-2 text-sm font-semibold text-crimson shadow-lg sm:right-28 sm:-bottom-14"
              style={{ animationDelay: "1.2s" }}
            >
              Yuk kolaborasi!
            </p>

            <div aria-hidden="true" className="absolute top-1/3 -right-3 flex flex-col gap-2 sm:-right-8">
              <span className="grid h-9 w-9 animate-float place-items-center rounded-full bg-copper text-sm text-white shadow-lg">
                ♥
              </span>
              <span
                className="ml-4 grid h-7 w-7 animate-float place-items-center rounded-full bg-crimson text-xs text-white shadow-lg"
                style={{ animationDelay: "0.6s" }}
              >
                ♥
              </span>
              <span
                className="grid h-6 w-6 animate-float place-items-center rounded-full bg-fox text-[10px] text-white shadow-lg"
                style={{ animationDelay: "1.2s" }}
              >
                ♥
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;