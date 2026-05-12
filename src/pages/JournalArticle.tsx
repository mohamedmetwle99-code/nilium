import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import type { Language } from '../i18n';
import { translations } from '../i18n';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { LegalModal } from '../components/LegalModal';
import type { LegalPage } from '../components/LegalModal';
import { articles } from '../data/journalArticles';
import type { Currency } from '../store';

interface Props { slug: string; }

export const JournalArticle: React.FC<Props> = ({ slug }) => {
  const [lang, setLang] = useState<Language>(
    (localStorage.getItem('nilium-lang') as Language) || 'en'
  );
  const [currency, setCurrency] = useState<Currency>('CHF');
  const [legalModal, setLegalModal] = useState<LegalPage | null>(null);
  const t = translations[lang];

  const article = articles.find(a => a.slug === slug);

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

  if (!article) {
    return (
      <div className="min-h-screen bg-cream flex flex-col">
        <Navigation
          lang={lang} onLangChange={handleLangChange}
          currency={currency} onCurrencyChange={setCurrency}
          cartCount={0} onCartOpen={() => {}} onNavigate={handleNav}
        />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="font-display text-3xl text-nile-dark mb-4">Article not found</p>
            <a href="/journal" className="text-solar text-sm font-accent uppercase tracking-wider hover:text-solar-light transition-colors">
              ← {t['journal.back']}
            </a>
          </div>
        </div>
      </div>
    );
  }

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

      {/* Cover image with overlay */}
      <div className="relative h-96 md:h-[60vh] overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.title[lang]}
          onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-bg.jpg'; }}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-nile-dark/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <p className="text-solar text-[10px] tracking-[0.3em] uppercase font-accent mb-4">
            {article.category[lang]}
          </p>
          <h1 className="text-3xl md:text-5xl font-display text-cream tracking-wide max-w-3xl leading-tight">
            {article.title[lang]}
          </h1>
          <div className="flex items-center gap-3 mt-5 text-cream/60 text-[11px] font-accent uppercase tracking-wider">
            <span>{formatDate(article.date)}</span>
            <span>·</span>
            <span>{article.readingTime} {t['journal.minRead']}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-2xl mx-auto px-5 py-16 md:py-24">
        <a
          href="/journal"
          className="inline-flex items-center gap-1.5 text-nile-dark/40 hover:text-solar text-xs uppercase tracking-widest font-accent transition-colors mb-12"
        >
          <ChevronLeft size={14} />
          {t['journal.back']}
        </a>

        {article.body[lang].split('\n\n').map((para, i) => (
          <p key={i} className="font-body text-nile-dark/80 text-base md:text-lg leading-relaxed mb-6">
            {para}
          </p>
        ))}

        <div className="mt-12 pt-8 border-t border-nile-dark/10">
          <a
            href="/journal"
            className="inline-flex items-center gap-1.5 text-nile-dark/40 hover:text-solar text-xs uppercase tracking-widest font-accent transition-colors"
          >
            <ChevronLeft size={14} />
            {t['journal.back']}
          </a>
        </div>
      </article>

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
