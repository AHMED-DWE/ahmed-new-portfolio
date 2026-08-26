export default function Logo({ className = "" }) {
  return (
    <div className={`brand-logo ${className}`} aria-label="Ahmed Kashif logo">
      <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="webLogoGradient" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#55dfff" />
            <stop offset="0.48" stopColor="#3b69d4" />
            <stop offset="1" stopColor="#7658ff" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="29" fill="url(#webLogoGradient)" />
        <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,.24)" />
        <text
          x="32"
          y="39"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="22"
          fontWeight="700"
          fill="white"
        >
          AK
        </text>
      </svg>
    </div>
  );
}
