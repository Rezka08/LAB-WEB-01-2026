const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] }, 
    { nama: "fafa", nilaiTugas: [90, 87, 85] }, 
];

function ratarata(nilaiTugas){ 
    const total = nilaiTugas.reduce((acc, nilai) => acc + nilai, 0);
    return Number(total / nilaiTugas.length);
}

function status(ratarata) {
    if (ratarata >= 75) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}

dataPraktikan.map (item => {
    let RataRata = Number(ratarata(item.nilaiTugas).toFixed(1))
    let Status = status(RataRata)
    item.rataRata = RataRata
    item.status = Status
})
console.log("Hasil Evaluasi Praktikum:");
console.table(dataPraktikan);

let akses = false;
let namaAslab = prompt("Masukkan nama Asisten Lab: ").toLowerCase();
if (namaAslab == "fadhiyah") {
    akses = true;
}

if (akses) {
    document.write(`
        <div class="font-serif">
            <div class="bg-pink-500 flex flex-col gap-6 justify-center items-center p-12 rounded-b-3xl shadow-md">
                <h1 class="text-white text-6xl font-extrabold">Laporan Praktikum</h1>
                <div class="bg-white rounded-3xl p-6 flex flex-col gap-2 justify-center items-center">
                    <h1 class="text-blue-700 text-3xl font-bold capitalize">Selamat datang, ${namaAslab}</h1>
                    <p class="text-lg font-bold text-blue-700">Berikut adalah laporan hasil evaluasi praktikum</p>
                </div>
            </div>
        </div>
    `)
    document.write(`
        <div class="flex flex-col justify-center items-center bg-white my-10 mx-60 rounded-xl border">
        `)
    dataPraktikan.forEach(item => {
        let Nama = item.nama
        let RataRata = ratarata(item.nilaiTugas)  
        let Status = status(RataRata)

        let warnaStatus

        if (Status == "Lulus") {
            warnaStatus = "bg-emerald-100 text-emerald-700"
        } else {
            warnaStatus = "bg-red-100 text-red-700"
        }

    document.write(`
            <div class="bg-white shadow-lg rounded-2xl flex flex-row items-center justify-between hover:scale-105 transition-transform m-6 w-[700px] p-6 border border-l-8 border-l-pink-500">
                <div class="flex flex-col justify-start gap-4">
                    <div class="font-bold text-5xl text-blue-700">
                        <p>${Nama}</p>
                    </div>
                    <div class="font-bold text-xl text-pink-500">
                        <p>Nilai Rata-Rata: ${RataRata.toFixed(1)}</p>
                    </div>
                </div>
                <div class="font-bold text-md ${warnaStatus} px-4 py-2 rounded-full">
                    <p>${Status}</p>
                </div>
            </div>
        `)
    })
    document.write(`
        </div>
        `)

} else {
    document.write(`
        <div class="font-serif">
            <div class="bg-white flex flex-col gap-6 justify-center items-center p-12 rounded-3xl my-14 mx-14 shadow-md text-pink-500">
                <h1 class="text-6xl font-extrabold">Siapa dan cari apa ya dek?</h1>
            </div>
        </div>
    `)
}


