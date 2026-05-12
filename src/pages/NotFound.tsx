import React from 'react';
import { motion } from 'framer-motion';
import type { Language } from '../i18n';
import { translations } from '../i18n';

export const NotFound: React.FC = () => {
  const lang = (localStorage.getItem('lang') === 'de' ? 'de' : 'en') as Language;
  const t = translations[lang];

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-nile-dark text-cream">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'url(/images/success-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-nile-dark/80 via-nile-dark/70 to-nile-dark/85" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-2xl mx-auto px-6 py-20 text-center"
      >
        <motion.img
          src="/icons/icon-lotus.png"
          alt=""
          className="w-16 h-16 mx-auto mb-8 opacity-60"
          loading="eager"
          decoding="async"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-6xl md:text-8xl font-display text-cream tracking-wider mb-4"
        >
          {t['notfound.title']}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-solar font-display italic text-lg md:text-xl mb-6"
        >
          {t['notfound.subtitle']}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-cream/60 text-sm md:text-base font-body max-w-md mx-auto mb-10"
        >
          {t['notfound.body']}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => { window.location.href = '/'; }}
            className="bg-solar text-nile-dark px-8 py-3 text-xs tracking-[0.2em] uppercase font-accent hover:bg-solar-light transition-colors"
          >
            {t['notfound.home']}
          </button>
          <button
            onClick={() => { window.location.href = '/#shop'; }}
            className="border border-cream/40 text-cream px-8 py-3 text-xs tracking-[0.2em] uppercase font-accent hover:bg-cream/10 transition-colors"
          >
            {t['notfound.shop']}
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
};
