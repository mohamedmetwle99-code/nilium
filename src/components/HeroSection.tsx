import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Leaf, Truck, Award } from 'lucide-react';
import { LotusMark } from './NiliumLogo';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props { lang: Language; }

export const HeroSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const particles = React.useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      w: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      dur: Math.random() * 4 + 5,
    })), []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-nile-dark/50 via-nile/35 to-nile-dark/60" />
      </div>

      {mounted && particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-solar/20 animate-float pointer-events-none"
          style={{ width: p.w, height: p.w, left: `${p.left}%`, top: `${p.top}%`, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        {/* Lotus Mark */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
          className="flex justify-center mb-7 text-solar"
        >
          <LotusMark size={140} strokeWidth={1.4} />
        </motion.div>

        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-solar-light/70 text-[10px] md:text-xs tracking-[0.5em] uppercase font-accent font-light mb-5"
        >
          {t['hero.tagline']}
        </motion.p>

        {/* Main wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-7xl md:text-9xl lg:text-[8rem] font-display font-medium text-cream tracking-[0.18em] mb-3 leading-none"
        >
          <span className="gold-shimmer">{t['hero.title']}</span>
        </motion.h1>

        {/* Gold underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="h-[1.5px] bg-solar mx-auto mb-4 w-40 origin-center"
        />

        {/* EST */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="text-cream/40 text-[10px] tracking-[0.5em] uppercase font-accent mb-7"
        >
          {t['hero.est']}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="text-solar-light text-xs md:text-sm tracking-[0.3em] uppercase font-accent font-extralight mb-7"
        >
          {t['hero.subtitle']}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="text-cream/55 text-sm md:text-base font-body font-light max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t['hero.desc']}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#shop"
            className="bg-nilium-gold text-nilium-navy text-[11px] tracking-[0.25em] uppercase font-accent font-bold px-10 py-4 hover:bg-nilium-gold/90 transition-all duration-300"
          >
            {t['hero.cta']}
          </a>
          <a
            href="#story"
            className="border border-nilium-gold/60 text-nilium-gold text-[11px] tracking-[0.25em] uppercase font-accent px-10 py-4 hover:bg-nilium-gold/10 transition-all duration-300"
          >
            {t['hero.ctaSecondary']}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 text-cream/50 text-[10px] tracking-[0.18em] uppercase font-accent"
        >
          <div className="flex items-center gap-2">
            <Leaf size={12} className="text-solar/70" />
            <span>{t['hero.trust.natural']}</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck size={12} className="text-solar/70" />
            <span>{t['hero.trust.shipping']}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={12} className="text-solar/70" />
            <span>{t['hero.trust.swiss']}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/25"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase font-accent">{t['hero.scroll']}</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
};
