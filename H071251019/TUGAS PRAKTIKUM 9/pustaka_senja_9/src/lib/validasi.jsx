import { DAFTAR_KATEGORI } from "@/lib/konstanta";

const MAKS_ID_INTEGER = 2147483647; // batas tipe INTEGER di PostgreSQL

// memeriksa data dari form yang masuk sebelum ke database
export function parseId(nilai) {
    const teks = String(nilai ?? "").trim();
    if (!/^\d+$/.test(teks)) return null;
    const angka = Number(teks);
    if (!Number.isSafeInteger(angka) || angka < 1 || angka > MAKS_ID_INTEGER) return null;
    return angka;
}

// Validasi input form buku (dipakai oleh Tambah dan Ubah).
// Mengembalikan { data, errors, values } - values dipakai untuk mengisi ulang form saat gagal.
export function validasiBuku(formData) {
    const values = {
        judul: String(formData.get("judul") ?? "").trim(),
        penulis: String(formData.get("penulis") ?? "").trim(),
        kategori: String(formData.get("kategori") ?? ""),
        tahun: String(formData.get("tahun") ?? "").trim(),
        tersedia: String(formData.get("tersedia") ?? ""),
        sinopsis: String(formData.get("sinopsis") ?? "").trim(),
    };

    const errors = [];
    const tahunMaks = new Date().getFullYear() + 1;

    if (!values.judul) errors.push("Judul wajib diisi.");
    else if (values.judul.length > 200) errors.push("Judul maksimal 200 karakter.");

    if (!values.penulis) errors.push("Penulis wajib diisi.");
    else if (values.penulis.length > 100) errors.push("Penulis maksimal 100 karakter.");

    if (!DAFTAR_KATEGORI.includes(values.kategori)) errors.push("Pilih kategori yang tersedia.");

    if (!/^\d{1,4}$/.test(values.tahun)) {
        errors.push("Tahun terbit harus berupa angka bulat (contoh: 2018).");
    } else if (Number(values.tahun) < 1000 || Number(values.tahun) > tahunMaks) {
        errors.push(`Tahun terbit harus antara 1000 dan ${tahunMaks}.`);
    }

    if (values.tersedia !== "true" && values.tersedia !== "false") {
        errors.push("Pilih status ketersediaan buku.");
    }

    if (!values.sinopsis) errors.push("Sinopsis wajib diisi.");
    else if (values.sinopsis.length > 2000) errors.push("Sinopsis maksimal 2000 karakter.");

    const data = {
        judul: values.judul,
        penulis: values.penulis,
        kategori: values.kategori,
        tahun: Number(values.tahun),
        tersedia: values.tersedia === "true",
        sinopsis: values.sinopsis,
    };

    return { data, errors, values };
}
