import React, { useState } from 'react';
import { LotusMark } from './NiliumLogo';
import { useToast } from './Toast';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props { lang: Language; }

export const Footer: React.FC<Props> = ({ lang }) => {
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

  // TODO: Replace '#' placeholders with real page/modal targets when ready
  const supportLinks = [
    { label: t['footer.shipping'],  href: '#' },
    { label: t['footer.careGuide'], href: '#' },
    { label: t['footer.faq'],       href: '#' },
    { label: t['footer.privacy'],   href: '#' },
    { label: t['footer.terms'],     href: '#' },
  ];

  const socials = [
    { abbr: 'IG', label: 'Instagram' },
    { abbr: 'PT', label: 'Pinterest' },
    { abbr: 'TT', label: 'TikTok' },
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
            <div className="flex items-center gap-2">
              <span className="text-white/30 text-[10px] font-accent tracking-wider uppercase mr-1">
                {t['footer.social']}
              </span>
              {socials.map(s => (
                <a
                  key={s.abbr}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 border border-white/15 hover:border-nilium-gold/60 hover:text-nilium-gold flex items-center justify-center text-white/35 text-[9px] font-accent font-bold transition-colors"
                >
                  {s.abbr}
                </a>
              ))}
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

          {/* Column 3 — Support */}
          <div>
            <h4 className="text-nilium-gold text-[10px] font-accent font-bold tracking-[0.25em] uppercase mb-5">
              {t['footer.support']}
            </h4>
            <ul className="space-y-3">
              {/* TODO: Replace '#' with real targets when pages/modals are ready */}
              {supportLinks.map(link => (
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
