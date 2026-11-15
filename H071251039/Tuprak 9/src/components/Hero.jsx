export default function Hero({ nama, slogan, lokasi, jam }) {
  return (
    <section className="border-[3px] border-ink bg-volt p-6 text-on-fill shadow-brut-lg md:p-12">
      <div className="flex flex-wrap gap-2 font-mono text-sm">
        <span className="border-2 border-ink bg-surface px-3 py-1 text-ink">{lokasi}</span>
        <span className="border-2 border-ink bg-surface px-3 py-1 text-ink">Buka {jam}</span>
      </div>
      <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">{nama}</h1>
      <p className="mt-6 max-w-xl text-lg md:text-xl">{slogan}</p>
    </section>
  );
}
