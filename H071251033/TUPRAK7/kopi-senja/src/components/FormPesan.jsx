import { useState } from "react";

function FormPesan({ keranjang, onPesananBerhasil }) {
  const [nama, setNama] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [pesanError, setPesanError] = useState("");
  const [pesanSukses, setPesanSukses] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setPesanError("");
    setPesanSukses("");

    if (keranjang.length === 0) {
      setPesanError("Keranjang masih kosong. Pilih menu sebelum mengirim pesanan.");
      return;
    }

    if (!nama.trim()) {
      setPesanError("Mohon masukkan nama pemesan.");
      return;
    }

    if (!nomorMeja.trim()) {
      setPesanError("Mohon masukkan nomor meja Anda.");
      return;
    }

    setPesanSukses(
      `Terima kasih Kak ${nama.trim()}! Pesanan untuk Meja ${nomorMeja.trim()} sedang dibuat oleh barista kami.`
    );

    setNama("");
    setNomorMeja("");
    onPesananBerhasil();
  }

  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-stone-200/80 mt-4">
      <h3 className="text-base font-bold text-stone-900 mb-1 tracking-tight">
        Konfirmasi Meja & Nama
      </h3>
      <p className="text-[11px] text-stone-400 mb-4">
        Pesanan akan segera diantarkan langsung ke meja Anda
      </p>

      {pesanError && (
        <div className="mb-3.5 p-3 rounded-xl bg-rose-50 border border-rose-200/70 text-rose-700 text-xs font-semibold leading-relaxed">
          {pesanError}
        </div>
      )}

      {pesanSukses && (
        <div className="mb-3.5 p-3.5 rounded-xl bg-starbucks-soft border border-emerald-200/70 text-starbucks-primary text-xs font-semibold leading-relaxed">
          {pesanSukses}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <label className="block text-xs font-bold text-stone-700 mb-1.5">
            Nama Pelanggan
          </label>
          <input
            type="text"
            placeholder="Contoh: Dimas"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 bg-[#F9FAF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-starbucks-primary/20 focus:border-starbucks-primary transition-all placeholder:text-stone-400 font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-stone-700 mb-1.5">
            Nomor Meja
          </label>
          <input
            type="text"
            placeholder="Contoh: 08"
            value={nomorMeja}
            onChange={(e) => setNomorMeja(e.target.value)}
            className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-stone-200 bg-[#F9FAF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-starbucks-primary/20 focus:border-starbucks-primary transition-all placeholder:text-stone-400 font-medium"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-full bg-starbucks-primary hover:bg-starbucks-hover text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-starbucks-primary/25 transition-all active:scale-[0.98] cursor-pointer mt-2"
        >
          Konfirmasi Pesanan
        </button>
      </form>
    </div>
  );
}

export default FormPesan;