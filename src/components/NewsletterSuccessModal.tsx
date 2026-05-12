import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props {
  open: boolean;
  onClose: () => void;
  lang: Language;
}

export const NewsletterSuccessModal: React.FC<Props> = ({ open, onClose, lang }) => {
  const t = translations[lang];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-nile-dark/70 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="bg-cream max-w-md w-full mx-5 px-8 py-12 md:px-12 md:py-14 relative border-t-2 border-solar/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dismiss X */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-5 text-nile-dark/25 hover:text-nile-dark/60 transition-colors text-xl leading-none"
            >
              ×
            </button>

            {/* Lotus icon */}
            <img
              src="/icons/icon-lotus.png"
              alt=""
              className="w-12 h-12 mx-auto mb-6 opacity-80"
            />

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-display text-nile-dark text-center mb-3 tracking-wide">
              {t['newsletter.modal.title']}
            </h2>

            {/* Gold italic subheading */}
            <p className="text-solar font-display italic text-sm md:text-base text-center mb-6">
              {t['newsletter.modal.subtitle']}
            </p>

            {/* Body */}
            <p className="text-nile-dark/60 font-body text-sm md:text-base text-center leading-relaxed mb-8">
              {t['newsletter.modal.body']}
            </p>

            {/* Close CTA */}
            <button
              onClick={onClose}
              className="bg-solar text-nile-dark text-xs tracking-widest uppercase font-accent font-medium py-3 px-10 mx-auto block hover:bg-solar-light transition-colors"
            >
              {t['newsletter.modal.close']}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
