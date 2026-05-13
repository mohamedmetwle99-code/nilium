import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { LegalModal } from './LegalModal';
import type { LegalPage } from './LegalModal';
import type { Language } from '../i18n';
import type { Currency } from '../store';

interface Props {
  title: { en: string; de: string };
  lastUpdated: { en: string; de: string };
  lang: Language;
  onLangChange: (lang: Language) => void;
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<Props> = ({
  title,
  lastUpdated,
  lang,
  onLangChange,
  children,
}) => {
  const [currency, setCurrency] = useState<Currency>('CHF');
  const [legalModal, setLegalModal] = useState<LegalPage | null>(null);

  useEffect(() => {
    let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');

    return () => {
      const tag = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
      if (tag) tag.setAttribute('content', 'index, follow');
    };
  }, []);

  const handleNav = (href: string) => {
    window.location.href = href.startsWith('#') ? `/${href}` : href;
  };

  return (
    <div className="bg-cream min-h-screen">
      <Navigation
        lang={lang}
        onLangChange={onLangChange}
        currency={currency}
        onCurrencyChange={setCurrency}
        cartCount={0}
        onCartOpen={() => {}}
        onNavigate={handleNav}
      />

      {/* Hero */}
      <div className="py-16 md:py-20 bg-nile-dark text-cream">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h1 className="text-3xl md:text-5xl font-display tracking-wide text-cream">
            {title[lang]}
          </h1>
          <p className="text-solar/70 italic font-display text-sm mt-4">
            {lang === 'en' ? 'Last updated:' : 'Zuletzt aktualisiert:'} {lastUpdated[lang]}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 py-16">
        {children}
      </div>

      <Footer lang={lang} onLegalOpen={setLegalModal} />

      <LegalModal
        open={legalModal !== null}
        onClose={() => setLegalModal(null)}
        title={lang === 'en' ? 'Shipping & Returns' : 'Versand & Retouren'}
      >
        <p className="text-nile-dark/70 font-body leading-relaxed">
          {lang === 'en'
            ? 'Shipping & Returns information is coming soon. For questions, please contact nilium.official@gmail.com.'
            : 'Informationen zu Versand & Retouren folgen in Kürze. Bei Fragen wenden Sie sich bitte an nilium.official@gmail.com.'}
        </p>
      </LegalModal>
    </div>
  );
};
