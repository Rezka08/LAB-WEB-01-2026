module.exports = [
"[project]/src/app/katalog/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KatalogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dataBuku$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dataBuku.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BukuCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BukuCard.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const kategori = [
    "Semua",
    "Teknologi",
    "Fiksi",
    "Pengembangan Diri"
];
function KatalogPage() {
    const [aktif, setAktif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Semua");
    const daftar = aktif === "Semua" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dataBuku$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dataBuku$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].filter((buku)=>buku.kategori === aktif);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-9 max-w-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "THE BOOKSHELF"
                    }, void 0, false, {
                        fileName: "[project]/src/app/katalog/page.jsx",
                        lineNumber: 9,
                        columnNumber: 47
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "section-title mt-2",
                        children: [
                            "Temukan cerita ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "italic text-[#a47a56]",
                                children: "favoritmu."
                            }, void 0, false, {
                                fileName: "[project]/src/app/katalog/page.jsx",
                                lineNumber: 9,
                                columnNumber: 137
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/katalog/page.jsx",
                        lineNumber: 9,
                        columnNumber: 87
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 leading-7 text-[#827161]",
                        children: "Jelajahi koleksi pilihan Pustaka Senja. Siapa tahu, buku berikutnya akan jadi teman terbaikmu."
                    }, void 0, false, {
                        fileName: "[project]/src/app/katalog/page.jsx",
                        lineNumber: 9,
                        columnNumber: 199
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/katalog/page.jsx",
                lineNumber: 9,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-7 flex flex-wrap gap-2",
                children: kategori.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setAktif(item),
                        className: `rounded-full px-5 py-2.5 text-xs font-bold transition ${aktif === item ? "bg-[#493326] text-white shadow-md" : "border border-[#e6dbce] bg-[#fffdf9] text-[#806e5e] hover:bg-[#f1e8dc]"}`,
                        children: item
                    }, item, false, {
                        fileName: "[project]/src/app/katalog/page.jsx",
                        lineNumber: 10,
                        columnNumber: 72
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/katalog/page.jsx",
                lineNumber: 10,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-4 text-xs text-[#9b8877]",
                children: [
                    "Menampilkan ",
                    daftar.length,
                    " dari ",
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dataBuku$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].length,
                    " buku"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/katalog/page.jsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
                children: daftar.map((buku)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BukuCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        buku: buku
                    }, buku.id, false, {
                        fileName: "[project]/src/app/katalog/page.jsx",
                        lineNumber: 11,
                        columnNumber: 187
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/katalog/page.jsx",
                lineNumber: 11,
                columnNumber: 107
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/katalog/page.jsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/BukuCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BukuCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const covers = [
    "from-[#d9c1a5] to-[#a77b58]",
    "from-[#c8d0bc] to-[#78866c]",
    "from-[#d9b5a9] to-[#a76552]",
    "from-[#d7c9ad] to-[#a18a67]"
];
function BukuCard({ buku }) {
    const [favorit, setFavorit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const cover = covers[(Number(buku.id) - 1) % covers.length];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "book-card group overflow-hidden rounded-3xl border border-[#e9dfd2] bg-[#fffdf9] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-25px_rgba(68,45,30,.35)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative flex h-48 items-center justify-center bg-gradient-to-br ${cover} p-6`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-3 rounded-2xl border border-white/30"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BukuCard.jsx",
                        lineNumber: 9,
                        columnNumber: 102
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex h-36 w-28 flex-col justify-between rounded-r-lg border-l-[5px] border-white/30 bg-[#493326]/90 p-3 text-center text-[#fff4e5] shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] uppercase tracking-[.2em] text-[#e7c9a6]",
                                children: "Pustaka Senja"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BukuCard.jsx",
                                lineNumber: 9,
                                columnNumber: 339
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-serif text-sm font-bold leading-tight",
                                children: buku.judul
                            }, void 0, false, {
                                fileName: "[project]/src/components/BukuCard.jsx",
                                lineNumber: 9,
                                columnNumber: 429
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[9px] text-[#e7c9a6]",
                                children: buku.tahun
                            }, void 0, false, {
                                fileName: "[project]/src/components/BukuCard.jsx",
                                lineNumber: 9,
                                columnNumber: 509
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BukuCard.jsx",
                        lineNumber: 9,
                        columnNumber: 172
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFavorit(!favorit),
                        "aria-label": favorit ? "Hapus dari favorit" : "Simpan ke favorit",
                        className: `absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur transition ${favorit ? "bg-[#fff4e5] text-[#a6533d]" : "bg-white/75 text-[#705b49] hover:bg-white"}`,
                        children: favorit ? "♥" : "♡"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BukuCard.jsx",
                        lineNumber: 9,
                        columnNumber: 578
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BukuCard.jsx",
                lineNumber: 9,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-[#f2e9dc] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8c694c]",
                                children: buku.kategori
                            }, void 0, false, {
                                fileName: "[project]/src/components/BukuCard.jsx",
                                lineNumber: 10,
                                columnNumber: 83
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-[10px] font-semibold ${buku.tersedia ? "text-[#64805b]" : "text-[#a56a5d]"}`,
                                children: buku.tersedia ? "● Tersedia" : "● Sedang Dipinjam"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BukuCard.jsx",
                                lineNumber: 10,
                                columnNumber: 221
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BukuCard.jsx",
                        lineNumber: 10,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mt-4 font-serif text-xl font-bold leading-snug text-[#493326]",
                        children: buku.judul
                    }, void 0, false, {
                        fileName: "[project]/src/components/BukuCard.jsx",
                        lineNumber: 10,
                        columnNumber: 387
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-[#8b7868]",
                        children: [
                            buku.penulis,
                            " · ",
                            buku.tahun
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BukuCard.jsx",
                        lineNumber: 10,
                        columnNumber: 482
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/katalog/${buku.id}`,
                        className: "mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#9a704c] transition group-hover:gap-3",
                        children: [
                            "Lihat detail ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BukuCard.jsx",
                                lineNumber: 10,
                                columnNumber: 716
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BukuCard.jsx",
                        lineNumber: 10,
                        columnNumber: 558
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BukuCard.jsx",
                lineNumber: 10,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BukuCard.jsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/data/dataBuku.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const dataBuku = [
    {
        id: "1",
        judul: "Clean Code",
        penulis: "Robert C. Martin",
        kategori: "Teknologi",
        tahun: 2008,
        tersedia: true,
        sinopsis: "Panduan menulis kode perangkat lunak yang bersih, mudah dibaca, dan mudah dipelihara oleh tim pengembang."
    },
    {
        id: "2",
        judul: "Designing Data-Intensive Applications",
        penulis: "Martin Kleppmann",
        kategori: "Teknologi",
        tahun: 2017,
        tersedia: true,
        sinopsis: "Pembahasan mendalam mengenai arsitektur sistem terdistribusi, basis data, dan pengolahan data skala besar."
    },
    {
        id: "3",
        judul: "Refactoring",
        penulis: "Martin Fowler",
        kategori: "Teknologi",
        tahun: 2018,
        tersedia: false,
        sinopsis: "Teknik sistematis untuk memperbaiki struktur internal kode program tanpa mengubah perilaku eksternalnya."
    },
    {
        id: "4",
        judul: "Laut Bercerita",
        penulis: "Leila S. Chudori",
        kategori: "Fiksi",
        tahun: 2017,
        tersedia: true,
        sinopsis: "Kisah persahabatan, perjuangan, dan kehilangan para aktivis mahasiswa di penghujung era Orde Baru."
    },
    {
        id: "5",
        judul: "Bumi Manusia",
        penulis: "Pramoedya Ananta Toer",
        kategori: "Fiksi",
        tahun: 1980,
        tersedia: true,
        sinopsis: "Perjalanan Minke, seorang pemuda pribumi terpelajar, dalam menghadapi ketidakadilan hukum kolonial di awal abad ke-20."
    },
    {
        id: "6",
        judul: "Cantik Itu Luka",
        penulis: "Eka Kurniawan",
        kategori: "Fiksi",
        tahun: 2002,
        tersedia: false,
        sinopsis: "Epos keluarga Dewi Ayu di kota pesisir Halimunda yang memadukan sejarah kelam dengan unsur realisme magis."
    },
    {
        id: "7",
        judul: "Atomic Habits",
        penulis: "James Clear",
        kategori: "Pengembangan Diri",
        tahun: 2018,
        tersedia: true,
        sinopsis: "Cara membangun kebiasaan baik yang bertahan lama dan menghentikan kebiasaan buruk melalui perubahan kecil setiap hari."
    },
    {
        id: "8",
        judul: "Deep Work",
        penulis: "Cal Newport",
        kategori: "Pengembangan Diri",
        tahun: 2016,
        tersedia: true,
        sinopsis: "Strategi melatih fokus mendalam tanpa distraksi untuk menghasilkan karya bernilai tinggi di era digital."
    },
    {
        id: "9",
        judul: "Filosofi Teras",
        penulis: "Henry Manampiring",
        kategori: "Pengembangan Diri",
        tahun: 2018,
        tersedia: true,
        sinopsis: "Penerapan filsafat Stoisisme kuno untuk menjaga ketenangan mental dan mengelola emosi negatif di kehidupan modern."
    }
];
const __TURBOPACK__default__export__ = dataBuku;
}),
];

//# sourceMappingURL=src_18hrxjxdur04l._.js.map