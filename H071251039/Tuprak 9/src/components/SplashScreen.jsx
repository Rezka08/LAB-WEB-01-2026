"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { usePathname } from "next/navigation";

const SplashContext = createContext({
  disableSplash: () => {},
});

export function useSplash() {
  return useContext(SplashContext);
}

export default function SplashScreen({ children }) {
  const pathname = usePathname();

  // Check if current route is a known valid route
  const isKnownRoute =
    pathname === "/" ||
    pathname === "/katalog" ||
    pathname === "/usulan" ||
    pathname === "/game" ||
    Boolean(pathname?.startsWith("/katalog/"));

  const [disabled, setDisabled] = useState(!isKnownRoute);
  const [phase, setPhase] = useState(() => (!isKnownRoute ? "done" : "splash"));

  useEffect(() => {
    if (!isKnownRoute || disabled) {
      return;
    }

    // Show splash for 2.2s, then fade out over 0.6s
    const splashTimer = setTimeout(() => setPhase("fade"), 2200);
    const doneTimer = setTimeout(() => setPhase("done"), 2800);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(doneTimer);
    };
  }, [isKnownRoute, disabled]);

  const disableSplash = () => {
    setDisabled(true);
    setPhase("done");
  };

  if (!isKnownRoute || disabled || phase === "done") {
    return (
      <SplashContext.Provider value={{ disableSplash }}>
        {children}
      </SplashContext.Provider>
    );
  }

  return (
    <SplashContext.Provider value={{ disableSplash }}>
      {/* Main content underneath, hidden initially */}
      <div
        className="splash-content-hidden transition-opacity duration-500"
        style={{ opacity: phase === "fade" ? 1 : 0 }}
      >
        {children}
      </div>

      {/* Splash overlay */}
      <div
        className={`splash-overlay fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink transition-opacity duration-600 ${
          phase === "fade" ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {/* Animated book icon */}
        <div className="splash-book">
          <svg
            width="80"
            height="80"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 12 C22 12 14 10 8 13 L8 33 C14 30 22 32 22 32 C22 32 30 30 36 33 L36 13 C30 10 22 12 22 12Z"
              fill="none"
              stroke="var(--color-sun, #F7CB46)"
              strokeWidth="2"
              strokeLinejoin="round"
              className="splash-book-outline"
            />
            <line
              x1="22" y1="12" x2="22" y2="32"
              stroke="var(--color-sun, #F7CB46)"
              strokeWidth="1.5"
              className="splash-book-spine"
            />
            {/* Page lines */}
            <g className="splash-lines">
              <line x1="12" y1="17" x2="19" y2="18" stroke="var(--color-paper, #FFDC8B)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="21" x2="19" y2="22" stroke="var(--color-paper, #FFDC8B)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="25" x2="19" y2="26" stroke="var(--color-paper, #FFDC8B)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="25" y1="18" x2="32" y2="17" stroke="var(--color-paper, #FFDC8B)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="25" y1="22" x2="32" y2="21" stroke="var(--color-paper, #FFDC8B)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="25" y1="26" x2="32" y2="25" stroke="var(--color-paper, #FFDC8B)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        {/* Title */}
        <h1 className="splash-title mt-8 font-sans text-4xl font-black tracking-tight text-paper md:text-5xl">
          Pustaka Senja
        </h1>

        {/* Subtitle */}
        <p className="splash-subtitle mt-3 font-mono text-sm text-paper/50">
          Ruang baca komunitas
        </p>

        {/* Loading bar */}
        <div className="mt-10 h-[3px] w-48 overflow-hidden border border-paper/20">
          <div className="splash-bar h-full bg-sun" />
        </div>
      </div>

      <style jsx>{`
        .splash-book {
          animation: bookBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }

        .splash-book-outline {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: drawBook 1s ease-out 0.3s forwards;
        }

        .splash-book-spine {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          animation: drawBook 0.5s ease-out 0.6s forwards;
        }

        .splash-lines {
          opacity: 0;
          animation: fadeIn 0.4s ease-out 1s forwards;
        }

        .splash-title {
          opacity: 0;
          transform: translateY(12px);
          animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards;
        }

        .splash-subtitle {
          opacity: 0;
          transform: translateY(8px);
          animation: slideUp 0.5s ease-out 0.8s forwards;
        }

        .splash-bar {
          animation: loadBar 1.8s ease-in-out 0.4s both;
        }

        @keyframes bookBounce {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-8deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes drawBook {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes loadBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </SplashContext.Provider>
  );
}
