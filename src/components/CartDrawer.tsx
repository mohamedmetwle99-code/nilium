import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import type { Language } from '../i18n';
import type { CartItem, Currency } from '../store';
import { translations } from '../i18n';

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

export const CartDrawer: React.FC<Props> = ({ lang, open, onClose, items, onRemove, subtotal, formatPrice }) => {
  const t = translations[lang];
  const [loading, setLoading] = useState(false);

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((item) => ({
            name: item.name,
            quantity: item.qty,
            price: currency === 'EUR'
              ? Number((item.price * 0.94).toFixed(2))
              : item.price,
            currency: currency.toLowerCase(),
            description: item.variant,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.error || 'Checkout failed');
      }

      const { id } = await response.json();
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error('Stripe failed to load. Please check your publishable key.');
      }

      const result = await stripe.redirectToCheckout({ sessionId: id });
      if (result.error) {
        throw result.error;
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-ivory shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-cream-dark">
              <h2 className="font-display text-xl text-charcoal">{t['cart.title']}</h2>
              <button onClick={onClose} className="text-charcoal/50 hover:text-charcoal transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-charcoal/30">
                  <ShoppingBag size={48} className="mb-4" />
                  <p className="font-accent text-sm">{t['cart.empty']}</p>
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
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-charcoal/50 font-accent">×{item.qty}</span>
                          </div>
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

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-cream-dark space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-accent text-sm text-charcoal/60">{t['cart.subtotal']}</span>
                  <span className="font-display text-xl text-charcoal">{formatPrice(subtotal)}</span>
                </div>
                <button 
                  onClick={handleCheckout} 
                  disabled={loading}
                  className="w-full bg-nile text-cream py-4 font-accent text-xs tracking-[0.2em] uppercase hover:bg-nile-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? t['cart.processing'] || 'Processing...' : t['cart.checkout']}
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
