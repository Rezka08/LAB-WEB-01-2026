// ========================================
// 1. MENGAMBIL ELEMEN HTML
// ========================================

const daftarAnggota = document.getElementById("daftarAnggota");
const loadingAnggota = document.getElementById("loadingAnggota");
const errorAnggota = document.getElementById("errorAnggota");

const judulTugas = document.getElementById("judulTugas");
const progresTugas = document.getElementById("progresTugas");
const daftarTugas = document.getElementById("daftarTugas");
const loadingTugas = document.getElementById("loadingTugas");
const errorTugas = document.getElementById("errorTugas");

const cariTugas = document.getElementById("cariTugas");
const tidakAdaTugas = document.getElementById("tidakAdaTugas");

const formTugas = document.getElementById("formTugas");
const judulBaru = document.getElementById("judulBaru");
const tombolSimpan = document.getElementById("tombolSimpan");
const errorForm = document.getElementById("errorForm");
const notifikasi = document.getElementById("notifikasi");


// ========================================
// 2. VARIABEL APLIKASI
// ========================================

let anggota = [];
let tugas = [];
let anggotaTerpilih = null;
let nomorPermintaan = 0;
let nomorNotifikasi = 0;


// ========================================
// 3. UTILITAS KECIL
// ========================================

// Menonaktifkan tombol sementara agar tidak bisa diklik dua kali.
function kunciTombol(tombol, teksSementara) {
    tombol.disabled = true;
    tombol.dataset.teksAsli = tombol.textContent;
    tombol.textContent = teksSementara;
    tombol.classList.add("opacity-50", "cursor-not-allowed");
}

// Mengembalikan tombol ke kondisi semula.
function bukaTombol(tombol) {
    tombol.disabled = false;

    if (tombol.dataset.teksAsli) {
        tombol.textContent = tombol.dataset.teksAsli;
    }

    tombol.classList.remove("opacity-50", "cursor-not-allowed");
}

// Menampilkan notifikasi singkat (3 detik).
function tampilkanNotifikasi(pesan) {
    notifikasi.textContent = pesan;
    notifikasi.classList.remove("hidden");

    const notifikasiSaatIni = ++nomorNotifikasi;

    setTimeout(function () {
        if (notifikasiSaatIni === nomorNotifikasi) {
            notifikasi.classList.add("hidden");
        }
    }, 3000);
}


// ========================================
// 4. MEMUAT DAFTAR ANGGOTA
// ========================================

async function muatAnggota() {
    loadingAnggota.textContent = "Memuat anggota...";
    errorAnggota.textContent = "";

    try {
        const respons = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!respons.ok) {
            throw new Error("Gagal mengambil data anggota.");
        }

        anggota = await respons.json();

        daftarAnggota.replaceChildren();

        anggota.forEach(function (orang) {
            const tombol = document.createElement("button");

            // Tombol tidak boleh dianggap sebagai submit form.
            tombol.type = "button";
            tombol.textContent = orang.name;

            tombol.classList.add(
                "w-full",
                "rounded-lg",
                "border",
                "border-slate-200",
                "px-4",
                "py-3",
                "text-left",
                "transition",
                "hover:bg-indigo-50"
            );

            tombol.addEventListener("click", function () {
                pilihAnggota(orang, tombol);
            });

            daftarAnggota.appendChild(tombol);
        });

    } catch (error) {
        errorAnggota.textContent =
            "Gagal memuat anggota: " + error.message;

    } finally {
        loadingAnggota.textContent = "";
    }
}


// ========================================
// 5. MEMILIH ANGGOTA DAN MEMUAT TUGAS
// ========================================

async function pilihAnggota(orang, tombolAktif) {
    anggotaTerpilih = orang;

    const permintaanSaatIni = ++nomorPermintaan;

    // Menghapus penanda dari anggota lain.
    const semuaTombol =
        daftarAnggota.querySelectorAll("button");

    semuaTombol.forEach(function (tombol) {
        tombol.classList.remove(
            "bg-indigo-600",
            "text-white",
            "border-indigo-600"
        );
    });

    // Menandai anggota yang dipilih.
    tombolAktif.classList.add(
        "bg-indigo-600",
        "text-white",
        "border-indigo-600"
    );

    // Memperbarui judul dan status.
    judulTugas.textContent = "Tugas " + orang.name;
    progresTugas.textContent = "Memuat progres tugas...";

    // Mengosongkan daftar tugas lama.
    daftarTugas.replaceChildren();

    tugas = [];

    loadingTugas.textContent = "Memuat tugas...";
    errorTugas.textContent = "";
    tidakAdaTugas.classList.add("hidden");

    cariTugas.value = "";
    errorForm.textContent = "";
    notifikasi.classList.add("hidden");

    try {
        const respons = await fetch(
            "https://jsonplaceholder.typicode.com/todos?userId=" + orang.id
        );

        if (!respons.ok) {
            throw new Error("Gagal mengambil data tugas.");
        }

        const dataTugas = await respons.json();

        // Mengabaikan respons lama jika anggota sudah berganti.
        if (permintaanSaatIni !== nomorPermintaan) {
            return;
        }

        tugas = dataTugas;

        tampilkanTugas();

    } catch (error) {
        if (permintaanSaatIni === nomorPermintaan) {
            errorTugas.textContent =
                "Gagal memuat tugas: " + error.message;

            progresTugas.textContent =
                "Progres belum tersedia.";
        }

    } finally {
        if (permintaanSaatIni === nomorPermintaan) {
            loadingTugas.textContent = "";
        }
    }
}


// ========================================
// 6. MEMPERBARUI PROGRES TUGAS
// ========================================

function perbaruiProgres() {
    const jumlahSelesai = tugas.filter(
        function (item) {
            return item.completed === true;
        }
    ).length;

    progresTugas.textContent =
        jumlahSelesai + " dari " +
        tugas.length + " tugas selesai";
}


// ========================================
// 7. FILTER PENCARIAN (dipisah jadi fungsi)
// ========================================

function terapkanPencarian() {
    const kataKunci = cariTugas.value.toLowerCase().trim();

    const semuaBaris = daftarTugas.children;
    let jumlahCocok = 0;

    Array.from(semuaBaris).forEach(function (baris) {
        const elemenJudul = baris.firstElementChild;

        // Pengaman: lewati baris yang tidak punya judul.
        if (!elemenJudul) {
            return;
        }

        const cocok = elemenJudul.textContent
            .toLowerCase()
            .includes(kataKunci);

        baris.classList.toggle("hidden", !cocok);

        if (cocok) {
            jumlahCocok++;
        }
    });

    if (tugas.length > 0 && jumlahCocok === 0) {
        tidakAdaTugas.classList.remove("hidden");
    } else {
        tidakAdaTugas.classList.add("hidden");
    }
}

cariTugas.addEventListener("input", terapkanPencarian);


// ========================================
// 8. MENAMPILKAN DAFTAR TUGAS
// ========================================

function tampilkanTugas() {
    daftarTugas.replaceChildren();

    tugas.forEach(function (item) {
        const baris = document.createElement("div");

        baris.classList.add(
            "flex",
            "flex-col",
            "gap-3",
            "rounded-lg",
            "border",
            "border-slate-200",
            "p-4",
            "sm:flex-row",
            "sm:items-center",
            "sm:justify-between"
        );

        // Judul tugas.
        const judul = document.createElement("span");

        judul.textContent = item.title;

        judul.classList.add(
            "min-w-0",
            "flex-1",
            "break-words"
        );

        if (item.completed) {
            judul.classList.add(
                "line-through",
                "text-gray-400"
            );
        }

        baris.appendChild(judul);

        // Tempat tombol aksi.
        const kelompokTombol = document.createElement("div");

        kelompokTombol.classList.add(
            "flex",
            "flex-wrap",
            "gap-2"
        );

        // ----------------------------------
        // Tombol "Tandai selesai"
        // ----------------------------------
        if (!item.completed) {
            const tombolSelesai =
                document.createElement("button");

            tombolSelesai.type = "button";
            tombolSelesai.textContent = "Tandai selesai";

            tombolSelesai.classList.add(
                "rounded-md",
                "bg-green-600",
                "px-3",
                "py-2",
                "text-sm",
                "text-white",
                "hover:bg-green-700"
            );

            tombolSelesai.addEventListener(
                "click",
                function () {
                    // Cegah klik ganda.
                    if (tombolSelesai.disabled) {
                        return;
                    }

                    // Cegah aksi pada data yang sudah tidak ada.
                    if (!tugas.includes(item)) {
                        errorTugas.textContent =
                            "Tugas sudah tidak tersedia.";
                        return;
                    }

                    kunciTombol(tombolSelesai, "Menyimpan...");

                    try {
                        // 1. Ubah data.
                        item.completed = true;

                        // 2. Ubah tampilan.
                        judul.classList.add(
                            "line-through",
                            "text-gray-400"
                        );

                        errorTugas.textContent = "";

                        // 3. Sinkronkan progres & filter.
                        perbaruiProgres();
                        terapkanPencarian();

                        // 4. Baru hapus tombol dari DOM.
                        tombolSelesai.remove();

                    } catch (error) {
                        // Kembalikan keadaan jika gagal.
                        item.completed = false;

                        judul.classList.remove(
                            "line-through",
                            "text-gray-400"
                        );

                        errorTugas.textContent =
                            "Gagal menandai tugas selesai: " +
                            error.message;

                        bukaTombol(tombolSelesai);
                    }
                }
            );

            kelompokTombol.appendChild(tombolSelesai);
        }

        // ----------------------------------
        // Tombol "Hapus"
        // ----------------------------------
        const tombolHapus = document.createElement("button");

        tombolHapus.type = "button";
        tombolHapus.textContent = "Hapus";

        tombolHapus.classList.add(
            "rounded-md",
            "bg-red-600",
            "px-3",
            "py-2",
            "text-sm",
            "text-white",
            "hover:bg-red-700"
        );

        tombolHapus.addEventListener("click", function () {
            // Cegah klik ganda.
            if (tombolHapus.disabled) {
                return;
            }

            // Cegah aksi pada data yang sudah tidak ada.
            if (!tugas.includes(item)) {
                errorTugas.textContent =
                    "Tugas sudah tidak tersedia.";
                return;
            }

            // Konfirmasi sebelum menghapus.
            const yakin = window.confirm(
                'Hapus tugas "' + item.title + '" ?'
            );

            if (!yakin) {
                return;
            }

            kunciTombol(tombolHapus, "Menghapus...");

            try {
                // 1. Hapus dari array.
                tugas = tugas.filter(function (tugasLain) {
                    return tugasLain !== item;
                });

                // 2. Hapus dari tampilan.
                baris.remove();

                errorTugas.textContent = "";

                // 3. Sinkronkan progres & filter.
                perbaruiProgres();
                terapkanPencarian();

            } catch (error) {
                errorTugas.textContent =
                    "Gagal menghapus tugas: " + error.message;

                bukaTombol(tombolHapus);
            }
        });

        kelompokTombol.appendChild(tombolHapus);
        baris.appendChild(kelompokTombol);

        daftarTugas.appendChild(baris);
    });

    perbaruiProgres();
    terapkanPencarian();
}


// ========================================
// 9. SIMULASI MENYIMPAN TUGAS
// ========================================

// `daftarTugasSaatIni` dikirim sebagai parameter supaya
// pengecekan duplikat tidak memakai array yang sudah berganti.
function simpanTugas(judul, daftarTugasSaatIni) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const judulKecil = judul.toLowerCase();

            const sudahAda = daftarTugasSaatIni.some(
                function (item) {
                    return item.title.toLowerCase() === judulKecil;
                }
            );

            if (sudahAda) {
                reject(
                    new Error(
                        "Tugas dengan judul tersebut sudah ada."
                    )
                );
            } else {
                resolve({
                    title: judul,
                    completed: false
                });
            }
        }, 1000);
    });
}


// ========================================
// 10. MENAMBAHKAN TUGAS BARU
// ========================================

formTugas.addEventListener(
    "submit",
    async function (event) {
        event.preventDefault();

        errorForm.textContent = "";
        notifikasi.classList.add("hidden");

        // Cegah submit ganda.
        if (tombolSimpan.disabled) {
            return;
        }

        // Memastikan anggota sudah dipilih.
        if (!anggotaTerpilih) {
            errorForm.textContent =
                "Pilih anggota terlebih dahulu.";
            judulBaru.focus();
            return;
        }

        // Validasi judul.
        const judul = judulBaru.value.trim();

        if (judul.length < 5) {
            errorForm.textContent =
                "Judul tugas minimal 5 karakter.";
            judulBaru.focus();
            return;
        }

        // PENTING: simpan konteks saat tombol ditekan.
        // Kalau pengguna berpindah anggota saat proses 1 detik,
        // tugas tidak akan nyasar ke daftar anggota yang baru.
        const permintaanSaatIni = nomorPermintaan;
        const daftarTugasSaatIni = tugas;

        kunciTombol(tombolSimpan, "Menyimpan...");

        try {
            const tugasBaru = await simpanTugas(
                judul,
                daftarTugasSaatIni
            );

            // Anggota berganti (atau daftar tugas sudah diganti)
            // selama proses berjalan -> batalkan pembaruan UI.
            if (
                permintaanSaatIni !== nomorPermintaan ||
                daftarTugasSaatIni !== tugas
            ) {
                return;
            }

            // Menambahkan tugas baru ke array.
            daftarTugasSaatIni.push(tugasBaru);

            // Memperbarui daftar dan progres.
            tampilkanTugas();

            // Mengosongkan input dan kembalikan fokus.
            judulBaru.value = "";
            judulBaru.focus();

            tampilkanNotifikasi(
                "Tugas berhasil ditambahkan."
            );

        } catch (error) {
            errorForm.textContent = error.message;

        } finally {
            // Mengembalikan tombol ke kondisi semula.
            bukaTombol(tombolSimpan);
        }
    }
);


// ========================================
// 11. MENJALANKAN APLIKASI
// ========================================

muatAnggota();