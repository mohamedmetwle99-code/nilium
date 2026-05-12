import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';
import type { Language } from '../i18n';
import { translations } from '../i18n';
import type { LegalPage } from './LegalModal';

interface Props {
  lang: Language;
  onLegalOpen: (page: LegalPage) => void;
}

export const CookieBanner: React.FC<Props> = ({ lang, onLegalOpen }) => {
  const t = translations[lang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-nile-dark/95 backdrop-blur-md border-t border-solar/10 px-6 py-5"
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">
            <Shield size={20} className="text-solar flex-shrink-0 hidden md:block" />
            <p className="text-cream/70 text-xs font-body leading-relaxed flex-1 text-center md:text-left">
              {t['cookie.text']}{' '}
              <button
                onClick={() => onLegalOpen('privacy')}
                className="underline underline-offset-2 hover:text-cream transition-colors"
              >
                {t['cookie.readPolicy']}
              </button>
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setVisible(false)}
                className="text-cream/40 text-xs font-accent tracking-wider hover:text-cream/70 transition-colors"
              >
                {t['cookie.decline']}
              </button>
              <button
                onClick={() => setVisible(false)}
                className="bg-solar text-nile-dark text-xs font-accent font-medium tracking-wider px-6 py-2.5 hover:bg-solar-light transition-colors"
              >
                {t['cookie.accept']}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
