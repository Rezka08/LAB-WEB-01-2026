module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/katalog/[id]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetailBuku,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dataBuku$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dataBuku.js [app-rsc] (ecmascript)");
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dataBuku$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].map((buku)=>({
            id: buku.id
        }));
}
async function DetailBuku({ params }) {
    const { id } = await params;
    const buku = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dataBuku$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find((item)=>item.id === id);
    if (!buku) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-4xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/katalog",
                className: "text-sm font-bold text-[#9a704c] hover:text-[#493326]",
                children: "← Kembali ke katalog"
            }, void 0, false, {
                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                lineNumber: 9,
                columnNumber: 45
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-7 grid overflow-hidden rounded-[2rem] border border-[#e8ddcf] bg-[#fffdf9] md:grid-cols-[.8fr_1.2fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-h-[360px] items-center justify-center bg-gradient-to-br from-[#d9c1a5] via-[#b48d6b] to-[#75533d] p-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-72 w-52 flex-col justify-between rounded-r-xl border-l-[8px] border-white/30 bg-[#493326] p-6 text-center text-[#fff4e5] shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs uppercase tracking-[.25em] text-[#e7c9a6]",
                                    children: "Pustaka Senja"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                    lineNumber: 9,
                                    columnNumber: 566
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-serif text-2xl font-bold",
                                    children: buku.judul
                                }, void 0, false, {
                                    fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                    lineNumber: 9,
                                    columnNumber: 654
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-[#e7c9a6]",
                                    children: buku.penulis
                                }, void 0, false, {
                                    fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                    lineNumber: 9,
                                    columnNumber: 721
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/katalog/[id]/page.jsx",
                            lineNumber: 9,
                            columnNumber: 410
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/katalog/[id]/page.jsx",
                        lineNumber: 9,
                        columnNumber: 281
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-7 sm:p-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: [
                                    "BOOK DETAILS · #",
                                    buku.id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                lineNumber: 9,
                                columnNumber: 824
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-5 inline-flex rounded-full bg-[#f2e9dc] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8c694c]",
                                children: buku.kategori
                            }, void 0, false, {
                                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                lineNumber: 9,
                                columnNumber: 876
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-4 font-serif text-4xl font-bold leading-tight text-[#493326]",
                                children: buku.judul
                            }, void 0, false, {
                                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                lineNumber: 9,
                                columnNumber: 1031
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-[#8b7868]",
                                children: [
                                    "Ditulis oleh ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-[#594536]",
                                        children: buku.penulis
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                        lineNumber: 9,
                                        columnNumber: 1176
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                lineNumber: 9,
                                columnNumber: 1128
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "my-7 grid grid-cols-2 gap-4 border-y border-[#eee5da] py-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[#9b8877]",
                                                children: "Tahun terbit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                                lineNumber: 9,
                                                columnNumber: 1319
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 font-semibold text-[#493326]",
                                                children: buku.tahun
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                                lineNumber: 9,
                                                columnNumber: 1373
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                        lineNumber: 9,
                                        columnNumber: 1314
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[#9b8877]",
                                                children: "Ketersediaan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                                lineNumber: 9,
                                                columnNumber: 1449
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `mt-1 font-semibold ${buku.tersedia ? "text-[#64805b]" : "text-[#a56a5d]"}`,
                                                children: buku.tersedia ? "Tersedia" : "Sedang Dipinjam"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                                lineNumber: 9,
                                                columnNumber: 1503
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                        lineNumber: 9,
                                        columnNumber: 1444
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                lineNumber: 9,
                                columnNumber: 1238
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif text-xl font-bold text-[#493326]",
                                children: "Tentang buku ini"
                            }, void 0, false, {
                                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                lineNumber: 9,
                                columnNumber: 1658
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm leading-8 text-[#806e5e]",
                                children: buku.sinopsis
                            }, void 0, false, {
                                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                lineNumber: 9,
                                columnNumber: 1739
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/katalog",
                                className: "mt-8 inline-flex rounded-full bg-[#493326] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#654936]",
                                children: "Jelajahi buku lainnya"
                            }, void 0, false, {
                                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                                lineNumber: 9,
                                columnNumber: 1811
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/katalog/[id]/page.jsx",
                        lineNumber: 9,
                        columnNumber: 795
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/katalog/[id]/page.jsx",
                lineNumber: 9,
                columnNumber: 160
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/katalog/[id]/page.jsx",
        lineNumber: 9,
        columnNumber: 10
    }, this);
}
function generateMetadata({ params }) {
    return Promise.resolve(params).then(({ id })=>{
        const buku = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dataBuku$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find((item)=>item.id === id);
        return {
            title: buku ? `${buku.judul} — Pustaka Senja` : "Buku tidak ditemukan"
        };
    });
}
}),
"[project]/src/app/katalog/[id]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/katalog/[id]/page.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/dataBuku.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__154x1ety1cb4q._.js.map