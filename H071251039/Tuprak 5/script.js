const baseUrl = "https://jsonplaceholder.typicode.com";

const tombolMenu = document.getElementById("tombol-menu");
const teksMenu = document.getElementById("teks-menu");
const ikonMenu = document.getElementById("ikon-menu");
const overlayMenu = document.getElementById("overlay-menu");
const panelMenu = document.querySelectorAll(".panel-menu");
const bentuk = document.querySelectorAll(".bentuk");

const daftarAnggota = document.getElementById("daftar-anggota");
const statusAnggota = document.getElementById("status-anggota");
const errorAnggota = document.getElementById("error-anggota");

const judulTugas = document.getElementById("judul-tugas");
const infoAwal = document.getElementById("info-awal");
const statusTugas = document.getElementById("status-tugas");
const errorTugas = document.getElementById("error-tugas");
const isiTugas = document.getElementById("isi-tugas");
const ringkasan = document.getElementById("ringkasan");
const inputCari = document.getElementById("input-cari");
const daftarTugas = document.getElementById("daftar-tugas");
const pesanKosong = document.getElementById("pesan-kosong");

const formTugas = document.getElementById("form-tugas");
const inputJudul = document.getElementById("input-judul");
const tombolSimpan = document.getElementById("tombol-simpan");
const errorForm = document.getElementById("error-form");
const notifikasi = document.getElementById("notifikasi");
const tombolTema = document.getElementById("tombol-tema");
const totalTugas = document.getElementById("total-tugas");
const dialogDetail = document.getElementById("dialog-detail");
const detailJudul = document.getElementById("detail-judul");
const detailAnggota = document.getElementById("detail-anggota");
const detailStatus = document.getElementById("detail-status");
const tombolTutupDetail = document.getElementById("tombol-tutup-detail");

let idAktif = null;
let namaAktif = "";
let timerNotif = null;
let menuTerbuka = false;
const tombolAnggota = [];
const tombolHalaman = [];
const anggotaHalaman = document.getElementById("anggota-halaman");

function terapkanTema(gelap) {
  if (gelap) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  tombolTema.setAttribute("aria-pressed", String(gelap));
}

let modeGelap;
const temaTersimpan = localStorage.getItem("tema");
if (temaTersimpan) {
  modeGelap = temaTersimpan === "gelap";
} else {
  modeGelap = window.matchMedia("(prefers-color-scheme: dark)").matches;
}
terapkanTema(modeGelap);

tombolTema.addEventListener("click", function () {
  modeGelap = !modeGelap;
  terapkanTema(modeGelap);
  localStorage.setItem("tema", modeGelap ? "gelap" : "terang");
});

function aturMenu(buka) {
  menuTerbuka = buka;
  tombolMenu.setAttribute("aria-expanded", String(buka));
  teksMenu.textContent = buka ? "Tutup" : "Menu";

  if (buka) {
    overlayMenu.classList.remove("invisible", "opacity-0");
    overlayMenu.classList.add("visible", "opacity-100");
    ikonMenu.classList.add("rotate-45");
    document.body.classList.add("overflow-hidden");
  } else {
    overlayMenu.classList.remove("visible", "opacity-100");
    overlayMenu.classList.add("invisible", "opacity-0");
    ikonMenu.classList.remove("rotate-45");
    document.body.classList.remove("overflow-hidden");
    bentuk.forEach(function (b) {
      b.classList.remove("opacity-100", "scale-100");
      b.classList.add("opacity-0", "scale-75");
    });
  }

  panelMenu.forEach(function (panel, i) {
    panel.style.transitionDelay = buka ? i * 120 + "ms" : "0ms";
    if (buka) {
      panel.classList.remove("translate-x-full");
      panel.classList.add("translate-x-0");
    } else {
      panel.classList.remove("translate-x-0");
      panel.classList.add("translate-x-full");
    }
  });

  tombolAnggota.forEach(function (tombol, i) {
    tombol.style.transitionDelay = buka ? 350 + i * 50 + "ms" : "0ms";
    if (buka) {
      tombol.classList.remove("translate-y-[140%]", "rotate-[10deg]");
      tombol.classList.add("translate-y-0", "rotate-0");
    } else {
      tombol.classList.remove("translate-y-0", "rotate-0");
      tombol.classList.add("translate-y-[140%]", "rotate-[10deg]");
    }
  });
}

function tampilBentuk(i) {
  const pilih = bentuk[i % bentuk.length];
  bentuk.forEach(function (b) {
    b.classList.remove("opacity-100", "scale-100");
    b.classList.add("opacity-0", "scale-75");
  });
  pilih.classList.remove("opacity-0", "scale-75");
  pilih.classList.add("opacity-100", "scale-100");
}

function sembunyiBentuk(i) {
  const pilih = bentuk[i % bentuk.length];
  pilih.classList.remove("opacity-100", "scale-100");
  pilih.classList.add("opacity-0", "scale-75");
}

tombolMenu.addEventListener("click", function () {
  aturMenu(!menuTerbuka);
});

overlayMenu.addEventListener("click", function (event) {
  if (!event.target.closest("button")) {
    aturMenu(false);
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && menuTerbuka) {
    aturMenu(false);
  }
});

async function muatAnggota() {
  statusAnggota.textContent = "Memuat anggota...";
  errorAnggota.textContent = "";

  try {
    const res = await fetch(baseUrl + "/users");
    if (!res.ok) {
      throw new Error("status " + res.status);
    }
    const users = await res.json();

    users.forEach(function (user, i) {
      const li = document.createElement("li");
      li.className = "overflow-hidden";

      const tombol = document.createElement("button");
      tombol.textContent = user.name;
      tombol.className =
        "anggota block w-full origin-left translate-y-[140%] rotate-[10deg] py-1 text-left text-3xl font-semibold text-neutral-100 transition-transform duration-700 ease-[cubic-bezier(0.65,0.01,0.05,0.99)] hover:text-indigo-300 md:text-4xl lg:text-5xl";

      tombol.addEventListener("click", function () {
        pilihAnggota(user, i);
        aturMenu(false);
      });
      li.addEventListener("mouseenter", function () {
        tampilBentuk(i);
      });
      li.addEventListener("mouseleave", function () {
        sembunyiBentuk(i);
      });
      tombol.addEventListener("focus", function () {
        tampilBentuk(i);
      });
      tombol.addEventListener("blur", function () {
        sembunyiBentuk(i);
      });

      li.appendChild(tombol);
      daftarAnggota.appendChild(li);
      tombolAnggota.push(tombol);

      const tombolLangsung = document.createElement("button");
      tombolLangsung.textContent = user.name;
      tombolLangsung.className =
        "rounded border bg-white px-3 py-1 text-sm hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700";
      tombolLangsung.addEventListener("click", function () {
        pilihAnggota(user, i);
      });
      anggotaHalaman.appendChild(tombolLangsung);
      tombolHalaman.push(tombolLangsung);
    });

    tombolMenu.disabled = false;
  } catch (err) {
    errorAnggota.textContent = "Gagal memuat anggota (" + err.message + ")";
  } finally {
    statusAnggota.textContent = "";
  }
}

async function pilihAnggota(user, i) {
  idAktif = user.id;
  namaAktif = user.name;

  tombolAnggota.forEach(function (t) {
    t.classList.remove("!text-indigo-400");
  });
  tombolHalaman.forEach(function (t) {
    t.classList.remove("!bg-indigo-600", "!text-white", "!border-indigo-600");
  });
  tombolAnggota[i].classList.add("!text-indigo-400");
  tombolHalaman[i].classList.add("!bg-indigo-600", "!text-white", "!border-indigo-600");

  judulTugas.textContent = "Tugas " + user.name;
  infoAwal.textContent = "";
  errorTugas.textContent = "";
  statusTugas.textContent = "Memuat tugas...";
  isiTugas.classList.add("hidden");
  daftarTugas.innerHTML = "";
  inputCari.value = "";
  inputJudul.value = "";
  errorForm.textContent = "";

  try {
    const res = await fetch(baseUrl + "/todos?userId=" + user.id);
    if (!res.ok) {
      throw new Error("status " + res.status);
    }
    const todos = await res.json();
    if (idAktif !== user.id) return;

    todos.forEach(function (todo) {
      daftarTugas.appendChild(buatTugas(todo));
    });
    update();
    isiTugas.classList.remove("hidden");
  } catch (err) {
    if (idAktif === user.id) {
      errorTugas.textContent = "Gagal memuat tugas (" + err.message + ")";
    }
  } finally {
    if (idAktif === user.id) {
      statusTugas.textContent = "";
    }
  }
}

const kelasBadge = "badge inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ";
const kelasBadgeSelesai = "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300";
const kelasBadgeBelum = "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300";

function aturStatus(tr, selesai) {
  const judul = tr.querySelector(".judul");
  const badge = tr.querySelector(".badge");

  if (selesai) {
    tr.classList.add("selesai");
    judul.classList.add("line-through", "text-gray-400");
    badge.textContent = "Selesai";
    badge.className = kelasBadge + kelasBadgeSelesai;
  } else {
    tr.classList.remove("selesai");
    judul.classList.remove("line-through", "text-gray-400");
    badge.textContent = "Belum selesai";
    badge.className = kelasBadge + kelasBadgeBelum;
  }
}

function bukaDetail(tr) {
  detailJudul.textContent = tr.querySelector(".judul").textContent;
  detailAnggota.textContent = namaAktif;
  detailStatus.textContent = tr.classList.contains("selesai") ? "Selesai" : "Belum selesai";
  dialogDetail.showModal();
}

function buatTugas(todo) {
  const tr = document.createElement("tr");
  tr.className = "border-b transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50";

  const tdNomor = document.createElement("td");
  tdNomor.className = "nomor px-4 py-3 text-gray-500 dark:text-gray-400";
  tr.appendChild(tdNomor);

  const tdJudul = document.createElement("td");
  tdJudul.className = "judul px-4 py-3";
  tdJudul.textContent = todo.title;
  tr.appendChild(tdJudul);

  const tdStatus = document.createElement("td");
  tdStatus.className = "px-4 py-3";
  const badge = document.createElement("span");
  tdStatus.appendChild(badge);
  tr.appendChild(tdStatus);

  const tdAksi = document.createElement("td");
  tdAksi.className = "px-4 py-3";
  const kotakAksi = document.createElement("div");
  kotakAksi.className = "flex items-center justify-center gap-2";

  const tombolDetail = document.createElement("button");
  tombolDetail.textContent = "Detail";
  tombolDetail.className = "whitespace-nowrap rounded border px-2 py-1 text-xs hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700";
  tombolDetail.addEventListener("click", function () {
    bukaDetail(tr);
  });
  kotakAksi.appendChild(tombolDetail);

  badge.className = kelasBadge;
  if (todo.completed) {
    aturStatus(tr, true);
  } else {
    aturStatus(tr, false);
    const tombolSelesai = document.createElement("button");
    tombolSelesai.textContent = "Tandai selesai";
    tombolSelesai.className = "whitespace-nowrap rounded bg-green-100 px-2 py-1 text-xs text-green-700 dark:bg-green-900/40 dark:text-green-300";
    tombolSelesai.addEventListener("click", function () {
      aturStatus(tr, true);
      tombolSelesai.remove();
      update();
    });
    kotakAksi.appendChild(tombolSelesai);
  }

  const tombolHapus = document.createElement("button");
  tombolHapus.textContent = "Hapus";
  tombolHapus.className = "whitespace-nowrap rounded bg-red-100 px-2 py-1 text-xs text-red-700 dark:bg-red-900/40 dark:text-red-300";
  tombolHapus.addEventListener("click", function () {
    tr.remove();
    update();
  });
  kotakAksi.appendChild(tombolHapus);

  tdAksi.appendChild(kotakAksi);
  tr.appendChild(tdAksi);

  return tr;
}

function update() {
  const baris = daftarTugas.children;
  const total = baris.length;
  const selesai = daftarTugas.querySelectorAll(".selesai").length;

  for (let i = 0; i < total; i++) {
    baris[i].querySelector(".nomor").textContent = i + 1;
  }

  ringkasan.textContent = selesai + " dari " + total + " tugas selesai";
  totalTugas.textContent = "Total tugas: " + total;
  cariTugas();
}

function cariTugas() {
  const kata = inputCari.value.toLowerCase();
  const items = daftarTugas.children;
  let cocok = 0;

  for (let i = 0; i < items.length; i++) {
    const judul = items[i].querySelector(".judul").textContent.toLowerCase();
    if (judul.includes(kata)) {
      items[i].classList.remove("hidden");
      cocok++;
    } else {
      items[i].classList.add("hidden");
    }
  }

  if (items.length === 0) {
    pesanKosong.textContent = "Belum ada tugas.";
  } else if (cocok === 0) {
    pesanKosong.textContent = "Tidak ada tugas yang cocok";
  } else {
    pesanKosong.textContent = "";
  }
}

inputCari.addEventListener("input", cariTugas);

tombolTutupDetail.addEventListener("click", function () {
  dialogDetail.close();
});

dialogDetail.addEventListener("click", function (event) {
  if (event.target === dialogDetail) {
    dialogDetail.close();
  }
});

function simpanTugas(judul) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const judulAda = daftarTugas.querySelectorAll(".judul");
      for (let i = 0; i < judulAda.length; i++) {
        if (judulAda[i].textContent.toLowerCase() === judul.toLowerCase()) {
          reject(new Error("Tugas \"" + judul + "\" sudah ada."));
          return;
        }
      }
      resolve({ title: judul, completed: false });
    }, 1000);
  });
}

formTugas.addEventListener("submit", async function (event) {
  event.preventDefault();
  errorForm.textContent = "";

  const judul = inputJudul.value.trim();
  if (judul.length < 5) {
    errorForm.textContent = "Judul minimal 5 karakter.";
    return;
  }

  const idSaatSubmit = idAktif;
  tombolSimpan.disabled = true;
  tombolSimpan.textContent = "Menyimpan...";

  try {
    const tugasBaru = await simpanTugas(judul);
    if (idSaatSubmit !== idAktif) {
      throw new Error("Anggota berganti saat menyimpan, tugas tidak disimpan.");
    }
    daftarTugas.prepend(buatTugas(tugasBaru));
    update();
    inputJudul.value = "";

    notifikasi.textContent = "Tugas berhasil ditambahkan.";
    notifikasi.classList.remove("hidden");
    clearTimeout(timerNotif);
    timerNotif = setTimeout(function () {
      notifikasi.classList.add("hidden");
    }, 3000);
  } catch (err) {
    errorForm.textContent = err.message;
  } finally {
    tombolSimpan.disabled = false;
    tombolSimpan.textContent = "Simpan";
  }
});

muatAnggota();
