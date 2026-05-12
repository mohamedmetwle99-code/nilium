import React from 'react';
import { motion } from 'framer-motion';
import type { Language } from '../i18n';
import { translations } from '../i18n';

export const Cancel: React.FC = () => {
  const lang = (localStorage.getItem('lang') === 'de' ? 'de' : 'en') as Language;
  const t = translations[lang];

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — same image, slightly darker overlay to signal pause */}
      <div className="absolute inset-0">
        <img src="/images/success-bg.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-nilium-navy/55 via-nilium-navy/65 to-nilium-navy/90" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-2xl mx-auto px-6 py-20 text-center"
      >
        {/* Lotus icon — dimmed to reflect the paused state */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-8"
        >
          <img
            src="/images/logo/monogram.png"
            alt="NILIUM"
            className="w-20 h-20 mx-auto opacity-50"
            width="80"
            height="80"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display font-bold text-cream mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 48px)' }}
        >
          {t['cancel.title']}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-body text-cream/80 leading-[1.8] max-w-xl mx-auto mb-8"
          style={{ fontSize: '16px' }}
        >
          {t['cancel.body']}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="w-24 h-px mx-auto mb-8 origin-center"
          style={{ backgroundColor: 'rgba(184,149,42,0.4)' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="/"
            className="bg-nilium-gold text-nilium-navy text-[11px] tracking-[0.25em] uppercase font-accent font-bold px-10 py-4 hover:bg-nilium-gold/90 transition-all duration-300"
          >
            {t['cancel.cta']}
          </a>
        </motion.div>
      </motion.div>
    </main>
  );
};
