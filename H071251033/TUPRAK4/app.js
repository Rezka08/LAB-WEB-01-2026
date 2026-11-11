const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [41, 49, 50] },
    { nama: "Dillah", nilaiTugas: [70, 80, 90] },
];

// login aslab
let namaAsisten = prompt("Masukkan nama Anda (Asisten Lab):");

// menghitung rata-rata dan menentukan status lulus/tidak lulus
const prosesDataPraktikan = (data) => {
    return data.map((praktikan) => {
        let totalNilai = praktikan.nilaiTugas.reduce((acc, curr) => acc + curr, 0);
        let rataRata = totalNilai / praktikan.nilaiTugas.length;
        let status = rataRata >= 75 ? "Lulus" : "Tidak Lulus";

        return {
            nama: praktikan.nama,
            rataRata: rataRata,
            status: status
        };
    });
};

let hasilEvaluasi = prosesDataPraktikan(dataPraktikan);

console.log("Data Hasil Akhir Praktikan:", hasilEvaluasi);

document.write(
    "<div class=\"bg-white w-full max-w-xl rounded-xl p-6 md:p-8\">" +
        "<h1 class=\"text-2xl font-bold text-pink-900 mb-1\">Sistem Laporan Praktikum</h1>" +
        "<p class=\"text-sm text-pink-500 mb-6\">Evaluasi kelulusan berbasis JavaScript murni</p>"
);

if (namaAsisten && namaAsisten.trim().toLowerCase() == "rezka" || namaAsisten.trim().toLowerCase() == "dillah") {
    document.write(
        "<div class=\"bg-pink-50 border border-pink-200 rounded-lg p-4\">" +
            "<h2 class=\"font-semibold text-pink-900\">Selamat datang Asisten " + namaAsisten + "!</h2>" +
            "<p class=\"text-sm text-pink-500 mt-0.5\">Berikut adalah laporan hasil evaluasi praktikum:</p>" +
        "</div>"
    );

    document.write("<div class=\"divide-y divide-pink-100\">");
    
    for (let i = 0; i < hasilEvaluasi.length; i++) {
        let p = hasilEvaluasi[i];
        let isLulus = p.status == "Lulus"; 
        
        let badgeClass = isLulus 
            ? "bg-green-50 text-green-600 border-green-200" 
            : "bg-red-50 text-red-600 border border-red-200";

        document.write(
            "<div class=\"py-4 flex items-center justify-between\">" +
                "<div>" +
                    "<h3 class=\"font-medium text-gray-700\">" + p.nama + "</h3>" +
                    "<p class=\"text-sm text-gray-600 mt-0.5\">Rata-rata: " + p.rataRata.toFixed(2) + "</p>" +
                "</div>" +
                "<div>" +
                    "<span class=\"px-3 py-1 rounded-full text-xs font-semibold " + badgeClass + "\">" + p.status + "</span>" +
                "</div>" +
            "</div>"
        );
    }

    document.write("</div>");

} else {
    document.write(
        "<div class=\"bg-red-50 border border-red-100 rounded-lg p-4\">" +
            "<h2 class=\"font-semibold text-red-900\">Akses Ditolak</h2>" +
            "<p class=\"text-sm text-red-700 mt-0.5\">Maaf, nama asisten tidak dikenali atau tidak memiliki hak akses.</p>" +
        "</div>"
    );
}

document.write("</div>");