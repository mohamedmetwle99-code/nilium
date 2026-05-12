import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { Language } from '../i18n';
import type { Currency } from '../store';
import { translations } from '../i18n';

interface Props {
  lang: Language;
  onLangChange: (lang: Language) => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  cartCount: number;
  onCartOpen: () => void;
  onNavigate: (section: string) => void;
}

export const Navigation: React.FC<Props> = ({
  lang, onLangChange, currency, onCurrencyChange, cartCount, onCartOpen, onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.shop', href: '#shop' },
    { key: 'nav.story', href: '#story' },
    { key: 'nav.howItWorks', href: '#howto' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const handleNav = (href: string) => {
    setMobileOpen(false);
    onNavigate(href);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-nile-dark/95 backdrop-blur-md py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={() => handleNav('#home')} className="flex items-center">
            <img
              src="/images/logo/logo-horizontal.png"
              alt="NILIUM"
              className="hidden md:block h-12 lg:h-14 w-auto"
              width="280"
              height="56"
              loading="eager"
              decoding="async"
            />
            <img
              src="/images/logo/logo-lotus.png"
              alt="NILIUM"
              className="block md:hidden h-10 w-auto"
              width="40"
              height="40"
              loading="eager"
              decoding="async"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => handleNav(item.href)}
                className="text-cream/60 hover:text-solar text-[11px] tracking-[0.18em] uppercase font-accent font-light transition-colors duration-300"
              >
                {t[item.key]}
              </a>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Currency */}
            <div className="hidden sm:flex items-center gap-1 text-[10px] tracking-wider font-accent">
              {(['CHF', 'EUR'] as Currency[]).map((c, i) => (
                <React.Fragment key={c}>
                  {i > 0 && <span className="text-cream/20">|</span>}
                  <button
                    onClick={() => onCurrencyChange(c)}
                    className={`px-1 transition-colors ${currency === c ? 'text-solar' : 'text-cream/40 hover:text-cream/70'}`}
                  >
                    {c}
                  </button>
                </React.Fragment>
              ))}
            </div>

            {/* Language */}
            <div className="text-cream hidden sm:block">
              <LanguageSwitcher current={lang} onChange={onLangChange} />
            </div>

            {/* Cart */}
            <button
              onClick={onCartOpen}
              className="relative text-cream/60 hover:text-solar transition-colors p-1"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-solar text-nile-dark text-[9px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-cream/70 hover:text-solar transition-colors lg:hidden ml-1"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-40 bg-nile-dark/98 backdrop-blur-xl flex flex-col items-center justify-center gap-7 transition-all duration-500 lg:hidden ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {navItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            onClick={() => handleNav(item.href)}
            className="text-cream/70 hover:text-solar text-base tracking-[0.25em] uppercase font-display font-normal transition-colors duration-300"
          >
            {t[item.key]}
          </a>
        ))}
        <div className="flex items-center gap-6 mt-4">
          <div className="text-cream">
            <LanguageSwitcher current={lang} onChange={onLangChange} />
          </div>
          <div className="flex items-center gap-2 text-xs font-accent">
            {(['CHF', 'EUR'] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => onCurrencyChange(c)}
                className={`px-2 py-1 border transition-colors ${currency === c ? 'border-solar text-solar' : 'border-cream/20 text-cream/40'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
