export default function Footer() {
  return (
    <footer id="tentang" className="bg-forest text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xl">☕</span>
          <div>
            <p className="font-black tracking-tight">kopi Rusdi<span className="text-lime-300">.</span></p>
            <p className="mt-1 text-xs text-white/60">Tempat kecil untuk jeda yang berarti.</p>
          </div>
        </div>
        <p className="text-sm text-white/60">© 2026 Kedai Kopi Senja · Dibuat dengan ☕ dan hati.</p>
      </div>
    </footer>
  );
}