import { Terminal, Radio } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-emerald-300/20 bg-black/60">
      <div className="container flex flex-col justify-between gap-4 py-8 sm:flex-row sm:items-center">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold tracking-[.18em] text-white">
            <Terminal size={15} className="text-emerald-300" /> PUSTAKA SENJA
          </p>
          <p className="mt-2 text-[10px] text-slate-500">Ruang temu untuk cerita, pengetahuan, dan ide baru.</p>
        </div>
        <p className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-emerald-300">
          <Radio size={13} /> ALL SYSTEMS OPERATIONAL
        </p>
      </div>
      <div className="border-t border-emerald-300/10 py-3 text-center font-mono text-[8px] tracking-[.2em] text-emerald-100/30">
        © 2026 PUSTAKA SENJA · END OF TRANSMISSION
      </div>
    </footer>
  );
}
