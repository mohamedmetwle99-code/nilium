import React from 'react';
import { SolarSeal, LotusMark } from './NiliumLogo';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props { lang: Language; }

export const Footer: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  const shopLinks = [
    t['collections.nile'],
    t['collections.alpine'],
    t['collections.gift'],
  ];

  const companyLinks = [
    { label: t['nav.story'], href: '#story' },
    { label: t['nav.howItWorks'], href: '#howto' },
    { label: t['nav.contact'], href: '#contact' },
  ];

  const legalLinks = [
    t['footer.privacy'],
    t['footer.terms'],
    t['footer.imprint'],
    t['footer.shipping'],
    t['footer.gdpr'],
  ];

  return (
    <footer className="bg-nile-dark border-t border-cream/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative background lotus */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-solar/[0.03] pointer-events-none">
        <LotusMark size={500} strokeWidth={0.8} />
      </div>

      <div className="max-w-6xl mx-auto px-5 relative">
        {/* Top brand seal centered */}
        <div className="flex flex-col items-center mb-12 pb-12 border-b border-cream/5">
          <SolarSeal size={90} variant="navy" className="mb-5" />
          <p className="font-display text-cream/70 text-2xl tracking-[0.3em] font-medium mb-2">NILIUM</p>
          <div className="w-20 h-px bg-solar/40 mb-3" />
          <p className="text-solar/60 text-[10px] tracking-[0.4em] uppercase font-accent mb-2">
            {t['footer.tagline']}
          </p>
          <p className="text-cream/25 text-[10px] tracking-[0.4em] uppercase font-accent">
            {t['footer.est']}
          </p>
        </div>

        {/* Link columns */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Tagline column */}
          <div className="md:col-span-1">
            <p className="font-display italic text-cream/30 text-sm leading-relaxed">
              {t['footer.taglineSecondary']}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="text-cream/30 text-[10px] tracking-[0.2em] uppercase font-accent">Follow:</span>
              {['IG', 'TT', 'PIN'].map((s) => (
                <a key={s} href="#" className="w-7 h-7 rounded-full border border-cream/10 hover:border-solar/40 flex items-center justify-center text-cream/30 hover:text-solar text-[9px] font-accent transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase font-accent text-solar/40 mb-4">{t['footer.shop']}</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link, i) => (
                <li key={i}>
                  <a href="#shop" className="text-cream/25 hover:text-cream/55 text-xs font-body transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase font-accent text-solar/40 mb-4">{t['footer.company']}</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-cream/25 hover:text-cream/55 text-xs font-body transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase font-accent text-solar/40 mb-4">{t['footer.legal']}</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-cream/25 hover:text-cream/55 text-xs font-body transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/15 text-[10px] tracking-[0.15em] font-accent">{t['footer.rights']}</p>
          <p className="text-cream/15 text-[10px] tracking-[0.15em] font-accent flex items-center gap-1.5">
            <span>🇨🇭</span> {t['footer.swiss']}
          </p>
        </div>
      </div>
    </footer>
  );
};
