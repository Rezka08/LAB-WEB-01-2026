const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [41, 52, 79] }, 
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [41, 52, 79] }
];

const namaAsisten = prompt("Masukkan nama Asisten Lab yang bertugas:");

if (!namaAsisten || namaAsisten.trim() === "") {
    document.write(`
        <div class="max-w-md mx-auto bg-red-900/40 border border-red-500 text-red-200 p-6 rounded-xl text-center shadow-lg backdrop-blur">
            <h2 class="text-xl font-bold mb-2">Akses Ditolak</h2>
            <p>Nama Asisten Lab harus diisi untuk membuka Sistem Evaluasi Praktikum.</p>
        </div>
    `);
} else {
    function prosesDataPraktikan(data) {
        return data.map(praktikan => {
            const total = praktikan.nilaiTugas.reduce((acc, curr) => acc + curr, 0);
            const rataRata = Number((total / praktikan.nilaiTugas.length).toFixed(1));
            const status = rataRata >= 75 ? "LULUS" : "TIDAK LULUS";

            return {
                nama: praktikan.nama,
                nilaiTugas: praktikan.nilaiTugas,
                rataRata: rataRata,
                status: status
            };
        });
    }

    const hasilEvaluasi = prosesDataPraktikan(dataPraktikan);

    console.log("=== DATA HASIL EVALUASI PRAKTIKAN ===");
    console.log(hasilEvaluasi);

    document.write(`
        <div class="max-w-5xl mx-auto space-y-8">
            <header class="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <h1 class="text-2xl md:text-3xl font-extrabold text-indigo-400 tracking-tight">Sistem Laporan Praktikum</h1>
                    <p class="text-slate-400 text-sm mt-1">Laporan Evaluasi Performa Belajar Praktikan</p>
                </div>
                <div class="bg-slate-700/50 px-4 py-2 rounded-lg border border-slate-600 text-right">
                    <span class="text-xs text-slate-400 block uppercase tracking-wider">Asisten Bertugas</span>
                    <span class="text-base font-semibold text-emerald-400">${namaAsisten}</span>
                </div>
            </header>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    `);

    hasilEvaluasi.forEach(item => {
        const isLulus = item.status === "LULUS";
        const badgeColor = isLulus ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30": "bg-rose-500/10 text-rose-400 border-rose-500/30";

        const avatarBg = isLulus ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300";

        document.write(`
            <div class="bg-slate-800/60 border border-slate-700/80 rounded-xl p-5 shadow-lg hover:border-slate-600 transition-all flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 rounded-full ${avatarBg} flex items-center justify-center font-bold text-lg">
                                ${item.nama.charAt(0)}
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-slate-100">${item.nama}</h3>
                                <span class="text-xs text-slate-400">Praktikan</span>
                            </div>
                        </div>
                        <span class="px-2.5 py-1 text-xs font-semibold rounded-full border ${badgeColor}">
                            ${item.status}
                        </span>
                    </div>

                    <div class="space-y-2 mb-4 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                        <div class="text-xs text-slate-400 font-medium mb-1">Rincian Nilai Tugas:</div>
                        <div class="flex justify-between text-sm">
                            ${item.nilaiTugas.map((n, i) => `
                                <span class="bg-slate-800 px-2 py-0.5 rounded text-slate-300 border border-slate-700">T${i + 1}: <strong class="text-white">${n}</strong></span>
                            `).join('')}
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3 text-sm">
                        <div class="bg-slate-900/60 border border-slate-800 rounded-lg p-2">
                            <div class="text-slate-400 text-[10px] uppercase tracking-wider">Rata-rata</div>
                            <div class="text-lg font-bold text-white">${item.rataRata}</div>
                        </div>
                        <div class="bg-slate-900/60 border border-slate-800 rounded-lg p-2">
                            <div class="text-slate-400 text-[10px] uppercase tracking-wider">Status</div>
                            <div class="text-lg font-bold ${isLulus ? 'text-emerald-400' : 'text-rose-400'}">${item.status}</div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });

    document.write(`
        </div>
    </div>
    `);
}