import { useId } from "react";

/* Hand-painted wordmark: bold brush lettering on top of a blue brush stroke.
   Everything is inline SVG, so it needs no font or image file and stays sharp at any size.
   The letters use the page text color (white in dark theme, near black in light theme). */
const letters = [
  "M13 63 L32 17 L51 63 M21 47 L43 45", // A
  "M61 17 L59 63 M92 16 L90 63 M60 41 L91 38", // H
  "M105 63 L107 17 L128 47 L149 15 L151 63", // M
  "M165 18 L163 63 M166 19 L192 16 M165 40 L188 39 M163 63 L194 60", // E
  "M206 18 L204 63 M207 19 C237 12 243 56 205 63", // D
];

export default function Logo({ className = "" }) {
  const uid = useId().replace(/:/g, "");
  const brushGrad = `lg-brush-${uid}`;
  const brushRough = `lg-rough-${uid}`;
  const inkRough = `lg-ink-${uid}`;

  /* The shop demo page always has a dark background, whatever theme the portfolio uses. */
  const onDarkPage = typeof window !== "undefined" && window.location.pathname.replace(/\/+$/, "") === "/ecommerce";

  return (
    <div
      className={`brand-logo ${className}`}
      role="img"
      aria-label="Ahmed Kashif logo"
      style={{ width: "auto", height: 40 }}
    >
      <svg
        viewBox="0 0 252 80"
        aria-hidden="true"
        focusable="false"
        style={{ height: "100%", width: "auto", overflow: "visible", transform: "none", "--ink": onDarkPage ? "#f7f9ff" : "var(--text, #f7f9ff)" }}
      >
        <defs>
          <linearGradient id={brushGrad} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2457e6" />
            <stop offset="0.55" stopColor="#3b72ff" />
            <stop offset="1" stopColor="#5b8cff" />
          </linearGradient>
          <filter id={brushRough} x="-5%" y="-30%" width="110%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.42" numOctaves="2" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="9" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id={inkRough} x="-5%" y="-10%" width="110%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.07 0.5" numOctaves="2" seed="3" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        <style>{`
          .lg-stroke{transform-box:fill-box;transform-origin:left center;animation:lgSweep .9s cubic-bezier(.22,1,.36,1) both}
          .lg-letter{stroke-dasharray:1;stroke-dashoffset:0;animation:lgDraw .55s ease-out both;animation-delay:calc(.35s + var(--k) * .12s)}
          @keyframes lgSweep{from{transform:scaleX(0);opacity:0}}
          @keyframes lgDraw{from{stroke-dashoffset:1}}
          @media (prefers-reduced-motion:reduce){.lg-stroke,.lg-letter{animation:none}}
        `}</style>

        {/* Blue brush stroke behind the name */}
        <g filter={`url(#${brushRough})`}>
          <path
            className="lg-stroke"
            fill={`url(#${brushGrad})`}
            d="M2 58 C30 50 64 44 100 36 C146 26 196 17 248 10 L252 17 C247 21 241 22 234 24 C241 26 248 27 251 31 C212 40 166 52 126 60 C90 68 50 74 16 74 C9 74 3 68 2 58 Z"
          />
        </g>

        {/* Bold brush letters */}
        <g filter={`url(#${inkRough})`} fill="none" stroke="var(--ink)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
          {letters.map((d, i) => (
            <path key={i} className="lg-letter" style={{ "--k": i }} pathLength="1" d={d} />
          ))}
        </g>
      </svg>
    </div>
  );
}
