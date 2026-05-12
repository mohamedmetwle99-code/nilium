import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props {
  open: boolean;
  product: { name: string; image: string } | null;
  onClose: () => void;
  onViewCart: () => void;
  lang: Language;
}

export const MiniCartPopup: React.FC<Props> = ({ open, product, onClose, onViewCart, lang }) => {
  const t = translations[lang];

  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && product && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-20 right-4 left-4 sm:left-auto sm:max-w-sm z-[90] bg-cream border-t-2 border-solar px-5 py-4 shadow-2xl shadow-nile-dark/20"
        >
          {/* Dismiss X */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-2 right-2 text-nile-dark/30 hover:text-nile-dark/60 transition-colors text-lg leading-none"
          >
            ×
          </button>

          <div className="flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover flex-shrink-0"
              loading="lazy"
              decoding="async"
            />
            <div className="flex-1 ml-4">
              <p className="text-solar text-[10px] tracking-[0.2em] uppercase font-accent mb-1">
                {t['cart.popup.added']}
              </p>
              <p className="text-nile-dark text-sm font-display mb-2 pr-4">
                {product.name}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={onViewCart}
                  className="bg-nile-dark text-cream text-[10px] tracking-widest uppercase font-accent px-3 py-2 hover:bg-nile-dark/80 transition-colors"
                >
                  {t['cart.popup.view']}
                </button>
                <button
                  onClick={onClose}
                  className="text-nile-dark/60 hover:text-nile-dark text-[10px] tracking-widest uppercase font-accent px-3 py-2 transition-colors"
                >
                  {t['cart.popup.continue']}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
