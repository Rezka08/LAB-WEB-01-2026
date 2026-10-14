// Selektor Elemen
const daftarAnggotaEl = document.getElementById("daftarAnggota");
const statusAnggotaEl = document.getElementById("statusAnggota");
const judulTugasHeaderEl = document.getElementById("judulTugasHeader");
const ringkasanProgresEl = document.getElementById("ringkasanProgres");
const statusTugasEl = document.getElementById("statusTugas");
const panelKontrolEl = document.getElementById("panelKontrol");
const daftarTugasEl = document.getElementById("daftarTugas");
const inputPencarianEl = document.getElementById("inputPencarian");
const formTambahTugasEl = document.getElementById("formTambahTugas");
const inputJudulBaruEl = document.getElementById("inputJudulBaru");
const tombolSimpanEl = document.getElementById("tombolSimpan");
const pesanFormEl = document.getElementById("pesanForm");
const notifikasiSuksesEl = document.getElementById("notifikasiSukses");

// Menyimpan data tugas aktif
let tugasAktifList = [];
let idAnggotaAktif = null;
let namaAnggotaAktif = "";

// F1: Menampilkan Daftar Anggota saat Halaman Dibuka
async function ambilDataAnggota() {
    statusAnggotaEl.textContent = "Memuat anggota...";
    daftarAnggotaEl.innerHTML = ""; 

    try {
        let respons = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!respons.ok) {
            throw new Error("Status error: " + respons.status);
        }
        let users = await respons.json();

        // Hapus teks loading setelah data tampil
        statusAnggotaEl.textContent = "";

        users.forEach(user => {
            let btn = document.createElement("button");
            btn.textContent = user.name;
            btn.className = "w-full text-left px-4 py-3 rounded-lg border border-slate-200 hover:bg-indigo-50 hover:border-indigo-300 font-medium text-slate-700 transition text-sm";
            
            // Event listener saat anggota diklik (F2)
            btn.addEventListener("click", () => {
                // Tanda penanda hanya untuk yang diklik
                document.querySelectorAll("#daftarAnggota button").forEach(b => {
                    b.classList.remove("bg-indigo-600", "text-white", "border-indigo-600");
                    b.classList.add("border-slate-200", "text-slate-700");
                });
                btn.classList.remove("border-slate-200", "text-slate-700");
                btn.classList.add("bg-indigo-600", "text-white", "border-indigo-600");

                idAnggotaAktif = user.id;
                namaAnggotaAktif = user.name;
                ambilTugasAnggota(user.id, user.name);
            });

            daftarAnggotaEl.appendChild(btn);
        });

    } catch (error) {
        statusAnggotaEl.textContent = "Gagal memuat anggota: " + error.message;
        statusAnggotaEl.className = "text-sm text-red-500 italic mb-2";
    }
}

// F2 & F3 & F5: Mengambil dan Menampilkan Tugas Anggota
async function ambilTugasAnggota(userId, userName) {
    judulTugasHeaderEl.textContent = "Tugas " + userName;
    ringkasanProgresEl.textContent = "Memuat data...";
    statusTugasEl.textContent = "Memuat tugas...";
    daftarTugasEl.innerHTML = ""; 
    panelKontrolEl.classList.add("hidden"); 
    inputPencarianEl.value = "";

    try {
        let respons = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        if (!respons.ok) {
            throw new Error("Status error: " + respons.status);
        }
        let todos = await respons.json();

        statusTugasEl.textContent = "";
        panelKontrolEl.classList.remove("hidden"); 

        tugasAktifList = todos.map(t => ({ title: t.title, completed: t.completed }));
        
        renderDaftarTugas(tugasAktifList);

    } catch (error) {
        statusTugasEl.textContent = "Gagal memuat tugas: " + error.message;
        statusTugasEl.className = "text-sm text-red-500 italic mb-3";
        ringkasanProgresEl.textContent = "-";
    }
}

// Fungsi untuk merender ulang tugas ke halaman
function renderDaftarTugas(listTugas) {
    daftarTugasEl.innerHTML = ""; 

    listTugas.forEach((tugas, index) => {
        let li = document.createElement("li");
        li.className = "flex items-center justify-between p-3 border border-slate-100 rounded-lg bg-slate-50/50 text-sm gap-2";
        
        let spanJudul = document.createElement("span");
        spanJudul.textContent = tugas.title;
        spanJudul.className = "flex-grow text-slate-700";

        // Tugas selesai dicoret
        if (tugas.completed) {
            spanJudul.classList.add("line-through", "text-slate-400");
        }

        let containerAksi = document.createElement("div");
        containerAksi.className = "flex items-center gap-2 flex-shrink-0";

        // Tombol Tandai Selesai 
        if (!tugas.completed) {
            let btnSelesai = document.createElement("button");
            btnSelesai.textContent = "Tandai Selesai";
            btnSelesai.className = "px-2.5 py-1 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded text-xs font-medium transition";
            
            btnSelesai.addEventListener("click", () => {
                tugas.completed = true;
                spanJudul.classList.add("line-through", "text-slate-400");
                btnSelesai.remove(); 
                perbaruiRingkasanProgres();
            });
            containerAksi.appendChild(btnSelesai);
        }

        // Tombol Hapus Tugas
        let btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.className = "px-2.5 py-1 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded text-xs font-medium transition";
        
        btnHapus.addEventListener("click", () => {
            let indexAsli = tugasAktifList.indexOf(tugas);
            if (indexAsli > -1) {
                tugasAktifList.splice(indexAsli, 1);
            }
            li.remove(); 
            perbaruiRingkasanProgres();
            
            cekTugasKosong(listTugas);
        });
        containerAksi.appendChild(btnHapus);

        li.appendChild(spanJudul);
        li.appendChild(containerAksi);
        daftarTugasEl.appendChild(li);
    });

    perbaruiRingkasanProgres();
    cekTugasKosong(listTugas);
}

// Fungsi Memperbarui Ringkasan Progres
function perbaruiRingkasanProgres() {
    let total = tugasAktifList.length;
    let selesai = tugasAktifList.filter(t => t.completed).length;
    ringkasanProgresEl.textContent = `${selesai} dari ${total} tugas selesai`;
}

// Fungsi Cek Apakah Tugas Kosong
function cekTugasKosong(listTugas) {
    // Hapus pesan kosong jika ada
    let pesanKosongLama = document.getElementById("pesanKosong");
    if (pesanKosongLama) pesanKosongLama.remove();

    if (listTugas.length === 0) {
        let pKosong = document.createElement("p");
        pKosong.id = "pesanKosong";
        pKosong.textContent = "Tidak ada tugas yang cocok.";
        pKosong.className = "text-sm text-slate-400 italic text-center py-4";
        daftarTugasEl.appendChild(pKosong);
    }
}

// F3: Pencarian Tugas Berdasarkan Judul
inputPencarianEl.addEventListener("input", (e) => {
    let keyword = e.target.value.toLowerCase().trim();
    let hasilFilter = tugasAktifList.filter(t => t.title.toLowerCase().includes(keyword));
    // Render ulang berdasarkan hasil pencarian
    renderDaftarTugasUntukPencarian(hasilFilter, keyword);
});

// Render khusus pencarian dengan mempertahankan class 'hidden' jika tidak cocok
function renderDaftarTugasUntukPencarian(listFilter, keyword) {
    daftarTugasEl.innerHTML = "";
    
    let adaYangTampil = false;

    tugasAktifList.forEach(tugas => {
        let cocok = tugas.title.toLowerCase().includes(keyword);

        let li = document.createElement("li");
        li.className = "flex items-center justify-between p-3 border border-slate-100 rounded-lg bg-slate-50/50 text-sm gap-2";
        
        if (!cocok) {
            li.classList.add("hidden");
        } else {
            adaYangTampil = true;
        }

        let spanJudul = document.createElement("span");
        spanJudul.textContent = tugas.title;
        spanJudul.className = "flex-grow text-slate-700";
        if (tugas.completed) {
            spanJudul.classList.add("line-through", "text-slate-400");
        }

        let containerAksi = document.createElement("div");
        containerAksi.className = "flex items-center gap-2 flex-shrink-0";

        if (!tugas.completed) {
            let btnSelesai = document.createElement("button");
            btnSelesai.textContent = "Tandai Selesai";
            btnSelesai.className = "px-2.5 py-1 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded text-xs font-medium transition";
            btnSelesai.addEventListener("click", () => {
                tugas.completed = true;
                spanJudul.classList.add("line-through", "text-slate-400");
                btnSelesai.remove();
                perbaruiRingkasanProgres();
            });
            containerAksi.appendChild(btnSelesai);
        }

        let btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.className = "px-2.5 py-1 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded text-xs font-medium transition";
        btnHapus.addEventListener("click", () => {
            let indexAsli = tugasAktifList.indexOf(tugas);
            if (indexAsli > -1) {
                tugasAktifList.splice(indexAsli, 1);
            }
            li.remove();
            perbaruiRingkasanProgres();
            // Perbarui filter setelah hapus
            let keywordTerkini = inputPencarianEl.value.toLowerCase().trim();
            let sisaFilter = tugasAktifList.filter(t => t.title.toLowerCase().includes(keywordTerkini));
            cekTugasKosong(sisaFilter);
        });
        containerAksi.appendChild(btnHapus);

        li.appendChild(spanJudul);
        li.appendChild(containerAksi);
        daftarTugasEl.appendChild(li);
    });

    // Jika tidak ada satu pun yang cocok dengan kata kunci pencarian
    let pesanKosongLama = document.getElementById("pesanKosong");
    if (pesanKosongLama) pesanKosongLama.remove();

    if (!adaYangTampil && keyword !== "") {
        let pKosong = document.createElement("p");
        pKosong.id = "pesanKosong";
        pKosong.textContent = "Tidak ada tugas yang cocok.";
        pKosong.className = "text-sm text-slate-400 italic text-center py-4";
        daftarTugasEl.appendChild(pKosong);
    }
}

// F4: Simulasi Menyimpan Tugas ke Server 
function simpanTugas(judul) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Periksa apakah judul yang sama sudah ada 
            let sudahAda = tugasAktifList.some(t => t.title.toLowerCase() === judul.toLowerCase());
            if (sudahAda) {
                reject(new Error("Tugas dengan judul tersebut sudah ada di daftar!"));
            } else {
                resolve({ title: judul, completed: false });
            }
        }, 1000);
    });
}

// F4: Event Listener Form Tambah Tugas
formTambahTugasEl.addEventListener("submit", async (event) => {
    event.preventDefault(); 
    pesanFormEl.textContent = "";
    notifikasiSuksesEl.classList.add("hidden");

    let judulBaru = inputJudulBaruEl.value.trim();

    // Validasi kosong atau kurang dari 5 karakter
    if (judulBaru === "" || judulBaru.length < 5) {
        pesanFormEl.textContent = "Judul tugas minimal harus 5 karakter!";
        return;
    }

    // Proses async/await dengan try...catch...finally
    tombolSimpanEl.textContent = "Menyimpan...";
    tombolSimpanEl.disabled = true;

    try {
        let tugasBaru = await simpanTugas(judulBaru);
        
        // Berhasil: masukkan ke daftar, perbarui ringkasan, kosongkan input
        tugasAktifList.unshift(tugasBaru);
        
        let keyword = inputPencarianEl.value.toLowerCase().trim();
        let hasilFilter = tugasAktifList.filter(t => t.title.toLowerCase().includes(keyword));
        renderDaftarTugasUntukPencarian(hasilFilter, keyword);

        inputJudulBaruEl.value = "";

        // Tampilkan notifikasi sukses
        notifikasiSuksesEl.textContent = "Tugas berhasil ditambahkan.";
        notifikasiSuksesEl.classList.remove("hidden");
        setTimeout(() => {
            notifikasiSuksesEl.classList.add("hidden");
        }, 3000);

    } catch (error) {
        // Gagal: tampilkan pesan error 
        pesanFormEl.textContent = error.message;
    } finally {
        // Kembalikan tombol seperti semula 
        tombolSimpanEl.textContent = "Simpan";
        tombolSimpanEl.disabled = false;
    }
});

ambilDataAnggota();