import { readFile } from "node:fs/promises";
import path from "node:path";
import { FOLDER_COVER } from "@/lib/upload";

// Melayani cover hasil upload: GET /buku/upload-xxxx.png
// Gambar bawaan (clean-code.webp, dst.) tetap dilayani langsung dari public/buku.
const TIPE = {
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
};

export async function GET(_request, { params }) {
  const { nama } = await params;

  // Hanya nama file hasil upload yang valid; mencegah path traversal (../).
  if (!/^upload-[A-Za-z0-9-]+\.(jpg|png|webp|gif)$/.test(nama)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const isi = await readFile(path.join(FOLDER_COVER, nama));
    return new Response(isi, {
      headers: {
        "Content-Type": TIPE[path.extname(nama)],
        // Nama file unik per upload, jadi aman di-cache lama.
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
