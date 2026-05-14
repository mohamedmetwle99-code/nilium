import React, { useState, useCallback } from 'react';
import type { Language } from './i18n';
import type { CartItem } from './store';
import { useCart } from './store';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ShopSection } from './components/ShopSection';
import { ScentQuiz } from './components/ScentQuiz';
import { StorySection } from './components/StorySection';
import { PackagingSection } from './components/PackagingSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { NewsletterSection } from './components/NewsletterSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CookieBanner } from './components/CookieBanner';
import { LegalModal } from './components/LegalModal';
import type { LegalPage } from './components/LegalModal';
import { ToastProvider } from './components/Toast';
import { MiniCartPopup } from './components/MiniCartPopup';
import { ScrollToTop } from './components/ScrollToTop';
import { PromiseSection } from './components/PromiseSection';
import { translations, detectLanguage } from './i18n';

const AppInner: React.FC = () => {
  const [lang, setLang] = useState<Language>(detectLanguage);
  const [cartOpen, setCartOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<LegalPage | null>(null);
  const [miniCartOpen, setMiniCartOpen] = useState(false);
  const [miniCartProduct, setMiniCartProduct] = useState<{ name: string; image: string } | null>(null);
  const { items, addItem, removeItem, totalItems, subtotal, currency, setCurrency, formatPrice } = useCart();
  const t = translations[lang];

  const handleNavigate = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleAddToCart = useCallback((item: Omit<CartItem, 'qty'>) => {
    addItem(item);
    setMiniCartProduct({ name: item.name, image: item.image });
    setMiniCartOpen(true);
  }, [addItem]);

  return (
    <div className="min-h-screen">
      <Navigation
        lang={lang}
        onLangChange={setLang}
        currency={currency}
        onCurrencyChange={setCurrency}
        cartCount={totalItems}
        onCartOpen={() => setCartOpen(true)}
        onNavigate={handleNavigate}
      />

      <HeroSection lang={lang} />
      <ShopSection lang={lang} formatPrice={formatPrice} onAddToCart={handleAddToCart} />
      <ScentQuiz lang={lang} />
      <StorySection lang={lang} />
      <PackagingSection lang={lang} />
      <PromiseSection lang={lang} />
      <HowItWorksSection lang={lang} />
      <NewsletterSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} onLegalOpen={setLegalModal} />

      <CartDrawer
        lang={lang}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        onRemove={removeItem}
        subtotal={subtotal}
        formatPrice={formatPrice}
        currency={currency}
      />

      <CookieBanner lang={lang} onLegalOpen={setLegalModal} />

      <MiniCartPopup
        open={miniCartOpen}
        product={miniCartProduct}
        onClose={() => setMiniCartOpen(false)}
        onViewCart={() => { setMiniCartOpen(false); setCartOpen(true); }}
        lang={lang}
      />

      <ScrollToTop />

      {(['privacy', 'terms', 'cookies', 'shipping', 'impressum'] as LegalPage[]).map((page) => (
        <LegalModal
          key={page}
          open={legalModal === page}
          onClose={() => setLegalModal(null)}
          title={t[`legal.${page}.title`]}
        >
          <div className="space-y-4">
            <p className="text-sm font-body text-charcoal/70 leading-relaxed">
              {t['legal.placeholder']}
            </p>
            <p className="text-xs font-body text-charcoal/40 italic">
              {t['legal.placeholder.note']}
            </p>
            <p className="text-[11px] font-accent tracking-wider text-charcoal/30 uppercase pt-2 border-t border-cream-dark">
              {t['legal.lastUpdated']}
            </p>
          </div>
        </LegalModal>
      ))}
    </div>
  );
};

const App: React.FC = () => (
  <ToastProvider>
    <AppInner />
  </ToastProvider>
);

export default App;
