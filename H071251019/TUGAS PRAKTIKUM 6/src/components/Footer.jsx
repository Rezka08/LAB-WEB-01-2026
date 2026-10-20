function Footer() {
  const nama = "Fadhiyah Syafikah Firman";
  const tahun = new Date().getFullYear();

  const kontak = [
    { id: 1, nama: "Email", href: "mailto:fadhiyah2007@gmail.com", warna: "hover:bg-fox" },
    { id: 2, nama: "Instagram", href: "https://instagram.com/fadhiyahsyafikah", warna: "hover:bg-crimson" },
    { id: 3, nama: "GitHub", href: "https://github.com/fadhiyahsyafikah", warna: "hover:bg-royal" },
  ];

  return (
    <footer id="contact" className="relative mt-24 scroll-mt-24 px-4 sm:px-6">
      <div className="reveal relative mx-auto max-w-6xl rounded-t-[2.5rem] bg-navy px-6 pt-16 pb-8 text-white shadow-[0_-20px_60px_rgba(29,43,95,0.25)] sm:px-10">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">
              Mari <span className="text-fox">terhubung!</span>
            </h2>
            <p className="mt-2 max-w-md text-white/75">
              Setiap karya besar dimulai dari satu sapaan hangat. Mari terhubung melalui media sosial atau email!
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-3">
            {kontak.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 ${item.warna}`}>
                  <span aria-hidden="true">{item.ikon}</span>
                  {item.nama}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-sm text-white/70">
            &copy; {tahun} {nama}. All rights reserved.
          </p>
          <a
            href="#home"
            aria-label="Kembali ke atas"
            className="grid h-12 w-12 animate-bounce place-items-center rounded-full bg-copper text-xl text-white shadow-lg transition-colors hover:bg-fox">
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
