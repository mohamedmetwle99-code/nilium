import React, { useState } from 'react';
import { LotusMark } from './NiliumLogo';
import { useToast } from './Toast';
import type { Language } from '../i18n';
import { translations } from '../i18n';
import type { LegalPage } from './LegalModal';

interface Props {
  lang: Language;
  onLegalOpen: (page: LegalPage) => void;
}

export const Footer: React.FC<Props> = ({ lang, onLegalOpen }) => {
  const t = translations[lang];
  const { showToast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        showToast(t['newsletter.cta']);
        setEmail('');
      } else {
        showToast(data.error || 'Subscription failed');
      }
    } catch {
      showToast('Network error. Please try again.');
    }
  };

  const navigateLinks = [
    { label: t['nav.home'],           href: '#home' },
    { label: t['footer.collections'], href: '#shop' },
    { label: t['nav.story'],          href: '#story' },
    { label: t['nav.contact'],        href: '#contact' },
  ];

  const legalLinks: { label: string; page: LegalPage }[] = [
    { label: t['footer.shipping'],   page: 'shipping' },
    { label: t['footer.privacy'],    page: 'privacy' },
    { label: t['footer.terms'],      page: 'terms' },
    { label: t['footer.cookies'],    page: 'cookies' },
    { label: t['footer.impressum'],  page: 'impressum' },
  ];


  return (
    <footer className="bg-nilium-navy pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <LotusMark size={26} strokeWidth={1.4} className="text-nilium-gold" />
              <span className="font-display tracking-[0.25em] text-white text-base font-medium">NILIUM</span>
            </div>
            <p className="text-white/50 text-sm font-body leading-relaxed mb-5">
              {t['footer.taglineBrand']}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/nilium.ch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NILIUM on Instagram"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-nilium-gold hover:bg-nilium-gold hover:border-nilium-gold hover:text-nilium-navy transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@niliumofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NILIUM on TikTok"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-nilium-gold hover:bg-nilium-gold hover:border-nilium-gold hover:text-nilium-navy transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.14a8.23 8.23 0 004.81 1.53V7.23a4.85 4.85 0 01-1.04-.54z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Navigate */}
          <div>
            <h4 className="text-nilium-gold text-[10px] font-accent font-bold tracking-[0.25em] uppercase mb-5">
              {t['footer.navigate']}
            </h4>
            <ul className="space-y-3">
              {navigateLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-nilium-gold text-sm font-body transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Legal */}
          <div>
            <h4 className="text-nilium-gold text-[10px] font-accent font-bold tracking-[0.25em] uppercase mb-5">
              {t['footer.support']}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map(link => (
                <li key={link.page}>
                  <button
                    onClick={() => onLegalOpen(link.page)}
                    className="text-white/50 hover:text-nilium-gold text-sm font-body transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter */}
          <div>
            <h4 className="text-nilium-gold text-[10px] font-accent font-bold tracking-[0.25em] uppercase mb-5">
              {t['footer.newsletter']}
            </h4>
            <p className="text-white/50 text-sm font-body mb-4">
              {t['footer.newsletterTitle']}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t['footer.newsletterPlaceholder']}
                className="bg-transparent border border-white/15 px-4 py-2.5 text-sm font-body text-white placeholder-white/25 focus:outline-none focus:border-nilium-gold/50 transition-colors"
              />
              <button
                type="submit"
                className="border border-nilium-gold/60 text-nilium-gold text-[11px] font-accent font-bold tracking-[0.12em] uppercase px-4 py-2.5 hover:bg-nilium-gold/10 transition-colors"
              >
                {t['footer.newsletterSubmit']}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar — thin gold divider */}
        <div className="border-t border-nilium-gold/20 pt-6 text-center">
          <p className="text-white/30 text-xs font-body tracking-wide">
            {t['footer.rights']}
          </p>
        </div>
      </div>
    </footer>
  );
};
