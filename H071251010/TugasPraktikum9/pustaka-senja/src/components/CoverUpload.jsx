"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlus, RotateCcw, UploadCloud } from "lucide-react";

const MAX_SIZE = 4 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];

export default function CoverUpload({ initialCover = "", title = "Pratinjau cover buku" }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(initialCover || "");
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setPreview(initialCover || "");
  }, [initialCover]);

  useEffect(() => {
    return () => {
      if (preview.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  function handleChange(event) {
    const file = event.target.files?.[0];
    setError("");

    if (!file) {
      setPreview(initialCover);
      setFileName("");
      return;
    }

    if (!ACCEPTED_TYPES.includes(file.type)) {
      event.target.value = "";
      setError("Format file harus JPG, PNG, WEBP, atau AVIF.");
      setPreview(initialCover);
      setFileName("");
      return;
    }

    if (file.size > MAX_SIZE) {
      event.target.value = "";
      setError("Ukuran file maksimal 4 MB.");
      setPreview(initialCover);
      setFileName("");
      return;
    }

    setPreview(URL.createObjectURL(file));
    setFileName(file.name);
  }

  function resetFile() {
    if (inputRef.current) inputRef.current.value = "";
    setPreview(initialCover);
    setFileName("");
    setError("");
  }

  return (
    <div className="grid gap-4 sm:grid-cols-[150px_1fr] sm:items-start">
      <div className="cover-upload-preview">
        {preview ? (
          <img src={preview} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
            <ImagePlus size={28} className="text-emerald-300" />
            <span className="font-mono text-[9px] tracking-widest text-slate-500">NO COVER SELECTED</span>
          </div>
        )}
      </div>
      <div className="min-w-0">
        <label className="cover-upload-control">
          <UploadCloud size={17} className="shrink-0 text-emerald-300" />
          <span className="min-w-0 flex-1">
            <span className="block text-xs font-bold text-white">Pilih gambar cover</span>
            <span className="mt-1 block truncate text-[10px] text-slate-500">{fileName || "JPG, PNG, WEBP, atau AVIF · Maks. 4 MB"}</span>
          </span>
          <input ref={inputRef} name="cover" type="file" accept="image/jpeg,image/png,image/webp,image/avif" onChange={handleChange} className="sr-only" />
        </label>
        {fileName && (
          <button type="button" onClick={resetFile} className="mt-3 inline-flex items-center gap-2 font-mono text-[9px] tracking-widest text-cyan-300 transition hover:text-white">
            <RotateCcw size={12} /> RESET PILIHAN
          </button>
        )}
        {error && <p role="alert" className="mt-3 text-xs leading-5 text-rose-300">{error}</p>}
        <p className="mt-3 text-[10px] leading-5 text-slate-500">{initialCover ? "Cover saat ini akan tetap digunakan jika tidak memilih gambar baru." : "Cover akan tampil pada kartu katalog dan halaman detail setelah buku disimpan."}</p>
      </div>
    </div>
  );
}
