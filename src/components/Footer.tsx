import React from 'react';
import { LotusMark } from './NiliumLogo';
import type { Language } from '../i18n';
import { translations } from '../i18n';
import type { LegalPage } from './LegalModal';

type FooterLegalLink =
  | { label: string; href: string }
  | { label: string; page: LegalPage };

interface Props {
  lang: Language;
  onLegalOpen: (page: LegalPage) => void;
}

export const Footer: React.FC<Props> = ({ lang, onLegalOpen }) => {
  const t = translations[lang];

  const navigateLinks = [
    { label: t['nav.home'],           href: '#home' },
    { label: t['footer.collections'], href: '#shop' },
    { label: t['nav.story'],          href: '/story' },
    { label: t['nav.journal'],        href: '/journal' },
    { label: t['nav.contact'],        href: '#contact' },
  ];

  const legalLinks: FooterLegalLink[] = [
    { label: t['footer.shipping'],          page: 'shipping' },
    { label: t['footer.legal.privacy'],     href: '/privacy' },
    { label: t['footer.legal.terms'],       href: '/terms' },
    { label: t['footer.legal.cookies'],     href: '/cookies' },
    { label: t['footer.legal.impressum'],   href: '/impressum' },
  ];

  const socials = [
    { abbr: 'IG', label: 'Instagram', href: 'https://instagram.com/nilium.ch' },
    { abbr: 'TT', label: 'TikTok',    href: 'https://tiktok.com/@niliumofficial' },
  ];

  return (
    <footer className="bg-nilium-navy pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">

          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <LotusMark size={26} strokeWidth={1.4} className="text-nilium-gold" />
              <span className="font-display tracking-[0.25em] text-white text-base font-medium">NILIUM</span>
            </div>
            <p className="text-white/50 text-sm font-body leading-relaxed mb-5">
              {t['footer.tagline']}
            </p>
            <div className="flex items-center gap-3">
              {socials.map(s => (
                <a
                  key={s.abbr}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`NILIUM on ${s.label}`}
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-nilium-gold hover:bg-nilium-gold hover:border-nilium-gold hover:text-nilium-navy transition-all duration-200 text-[9px] font-accent font-bold"
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

          {/* Column 3 — Legal */}
          <div>
            <h4 className="text-nilium-gold text-[10px] font-accent font-bold tracking-[0.25em] uppercase mb-5">
              {t['footer.support']}
            </h4>
            <ul className="space-y-3">
              {legalLinks.map(link => (
                <li key={'href' in link ? link.href : link.page}>
                  {'href' in link ? (
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-nilium-gold text-sm font-body transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => onLegalOpen(link.page)}
                      className="text-white/50 hover:text-nilium-gold text-sm font-body transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-nilium-gold/20 pt-6 text-center">
          <p className="text-white/30 text-xs font-body tracking-wide">
            {t['footer.rights']}
          </p>
        </div>
      </div>
    </footer>
  );
};
