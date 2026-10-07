// Data awal praktikan
const dataPraktikan = [
  { nama: "Budi", nilaiTugas: [80, 85, 90] },
  { nama: "Siti", nilaiTugas: [60, 60, 60] },
  { nama: "Andi", nilaiTugas: [90, 90, 90] },
  { nama: "Dewi", nilaiTugas: [75, 75, 75] },
  { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

// 1. Verifikasi Asisten Lab (hanya nama tertentu yang boleh masuk)
const daftarAsisten = ["Rezka", "Dimas", "Sarah"];

let asistenHadir = false;
let namaAsisten = "";

while (true) {
  const input = prompt(
    "Verifikasi Asisten Lab\n\nMasukkan nama Anda:\n(Rezka / Dimas / Sarah)"
  );

  // Jika user klik Cancel
  if (input === null) {
    document.write(`
      <div style="
        font-family: system-ui, sans-serif;
        background: #0f172a;
        color: #fca5a5;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 24px;
      ">
        <div>
          <h1 style="font-size: 2rem;">⛔ Akses Dibatalkan</h1>
          <p style="color: #94a3b8; margin-top: 8px;">
            Anda menutup verifikasi. Halaman tidak dapat diakses.
          </p>
        </div>
      </div>
    `);
    throw new Error("Verifikasi dibatalkan oleh user");
  }

  // Cek apakah nama ada di daftar asisten (case-insensitive)
  const ditemukan = daftarAsisten.find(
    (nama) => nama.toLowerCase() === input.trim().toLowerCase()
  );

  if (ditemukan) {
    asistenHadir = true;
    namaAsisten = ditemukan;
    break; // keluar dari loop, lanjut render
  } else {
    alert(`❌ Akses Ditolak!\n\n"Nama ${input}" tidak terdaftar sebagai Asisten Lab.\nSilakan coba lagi.`);
  }
}

// 2. Fungsi menghitung rata-rata
function hitungRataRata(nilai) {
  const total = nilai.reduce((akumulasi, n) => akumulasi + n, 0);
  return total / nilai.length;
}

// Fungsi menentukan status kelulusan (batas 75)
function tentukanStatus(rataRata) {
  return rataRata >= 75 ? "LULUS" : "TIDAK LULUS";
}

// Fungsi menentukan predikat
function tentukanPredikat(rataRata) {
  if (rataRata >= 90) return "A (Sangat Baik)";
  if (rataRata >= 85) return "B (Baik)";
  if (rataRata >= 75) return "C (Cukup)";
  return "D (Tidak Lulus)";
}

// Fungsi memproses seluruh data praktikan
function prosesDataPraktikan(data) {
  return data.map((praktikan) => {
    const rataRata = hitungRataRata(praktikan.nilaiTugas);
    return {
      nama: praktikan.nama,
      nilaiTugas: praktikan.nilaiTugas,
      rataRata: Number(rataRata.toFixed(2)),
      status: tentukanStatus(rataRata),
      predikat: tentukanPredikat(rataRata)
    };
  });
}

const hasilAkhir = prosesDataPraktikan(dataPraktikan);

// 4. Tampilkan hasil akhir ke console
console.log("Data hasil akhir praktikan:", hasilAkhir);

// 3. Render laporan menggunakan document.write()
document.write(`
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', system-ui, sans-serif;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      min-height: 100vh;
      padding: 32px 16px;
      color: #e2e8f0;
    }

    .dashboard {
      max-width: 1100px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 32px;
    }

    .header h1 {
      font-size: 2.2rem;
      font-weight: 800;
      background: linear-gradient(90deg, #38bdf8, #a78bfa);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .header p {
      color: #94a3b8;
      margin-top: 8px;
    }

    .badge {
      display: inline-block;
      margin-top: 12px;
      padding: 8px 16px;
      border-radius: 999px;
      background: rgba(56, 189, 248, 0.15);
      border: 1px solid rgba(56, 189, 248, 0.4);
      color: #7dd3fc;
      font-size: 0.9rem;
    }

    .badge.danger {
      background: rgba(248, 113, 113, 0.15);
      border-color: rgba(248, 113, 113, 0.4);
      color: #fca5a5;
    }

    .summary {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }

    .summary-card {
      background: rgba(30, 41, 59, 0.8);
      border: 1px solid rgba(148, 163, 184, 0.15);
      border-radius: 16px;
      padding: 20px;
      backdrop-filter: blur(10px);
    }

    .summary-card h3 {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #94a3b8;
      margin-bottom: 8px;
    }

    .summary-card .value {
      font-size: 1.8rem;
      font-weight: 700;
      color: #f8fafc;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }

    .card {
      background: rgba(30, 41, 59, 0.85);
      border: 1px solid rgba(148, 163, 184, 0.15);
      border-radius: 20px;
      padding: 24px;
      transition: transform 0.2s, box-shadow 0.2s;
      position: relative;
      overflow: hidden;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }

    .card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #38bdf8, #a78bfa);
    }

    .card.lulus::before {
      background: linear-gradient(90deg, #34d399, #22d3ee);
    }

    .card.tidak-lulus::before {
      background: linear-gradient(90deg, #f87171, #fb923c);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .card-header h2 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #f1f5f9;
    }

    .status {
      font-size: 0.75rem;
      font-weight: 700;
      padding: 6px 12px;
      border-radius: 999px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .status.lulus {
      background: rgba(52, 211, 153, 0.15);
      color: #6ee7b7;
      border: 1px solid rgba(52, 211, 153, 0.3);
    }

    .status.tidak-lulus {
      background: rgba(248, 113, 113, 0.15);
      color: #fca5a5;
      border: 1px solid rgba(248, 113, 113, 0.3);
    }

    .nilai-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 16px;
    }

    .nilai-item {
      background: rgba(51, 65, 85, 0.6);
      border: 1px solid rgba(148, 163, 184, 0.15);
      border-radius: 8px;
      padding: 6px 10px;
      font-size: 0.85rem;
      color: #cbd5e1;
    }

    .avg {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding-top: 16px;
      border-top: 1px solid rgba(148, 163, 184, 0.15);
    }

    .avg .label {
      color: #94a3b8;
      font-size: 0.9rem;
    }

    .avg .score {
      font-size: 1.8rem;
      font-weight: 800;
    }

    .avg .score.lulus {
      color: #6ee7b7;
    }

    .avg .score.tidak-lulus {
      color: #fca5a5;
    }

    .predikat {
      font-size: 0.8rem;
      color: #94a3b8;
      margin-top: 4px;
      text-align: right;
    }

    .footer {
      text-align: center;
      margin-top: 40px;
      color: #64748b;
      font-size: 0.85rem;
    }
  </style>

  <div class="dashboard">
    <div class="header">
      <h1>Sistem Laporan Praktikum</h1>
      <p>Evaluasi Performa Praktikan Berdasarkan Nilai Tugas</p>
      <div class="badge ${asistenHadir ? '' : 'danger'}">
        Asisten Lab: ${asistenHadir ? 'Hadir ✅' : 'Tidak Hadir ❌'}
      </div>
    </div>

    <div class="summary">
      <div class="summary-card">
        <h3>Total Praktikan</h3>
        <div class="value">${hasilAkhir.length}</div>
      </div>
      <div class="summary-card">
        <h3>Lulus</h3>
        <div class="value">${hasilAkhir.filter(h => h.status === 'LULUS').length}</div>
      </div>
      <div class="summary-card">
        <h3>Tidak Lulus</h3>
        <div class="value">${hasilAkhir.filter(h => h.status === 'TIDAK LULUS').length}</div>
      </div>
      <div class="summary-card">
        <h3>Rata-rata Kelas</h3>
        <div class="value">
          ${(hasilAkhir.reduce((total, h) => total + h.rataRata, 0) / hasilAkhir.length).toFixed(2)}
        </div>
      </div>
    </div>

    <div class="cards">
      ${hasilAkhir.map(h => `
        <div class="card ${h.status === 'LULUS' ? 'lulus' : 'tidak-lulus'}">
          <div class="card-header">
            <h2>${h.nama}</h2>
            <span class="status ${h.status === 'LULUS' ? 'lulus' : 'tidak-lulus'}">
              ${h.status}
            </span>
          </div>

          <div class="nilai-list">
            ${h.nilaiTugas.map(n => `<span class="nilai-item">${n}</span>`).join('')}
          </div>

          <div class="avg">
            <div>
              <div class="label">Rata-rata</div>
              <div class="predikat">Predikat: ${h.predikat}</div>
            </div>
            <div class="score ${h.status === 'LULUS' ? 'lulus' : 'tidak-lulus'}">
              ${h.rataRata.toFixed(2)}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="footer">
      Dibuat otomatis menggunakan JavaScript • 
      ${new Date().toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}
    </div>
  </div>
`);