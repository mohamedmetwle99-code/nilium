import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, Lock, CreditCard } from 'lucide-react';
import type { Language } from '../i18n';
import type { CartItem, Currency } from '../store';
import { translations } from '../i18n';
import { useToast } from './Toast';

interface Props {
  lang: Language;
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string, variant: string) => void;
  subtotal: number;
  formatPrice: (n: number) => string;
  currency: Currency;
}

const THRESHOLD = 100;

export const CartDrawer: React.FC<Props> = ({ lang, open, onClose, items, onRemove, subtotal, formatPrice, currency }) => {
  const t = translations[lang];
  const { showToast } = useToast();
  const [checkingOut, setCheckingOut] = useState(false);
  const remaining = Math.max(0, THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / THRESHOLD) * 100);

  const handleCheckout = async () => {
    setCheckingOut(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(i => ({
            name: i.name,
            price: i.price,
            quantity: i.qty,
            currency: (currency || 'CHF').toLowerCase()
          }))
        })
      });
      const text = await response.text();
      let data: any;
      try {
        data = JSON.parse(text);
      } catch {
        alert('Checkout error: server returned an unexpected response. Please try again.');
        return;
      }
      if (data.url) window.location.href = data.url;
      else showToast(data.error || 'Checkout failed. Please try again.');
    } catch(e) {
      showToast('Checkout error. Please try again.');
    } finally {
      setCheckingOut(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-ivory shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-cream-dark">
              <h2 className="font-display text-xl text-charcoal">{t['cart.title']}</h2>
              <button onClick={onClose} className="text-charcoal/50 hover:text-charcoal transition-colors">
                <X size={20} />
              </button>
            </div>

            {items.length > 0 && (
              <div className="px-6 py-3 border-b border-cream-dark bg-cream/40">
                {remaining === 0 ? (
                  <p className="text-[10px] font-accent tracking-[0.15em] uppercase text-solar text-center">
                    {t['cart.shipping.unlocked']}
                  </p>
                ) : (
                  <p className="text-[10px] font-accent tracking-[0.1em] text-charcoal/50 text-center mb-2">
                    {t['cart.shipping.add']} <span className="text-charcoal/70">{formatPrice(remaining)}</span> {t['cart.shipping.more']}
                  </p>
                )}
                <div className="h-[2px] w-full bg-cream-dark overflow-hidden rounded-full">
                  <div
                    className="h-full bg-solar transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <img
                    src="/icons/icon-lotus.png"
                    alt=""
                    className="w-14 h-14 mx-auto mb-5 opacity-25"
                  />
                  <h3 className="font-display text-lg text-charcoal/60 mb-2">
                    {t['cart.empty.title']}
                  </h3>
                  <p className="text-xs font-body text-charcoal/35 leading-relaxed mb-6 max-w-[220px]">
                    {t['cart.empty.desc']}
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      setTimeout(() => {
                        document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' });
                      }, 350);
                    }}
                    className="bg-nile-dark text-cream text-[10px] tracking-[0.2em] uppercase font-accent px-6 py-3 hover:bg-nile-dark/80 transition-colors"
                  >
                    {t['cart.empty.cta']}
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                      <div className="w-20 h-20 bg-cream overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display text-sm text-charcoal">{item.name}</h4>
                        <p className="text-[10px] text-charcoal/40 font-accent tracking-wider uppercase mt-0.5">
                          {item.variant}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-charcoal/50 font-accent">×{item.qty}</span>
                          <span className="text-sm font-accent text-charcoal">{formatPrice(item.price * item.qty)}</span>
                        </div>
                        <button
                          onClick={() => onRemove(item.id, item.variant)}
                          className="text-[10px] text-charcoal/30 hover:text-red-500 font-accent tracking-wider uppercase mt-1 transition-colors"
                        >
                          {t['cart.remove']}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-cream-dark space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-accent text-sm text-charcoal/60">{t['cart.subtotal']}</span>
                  <span className="font-display text-xl text-charcoal">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-center gap-4 pt-4 pb-2 text-nile-dark/40 text-[10px] font-accent tracking-wider uppercase">
                  <div className="flex items-center gap-1.5">
                    <Lock size={11} />
                    <span>{t['cart.trust.secure']}</span>
                  </div>
                  <span className="text-nile-dark/15">|</span>
                  <div className="flex items-center gap-1.5">
                    <CreditCard size={11} />
                    <span>{t['cart.trust.stripe']}</span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={checkingOut}
                  className="w-full bg-nilium-gold text-nilium-navy py-4 font-accent font-bold text-xs tracking-[0.2em] uppercase hover:bg-nilium-gold/90 transition-colors rounded-none disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {checkingOut && <Loader2 size={14} className="inline animate-spin mr-2" />}
                  {checkingOut ? t['cart.processing'] : t['cart.checkout']}
                </button>
                <p className="text-center text-[10px] text-charcoal/30 font-body">
                  PostFinance · TWINT · Visa · Mastercard · PayPal
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
