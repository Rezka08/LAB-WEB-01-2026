import "server-only";
import { randomUUID } from "node:crypto";
import { mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { AWALAN_FILE_UPLOAD, MAKS_UKURAN_COVER } from "@/lib/konstanta";

// memeriksa file hasil upload, menyimpannya ke folder uploads/buku, dan mengembalikan nama file baru.
export const FOLDER_COVER = path.join(process.cwd(), "uploads", "buku");

// daftar tipe gambar yang diizinkan beserta "magic bytes" (tanda awal isi file),
// supaya file berekstensi .jpg yang isinya bukan gambar tetap ditolak.
const TIPE_GAMBAR = {
    "image/jpeg": { ext: "jpg", cocok: (b) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff },
        "image/png": {
        ext: "png",
        cocok: (b) => b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47,
    },
    "image/webp": {
    ext: "webp",
    cocok: (b) => b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP",
    },
    "image/gif": { ext: "gif", cocok: (b) => b.toString("ascii", 0, 3) === "GIF" },
};

// menyimpan file cover dari <input type="file" name="gambar"> ke uploads/buku.
// return: { nama } bila sukses, { kosong: true } bila tidak ada file, atau { error } bila ditolak.
export async function simpanCover(file) {
    if (!file || typeof file === "string" || file.size === 0) return { kosong: true };

    if (file.size > MAKS_UKURAN_COVER) {
        return { error: "Ukuran gambar sampul maksimal 2 MB." };
    }

    const tipe = TIPE_GAMBAR[file.type];
    if (!tipe) {
    return { error: "Format sampul harus JPG, PNG, WEBP, atau GIF." };
    }

    const isi = Buffer.from(await file.arrayBuffer());
    if (!tipe.cocok(isi)) {
        return { error: "Isi file bukan gambar yang valid." };
    }

  // nama file dibuat sendiri (bukan dari nama asli) agar aman dari path traversal & tabrakan nama.
    const nama = `${AWALAN_FILE_UPLOAD}${Date.now()}-${randomUUID().slice(0, 8)}.${tipe.ext}`;
    await mkdir(FOLDER_COVER, { recursive: true });
    await writeFile(path.join(FOLDER_COVER, nama), isi);
    return { nama };
}

// hanya file hasil upload yang boleh dihapus; gambar bawaan (seed) tidak disentuh.
export async function hapusCover(nama) {
    if (!nama || !nama.startsWith(AWALAN_FILE_UPLOAD) || nama !== path.basename(nama)) return;
    try {
        await unlink(path.join(FOLDER_COVER, nama));
    } catch {
        // file sudah tidak ada - abaikan
    }
}
