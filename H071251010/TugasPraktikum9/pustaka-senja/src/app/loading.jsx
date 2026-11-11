export default function Loading() {
  return (
    <div className="container grid min-h-[45vh] place-items-center py-16">
      <div className="terminal-panel w-full max-w-md p-8 text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-emerald-300/20 border-t-emerald-300" />
        <p className="mt-5 font-mono text-[10px] tracking-[.2em] text-emerald-300">QUERYING PUSTAKA SENJA DATABASE...</p>
        <p className="mt-2 text-xs text-slate-500">Sedang mengambil data koleksi buku.</p>
      </div>
    </div>
  );
}
