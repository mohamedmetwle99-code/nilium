import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Language } from '../i18n';
import { translations } from '../i18n';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { LegalModal } from '../components/LegalModal';
import type { LegalPage } from '../components/LegalModal';
import { articles } from '../data/journalArticles';
import type { Currency } from '../store';

export const Journal: React.FC = () => {
  const [lang, setLang] = useState<Language>(
    (localStorage.getItem('nilium-lang') as Language) || 'en'
  );
  const [currency, setCurrency] = useState<Currency>('CHF');
  const [legalModal, setLegalModal] = useState<LegalPage | null>(null);
  const t = translations[lang];

  const handleLangChange = (l: Language) => {
    setLang(l);
    localStorage.setItem('nilium-lang', l);
  };

  const handleNav = (href: string) => {
    window.location.href = href.startsWith('#') ? `/${href}` : href;
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString(lang === 'de' ? 'de-CH' : 'en-GB', {
      year: 'numeric', month: 'long', day: 'numeric',
    });

  return (
    <div className="min-h-screen bg-cream">
      <Navigation
        lang={lang}
        onLangChange={handleLangChange}
        currency={currency}
        onCurrencyChange={setCurrency}
        cartCount={0}
        onCartOpen={() => {}}
        onNavigate={handleNav}
      />

      {/* Hero */}
      <div className="bg-nile-dark pt-32 pb-20 text-center">
        <p className="text-solar text-xs tracking-[0.3em] uppercase font-accent mb-4">
          — {t['journal.eyebrow']} —
        </p>
        <h1 className="text-5xl md:text-6xl font-display text-cream tracking-wide mb-4">
          {t['journal.title']}
        </h1>
        <p className="text-cream/50 italic font-display text-base md:text-lg">
          {t['journal.subtitle']}
        </p>
      </div>

      {/* Article grid */}
      <section className="max-w-7xl mx-auto px-5 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.a
              key={article.slug}
              href={`/journal/${article.slug}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block bg-white border border-nile-dark/8 hover:border-solar/30 hover:shadow-xl hover:shadow-nile-dark/10 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={article.coverImage}
                  alt={article.title[lang]}
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-bg.jpg'; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <p className="text-solar text-[10px] tracking-[0.2em] uppercase font-accent mb-3">
                  {article.category[lang]}
                </p>
                <h2 className="font-display text-nile-dark text-xl mb-3 leading-snug group-hover:text-nile transition-colors">
                  {article.title[lang]}
                </h2>
                <p className="font-body text-nile-dark/60 text-sm leading-relaxed mb-4">
                  {article.excerpt[lang]}
                </p>
                <div className="flex items-center gap-3 text-nile-dark/35 text-[11px] font-accent uppercase tracking-wider">
                  <span>{formatDate(article.date)}</span>
                  <span>·</span>
                  <span>{article.readingTime} {t['journal.minRead']}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <Footer lang={lang} onLegalOpen={setLegalModal} />

      {(['privacy', 'terms', 'cookies', 'shipping', 'impressum'] as LegalPage[]).map((page) => (
        <LegalModal
          key={page}
          open={legalModal === page}
          onClose={() => setLegalModal(null)}
          title={t[`legal.${page}.title`]}
        >
          <div className="space-y-4">
            <p className="text-sm font-body text-charcoal/70 leading-relaxed">{t['legal.placeholder']}</p>
            <p className="text-xs font-body text-charcoal/40 italic">{t['legal.placeholder.note']}</p>
            <p className="text-[11px] font-accent tracking-wider text-charcoal/30 uppercase pt-2 border-t border-cream-dark">
              {t['legal.lastUpdated']}
            </p>
          </div>
        </LegalModal>
      ))}
    </div>
  );
};
