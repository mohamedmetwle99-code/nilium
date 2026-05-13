import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { LegalModal } from './LegalModal';
import type { LegalPage } from './LegalModal';
import type { Language } from '../i18n';
import type { Currency } from '../store';

interface Props {
  title: { en: string; de: string; fr: string };
  lastUpdated: { en: string; de: string; fr: string };
  lang: Language;
  onLangChange: (lang: Language) => void;
  children: React.ReactNode;
}

const lastUpdatedLabel: Record<Language, string> = {
  en: 'Last updated:',
  de: 'Zuletzt aktualisiert:',
  fr: 'Dernière mise à jour :',
};

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

  const shippingTitle =
    lang === 'de' ? 'Versand & Retouren' :
    lang === 'fr' ? 'Livraison et retours' :
    'Shipping & Returns';

  const shippingBody =
    lang === 'de' ? 'Informationen zu Versand & Retouren folgen in Kürze. Bei Fragen wenden Sie sich bitte an nilium.official@gmail.com.' :
    lang === 'fr' ? 'Les informations sur la livraison et les retours seront disponibles prochainement. Pour toute question, contactez-nous à nilium.official@gmail.com.' :
    'Shipping & Returns information is coming soon. For questions, please contact nilium.official@gmail.com.';

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
            {lastUpdatedLabel[lang]} {lastUpdated[lang]}
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
        title={shippingTitle}
      >
        <p className="text-nile-dark/70 font-body leading-relaxed">
          {shippingBody}
        </p>
      </LegalModal>
    </div>
  );
};
