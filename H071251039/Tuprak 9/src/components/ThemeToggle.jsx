"use client";

import { useTheme } from "@/components/ThemeProvider";

function SunIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Sun center */}
      <circle
        cx="12"
        cy="12"
        r="4.5"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Geometric rays */}
      <path
        d="M12 2V5M12 19V22M2 12H5M19 12H22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M4.93 19.07L7.05 16.95M16.95 7.05L19.07 4.93"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function MoonIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Crescent moon */}
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Accent sparkle star */}
      <path
        d="M18 2L18.8 4.2L21 5L18.8 5.8L18 8L17.2 5.8L15 5L17.2 4.2L18 2Z"
        fill="#F7CB46"
      />
    </svg>
  );
}

function HalfThemeIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 3A9 9 0 0 1 12 21V3Z" fill="currentColor" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  const isDark = mounted ? theme === "dark" : false;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap"}
      title={isDark ? "Mode Terang" : "Mode Gelap"}
      className="flex items-center gap-2 border-[3px] border-ink bg-surface px-3 py-2 font-mono text-sm font-bold text-ink shadow-brut-sm transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
    >
      {mounted ? (
        isDark ? (
          <>
            <SunIcon className="h-4 w-4 shrink-0 text-amber-500 dark:text-amber-400" />
            <span className="hidden sm:inline">Terang</span>
          </>
        ) : (
          <>
            <MoonIcon className="h-4 w-4 shrink-0 text-ink" />
            <span className="hidden sm:inline">Gelap</span>
          </>
        )
      ) : (
        <>
          <HalfThemeIcon className="h-4 w-4 shrink-0 text-ink" />
          <span className="hidden sm:inline">Tema</span>
        </>
      )}
    </button>
  );
}
