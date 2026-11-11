import Link from "next/link";

export default function NotFound() {
  return (
    <div data-page="404" className="flex flex-col items-center py-10 text-center">
      {/* Illustration */}
      <svg
        viewBox="0 0 440 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-lg"
        aria-hidden="true"
      >
        <defs>
          {/* Wood grain pattern */}
          <pattern id="wood" x="0" y="0" width="60" height="10" patternUnits="userSpaceOnUse">
            <rect width="60" height="10" fill="#3d3d3d" />
            <line x1="0" y1="2" x2="60" y2="2.5" stroke="#333" strokeWidth="0.5" opacity="0.5" />
            <line x1="0" y1="5" x2="60" y2="4.8" stroke="#2e2e2e" strokeWidth="0.3" opacity="0.4" />
            <line x1="0" y1="8" x2="60" y2="8.3" stroke="#333" strokeWidth="0.4" opacity="0.3" />
          </pattern>
          {/* Shelf shadow gradient */}
          <linearGradient id="shelfShadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
          {/* Back panel gradient for depth */}
          <linearGradient id="backPanel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--p-card)" />
            <stop offset="100%" stopColor="var(--p-paper)" />
          </linearGradient>
        </defs>

        {/* ====== BOOKSHELF STRUCTURE ====== */}

        {/* Back panel with subtle gradient */}
        <rect x="70" y="40" width="300" height="270" fill="url(#backPanel)" />
        {/* Back panel inner shadow */}
        <rect x="70" y="40" width="300" height="8" fill="url(#shelfShadow)" />

        {/* Top shelf (thick with depth) */}
        <rect x="60" y="32" width="320" height="14" rx="1" fill="url(#wood)" stroke="#111" strokeWidth="2.5" />
        {/* Front edge highlight */}
        <rect x="60" y="42" width="320" height="3" fill="#4a4a4a" opacity="0.3" />

        {/* Second shelf */}
        <rect x="60" y="125" width="320" height="14" rx="1" fill="url(#wood)" stroke="#111" strokeWidth="2.5" />
        <rect x="60" y="135" width="320" height="3" fill="#4a4a4a" opacity="0.3" />
        {/* Shadow below shelf */}
        <rect x="72" y="139" width="296" height="10" fill="url(#shelfShadow)" />

        {/* Third shelf */}
        <rect x="60" y="215" width="320" height="14" rx="1" fill="url(#wood)" stroke="#111" strokeWidth="2.5" />
        <rect x="60" y="225" width="320" height="3" fill="#4a4a4a" opacity="0.3" />
        <rect x="72" y="229" width="296" height="10" fill="url(#shelfShadow)" />

        {/* Bottom shelf */}
        <rect x="60" y="300" width="320" height="14" rx="1" fill="url(#wood)" stroke="#111" strokeWidth="2.5" />

        {/* Side panels with depth */}
        <rect x="60" y="32" width="12" height="282" fill="#2a2a2a" stroke="#111" strokeWidth="2.5" />
        <rect x="368" y="32" width="12" height="282" fill="#2a2a2a" stroke="#111" strokeWidth="2.5" />
        {/* Inner edge highlight */}
        <line x1="72" y1="46" x2="72" y2="300" stroke="#555" strokeWidth="0.5" opacity="0.4" />
        <line x1="368" y1="46" x2="368" y2="300" stroke="#555" strokeWidth="0.5" opacity="0.4" />

        {/* Shelf legs */}
        <rect x="68" y="314" width="10" height="42" rx="1" fill="#2a2a2a" stroke="#111" strokeWidth="2" />
        <rect x="362" y="314" width="10" height="42" rx="1" fill="#2a2a2a" stroke="#111" strokeWidth="2" />
        {/* Leg feet */}
        <rect x="60" y="350" width="28" height="7" rx="2" fill="#222" stroke="#111" strokeWidth="2" />
        <rect x="352" y="350" width="28" height="7" rx="2" fill="#222" stroke="#111" strokeWidth="2" />
        {/* Floor shadow */}
        <ellipse cx="220" cy="360" rx="170" ry="6" fill="#000" opacity="0.1" />

        {/* ====== BOOKS ====== */}

        {/* Book leaning on top shelf — candy pink */}
        <g transform="translate(295, 46)">
          <g transform="rotate(-12)">
            {/* Book body */}
            <rect x="0" y="0" width="22" height="70" rx="2" fill="#FE90E8" />
            {/* Book cover edge */}
            <rect x="0" y="0" width="22" height="70" rx="2" fill="none" stroke="#000000" strokeWidth="1.5" />
            {/* Spine */}
            <rect x="0" y="0" width="5" height="70" rx="1" fill="#FE90E8" />
            <line x1="5" y1="0" x2="5" y2="70" stroke="#000000" strokeWidth="0.8" />
            {/* Page edges visible on right side */}
            <rect x="5" y="2" width="15" height="66" rx="1" fill="#f5f0e6" />
            <rect x="5" y="2" width="15" height="66" rx="1" fill="none" stroke="#000000" strokeWidth="0.5" />
            {/* Page lines */}
            <line x1="7" y1="4" x2="18" y2="4" stroke="#ccc5b3" strokeWidth="0.3" />
            <line x1="7" y1="8" x2="18" y2="8" stroke="#ccc5b3" strokeWidth="0.3" />
            <line x1="7" y1="12" x2="18" y2="12" stroke="#ccc5b3" strokeWidth="0.3" />
            <line x1="7" y1="60" x2="18" y2="60" stroke="#ccc5b3" strokeWidth="0.3" />
            <line x1="7" y1="64" x2="18" y2="64" stroke="#ccc5b3" strokeWidth="0.3" />
            {/* Title on spine */}
            <rect x="1" y="20" width="3" height="12" rx="0.5" fill="#000" opacity="0.4" />
          </g>
        </g>

        {/* Book standing upright on second shelf — yellow */}
        <g transform="translate(230, 139)">
          {/* Book body */}
          <rect x="0" y="0" width="20" height="73" rx="1.5" fill="#F7CB46" />
          <rect x="0" y="0" width="20" height="73" rx="1.5" fill="none" stroke="#000" strokeWidth="1.2" />
          {/* Spine */}
          <rect x="0" y="0" width="5" height="73" rx="1" fill="#F7CB46" />
          <line x1="5" y1="0" x2="5" y2="73" stroke="#000" strokeWidth="0.8" />
          {/* Page edges */}
          <rect x="5" y="2" width="13" height="69" rx="1" fill="#f0ebe0" />
          <rect x="5" y="2" width="13" height="69" rx="1" fill="none" stroke="#000" strokeWidth="0.5" />
          {/* Page lines */}
          <line x1="7" y1="5" x2="16" y2="5" stroke="#ccc5b3" strokeWidth="0.3" />
          <line x1="7" y1="9" x2="16" y2="9" stroke="#ccc5b3" strokeWidth="0.3" />
          <line x1="7" y1="62" x2="16" y2="62" stroke="#ccc5b3" strokeWidth="0.3" />
          <line x1="7" y1="66" x2="16" y2="66" stroke="#ccc5b3" strokeWidth="0.3" />
          {/* Spine title */}
          <rect x="1" y="18" width="3" height="14" rx="0.5" fill="#000" opacity="0.6" />
          <rect x="1" y="50" width="3" height="6" rx="0.5" fill="#000" opacity="0.5" />
        </g>

        {/* Fallen book on bottom shelf — cyan */}
        <g transform="translate(120, 283)">
          {/* Book body laying down */}
          <rect x="0" y="0" width="55" height="16" rx="1.5" fill="#C0F7FE" />
          <rect x="0" y="0" width="55" height="16" rx="1.5" fill="none" stroke="#000" strokeWidth="1.2" />
          {/* Spine on left */}
          <rect x="0" y="0" width="55" height="4" rx="1" fill="#C0F7FE" />
          <line x1="0" y1="4" x2="55" y2="4" stroke="#000" strokeWidth="0.8" />
          {/* Page edges on bottom */}
          <rect x="2" y="4" width="51" height="10" rx="0.5" fill="#f5f0e6" />
          <rect x="2" y="4" width="51" height="10" rx="0.5" fill="none" stroke="#000" strokeWidth="0.5" />
          {/* Page lines */}
          <line x1="4" y1="6" x2="51" y2="6" stroke="#ccc5b3" strokeWidth="0.3" />
          <line x1="4" y1="8" x2="51" y2="8" stroke="#ccc5b3" strokeWidth="0.3" />
          <line x1="4" y1="10" x2="51" y2="10" stroke="#ccc5b3" strokeWidth="0.3" />
          <line x1="4" y1="12" x2="51" y2="12" stroke="#ccc5b3" strokeWidth="0.3" />
          {/* Title on cover */}
          <rect x="12" y="1" width="20" height="2" rx="0.5" fill="#fff" opacity="0.35" />
        </g>

        {/* ====== COBWEBS ====== */}

        {/* Large web — top-left corner */}
        <g stroke="#888" fill="none" opacity="0.55">
          {/* Main radial threads from corner */}
          <line x1="72" y1="46" x2="170" y2="46" strokeWidth="0.8" />
          <line x1="72" y1="46" x2="72" y2="125" strokeWidth="0.8" />
          <line x1="72" y1="46" x2="160" y2="125" strokeWidth="0.7" />
          <line x1="72" y1="46" x2="170" y2="90" strokeWidth="0.7" />
          <line x1="72" y1="46" x2="130" y2="125" strokeWidth="0.7" />
          <line x1="72" y1="46" x2="110" y2="125" strokeWidth="0.6" />
          <line x1="72" y1="46" x2="170" y2="65" strokeWidth="0.6" />
          {/* Spiral cross threads */}
          <path d="M85 46 Q88 52 83 56 Q79 60 72 58" strokeWidth="0.6" />
          <path d="M105 46 Q110 58 102 68 Q93 78 82 76 Q75 75 72 70" strokeWidth="0.6" />
          <path d="M130 46 Q136 62 128 78 Q118 92 102 96 Q88 99 78 95 Q73 93 72 86" strokeWidth="0.6" />
          <path d="M155 46 Q160 70 148 90 Q135 108 115 115 Q96 120 82 115 Q74 112 72 104" strokeWidth="0.5" />
          {/* Droopy thread */}
          <path d="M130 46 Q135 50 132 56" strokeWidth="0.5" opacity="0.4" />
        </g>

        {/* Web — top-right corner */}
        <g stroke="#888" fill="none" opacity="0.45">
          <line x1="368" y1="46" x2="290" y2="46" strokeWidth="0.8" />
          <line x1="368" y1="46" x2="368" y2="125" strokeWidth="0.8" />
          <line x1="368" y1="46" x2="295" y2="125" strokeWidth="0.7" />
          <line x1="368" y1="46" x2="290" y2="85" strokeWidth="0.7" />
          <line x1="368" y1="46" x2="320" y2="125" strokeWidth="0.6" />
          <path d="M355 46 Q352 55 358 60 Q364 64 368 60" strokeWidth="0.6" />
          <path d="M335 46 Q330 62 340 75 Q350 84 360 82 Q366 80 368 74" strokeWidth="0.6" />
          <path d="M312 46 Q308 68 318 86 Q330 100 348 106 Q360 110 366 104 Q368 100 368 94" strokeWidth="0.5" />
        </g>

        {/* Web — middle-left side */}
        <g stroke="#888" fill="none" opacity="0.35">
          <line x1="72" y1="139" x2="120" y2="170" strokeWidth="0.6" />
          <line x1="72" y1="139" x2="72" y2="210" strokeWidth="0.6" />
          <line x1="72" y1="139" x2="105" y2="210" strokeWidth="0.6" />
          <path d="M72 158 Q82 162 86 155" strokeWidth="0.5" />
          <path d="M72 180 Q90 188 98 175 Q102 165 95 157" strokeWidth="0.5" />
        </g>

        {/* Web — bottom-right corner */}
        <g stroke="#888" fill="none" opacity="0.35">
          <line x1="368" y1="229" x2="310" y2="229" strokeWidth="0.6" />
          <line x1="368" y1="229" x2="368" y2="298" strokeWidth="0.6" />
          <line x1="368" y1="229" x2="315" y2="298" strokeWidth="0.6" />
          <line x1="368" y1="229" x2="310" y2="270" strokeWidth="0.5" />
          <path d="M352 229 Q350 240 360 245 Q366 247 368 242" strokeWidth="0.5" />
          <path d="M332 229 Q328 248 342 262 Q355 272 365 268 Q368 265 368 258" strokeWidth="0.5" />
        </g>

        {/* Hanging thread across second shelf */}
        <g stroke="#888" fill="none" opacity="0.3">
          <path d="M72 139 Q150 155 200 148 Q260 140 368 139" strokeWidth="0.5" />
        </g>

        {/* ====== SPIDER with thread ====== */}

        {/* Thread */}
        <line x1="190" y1="46" x2="190" y2="96" stroke="#888" strokeWidth="0.7" opacity="0.6" />
        {/* Slight curve for realism */}
        <path d="M190 96 Q189 98 190 100" stroke="#888" strokeWidth="0.5" fill="none" opacity="0.5" />

        {/* Spider body */}
        <g transform="translate(190, 100)">
          {/* Abdomen */}
          <ellipse cx="0" cy="4" rx="5" ry="7" fill="#222" />
          {/* Pattern on abdomen */}
          <path d="M-2 1 L0 -1 L2 1" stroke="#444" strokeWidth="0.5" fill="none" />
          <path d="M-2 4 L0 2 L2 4" stroke="#444" strokeWidth="0.5" fill="none" />
          <circle cx="0" cy="6" r="1" fill="#333" />
          {/* Cephalothorax */}
          <ellipse cx="0" cy="-5" rx="4" ry="4" fill="#2a2a2a" />
          {/* Eyes — two rows */}
          <circle cx="-1.5" cy="-6.5" r="1" fill="#991b1b" opacity="0.9" />
          <circle cx="1.5" cy="-6.5" r="1" fill="#991b1b" opacity="0.9" />
          <circle cx="-2.8" cy="-5.5" r="0.5" fill="#991b1b" opacity="0.5" />
          <circle cx="2.8" cy="-5.5" r="0.5" fill="#991b1b" opacity="0.5" />
          {/* Chelicerae (fangs) */}
          <path d="M-1 -2 L-1.5 0" stroke="#444" strokeWidth="0.6" />
          <path d="M1 -2 L1.5 0" stroke="#444" strokeWidth="0.6" />
          {/* Legs — curved, segmented */}
          <g stroke="#222" strokeWidth="1" fill="none">
            {/* Left legs */}
            <path d="M-4,-6 Q-12,-14 -16,-10 Q-18,-8 -18,-4" />
            <path d="M-4,-4 Q-14,-8 -18,-3 Q-20,0 -19,5" />
            <path d="M-4,-2 Q-13,-1 -17,5 Q-19,10 -17,14" />
            <path d="M-3,2 Q-10,5 -14,12 Q-15,17 -13,20" />
            {/* Right legs */}
            <path d="M4,-6 Q12,-14 16,-10 Q18,-8 18,-4" />
            <path d="M4,-4 Q14,-8 18,-3 Q20,0 19,5" />
            <path d="M4,-2 Q13,-1 17,5 Q19,10 17,14" />
            <path d="M3,2 Q10,5 14,12 Q15,17 13,20" />
          </g>
          {/* Leg joints */}
          <g fill="#333">
            <circle cx="-16" cy="-10" r="0.8" />
            <circle cx="-18" cy="-3" r="0.8" />
            <circle cx="-17" cy="5" r="0.8" />
            <circle cx="-14" cy="12" r="0.8" />
            <circle cx="16" cy="-10" r="0.8" />
            <circle cx="18" cy="-3" r="0.8" />
            <circle cx="17" cy="5" r="0.8" />
            <circle cx="14" cy="12" r="0.8" />
          </g>
        </g>

        {/* ====== DUST MOTES ====== */}
        <g opacity="0.3">
          <circle cx="120" cy="80" r="1.2" fill="#999" />
          <circle cx="310" cy="65" r="0.8" fill="#bbb" />
          <circle cx="180" cy="100" r="1" fill="#aaa" />
          <circle cx="340" cy="165" r="0.8" fill="#999" />
          <circle cx="95" cy="200" r="1.2" fill="#bbb" />
          <circle cx="280" cy="260" r="0.8" fill="#aaa" />
          <circle cx="150" cy="170" r="0.6" fill="#999" />
          <circle cx="330" cy="250" r="0.7" fill="#bbb" />
        </g>

        {/* ====== 404 faintly etched in back panel ====== */}
        <text
          x="220"
          y="200"
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="42"
          fontWeight="900"
          fill="currentColor"
          className="text-ink"
          opacity="0.08"
        >
          404
        </text>
      </svg>

      {/* Text content */}
      <div className="mt-8 space-y-4">
        <h1 className="font-mono text-6xl font-black text-ink md:text-7xl">404</h1>
        <h2 className="text-2xl font-black text-ink md:text-3xl">Rak ini kosong...</h2>
        <p className="mx-auto max-w-md font-mono text-ink/60">
          Halaman yang kamu cari tidak ada di koleksi kami. Mungkin sudah
          dipindahkan, atau memang belum pernah ada.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="border-[3px] border-ink bg-sun px-6 py-3 font-bold text-on-fill shadow-brut transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          Kembali ke beranda
        </Link>
        <Link
          href="/katalog"
          className="border-[3px] border-ink bg-surface px-6 py-3 font-bold text-ink shadow-brut transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          Jelajahi katalog
        </Link>
      </div>
    </div>
  );
}
