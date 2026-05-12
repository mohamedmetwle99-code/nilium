import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Language } from '../i18n';
import { translations } from '../i18n';

export const Success: React.FC = () => {
  const lang = (localStorage.getItem('lang') === 'de' ? 'de' : 'en') as Language;
  const t = translations[lang];

  const sessionId = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('session_id') || null;
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/images/success-bg.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-nilium-navy/40 via-nilium-navy/55 to-nilium-navy/85" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 max-w-2xl mx-auto px-6 py-20 text-center"
      >
        {/* Lotus icon with pulse */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-8"
        >
          <img src="/icons/icon-lotus.png" className="w-16 h-16 mx-auto opacity-90" alt="NILIUM" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display font-bold text-cream mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 48px)' }}
        >
          {t['success.title']}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display italic mb-8"
          style={{ fontSize: '22px', color: '#B8952A' }}
        >
          {t['success.subtitle']}
        </motion.p>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4 max-w-xl mx-auto mb-8"
        >
          <p className="font-body text-cream/95 leading-[1.8]" style={{ fontSize: '16px' }}>
            {t['success.paragraph1']}
          </p>
          <p className="font-body text-cream/95 leading-[1.8]" style={{ fontSize: '16px' }}>
            {t['success.paragraph2']}
          </p>
          <p className="font-body italic" style={{ fontSize: '14px', color: 'rgba(184,149,42,0.8)' }}>
            {t['success.paragraph3']}
          </p>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
          className="w-24 h-px mx-auto mb-8 origin-center"
          style={{ backgroundColor: 'rgba(184,149,42,0.4)' }}
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/"
            className="bg-nilium-gold text-nilium-navy text-[11px] tracking-[0.25em] uppercase font-accent font-bold px-10 py-4 hover:bg-nilium-gold/90 transition-all duration-300"
          >
            {t['success.continueExploring']}
          </a>
          <a
            href="/#shop"
            className="border border-nilium-gold/60 text-nilium-gold text-[11px] tracking-[0.25em] uppercase font-accent px-10 py-4 hover:bg-nilium-gold/10 transition-all duration-300"
          >
            {t['success.viewCollections']}
          </a>
        </motion.div>

        {/* Order ID — only when present */}
        {sessionId && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 font-accent text-[10px] tracking-[0.2em] uppercase"
            style={{ color: 'rgba(250,247,240,0.3)' }}
          >
            {t['success.orderId']} {sessionId}
          </motion.p>
        )}
      </motion.div>
    </main>
  );
};
