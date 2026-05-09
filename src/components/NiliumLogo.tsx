import React from 'react';

/* ============================================================
   LOTUS MARK — 8-petal symmetrical lotus (line art)
   Matches the official NILIUM brand identity.
   ============================================================ */
export const LotusMark: React.FC<{ className?: string; size?: number; strokeWidth?: number }> = ({
  className = '',
  size = 80,
  strokeWidth = 1.6,
}) => (
  <svg
    width={size}
    height={(size * 60) / 100}
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none">
      {/* Center tall petal */}
      <path d="M50 58 C 44 44, 44 24, 50 6 C 56 24, 56 44, 50 58 Z" />
      {/* Inner-left petal */}
      <path d="M50 58 C 38 50, 30 32, 32 14 C 42 26, 48 40, 50 58 Z" />
      {/* Inner-right petal */}
      <path d="M50 58 C 62 50, 70 32, 68 14 C 58 26, 52 40, 50 58 Z" />
      {/* Mid-left petal */}
      <path d="M50 58 C 32 56, 18 44, 14 28 C 28 36, 42 46, 50 58 Z" />
      {/* Mid-right petal */}
      <path d="M50 58 C 68 56, 82 44, 86 28 C 72 36, 58 46, 50 58 Z" />
      {/* Outer-left petal */}
      <path d="M50 58 C 28 60, 10 56, 2 46 C 18 50, 36 54, 50 58 Z" />
      {/* Outer-right petal */}
      <path d="M50 58 C 72 60, 90 56, 98 46 C 82 50, 64 54, 50 58 Z" />
    </g>
  </svg>
);

/* ============================================================
   NILIUM WORDMARK — serif with stylized curved N tail
   ============================================================ */
export const NiliumWordmark: React.FC<{ className?: string; height?: number }> = ({
  className = '',
  height = 48,
}) => (
  <svg
    height={height}
    viewBox="0 0 280 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'block' }}
  >
    {/* The curved N tail descender */}
    <path
      d="M 22 56 C 18 58, 14 56, 14 50 C 14 44, 18 42, 24 44"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <text
      x="140"
      y="50"
      textAnchor="middle"
      fontFamily="'Playfair Display', Georgia, serif"
      fontSize="48"
      fontWeight="500"
      fill="currentColor"
      letterSpacing="6"
    >
      NILIUM
    </text>
  </svg>
);

/* ============================================================
   FULL PRIMARY LOGO — Lotus + Wordmark + Tagline + Est
   ============================================================ */
export const NiliumPrimaryLogo: React.FC<{
  className?: string;
  size?: number;
  showTagline?: boolean;
  showEst?: boolean;
  taglineClassName?: string;
}> = ({ className = '', size = 200, showTagline = true, showEst = true, taglineClassName = '' }) => (
  <div className={`flex flex-col items-center ${className}`} style={{ width: size }}>
    <LotusMark size={size * 0.42} className="mb-4" />
    <div className="w-full text-center" style={{ fontSize: size * 0.18 }}>
      <span
        className="font-display font-medium tracking-[0.18em]"
        style={{ fontSize: size * 0.18, lineHeight: 1, color: 'currentColor' }}
      >
        NILIUM
      </span>
    </div>
    <div className="w-3/5 h-px bg-solar mt-3" />
    {showTagline && (
      <p
        className={`mt-3 font-accent tracking-[0.28em] ${taglineClassName}`}
        style={{ fontSize: size * 0.045 }}
      >
        SWISS PURITY <span className="opacity-60">•</span> NILE SOUL
      </p>
    )}
    {showEst && (
      <p
        className="mt-2 font-accent tracking-[0.3em] opacity-70"
        style={{ fontSize: size * 0.04 }}
      >
        EST. 2026
      </p>
    )}
  </div>
);

/* ============================================================
   SOLAR SEAL — Monogram with lotus + interlocked N letterform
   Used as favicon, packaging seal, footer logo.
   ============================================================ */
export const SolarSeal: React.FC<{ className?: string; size?: number; variant?: 'navy' | 'transparent' }> = ({
  className = '',
  size = 120,
  variant = 'navy',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Navy filled circle */}
    {variant === 'navy' && <circle cx="100" cy="100" r="96" fill="#002344" />}
    {variant === 'transparent' && (
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    )}

    {/* Lotus petals — gold line art */}
    <g
      stroke={variant === 'navy' ? '#D4AF37' : 'currentColor'}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* center tall */}
      <path d="M100 158 C 92 130, 92 90, 100 50 C 108 90, 108 130, 100 158 Z" />
      {/* inner left */}
      <path d="M100 158 C 80 145, 65 110, 70 70 C 86 95, 96 125, 100 158 Z" />
      {/* inner right */}
      <path d="M100 158 C 120 145, 135 110, 130 70 C 114 95, 104 125, 100 158 Z" />
      {/* mid left */}
      <path d="M100 158 C 70 158, 45 140, 38 110 C 60 122, 84 140, 100 158 Z" />
      {/* mid right */}
      <path d="M100 158 C 130 158, 155 140, 162 110 C 140 122, 116 140, 100 158 Z" />
      {/* outer left */}
      <path d="M100 158 C 65 162, 32 152, 18 140 C 42 148, 72 154, 100 158 Z" />
      {/* outer right */}
      <path d="M100 158 C 135 162, 168 152, 182 140 C 158 148, 128 154, 100 158 Z" />
    </g>

    {/* Stylized N letterform overlapping lotus base */}
    <g fill={variant === 'navy' ? '#D4AF37' : 'currentColor'}>
      <path d="M75 165 L75 100 Q75 96 79 96 L83 96 Q86 96 88 99 L120 145 L120 100 Q120 96 124 96 L128 96 Q131 96 131 100 L131 165 Q131 169 127 169 L123 169 Q120 169 118 166 L86 120 L86 165 Q86 169 82 169 L79 169 Q75 169 75 165 Z" opacity="0.95" />
      {/* Stylized curl tail */}
      <path
        d="M75 165 C 70 172, 60 173, 55 165 C 50 158, 56 152, 64 154"
        stroke={variant === 'navy' ? '#D4AF37' : 'currentColor'}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  </svg>
);
