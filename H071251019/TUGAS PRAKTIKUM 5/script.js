//simpan dataset
const API_URL = "https://jsonplaceholder.typicode.com";

const SELECTED_CLASSES = ["!bg-pink-700", "!text-white", "!border-pink-700"];
const DONE_CLASSES = ["line-through", "text-gray-400"]; //yg garis kalau sdh selesai

//simpan element
const membersLoading = document.getElementById("members-loading");
const membersError = document.getElementById("members-error");
const membersList = document.getElementById("members-list");
const tasksTitle = document.getElementById("tasks-title");
const tasksPlaceholder = document.getElementById("tasks-placeholder");
const tasksLoading = document.getElementById("tasks-loading");
const tasksError = document.getElementById("tasks-error");
const tasksContent = document.getElementById("tasks-content");
const summary = document.getElementById("summary");
const searchInput = document.getElementById("search-input");
const emptyMessage = document.getElementById("empty-message");
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const saveBtn = document.getElementById("save-btn");
const formError = document.getElementById("form-error");
const toast = document.getElementById("toast");

//menghitung permintaan tugas, bakal bertambah 1
let latestRequest = 0;
let toastTimer = null;

//f1: menampilkan daftar anggota
async function loadMembers() {
    membersLoading.classList.remove("hidden");
    membersError.classList.add("hidden");
    
    try {
        const response = await fetch(API_URL + "/users");
        if (!response.ok) {
            throw new Error("Server membalas dengan status " + response.status + ".");}
    const users = await response.json();
    users.forEach(renderMember);
    } catch (error) {
        membersError.textContent = "Daftar anggota gagal dimuat. " + error.message;
        membersError.classList.remove("hidden");
    } finally {
        membersLoading.classList.add("hidden");
    }
}

function renderMember(user) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = user.name;
    button.className =
        "member-btn rounded border border-stone-300 bg-white px-3 py-2 text-left text-sm text-stone-700 hover:bg-stone-100";
    button.addEventListener("click", function () {
        selectMember(user, button);
    });
    membersList.appendChild(button);
}

function markSelected(activeButton) {
    const buttons = membersList.querySelectorAll(".member-btn");
    buttons.forEach(function (button) {
        button.classList.remove(...SELECTED_CLASSES);
    });
    activeButton.classList.add(...SELECTED_CLASSES);
}

//f2: menampilkan tugas anggota
async function selectMember(user, button) {
    markSelected(button);
    latestRequest += 1;
    const requestId = latestRequest;
    
    tasksTitle.textContent = "Tugas " + user.name;
    tasksPlaceholder.classList.add("hidden");
    tasksError.classList.add("hidden");
    tasksContent.classList.add("hidden");
    tasksLoading.classList.remove("hidden");
    
    taskList.innerHTML = "";
    searchInput.value = "";
    taskInput.value = "";
    formError.classList.add("hidden");
    emptyMessage.classList.add("hidden");
    
    try {
        const response = await fetch(API_URL + "/todos?userId=" + user.id);
        if (!response.ok) {
        throw new Error("Server membalas dengan status " + response.status + ".");
        }
        const todos = await response.json();
    
        if (requestId !== latestRequest) {
        return;
        }

        todos.forEach(function (todo) {
            taskList.appendChild(createTaskItem(todo.title, todo.completed));
        });
        updateSummary();
        tasksContent.classList.remove("hidden");

    } catch (error) {
    if (requestId !== latestRequest) {
        return;
    }
    
    tasksError.textContent = "Tugas gagal dimuat. " + error.message;
    tasksError.classList.remove("hidden");
    } finally {
        if (requestId === latestRequest) {
        tasksLoading.classList.add("hidden");
        }
    }
}

function createTaskItem(title, completed) {
    const item = document.createElement("li");
    item.className =
        "flex items-center justify-between gap-3 rounded border border-stone-200 px-3 py-2";
    item.dataset.completed = completed ? "true" : "false";
    
    const titleEl = document.createElement("span");
    titleEl.className = "task-title text-sm";
    titleEl.textContent = title;
    item.appendChild(titleEl);
    
    const actions = document.createElement("div");
    actions.className = "flex shrink-0 gap-2";
    
    if (completed) { //kalau tgsny selesai
        titleEl.classList.add(...DONE_CLASSES);
    } else {
        const doneBtn = document.createElement("button");
        doneBtn.type = "button";
        doneBtn.textContent = "Tandai selesai";
        doneBtn.className =
        "rounded border border-teal-700 px-2 py-1 text-xs font-medium text-teal-800 hover:bg-teal-50";
        doneBtn.addEventListener("click", function () {
        titleEl.classList.add(...DONE_CLASSES);
        item.dataset.completed = "true";
        doneBtn.remove();
        updateSummary();
        });
        actions.appendChild(doneBtn);
    }
    
    //delete
    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Hapus";
    deleteBtn.className =
        "rounded border border-red-300 px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-50";
    deleteBtn.addEventListener("click", function () {
        item.remove();
        updateSummary();
        applySearch();
    });
    actions.appendChild(deleteBtn);
    
    item.appendChild(actions);
    return item;
}

function updateSummary() {
    const total = taskList.children.length;
    const done = taskList.querySelectorAll('li[data-completed="true"]').length;
    summary.textContent = done + " dari " + total + " tugas selesai";
}

//f3: mencari tugas 
function applySearch() {
    const keyword = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;
    
    taskList.querySelectorAll("li").forEach(function (item) {
        const title = item.querySelector(".task-title").textContent.toLowerCase();
        if (title.includes(keyword)) {
        item.classList.remove("hidden");
        visibleCount += 1;
        } else {
        item.classList.add("hidden");
        }
    });
    
    const noMatch = keyword !== "" && visibleCount === 0;
    emptyMessage.classList.toggle("hidden", !noMatch);
}

//f4: menambah tugas baru
function simpanTugas(judul) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
        const kunci = judul.toLowerCase();
        const judulYangAda = Array.from(taskList.querySelectorAll(".task-title"));
        const sudahAda = judulYangAda.some(function (el) {
            return el.textContent.trim().toLowerCase() === kunci;
        });
    
        if (sudahAda) {
            reject(new Error('Tugas "' + judul + '" sudah ada di daftar.'));
        } else {
            resolve({ title: judul, completed: false });
        }
        }, 1000);
    });
}

function showFormError(message) {
    formError.textContent = message;
    formError.classList.remove("hidden");
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
        toast.classList.add("hidden");
    }, 3000);
}

searchInput.addEventListener("input", applySearch);
taskInput.addEventListener("input", function () {
    formError.classList.add("hidden");
});

//f5:
taskForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    formError.classList.add("hidden");
    
    const judul = taskInput.value.trim();
    
    if (judul === "") {
        showFormError("Judul tugas tidak boleh kosong.");
        return;
    }
    if (judul.length < 5) {
        showFormError("Judul tugas minimal 5 karakter.");
        return;
    }
    
    const ownerRequest = latestRequest;
    saveBtn.disabled = true;
    saveBtn.textContent = "Menyimpan...";
    
    try {
        const tugasBaru = await simpanTugas(judul);
    
        if (ownerRequest !== latestRequest) {
        return;
        }
    
        taskList.appendChild(createTaskItem(tugasBaru.title, tugasBaru.completed));
        updateSummary();
        applySearch();
        taskInput.value = "";
        showToast("Tugas berhasil ditambahkan.");
    } catch (error) {
        showFormError(error.message);
    } finally {
        saveBtn.textContent = "Simpan";
        saveBtn.disabled = false;
    }
    });

loadMembers();