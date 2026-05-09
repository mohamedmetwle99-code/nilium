import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

const baseProps = (size: number, sw: number, className: string) => ({
  width: size,
  height: size,
  viewBox: '0 0 64 64',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: sw,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
  xmlns: 'http://www.w3.org/2000/svg',
});

/* Lotus Flower (Nile) — simple 5-petal */
export const LotusIcon: React.FC<IconProps> = ({ className = '', size = 40, strokeWidth = 1.4 }) => (
  <svg {...baseProps(size, strokeWidth, className)}>
    <path d="M32 50 C 28 40, 28 26, 32 14 C 36 26, 36 40, 32 50 Z" />
    <path d="M32 50 C 22 46, 16 32, 18 22 C 26 28, 30 38, 32 50 Z" />
    <path d="M32 50 C 42 46, 48 32, 46 22 C 38 28, 34 38, 32 50 Z" />
    <path d="M32 50 C 18 50, 8 42, 6 32 C 16 38, 26 44, 32 50 Z" />
    <path d="M32 50 C 46 50, 56 42, 58 32 C 48 38, 38 44, 32 50 Z" />
  </svg>
);

/* Mountain Peaks (Swiss Alps) */
export const MountainIcon: React.FC<IconProps> = ({ className = '', size = 40, strokeWidth = 1.4 }) => (
  <svg {...baseProps(size, strokeWidth, className)}>
    <path d="M6 50 L 22 26 L 32 38 L 44 18 L 58 50 Z" />
    <path d="M22 26 L 28 32" />
    <path d="M44 18 L 38 26" />
    {/* snow caps */}
    <path d="M19 30 L 22 26 L 25 30" strokeOpacity="0.6" />
    <path d="M40 24 L 44 18 L 48 24" strokeOpacity="0.6" />
  </svg>
);

/* Solar Sunburst Seal */
export const SunburstIcon: React.FC<IconProps> = ({ className = '', size = 40, strokeWidth = 1.4 }) => (
  <svg {...baseProps(size, strokeWidth, className)}>
    <circle cx="32" cy="32" r="22" />
    <circle cx="32" cy="32" r="5" fill="currentColor" />
    {Array.from({ length: 16 }).map((_, i) => {
      const a = (i * Math.PI * 2) / 16;
      const x1 = 32 + Math.cos(a) * 9;
      const y1 = 32 + Math.sin(a) * 9;
      const x2 = 32 + Math.cos(a) * 18;
      const y2 = 32 + Math.sin(a) * 18;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
    })}
  </svg>
);

/* Soy Bean (100% Natural) */
export const SoyBeanIcon: React.FC<IconProps> = ({ className = '', size = 40, strokeWidth = 1.4 }) => (
  <svg {...baseProps(size, strokeWidth, className)}>
    {/* pod */}
    <path d="M14 38 C 10 28, 18 16, 30 14 C 44 12, 54 22, 52 34 C 50 46, 38 52, 28 50 C 20 49, 16 44, 14 38 Z" />
    {/* beans inside */}
    <circle cx="24" cy="30" r="4" />
    <circle cx="34" cy="28" r="4" />
    <circle cx="42" cy="36" r="4" />
    <circle cx="28" cy="42" r="3.5" />
    {/* leaf stem */}
    <path d="M52 18 L 56 12" />
    <path d="M56 12 C 54 14, 52 14, 51 12 C 53 11, 55 11, 56 12 Z" />
  </svg>
);

/* Handmade Craftsmanship */
export const HandmadeIcon: React.FC<IconProps> = ({ className = '', size = 40, strokeWidth = 1.4 }) => (
  <svg {...baseProps(size, strokeWidth, className)}>
    {/* hand */}
    <path d="M10 42 C 12 36, 16 32, 22 32 L 36 32 C 38 32, 40 30, 40 28 L 40 18 C 40 16, 41 14, 43 14 C 45 14, 46 16, 46 18 L 46 26" />
    <path d="M46 26 L 46 22 C 46 20, 47 18, 49 18 C 51 18, 52 20, 52 22 L 52 32 C 52 42, 44 50, 34 50 L 22 50 C 16 50, 12 48, 10 42 Z" />
    {/* candle pour drop */}
    <path d="M24 14 C 23 17, 22 19, 24 22 C 26 19, 25 17, 24 14 Z" fill="currentColor" />
  </svg>
);

/* Eco-Friendly */
export const EcoIcon: React.FC<IconProps> = ({ className = '', size = 40, strokeWidth = 1.4 }) => (
  <svg {...baseProps(size, strokeWidth, className)}>
    {/* leaf */}
    <path d="M22 14 C 32 14, 44 22, 44 34 C 44 42, 38 48, 30 48 C 22 48, 18 42, 18 34 C 18 24, 22 18, 22 14 Z" />
    <path d="M22 14 C 24 22, 28 32, 32 42" />
    {/* recycle arrows around */}
    <path d="M14 50 L 10 46 L 14 42" strokeWidth={strokeWidth * 0.9} />
    <path d="M50 50 L 54 46 L 50 42" strokeWidth={strokeWidth * 0.9} />
  </svg>
);

/* Wardrobe / Closet (for sachets) */
export const WardrobeIcon: React.FC<IconProps> = ({ className = '', size = 40, strokeWidth = 1.4 }) => (
  <svg {...baseProps(size, strokeWidth, className)}>
    <rect x="12" y="10" width="40" height="44" rx="2" />
    <line x1="32" y1="10" x2="32" y2="54" />
    <circle cx="28" cy="32" r="1.2" fill="currentColor" />
    <circle cx="36" cy="32" r="1.2" fill="currentColor" />
    {/* legs */}
    <line x1="16" y1="54" x2="16" y2="58" />
    <line x1="48" y1="54" x2="48" y2="58" />
    {/* top molding */}
    <line x1="10" y1="14" x2="54" y2="14" strokeOpacity="0.5" />
  </svg>
);

/* Gift Box */
export const GiftBoxIcon: React.FC<IconProps> = ({ className = '', size = 40, strokeWidth = 1.4 }) => (
  <svg {...baseProps(size, strokeWidth, className)}>
    {/* box body */}
    <rect x="10" y="24" width="44" height="28" rx="1" />
    {/* lid */}
    <rect x="8" y="20" width="48" height="8" rx="1" />
    {/* ribbon vertical */}
    <line x1="32" y1="20" x2="32" y2="52" />
    {/* bow */}
    <path d="M32 20 C 28 14, 22 14, 24 18 C 25 20, 28 21, 32 20" />
    <path d="M32 20 C 36 14, 42 14, 40 18 C 39 20, 36 21, 32 20" />
    <circle cx="32" cy="20" r="1.5" fill="currentColor" />
  </svg>
);

/* Clock — 40h burn time */
export const ClockIcon: React.FC<IconProps> = ({ className = '', size = 40, strokeWidth = 1.4 }) => (
  <svg {...baseProps(size, strokeWidth, className)}>
    <circle cx="32" cy="32" r="22" />
    {/* tick marks */}
    {[0, 3, 6, 9].map((h) => {
      const a = (h / 12) * Math.PI * 2 - Math.PI / 2;
      const x1 = 32 + Math.cos(a) * 19;
      const y1 = 32 + Math.sin(a) * 19;
      const x2 = 32 + Math.cos(a) * 21.5;
      const y2 = 32 + Math.sin(a) * 21.5;
      return <line key={h} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={strokeWidth * 1.2} />;
    })}
    {Array.from({ length: 12 }).map((_, i) => {
      if (i % 3 === 0) return null;
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      const x1 = 32 + Math.cos(a) * 20;
      const y1 = 32 + Math.sin(a) * 20;
      const x2 = 32 + Math.cos(a) * 21.5;
      const y2 = 32 + Math.sin(a) * 21.5;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity="0.5" />;
    })}
    {/* hands */}
    <line x1="32" y1="32" x2="32" y2="20" strokeWidth={strokeWidth * 1.3} />
    <line x1="32" y1="32" x2="42" y2="32" strokeWidth={strokeWidth * 1.3} />
    <circle cx="32" cy="32" r="1.5" fill="currentColor" />
  </svg>
);

/* Flame — for candle ritual */
export const FlameIcon: React.FC<IconProps> = ({ className = '', size = 40, strokeWidth = 1.4 }) => (
  <svg {...baseProps(size, strokeWidth, className)}>
    <path d="M32 8 C 28 18, 18 22, 18 36 C 18 46, 24 54, 32 54 C 40 54, 46 46, 46 36 C 46 28, 40 24, 40 18 C 38 22, 36 22, 32 8 Z" />
    <path d="M32 30 C 30 34, 26 38, 26 42 C 26 46, 28 50, 32 50 C 36 50, 38 46, 38 42 C 38 38, 34 36, 32 30 Z" strokeOpacity="0.6" />
  </svg>
);

/* Wax seal stamp icon */
export const SealIcon: React.FC<IconProps> = ({ className = '', size = 40, strokeWidth = 1.4 }) => (
  <svg {...baseProps(size, strokeWidth, className)}>
    <circle cx="32" cy="34" r="18" />
    <circle cx="32" cy="34" r="13" strokeOpacity="0.5" />
    {/* wavy edge */}
    {Array.from({ length: 16 }).map((_, i) => {
      const a = (i / 16) * Math.PI * 2;
      const r1 = 18;
      const r2 = 20;
      const x1 = 32 + Math.cos(a) * r1;
      const y1 = 34 + Math.sin(a) * r1;
      const x2 = 32 + Math.cos(a) * r2;
      const y2 = 34 + Math.sin(a) * r2;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity="0.6" />;
    })}
    {/* center N */}
    <text x="32" y="40" textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="500" fill="currentColor" stroke="none">N</text>
  </svg>
);

/* Papyrus card icon */
export const PapyrusIcon: React.FC<IconProps> = ({ className = '', size = 40, strokeWidth = 1.4 }) => (
  <svg {...baseProps(size, strokeWidth, className)}>
    <path d="M14 12 L 50 12 L 50 52 L 14 52 Z" />
    <line x1="20" y1="22" x2="44" y2="22" strokeOpacity="0.5" />
    <line x1="20" y1="28" x2="44" y2="28" strokeOpacity="0.5" />
    <line x1="20" y1="34" x2="38" y2="34" strokeOpacity="0.5" />
    {/* wax seal dot */}
    <circle cx="32" cy="44" r="3" />
  </svg>
);
