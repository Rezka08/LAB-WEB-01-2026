// Data awal praktikan sesuai modul praktikum
const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 59, 41] }
];

let namaAslab = prompt("Masukkan Nama ASLAB yang Bertugas:").trim();

if (namaAslab.toLowerCase() === "dika") {
    alert("Akses diterima");
} else {
    alert("Akses ditolak! Hanya ASLAB yang boleh masuk.");
    throw new Error("Akses ditolak");
}

const statusAsisten = namaAslab.trim();

function hitungRataRata(nilai) {
    const total = nilai.reduce((acc, curr) => acc + curr, 0);
    return Number((total / nilai.length).toFixed(2));
}

function prosesEvaluasi(listPraktikan) {
    return listPraktikan.map(praktikan => {
        const rataRata = hitungRataRata(praktikan.nilaiTugas);
        const status = rataRata >= 75 ? "LULUS" : "TIDAK LULUS";
        
        return {
            nama: praktikan.nama,
            nilaiTugas: praktikan.nilaiTugas,
            rataRata: rataRata,
            status: status
        };
    });
}

const hasilEvaluasi = prosesEvaluasi(dataPraktikan);

console.log("=== LAPORAN EVALUASI PRAKTIKAN ===");
console.log("Asisten Bertugas:", statusAsisten);
console.table(hasilEvaluasi);

document.write(`
    <div class="max-w-6xl mx-auto px-6 py-12">
        <!-- Header Dashboard Bernuansa Cokelat-Putih -->
        <header class="mb-10 bg-white border border-choco-200 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
                <span class="inline-block bg-choco-100 text-choco-800 text-xs font-bold px-3 py-1 rounded-full border border-choco-300 uppercase tracking-wider mb-2">
                    Laporan Praktikum
                </span>
                <h1 class="text-3xl sm:text-4xl font-extrabold text-choco-900 tracking-tight">
                    Sistem Evaluasi Praktikum
                </h1>
                <p class="text-choco-600 mt-1 text-sm font-medium">
                    Rekapitulasi otomatis capaian tugas dan kualifikasi hasil belajar praktikan.
                </p>
            </div>
            <div class="bg-choco-50 border border-choco-200 rounded-2xl px-6 py-4 shadow-sm w-full md:w-auto">
                <span class="block text-xs uppercase tracking-wider text-choco-600 font-semibold">Asisten Bertugas</span>
                <span class="text-choco-900 font-bold text-lg flex items-center gap-2 mt-0.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    ${statusAsisten}
                </span>
            </div>
        </header>

        <!-- Grid Kartu Evaluasi Praktikan -->
        <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
`);

hasilEvaluasi.forEach(item => {
    const isLulus = item.status === "LULUS";
    const badgeStyle = isLulus
        ? "bg-emerald-50 text-emerald-900 border-emerald-300"
        : "bg-rose-50 text-rose-900 border-rose-300";
    const dotColor = isLulus ? "bg-emerald-600" : "bg-rose-600";
    const scoreColor = isLulus ? "text-emerald-700" : "text-rose-700";

    document.write(`
        <div class="group bg-white border border-choco-200 rounded-2xl p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-choco-400 flex flex-col justify-between cursor-default">
            <div>
                <!-- Baris Nama & Status -->
                <div class="flex justify-between items-start mb-5 pb-4 border-b border-choco-100">
                    <div>
                        <h2 class="text-xl font-bold text-choco-900 group-hover:text-choco-600 transition-colors duration-200">
                            ${item.nama}
                        </h2>
                        <span class="text-xs font-semibold text-choco-600 uppercase tracking-wider">Praktikan</span>
                    </div>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${badgeStyle}">
                        <span class="w-1.5 h-1.5 rounded-full ${dotColor} mr-1.5"></span>
                        ${item.status}
                    </span>
                </div>

                <!-- Rincian Nilai Tugas -->
                <div class="mb-6 bg-choco-50 border border-choco-200 rounded-xl p-4">
                    <div class="text-xs font-bold uppercase tracking-wider text-choco-800 mb-2">Nilai Tugas:</div>
                    <div class="flex flex-wrap gap-2">
                        ${item.nilaiTugas.map((nilai, index) => `
                            <div class="bg-white border border-choco-200 text-choco-900 text-xs px-3 py-1 rounded-lg font-mono font-bold shadow-xs">
                                T${index + 1}: <span class="text-choco-900">${nilai}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Bagian Bawah Kartu: Nilai Rata-rata -->
            <div class="pt-4 border-t border-choco-100 flex justify-between items-end">
                <div>
                    <span class="block text-xs uppercase tracking-wider text-choco-600 font-bold">Nilai Akhir</span>
                    <span class="text-xs text-choco-800 font-medium">Rata-rata Tugas</span>
                </div>
                <div class="text-3xl font-black font-mono tracking-tight ${scoreColor}">
                    ${item.rataRata.toFixed(2)}
                </div>
            </div>
        </div>
    `);
});

document.write(`
        </main>

        <!-- Informasi Batas Kelulusan -->
        <footer class="mt-12 text-center text-xs font-semibold text-choco-600 border-t border-choco-200 pt-6">
            Standar Kelulusan Praktikum: Nilai Rata-rata &ge; 75.00
        </footer>
    </div>
`);