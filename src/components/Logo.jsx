export default function Logo({ size = 40, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`block ${className}`}
    >
      {/* Background tile: tetap hitam di mode terang maupun mode gelap */}
      <rect width="44" height="44" fill="#111111" />

      {/* Book shape - open book silhouette */}
      <path
        d="M22 12 C22 12 14 10 8 13 L8 33 C14 30 22 32 22 32 C22 32 30 30 36 33 L36 13 C30 10 22 12 22 12Z"
        fill="none"
        stroke="var(--color-sun, #ffd23f)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Center spine */}
      <line x1="22" y1="12" x2="22" y2="32" stroke="var(--color-sun, #ffd23f)" strokeWidth="2" />

      {/* Page lines left */}
      <line x1="12" y1="17" x2="19" y2="18" stroke="#fff4d6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="21" x2="19" y2="22" stroke="#fff4d6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="25" x2="19" y2="26" stroke="#fff4d6" strokeWidth="1.5" strokeLinecap="round" />

      {/* Page lines right */}
      <line x1="25" y1="18" x2="32" y2="17" stroke="#fff4d6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="25" y1="22" x2="32" y2="21" stroke="#fff4d6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="25" y1="26" x2="32" y2="25" stroke="#fff4d6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
