document.addEventListener("DOMContentLoaded", () => {
    const loadingMembers = document.getElementById("loading-members");
    const errorMembers = document.getElementById("error-members");
    const membersList = document.getElementById("members-list");

    const taskTitle = document.getElementById("task-title");
    const taskSummary = document.getElementById("task-summary");
    const progressContainer = document.getElementById("progress-container");
    const progressBar = document.getElementById("progress-bar");
    const loadingTasks = document.getElementById("loading-tasks");
    const errorTasks = document.getElementById("error-tasks");
    const taskControls = document.getElementById("task-controls");
    const placeholderMessage = document.getElementById("placeholder-message");

    const searchInput = document.getElementById("search-input");
    const clearSearchBtn = document.getElementById("clear-search-btn");
    const addTaskForm = document.getElementById("add-task-form");
    const taskInput = document.getElementById("task-input");
    const submitBtn = document.getElementById("submit-btn");
    const formError = document.getElementById("form-error");
    const formSuccess = document.getElementById("form-success");

    const noMatchMessage = document.getElementById("no-match-message");
    const tasksList = document.getElementById("tasks-list");

    let currentSelectedMemberBtn = null;
    let notificationTimeout = null;

    function formatTwoDigits(num) {
        return num < 10 ? `0${num}` : `${num}`;
    }

    async function loadMembers() {
        loadingMembers.textContent = "Memuat anggota...";
        loadingMembers.classList.remove("hidden");
        errorMembers.classList.add("hidden");
        errorMembers.textContent = "";

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error(`Gagal mengambil data anggota (Status: ${response.status})`);
            }
            const users = await response.json();

            loadingMembers.textContent = "";
            loadingMembers.classList.add("hidden");
            membersList.innerHTML = "";

            users.forEach((user, index) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.classList.add(
                    "w-full", "flex", "items-center", "gap-3", "p-2.5", "rounded-xl",
                    "text-left", "transition-all", "duration-150", "group"
                );

                const badge = document.createElement("span");
                badge.textContent = formatTwoDigits(index + 1);
                badge.classList.add(
                    "badge-num", "w-7", "h-7", "rounded-lg", "flex", "items-center",
                    "justify-center", "text-xs", "font-bold", "bg-slate-100", "text-slate-500",
                    "group-hover:bg-slate-200"
                );

                const nameSpan = document.createElement("span");
                nameSpan.textContent = user.name;
                nameSpan.classList.add("name-text", "text-sm", "font-medium", "text-slate-600", "group-hover:text-slate-900");

                btn.appendChild(badge);
                btn.appendChild(nameSpan);

                btn.addEventListener("click", () => {
                    selectMember(btn, user);
                });

                membersList.appendChild(btn);
            });
        } catch (error) {
            loadingMembers.textContent = "";
            loadingMembers.classList.add("hidden");
            errorMembers.textContent = error.message || "Terjadi kesalahan saat memuat daftar anggota.";
            errorMembers.classList.remove("hidden");
        }
    }
    async function selectMember(buttonElement, user) {
        if (currentSelectedMemberBtn) {
            currentSelectedMemberBtn.classList.remove("bg-blue-50/80", "border", "border-blue-100");
            const oldBadge = currentSelectedMemberBtn.querySelector(".badge-num");
            const oldName = currentSelectedMemberBtn.querySelector(".name-text");
            if (oldBadge) {
                oldBadge.classList.remove("bg-blue-600", "text-white");
                oldBadge.classList.add("bg-slate-100", "text-slate-500");
            }
            if (oldName) {
                oldName.classList.remove("text-blue-600", "font-semibold");
                oldName.classList.add("text-slate-600", "font-medium");
            }
        }

        buttonElement.classList.add("bg-blue-50/80", "border", "border-blue-100");
        const activeBadge = buttonElement.querySelector(".badge-num");
        const activeName = buttonElement.querySelector(".name-text");
        if (activeBadge) {
            activeBadge.classList.remove("bg-slate-100", "text-slate-500");
            activeBadge.classList.add("bg-blue-600", "text-white");
        }
        if (activeName) {
            activeName.classList.remove("text-slate-600", "font-medium");
            activeName.classList.add("text-blue-600", "font-semibold");
        }
        currentSelectedMemberBtn = buttonElement;

        taskTitle.textContent = `Tugas ${user.name}`;
        placeholderMessage.classList.add("hidden");
        taskControls.classList.remove("hidden");
        taskSummary.classList.remove("hidden");
        progressContainer.classList.remove("hidden");

        searchInput.value = "";
        clearSearchBtn.classList.add("hidden");
        taskInput.value = "";
        hideFormError();
        hideFormSuccess();

        tasksList.innerHTML = "";
        noMatchMessage.classList.add("hidden");

        loadingTasks.textContent = "Memuat tugas...";
        loadingTasks.classList.remove("hidden");
        errorTasks.classList.add("hidden");
        errorTasks.textContent = "";

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
            if (!response.ok) {
                throw new Error(`Gagal mengambil data tugas (Status: ${response.status})`);
            }
            const todos = await response.json();

            loadingTasks.textContent = "";
            loadingTasks.classList.add("hidden");

            todos.forEach((todo) => {
                const li = createTaskElement(todo.title, todo.completed);
                tasksList.appendChild(li);
            });

            updateSummary();
            filterTasks();
        } catch (error) {
            loadingTasks.textContent = "";
            loadingTasks.classList.add("hidden");
            errorTasks.textContent = error.message || "Terjadi kesalahan saat memuat daftar tugas.";
            errorTasks.classList.remove("hidden");
        }
    }

    function createTaskElement(titleText, isCompleted) {
        const li = document.createElement("li");
        li.classList.add("py-3.5", "flex", "items-center", "justify-between", "gap-4", "group");

        const leftWrapper = document.createElement("div");
        leftWrapper.classList.add("flex", "items-center", "gap-3", "flex-1", "min-w-0");

        const iconWrapper = document.createElement("div");
        iconWrapper.classList.add("w-5", "h-5", "rounded-full", "flex-shrink-0", "flex", "items-center", "justify-center", "transition-all");

        if (isCompleted) {
            iconWrapper.classList.add("bg-emerald-500", "text-white");
            iconWrapper.textContent = "✓";
        } else {
            iconWrapper.classList.add("border-2", "border-slate-300");
        }

        const span = document.createElement("span");
        span.textContent = titleText;
        span.classList.add("text-sm", "break-words", "transition-colors");

        if (isCompleted) {
            span.classList.add("line-through", "text-slate-400");
        } else {
            span.classList.add("text-slate-700", "font-medium");
        }

        leftWrapper.appendChild(iconWrapper);
        leftWrapper.appendChild(span);

        const btnGroup = document.createElement("div");
        btnGroup.classList.add("flex", "items-center", "gap-2", "flex-shrink-0");

        if (!isCompleted) {
            const completeBtn = document.createElement("button");
            completeBtn.type = "button";
            completeBtn.textContent = "Tandai selesai";
            completeBtn.classList.add("text-xs", "font-medium", "text-slate-400", "hover:text-slate-600", "px-2", "py-1", "rounded", "hover:bg-slate-100", "transition-colors");

            completeBtn.addEventListener("click", () => {
                span.classList.remove("text-slate-700", "font-medium");
                span.classList.add("line-through", "text-slate-400");

                iconWrapper.classList.remove("border-2", "border-slate-300");
                iconWrapper.classList.add("bg-emerald-500", "text-white");
                iconWrapper.textContent = "✓";

                completeBtn.remove();
                updateSummary();
            });

            btnGroup.appendChild(completeBtn);
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.textContent = "Hapus";
        deleteBtn.classList.add("text-xs", "font-medium", "text-slate-400", "hover:text-slate-600", "px-2", "py-1", "rounded", "hover:bg-slate-100", "transition-colors");

        deleteBtn.addEventListener("click", () => {
            li.remove();
            updateSummary();
            filterTasks();
        });

        btnGroup.appendChild(deleteBtn);

        li.appendChild(leftWrapper);
        li.appendChild(btnGroup);

        return li;
    }

    function updateSummary() {
        const allTasks = tasksList.querySelectorAll("li");
        const total = allTasks.length;
        let completedCount = 0;

        allTasks.forEach((li) => {
            const span = li.querySelector("span:not(.badge-num)");
            if (span && span.classList.contains("line-through")) {
                completedCount++;
            }
        });

        taskSummary.textContent = `${completedCount} dari ${total} tugas selesai`;

        const percentage = total > 0 ? (completedCount / total) * 100 : 0;
        progressBar.style.width = `${percentage}%`;
    }

    function filterTasks() {
        const query = searchInput.value.trim().toLowerCase();
        const allTasks = tasksList.querySelectorAll("li");
        let visibleCount = 0;

        if (query.length > 0) {
            clearSearchBtn.classList.remove("hidden");
        } else {
            clearSearchBtn.classList.add("hidden");
        }

        allTasks.forEach((li) => {
            const span = li.querySelector("div > span");
            const titleText = span ? span.textContent.toLowerCase() : "";

            if (titleText.includes(query)) {
                li.classList.remove("hidden");
                visibleCount++;
            } else {
                li.classList.add("hidden");
            }
        });

        if (allTasks.length > 0 && visibleCount === 0) {
            noMatchMessage.classList.remove("hidden");
        } else {
            noMatchMessage.classList.add("hidden");
        }
    }

    searchInput.addEventListener("input", filterTasks);

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        filterTasks();
    });

    function simpanTugas(judul) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const allTasks = tasksList.querySelectorAll("li div > span");
                const newTitleLower = judul.toLowerCase();
                let exists = false;

                allTasks.forEach((span) => {
                    if (span.textContent.trim().toLowerCase() === newTitleLower) {
                        exists = true;
                    }
                });

                if (exists) {
                    reject(new Error("Tugas dengan judul yang sama sudah ada di dalam daftar."));
                } else {
                    resolve({ title: judul, completed: false });
                }
            }, 1000);
        });
    }

    function showFormError(msg) {
        formError.textContent = msg;
        formError.classList.remove("hidden");
    }

    function hideFormError() {
        formError.textContent = "";
        formError.classList.add("hidden");
    }

    function showFormSuccess(msg) {
        formSuccess.textContent = msg;
        formSuccess.classList.remove("hidden");

        if (notificationTimeout) {
            clearTimeout(notificationTimeout);
        }

        notificationTimeout = setTimeout(() => {
            hideFormSuccess();
        }, 3000);
    }

    function hideFormSuccess() {
        formSuccess.textContent = "";
        formSuccess.classList.add("hidden");
    }

    addTaskForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        hideFormError();

        const title = taskInput.value.trim();

        if (!title || title.length < 5) {
            showFormError("Judul tugas tidak boleh kosong dan minimal harus 5 karakter.");
            return;
        }

        submitBtn.textContent = "Menyimpan...";
        submitBtn.disabled = true;

        try {
            const newTodo = await simpanTugas(title);
            const newLi = createTaskElement(newTodo.title, newTodo.completed);
            tasksList.appendChild(newLi);

            updateSummary();
            filterTasks();

            taskInput.value = "";
            showFormSuccess("Tugas berhasil ditambahkan.");
        } catch (error) {
            showFormError(error.message || "Gagal menyimpan tugas.");
        } finally {
            submitBtn.textContent = "Simpan";
            submitBtn.disabled = false;
        }
    });

    loadMembers();
});