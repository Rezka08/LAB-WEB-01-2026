"use client";

import { createContext, useContext, useState, useSyncExternalStore } from "react";

const BookmarkContext = createContext({
  favoritIds: [],
  isFavorit: () => false,
  toggleFavorit: () => {},
  totalFavorit: 0,
  toast: null,
  showToast: () => {},
});

function getSnapshot() {
  if (typeof window === "undefined") return "[]";
  return localStorage.getItem("pustaka_favorit") || "[]";
}

function getServerSnapshot() {
  return "[]";
}

function subscribe(callback) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("storage", callback);
  window.addEventListener("pustaka_favorit_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("pustaka_favorit_change", callback);
  };
}

export function BookmarkProvider({ children }) {
  const rawFavorit = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [toast, setToast] = useState(null);

  let favoritIds = [];
  try {
    favoritIds = JSON.parse(rawFavorit);
  } catch {
    favoritIds = [];
  }

  const showToast = (teks, tipe = "info") => {
    setToast({ teks, tipe });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const toggleFavorit = (id, judul = "Buku") => {
    const exists = favoritIds.includes(id);
    const next = exists ? favoritIds.filter((item) => item !== id) : [...favoritIds, id];

    try {
      localStorage.setItem("pustaka_favorit", JSON.stringify(next));
      window.dispatchEvent(new Event("pustaka_favorit_change"));
    } catch {
      // ignore
    }

    if (exists) {
      showToast(`"${judul}" dihapus dari daftar tersimpan.`, "info");
    } else {
      showToast(`"${judul}" berhasil disimpan!`, "sukses");
    }
  };

  const isFavorit = (id) => favoritIds.includes(id);

  return (
    <BookmarkContext.Provider
      value={{
        favoritIds,
        isFavorit,
        toggleFavorit,
        totalFavorit: favoritIds.length,
        toast,
        showToast,
      }}
    >
      {children}
      {/* Toast Notification */}
      {toast && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex max-w-sm items-center gap-3 border-[3px] border-ink bg-surface p-4 font-mono text-sm font-bold shadow-brut transition-all animate-bounce"
        >
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center border-2 border-ink ${
              toast.tipe === "sukses" ? "bg-sun text-on-fill" : "bg-ink text-paper"
            }`}
          >
            {toast.tipe === "sukses" ? "★" : "ℹ"}
          </span>
          <span className="text-ink">{toast.teks}</span>
        </aside>
      )}
    </BookmarkContext.Provider>
  );
}

export function useBookmark() {
  return useContext(BookmarkContext);
}
