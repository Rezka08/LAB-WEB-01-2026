import Link from "next/link";
export default function Hero({ nama, slogan, lokasi }) {
  return <section className="hero-pattern relative overflow-hidden rounded-[2rem] bg-[#493326] px-7 py-12 text-[#fff8ed] shadow-[0_25px_70px_-35px_rgba(58,38,25,.65)] sm:px-14 sm:py-16">
    <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-[#d5b38e]/20"/><div className="absolute -right-4 -top-12 h-48 w-48 rounded-full border border-[#d5b38e]/20"/>
    <div className="relative max-w-2xl"><span className="eyebrow text-[#d9b78f]">A LITTLE SPACE TO SLOW DOWN</span><h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl">Selamat datang di <span className="italic text-[#e5c49f]">{nama}.</span></h1><p className="mt-6 max-w-xl text-base leading-8 text-[#e4d5c5] sm:text-lg">{slogan}</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/katalog" className="rounded-full bg-[#e9c9a5] px-6 py-3 text-sm font-bold text-[#3e2c22] transition hover:-translate-y-0.5 hover:bg-[#f4d9b9]">Jelajahi koleksi <span className="ml-2">↗</span></Link><Link href="/usulan" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Usulkan buku</Link></div><p className="mt-8 text-xs tracking-wide text-[#cdb9a5]">⌖ {lokasi}</p></div>
    <div className="absolute bottom-8 right-10 hidden rotate-[-9deg] text-[110px] opacity-20 lg:block">☕</div>
  </section>;
}
