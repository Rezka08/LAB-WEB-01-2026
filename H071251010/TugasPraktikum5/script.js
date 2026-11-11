
// 1. Memilih elemen HTML berdasarkan ID
const $ = (id) => document.getElementById(id);
const halamanLogin = $("halamanLogin");
const halamanDashboard = $("halamanDashboard");
const formLogin = $("formLogin");
const username = $("username");
const password = $("password");
const errorLogin = $("errorLogin");
const sapaanLogin = $("sapaanLogin");
const jumlahAnggota = $("jumlahAnggota");
const statTotal = $("statTotal");
const statSelesai = $("statSelesai");
const statAktif = $("statAktif");
const statPersen = $("statPersen");
const barProgres = $("barProgres");
const jalurProgres = $("jalurProgres");
const statusAnggota = $("statusAnggota");
const errorAnggota = $("errorAnggota");
const daftarAnggota = $("daftarAnggota");
const kosongAnggota = $("kosongAnggota");
const cobaLagiAnggota = $("cobaLagiAnggota");
const judulTugas = $("judulTugas");
const deskripsiTugas = $("deskripsiTugas");
const teksProgres = $("teksProgres");
const cariTugas = $("cariTugas");
const filterStatus = $("filterStatus");
const statusTugas = $("statusTugas");
const errorTugas = $("errorTugas");
const jumlahDitampilkan = $("jumlahDitampilkan");
const daftarTugas = $("daftarTugas");
const kosongTugas = $("kosongTugas");
const tidakAdaHasil = $("tidakAdaHasil");
const cobaLagiTugas = $("cobaLagiTugas");
const formTugas = $("formTugas");
const inputTugas = $("inputTugas");
const tombolSimpan = $("tombolSimpan");
const pesanForm = $("pesanForm");
const notifikasi = $("notifikasi");

// 2. Menyimpan kondisi aplikasi
let anggotaTim = [];
let anggotaTerpilih = null;
let semuaTugas = [];
let elemenTugas = new Map();
let tugasSudahDimuat = false;
let sedangMenyimpan = false;
let nomorPermintaan = 0;
let timerNotifikasi;

// 3. Animasi angka agar menghitung naik secara bertahap
function animasiAngka(elemen, angkaAkhir, durasi = 1200, akhiran = "") {
  if (!elemen) return;
  const angkaAwal = 0;
  const waktuMulai = performance.now();
  function update(waktuSekarang) {
    const progres = Math.min((waktuSekarang - waktuMulai) / durasi, 1);
    const angkaSekarang = Math.floor(
      angkaAwal + (angkaAkhir - angkaAwal) * progres
    );
    elemen.textContent = angkaSekarang + akhiran;
    
    if (progres < 1) {
      requestAnimationFrame(update);
    } else {
      elemen.textContent = angkaAkhir + akhiran;
    }
  }
  requestAnimationFrame(update);
}

// 4. Mengatur sapaan berdasarkan waktu perangkat
function aturSapaan() {
  const jam = new Date().getHours();
  if (jam >= 5 && jam < 11) {
    sapaanLogin.textContent = "Selamat pagi, Marsha!";
  } else if (jam >= 11 && jam < 15) {
    sapaanLogin.textContent = "Selamat siang, Marsha!";
  } else if (jam >= 15 && jam < 18) {
    sapaanLogin.textContent = "Selamat sore, Marsha!";
  } else {
    sapaanLogin.textContent = "Selamat malam, Marsha!";
  }
}
aturSapaan();

// 5. Menampilkan pesan login
function tampilkanErrorLogin(pesan) {
  errorLogin.textContent = pesan;
  errorLogin.classList.toggle("hidden", !pesan);
}

// 6. Memvalidasi login demo
formLogin.addEventListener("submit", async (event) => {
  event.preventDefault();
  const nama = username.value.trim();
  const sandi = password.value;
  if (nama.toLowerCase() !== "marsha" || sandi !== "marshatim") {
    tampilkanErrorLogin("Username atau password salah. Silakan coba lagi.");
    password.value = "";
    password.focus();
    return;
  }
  tampilkanErrorLogin("");
  halamanLogin.classList.add("hidden");
  halamanDashboard.classList.remove("hidden");
  await muatAnggota();
});

// 7. Keluar dari workspace dan kembali ke login
$("tombolLogout").addEventListener("click", () => {
  nomorPermintaan++;
  anggotaTim = [];
  anggotaTerpilih = null;
  semuaTugas = [];
  elemenTugas.clear();
  tugasSudahDimuat = false;
  sedangMenyimpan = false;
  daftarAnggota.innerHTML = "";
  daftarTugas.innerHTML = "";
  username.value = "";
  password.value = "";
  formTugas.reset();
  halamanDashboard.classList.add("hidden");
  halamanLogin.classList.remove("hidden");
  tampilkanErrorLogin("");
  aturSapaan();
  username.focus();
});

// 8. Mengatur status kontrol
function aturKontrol(aktif) {
  cariTugas.disabled = !aktif;
  filterStatus.disabled = !aktif;
  inputTugas.disabled = !aktif || sedangMenyimpan;
  tombolSimpan.disabled = !aktif || sedangMenyimpan;
}
function aturAnggota(aktif) {
  daftarAnggota.querySelectorAll("button").forEach((tombol) => {
    tombol.disabled = !aktif;
  });
}

// 9. Menampilkan pesan form
function tampilkanPesan(pesan, berhasil = false) {
  pesanForm.textContent = pesan;
  pesanForm.classList.remove("text-red-600", "text-emerald-700");
  if (pesan) pesanForm.classList.add(berhasil ? "text-emerald-700" : "text-red-600");
}

// 10. Notifikasi otomatis hilang setelah tiga detik
function beriNotifikasi(pesan) {
  notifikasi.textContent = pesan;
  notifikasi.classList.remove("hidden");
  clearTimeout(timerNotifikasi);
  timerNotifikasi = setTimeout(() => {
    notifikasi.classList.add("hidden");
    notifikasi.textContent = "";
  }, 3000);
}

// 11. Memuat daftar anggota dari API
async function muatAnggota() {
  statusAnggota.textContent = "Memuat anggota...";
  errorAnggota.textContent = "";
  cobaLagiAnggota.classList.add("hidden");
  kosongAnggota.classList.add("hidden");
  daftarAnggota.innerHTML = "";
  try {
    const respons = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!respons.ok) throw new Error("Status server " + respons.status);
    const data = await respons.json();
    if (!Array.isArray(data)) throw new Error("Format data anggota tidak sesuai.");
    anggotaTim = data;
    jumlahAnggota.textContent = data.length;
    data.forEach((orang) => {
      const tombol = document.createElement("button");
      const avatar = document.createElement("span");
      const nama = document.createElement("span");
      tombol.type = "button";
      tombol.className = "flex w-full items-center gap-3 rounded-xl border border-transparent p-3 text-left transition hover:border-orange-300 hover:bg-orange-50";
      avatar.textContent = orang.name.split(" ").map((kata) => kata.charAt(0)).slice(0, 2).join("").toUpperCase();
      avatar.className = "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-sm font-bold text-orange-700";
      nama.textContent = orang.name;
      nama.className = "min-w-0 flex-1 break-words text-sm font-semibold";
      tombol.setAttribute("aria-pressed", "false");
      tombol.appendChild(avatar);
      tombol.appendChild(nama);
      tombol.addEventListener("click", () => pilihAnggota(orang, tombol));
      daftarAnggota.appendChild(tombol);
    });
    statusAnggota.textContent = "";
    if (!data.length) kosongAnggota.classList.remove("hidden");
  } catch (error) {
    statusAnggota.textContent = "";
    errorAnggota.textContent = "Gagal memuat anggota. Periksa koneksi. " + error.message;
    cobaLagiAnggota.classList.remove("hidden");
  }
}

// 12. Memilih anggota dan memuat tugasnya
async function pilihAnggota(orang, tombol) {
  if (sedangMenyimpan) return;
  anggotaTerpilih = orang;
  daftarAnggota.querySelectorAll("button").forEach((item) => {
    item.classList.remove("border-orange-500", "bg-orange-50", "ring-2", "ring-orange-100");
    item.setAttribute("aria-pressed", "false");
  });
  tombol.classList.add("border-orange-500", "bg-orange-50", "ring-2", "ring-orange-100");
  tombol.setAttribute("aria-pressed", "true");
  judulTugas.textContent = "Tugas " + orang.name;
  deskripsiTugas.textContent = "Kelola dan pantau tugas " + orang.name + ".";
  semuaTugas = [];
  elemenTugas.clear();
  tugasSudahDimuat = false;
  daftarTugas.innerHTML = "";
  cariTugas.value = "";
  filterStatus.value = "semua";
  statusTugas.textContent = "Memuat tugas...";
  errorTugas.textContent = "";
  jumlahDitampilkan.textContent = "";
  kosongTugas.classList.add("hidden");
  tidakAdaHasil.classList.add("hidden");
  cobaLagiTugas.classList.add("hidden");
  tampilkanPesan("");
  perbaruiProgres();
  aturKontrol(false);
  await muatTugas(orang);
}

// 13. Mengambil tugas sesuai ID anggota
async function muatTugas(orang) {
  const nomorSaatIni = ++nomorPermintaan;
  statusTugas.textContent = "Memuat tugas...";
  errorTugas.textContent = "";
  cobaLagiTugas.classList.add("hidden");
  try {
    const respons = await fetch("https://jsonplaceholder.typicode.com/todos?userId=" + encodeURIComponent(orang.id));
    if (!respons.ok) throw new Error("Status server " + respons.status);
    const data = await respons.json();
    if (!Array.isArray(data)) throw new Error("Format data tugas tidak sesuai.");
    if (nomorSaatIni !== nomorPermintaan) return;
    semuaTugas = data;
    tugasSudahDimuat = true;
    tampilkanTugas();
    statusTugas.textContent = "";
    aturKontrol(true);
  } catch (error) {
    if (nomorSaatIni !== nomorPermintaan) return;
    semuaTugas = [];
    tugasSudahDimuat = false;
    perbaruiProgres();
    statusTugas.textContent = "";
    errorTugas.textContent = "Gagal memuat tugas. " + error.message;
    cobaLagiTugas.classList.remove("hidden");
    aturKontrol(false);
  }
}

// 14. Tombol mencoba memuat data kembali
cobaLagiAnggota.addEventListener("click", muatAnggota);
cobaLagiTugas.addEventListener("click", () => {
  if (anggotaTerpilih) muatTugas(anggotaTerpilih);
});

// 15. Memperbarui progres berdasarkan data tugas
function perbaruiProgres() {
  if (!anggotaTerpilih || !tugasSudahDimuat) {
    statTotal.textContent = "—";
    statSelesai.textContent = "—";
    statAktif.textContent = "—";
    statPersen.textContent = "—";
    teksProgres.textContent = "Belum tersedia";
    barProgres.style.width = "0%";
    jalurProgres.setAttribute("aria-valuenow", "0");
    return;
  }
  const total = semuaTugas.length;
  const selesai = semuaTugas.filter((tugas) => tugas.completed).length;
  const aktif = total - selesai;
  const persen = total ? Math.round((selesai / total) * 100) : 0;

  // Animasi angka statistik dari 0 sampai nilai akhirnya.
  animasiAngka(statTotal, total);
  animasiAngka(statSelesai, selesai);
  animasiAngka(statAktif, aktif);
  animasiAngka(statPersen, persen, 1200, "%");

  teksProgres.textContent = selesai + " dari " + total + " tugas selesai";

  // Tailwind transition-all membuat bar bergerak halus menuju persentase terbaru.
  barProgres.style.width = persen + "%";
  jalurProgres.setAttribute("aria-valuenow", String(persen));
  jalurProgres.setAttribute("aria-valuetext", selesai + " dari " + total + " tugas selesai");
}

// 16. Membuat tampilan satu tugas beserta tombolnya
function buatElemenTugas(tugas) {
  const item = document.createElement("li");
  const bagianInfo = document.createElement("div");
  const judul = document.createElement("p");
  const status = document.createElement("span");
  const aksi = document.createElement("div");
  const hapus = document.createElement("button");
  item.className = "flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-orange-300 hover:shadow-sm sm:flex-row sm:items-center sm:justify-between";
  bagianInfo.className = "min-w-0 flex-1";
  judul.className = "break-words text-sm font-semibold leading-6";
  judul.textContent = tugas.title;
  status.className = "mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold";
  aksi.className = "flex shrink-0 flex-wrap gap-2";

  function tandaiTampilanSelesai() {
    judul.classList.add("line-through", "text-gray-400");
    status.textContent = "Selesai";
    status.classList.remove("bg-orange-50", "text-orange-700");
    status.classList.add("bg-emerald-50", "text-emerald-700");
  }

  if (tugas.completed) {
    tandaiTampilanSelesai();
  } else {
    status.textContent = "Belum selesai";
    status.classList.add("bg-orange-50", "text-orange-700");
    const selesai = document.createElement("button");
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";
    selesai.className = "rounded-lg bg-emerald-600 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-700";
    selesai.addEventListener("click", () => {
      tugas.completed = true;
      tandaiTampilanSelesai();
      selesai.remove();
      perbaruiProgres();
      terapkanFilter();
    });
    aksi.appendChild(selesai);
  }

  hapus.type = "button";
  hapus.textContent = "Hapus";
  hapus.className = "rounded-lg border border-red-200 px-3 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-50";
  hapus.addEventListener("click", () => {
    semuaTugas = semuaTugas.filter((data) => data !== tugas);
    item.remove();
    elemenTugas.delete(tugas);
    perbaruiProgres();
    terapkanFilter();
  });

  bagianInfo.appendChild(judul);
  bagianInfo.appendChild(status);
  aksi.appendChild(hapus);
  item.appendChild(bagianInfo);
  item.appendChild(aksi);
  return item;
}

// 17. Menampilkan semua tugas ke halaman
function tampilkanTugas() {
  daftarTugas.innerHTML = "";
  elemenTugas.clear();
  semuaTugas.forEach((tugas) => {
    const item = buatElemenTugas(tugas);
    elemenTugas.set(tugas, item);
    daftarTugas.appendChild(item);
  });
  perbaruiProgres();
  terapkanFilter();
}

// 18. Mencari dan menyaring tugas
function terapkanFilter() {
  const kataKunci = cariTugas.value.trim().toLowerCase();
  const pilihan = filterStatus.value;
  let cocok = 0;
  elemenTugas.forEach((item, tugas) => {
    const judulCocok = tugas.title.toLowerCase().includes(kataKunci);
    const statusCocok = pilihan === "semua" ||
      (pilihan === "aktif" && !tugas.completed) ||
      (pilihan === "selesai" && tugas.completed);
    const tampil = judulCocok && statusCocok;
    item.classList.toggle("hidden", !tampil);
    if (tampil) cocok++;
  });
  jumlahDitampilkan.textContent = "Menampilkan " + cocok + " dari " + semuaTugas.length + " tugas";
  kosongTugas.classList.toggle("hidden", !tugasSudahDimuat || semuaTugas.length !== 0);
  tidakAdaHasil.classList.toggle("hidden", !tugasSudahDimuat || semuaTugas.length === 0 || cocok !== 0);
}
cariTugas.addEventListener("input", terapkanFilter);
filterStatus.addEventListener("change", terapkanFilter);

// 19. Simulasi menyimpan tugas menggunakan Promise
function simpanTugas(judul) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const duplikat = semuaTugas.some((tugas) => tugas.title.toLowerCase() === judul.toLowerCase());
      if (duplikat) {
        reject(new Error("Judul tugas tersebut sudah ada."));
      } else {
        resolve({ title: judul, completed: false });
      }
    }, 1000);
  });
}

// 20. Memvalidasi form dan menambahkan tugas
formTugas.addEventListener("submit", async (event) => {
  event.preventDefault();
  tampilkanPesan("");
  if (!anggotaTerpilih || !tugasSudahDimuat) {
    tampilkanPesan("Pilih anggota dan tunggu tugas selesai dimuat.");
    return;
  }
  const judul = inputTugas.value.trim();
  if (judul.length < 5) {
    tampilkanPesan("Judul tugas wajib diisi minimal 5 karakter.");
    inputTugas.focus();
    return;
  }
  sedangMenyimpan = true;
  aturKontrol(true);
  aturAnggota(false);
  tombolSimpan.textContent = "Menyimpan...";
  try {
    const tugasBaru = await simpanTugas(judul);
    semuaTugas.push(tugasBaru);
    inputTugas.value = "";
    cariTugas.value = "";
    filterStatus.value = "semua";
    tampilkanTugas();
    tampilkanPesan("Tugas berhasil ditambahkan.", true);
    beriNotifikasi("Tugas berhasil ditambahkan.");
  } catch (error) {
    tampilkanPesan(error.message);
  } finally {
    sedangMenyimpan = false;
    tombolSimpan.textContent = "Simpan";
    aturKontrol(tugasSudahDimuat);
    aturAnggota(true);
  }
});

// 21. Kondisi awal sebelum pengguna login
aturKontrol(false);
perbaruiProgres();
username.focus();