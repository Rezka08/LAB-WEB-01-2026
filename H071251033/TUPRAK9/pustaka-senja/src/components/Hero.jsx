import Link from "next/link";

export default function Hero({ nama, slogan, lokasiJam }) {
  return (
    <section className="bg-[#FFF2CC] border-2 border-[#FFE699] rounded-3xl p-8 sm:p-12 text-center shadow-sm">
      <span className="inline-block bg-[#C9B6E4] text-[#382933] border border-[#B8A2D6] text-xs font-bold px-4 py-1.5 rounded-full mb-4 shadow-sm">
        Ruang Baca Komunitas
      </span>
      <h1
        style={{ fontFamily: "var(--font-fraunces)" }}
        className="text-4xl sm:text-5xl font-bold text-[#382933] mb-3 tracking-tight"
      >
        {nama}
      </h1>
      <p className="text-base sm:text-lg text-[#4E3A47] max-w-2xl mx-auto mb-3 font-normal leading-relaxed">
        {slogan}
      </p>
      <p className="text-xs sm:text-sm text-[#4E3A47]/80 mb-8 font-medium">
        {lokasiJam}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/katalog"
          className="bg-[#E06D53] hover:bg-[#CC5A40] text-white font-bold px-7 py-3 rounded-xl shadow-md transition-all active:scale-95"
        >
          Lihat Katalog
        </Link>
        <Link
          href="/usulan"
          className="bg-[#F5EFEB] hover:bg-white text-[#382933] font-bold px-7 py-3 rounded-xl border border-[#C9B6E4] shadow-sm transition-all active:scale-95"
        >
          Usulkan Buku
        </Link>
      </div>
    </section>
  );
}