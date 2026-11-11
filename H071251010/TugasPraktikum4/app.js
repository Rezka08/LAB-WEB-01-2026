// DATA PRAKTIKAN
const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [41, 49, 43] },
    { nama: "Kak Rezka", nilaiTugas: [100, 100, 100] },
    { nama: "Tanto", nilaiTugas: [41, 49, 90] }
];

// INPUT NAMA ASISTEN
let akses = false;
let namaAsisten = prompt("Masukkan nama asisten lab:").toLowerCase().trim();
if (namaAsisten == "hartanto") {
    akses = true;
}

// CEK INPUT
if (!akses) {

    // AKSES DITOLAK
    document.write(`
        <style>
            *{box-sizing:border-box}
            body{
                margin:0;font-family:Arial,sans-serif;
                background:linear-gradient(135deg,#fee2e2,#f8fafc);
                min-height:100vh;display:flex;align-items:center;
                justify-content:center;color:#1e293b
            }
            .akses{
                width:90%;max-width:500px;padding:40px 30px;
                background:#fff;text-align:center;border-radius:24px;
                box-shadow:0 20px 50px #0002;
                animation:muncul .7s ease
            }
            .ikon{
                font-size:50px;
                display:inline-block;
                animation:goyang 1.2s infinite
            }
            .akses h1{color:#b91c1c;margin:15px 0 10px}
            .akses p{color:#64748b;line-height:1.6}
            .peringatan{
                margin-top:20px;padding:12px;background:#fee2e2;
                color:#be123c;border-radius:10px;font-weight:bold
            }
            @keyframes goyang{
                0%,100%{transform:rotate(0)}
                25%{transform:rotate(-12deg)}
                50%{transform:rotate(12deg)}
                75%{transform:rotate(-8deg)}
            }
            @keyframes muncul{
                from{opacity:0;transform:translateY(25px)}
                to{opacity:1;transform:translateY(0)}
            }
        </style>

        <div class="akses">
            <div class="ikon">⚠️</div>
            <h1>Akses Ditolak</h1>
            <p>Nama asisten belum dimasukkan.<br>
            Nama diperlukan untuk mengakses laporan.</p>
            <div class="peringatan">Nama asisten wajib diisi.</div>
        </div>
    `);

} else {

    // FUNCTION RATA-RATA
    function hitungRataRata(nilai) {
        let total = 0;

        for (let i = 0; i < nilai.length; i++) {
            total += nilai[i];
        }

        return total / nilai.length;
    }

    // FUNCTION STATUS
    function tentukanStatus(rataRata) {
        if (rataRata >= 75) {
            return "Lulus";
        } else {
            return "Tidak Lulus";
        }
    }

    // PROSES DATA
    const hasilEvaluasi = [];

    for (let i = 0; i < dataPraktikan.length; i++) {
        let rataRata = hitungRataRata(dataPraktikan[i].nilaiTugas);
        let status = tentukanStatus(rataRata);

        hasilEvaluasi.push({
            nama: dataPraktikan[i].nama,
            rataRata: rataRata,
            status: status
        });
    }

    // CEK HASIL
    console.log(hasilEvaluasi);

    // TAMPILKAN WEBSITE
    document.write(`
        <style>
            *{box-sizing:border-box}

            body{
                margin:0;font-family:Arial,sans-serif;color:#1e293b;
                background:
                radial-gradient(circle at top left,#dbeafe,transparent 35%),
                radial-gradient(circle at bottom right,#e0e7ff,transparent 35%),
                #f8fafc
            }

            .container{
                width:92%;max-width:950px;margin:40px auto;padding:35px;
                background:#fff;border-radius:24px;
                box-shadow:0 20px 50px #0002;
                animation:muncul .7s ease
            }

            .header{
                display:flex;justify-content:space-between;
                align-items:center;gap:20px;
                padding-bottom:25px;border-bottom:1px solid #e2e8f0
            }

            .header h1{margin:0 0 8px;font-size:32px}
            .header p,.nilai{margin:0;color:#64748b}

            .logo{
                padding:15px;font-size:28px;color:#fff;
                border-radius:15px;
                background:linear-gradient(135deg,#2563eb,#4f46e5);
                box-shadow:0 8px 20px #2563eb55;
                transition:.3s
            }

            .logo:hover{
                transform:rotate(8deg) scale(1.1);
                box-shadow:0 12px 25px #2563eb66
            }

            .welcome{
                margin:25px 0;padding:20px;background:#eff6ff;
                border-left:4px solid #3b82f6;border-radius:12px;
                transition:.3s
            }

            .welcome:hover{
                transform:translateX(5px);
                box-shadow:0 8px 20px #3b82f622
            }

            .welcome h2{
                margin:0 0 5px;color:#1d4ed8;font-size:20px
            }

            .welcome p{margin:0;color:#64748b}

            .wave{
                display:inline-block;
                animation:melambai 1.8s infinite
            }

            @keyframes melambai{
                0%,60%,100%{transform:rotate(0)}
                10%{transform:rotate(18deg)}
                20%{transform:rotate(-12deg)}
                30%{transform:rotate(18deg)}
                40%{transform:rotate(-8deg)}
            }

            .cards{
                display:grid;
                grid-template-columns:repeat(2,1fr);
                gap:18px
            }

            .card{
                padding:20px;border:1px solid #e2e8f0;
                border-radius:16px;display:flex;
                align-items:center;justify-content:space-between;
                background:#fff;transition:.3s;
                animation:cardMasuk .6s ease;
                box-shadow:0 5px 15px #00000008
            }

            .card:hover{
                transform:translateY(-7px) scale(1.02);
                box-shadow:0 15px 30px #0002;
                border-color:#93c5fd
            }

            .card h3{margin:0 0 7px}

            .status{
                padding:8px 14px;border-radius:20px;
                font-size:12px;font-weight:bold;
                transition:.3s
            }

            .status:hover{transform:scale(1.08)}
            .lulus{background:#dcfce7;color:#15803d}
            .tidak-lulus{background:#fee2e2;color:#dc2626}

            .footer{
                margin-top:25px;padding-top:20px;
                border-top:1px solid #e2e8f0;
                text-align:center;color:#94a3b8;font-size:13px
            }

            @keyframes muncul{
                from{opacity:0;transform:translateY(25px)}
                to{opacity:1;transform:translateY(0)}
            }

            @keyframes cardMasuk{
                from{opacity:0;transform:translateY(20px)}
                to{opacity:1;transform:translateY(0)}
            }

            @media(max-width:700px){
                .container{width:94%;padding:25px;margin:20px auto}
                .header h1{font-size:25px}
                .cards{grid-template-columns:1fr}
            }

            @media(max-width:450px){
                .header{flex-direction:column}
                .logo{align-self:flex-end}
                .card{padding:16px}
            }
        </style>

        <div class="container">

            <div class="header">
                <div>
                    <h1>Sistem Laporan Praktikum</h1>
                    <p>Evaluasi kelulusan berbasis JavaScript</p>
                </div>
                <div class="logo">📊</div>
            </div>

            <div class="welcome">
                <h2>
                    Selamat datang, Asisten ${namaAsisten}!
                    <span class="wave">👋</span>
                </h2>
                <p>Berikut hasil evaluasi praktikan.</p>
            </div>

            <div class="cards">
    `);

    // TAMPILKAN DATA
    for (let i = 0; i < hasilEvaluasi.length; i++) {

        // CLASS STATUS
        let kelasStatus =
            hasilEvaluasi[i].status == "Lulus"
            ? "lulus"
            : "tidak-lulus";

        document.write(`
            <div class="card">
                <div>
                    <h3>${hasilEvaluasi[i].nama}</h3>
                    <p class="nilai">
                        Rata-rata:
                        <strong>${hasilEvaluasi[i].rataRata.toFixed(2)}</strong>
                    </p>
                </div>

                <div class="status ${kelasStatus}">
                    ${hasilEvaluasi[i].status}
                </div>
            </div>
        `);
    }

    // TAMPILKAN FOOTER
    document.write(`
            </div>

            <div class="footer">
                Batas kelulusan: <strong>75</strong>
                &nbsp; • &nbsp;
                Sistem Evaluasi Praktikum
            </div>

        </div>
    `);
}