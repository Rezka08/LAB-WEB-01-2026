(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/usulan/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsulanPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const initialForm = {
    nama: "",
    judul: "",
    kategori: "",
    alasan: ""
};
function UsulanPage() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialForm);
    const [pesan, setPesan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [peringatan, setPeringatan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [usulan, setUsulan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    function handleChange(e) {
        setForm((prev)=>({
                ...prev,
                [e.target.name]: e.target.value
            }));
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (Object.values(form).some((value)=>!value.trim())) {
            setPeringatan("Mohon lengkapi semua kolom sebelum mengirim usulan.");
            setPesan("");
            return;
        }
        const item = {
            ...form,
            id: `${Date.now()}-${form.judul}`
        };
        setUsulan((prev)=>[
                item,
                ...prev
            ]);
        setForm(initialForm);
        setPeringatan("");
        setPesan("Terima kasih! Usulan bukumu berhasil dikirim.");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-3xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "A NOTE FOR OUR BOOKSHELF"
                    }, void 0, false, {
                        fileName: "[project]/src/app/usulan/page.jsx",
                        lineNumber: 17,
                        columnNumber: 67
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "section-title mt-2",
                        children: [
                            "Bantu kami memilih ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "italic text-[#a47a56]",
                                children: "cerita berikutnya."
                            }, void 0, false, {
                                fileName: "[project]/src/app/usulan/page.jsx",
                                lineNumber: 17,
                                columnNumber: 172
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/usulan/page.jsx",
                        lineNumber: 17,
                        columnNumber: 118
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 leading-7 text-[#827161]",
                        children: "Ada buku yang ingin kamu temukan di Pustaka Senja? Ceritakan kepada kami."
                    }, void 0, false, {
                        fileName: "[project]/src/app/usulan/page.jsx",
                        lineNumber: 17,
                        columnNumber: 242
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/usulan/page.jsx",
                lineNumber: 17,
                columnNumber: 45
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "rounded-[2rem] border border-[#e8ddcf] bg-[#fffdf9] p-6 shadow-[0_20px_55px_-45px_rgba(68,45,30,.45)] sm:p-9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-5 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field-label",
                                children: [
                                    "Nama pengusul",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "field-input",
                                        name: "nama",
                                        value: form.nama,
                                        onChange: handleChange,
                                        placeholder: "Nama kamu"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/usulan/page.jsx",
                                        lineNumber: 18,
                                        columnNumber: 243
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/usulan/page.jsx",
                                lineNumber: 18,
                                columnNumber: 199
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field-label",
                                children: [
                                    "Judul buku",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "field-input",
                                        name: "judul",
                                        value: form.judul,
                                        onChange: handleChange,
                                        placeholder: "Judul buku yang diusulkan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/usulan/page.jsx",
                                        lineNumber: 18,
                                        columnNumber: 403
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/usulan/page.jsx",
                                lineNumber: 18,
                                columnNumber: 362
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field-label sm:col-span-2",
                                children: [
                                    "Kategori",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "field-input",
                                        name: "kategori",
                                        value: form.kategori,
                                        onChange: handleChange,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Pilih kategori buku"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/usulan/page.jsx",
                                                lineNumber: 18,
                                                columnNumber: 687
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Teknologi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/usulan/page.jsx",
                                                lineNumber: 18,
                                                columnNumber: 732
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Fiksi"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/usulan/page.jsx",
                                                lineNumber: 18,
                                                columnNumber: 758
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Pengembangan Diri"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/usulan/page.jsx",
                                                lineNumber: 18,
                                                columnNumber: 780
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                children: "Lainnya"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/usulan/page.jsx",
                                                lineNumber: 18,
                                                columnNumber: 814
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/usulan/page.jsx",
                                        lineNumber: 18,
                                        columnNumber: 593
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/usulan/page.jsx",
                                lineNumber: 18,
                                columnNumber: 540
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "field-label sm:col-span-2",
                                children: [
                                    "Alasan usulan",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: "field-input min-h-32 resize-y",
                                        name: "alasan",
                                        value: form.alasan,
                                        onChange: handleChange,
                                        placeholder: "Kenapa buku ini layak ada di Pustaka Senja?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/usulan/page.jsx",
                                        lineNumber: 18,
                                        columnNumber: 913
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/usulan/page.jsx",
                                lineNumber: 18,
                                columnNumber: 855
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/usulan/page.jsx",
                        lineNumber: 18,
                        columnNumber: 156
                    }, this),
                    peringatan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "alert",
                        className: "mt-5 rounded-xl bg-[#f9e8e2] px-4 py-3 text-sm text-[#9a5143]",
                        children: peringatan
                    }, void 0, false, {
                        fileName: "[project]/src/app/usulan/page.jsx",
                        lineNumber: 19,
                        columnNumber: 22
                    }, this),
                    pesan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "status",
                        className: "mt-5 rounded-xl bg-[#e9f0e4] px-4 py-3 text-sm text-[#58704f]",
                        children: pesan
                    }, void 0, false, {
                        fileName: "[project]/src/app/usulan/page.jsx",
                        lineNumber: 19,
                        columnNumber: 139
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "mt-7 w-full rounded-full bg-[#493326] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#654936] sm:w-auto",
                        children: [
                            "Kirim usulan ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2",
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/src/app/usulan/page.jsx",
                                lineNumber: 19,
                                columnNumber: 408
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/usulan/page.jsx",
                        lineNumber: 19,
                        columnNumber: 242
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/usulan/page.jsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            usulan.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "COMMUNITY PICKS"
                    }, void 0, false, {
                        fileName: "[project]/src/app/usulan/page.jsx",
                        lineNumber: 21,
                        columnNumber: 54
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mt-2 font-serif text-2xl font-bold text-[#493326]",
                        children: "Usulan dari pengunjung"
                    }, void 0, false, {
                        fileName: "[project]/src/app/usulan/page.jsx",
                        lineNumber: 21,
                        columnNumber: 96
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 space-y-3",
                        children: usulan.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "rounded-2xl border border-[#e8ddcf] bg-[#fffdf9] p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-serif text-lg font-bold text-[#493326]",
                                                children: item.judul
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/usulan/page.jsx",
                                                lineNumber: 21,
                                                columnNumber: 398
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-[#f2e9dc] px-3 py-1 text-[10px] font-bold text-[#8c694c]",
                                                children: item.kategori
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/usulan/page.jsx",
                                                lineNumber: 21,
                                                columnNumber: 475
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/usulan/page.jsx",
                                        lineNumber: 21,
                                        columnNumber: 331
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-[#9b8877]",
                                        children: [
                                            "Diusulkan oleh ",
                                            item.nama
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/usulan/page.jsx",
                                        lineNumber: 21,
                                        columnNumber: 594
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm leading-6 text-[#806e5e]",
                                        children: item.alasan
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/usulan/page.jsx",
                                        lineNumber: 21,
                                        columnNumber: 667
                                    }, this)
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/app/usulan/page.jsx",
                                lineNumber: 21,
                                columnNumber: 243
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/usulan/page.jsx",
                        lineNumber: 21,
                        columnNumber: 189
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/usulan/page.jsx",
                lineNumber: 21,
                columnNumber: 27
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/usulan/page.jsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_s(UsulanPage, "UIrLrdnTehkslYexku/nYnRexfM=");
_c = UsulanPage;
var _c;
__turbopack_context__.k.register(_c, "UsulanPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_usulan_page_jsx_0df3f58g6vggv._.js.map