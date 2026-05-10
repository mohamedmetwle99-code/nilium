import React, { useState, useCallback, useEffect } from 'react';
import type { Language } from './i18n';
import { useCart } from './store';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ShopSection } from './components/ShopSection';
import { StorySection } from './components/StorySection';
import { PackagingSection } from './components/PackagingSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { NewsletterSection } from './components/NewsletterSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CookieBanner } from './components/CookieBanner';
import { Success } from './pages/Success';
import { Cancel } from './pages/Cancel';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [cartOpen, setCartOpen] = useState(false);
  const [route, setRoute] = useState(window.location.pathname);
  const { items, addItem, removeItem, totalItems, subtotal, currency, setCurrency, formatPrice } = useCart();

  useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  if (route === '/success') {
    return <Success />;
  }

  if (route === '/cancel') {
    return <Cancel />;
  }

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
      <ShopSection lang={lang} formatPrice={formatPrice} onAddToCart={addItem} />
      <StorySection lang={lang} />
      <PackagingSection lang={lang} />
      <HowItWorksSection lang={lang} />
      <NewsletterSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />

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

      <CookieBanner lang={lang} />
    </div>
  );
};

export default App;
