"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  mounted: false,
});

function getSnapshot() {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot() {
  return "light";
}

function subscribe(callback) {
  if (typeof window === "undefined") return () => {};

  const observer = new MutationObserver(() => {
    callback();
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => observer.disconnect();
}

export function ThemeProvider({ children }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initial sync with localStorage on client
    try {
      const saved = localStorage.getItem("tema");
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const shouldBeDark = saved === "dark" || (!saved && mediaQuery.matches);

      if (shouldBeDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      const handleSystemChange = (e) => {
        const currentSaved = localStorage.getItem("tema");
        if (!currentSaved) {
          if (e.matches) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }
      };

      mediaQuery.addEventListener("change", handleSystemChange);
      return () => mediaQuery.removeEventListener("change", handleSystemChange);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    // Flag client mount for rendering client-only UI
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    try {
      localStorage.setItem("tema", nextTheme);
    } catch {
      // ignore
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
