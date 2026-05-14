import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Language } from '../i18n';
import { detectLanguage } from '../i18n';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import type { Currency } from '../store';

export const FounderStory: React.FC = () => {
  const [lang, setLang] = useState<Language>(detectLanguage());
  const [currency, setCurrency] = useState<Currency>('CHF');

  const handleLangChange = (l: Language) => {
    setLang(l);
    localStorage.setItem('nilium-lang', l);
  };

  const handleNav = (href: string) => {
    window.location.href = href.startsWith('#') ? `/${href}` : href;
  };

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
      <section className="bg-nile-dark pt-32 pb-20 text-center px-5">
        <p className="text-solar text-xs tracking-[0.3em] uppercase font-accent mb-4">
          {lang === 'de' ? '— Unsere Geschichte —' : lang === 'fr' ? '— Notre Histoire —' : '— Our Story —'}
        </p>
        <h1 className="text-4xl md:text-6xl font-display text-cream tracking-wide mb-4">
          {lang === 'de' ? 'Ein Leben Zwischen Welten' : lang === 'fr' ? 'Une Vie Entre les Mondes' : 'A Life Between Worlds'}
        </h1>
        <p className="text-cream/50 italic font-display text-base md:text-lg max-w-2xl mx-auto">
          {lang === 'de' ? 'Die Geschichte hinter NILIUM' : lang === 'fr' ? "L'histoire derrière NILIUM" : 'The story behind NILIUM'}
        </p>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-5 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="prose prose-lg max-w-none"
        >
          {lang === 'en' && <StoryEN />}
          {lang === 'de' && <StoryDE />}
          {lang === 'fr' && <StoryFR />}
        </motion.div>

        {/* Closing call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-nile-dark/10 text-center"
        >
          <p className="text-solar text-xs tracking-[0.3em] uppercase font-accent mb-4">
            {lang === 'de' ? 'Wo der Nil auf die Alpen trifft' : lang === 'fr' ? 'Là où le Nil rencontre les Alpes' : 'Where the Nile meets the Alps'}
          </p>
          <a
            href="/#shop"
            className="inline-block mt-4 px-8 py-4 bg-nile-dark text-cream text-sm tracking-wider uppercase font-accent hover:bg-solar hover:text-nile-dark transition-all duration-300"
          >
            {lang === 'de' ? 'Kollektion entdecken' : lang === 'fr' ? 'Découvrir la collection' : 'Explore the Collection'}
          </a>
        </motion.div>
      </section>

      <Footer lang={lang} onLegalOpen={() => {}} />
    </div>
  );
};

// =====================================
// ENGLISH STORY
// =====================================
const StoryEN: React.FC = () => (
  <div className="space-y-6 text-nile-dark font-body text-base md:text-lg leading-relaxed">
    <p className="first-letter:text-5xl first-letter:font-display first-letter:text-solar first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
      NILIUM is a question.
    </p>
    <p className="italic text-nile-dark/80 text-center py-4 font-display">
      What if a candle could hold two ancient worlds at once?
    </p>
    <p>
      The Nile — slow, warm, alive with the perfume of papyrus and lotus, the heat of stones that have stood for four thousand years.
    </p>
    <p>
      The Alps — cold, clear, impossibly quiet. The opposite of the Nile in every way.
    </p>
    <p>
      Most luxury brands choose one world. NILIUM chooses both.
    </p>
    <p>
      Founded in Switzerland by M. Atteya, an Egyptian doctor whose path crossed three countries, NILIUM is shaped by contrast. Every candle is hand-poured with the discipline of the Swiss and the soul of an older civilization.
    </p>
    <p>
      Crafted slowly. Made with care. Lit in silence.
    </p>
    <p>
      Where the Nile meets the Alps, NILIUM exists.
    </p>
  </div>
);

// =====================================
// GERMAN STORY
// =====================================
const StoryDE: React.FC = () => (
  <div className="space-y-6 text-nile-dark font-body text-base md:text-lg leading-relaxed">
    <p className="first-letter:text-5xl first-letter:font-display first-letter:text-solar first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
      NILIUM ist eine Frage.
    </p>
    <p className="italic text-nile-dark/80 text-center py-4 font-display">
      Was, wenn eine Kerze zwei alte Welten gleichzeitig halten könnte?
    </p>
    <p>
      Der Nil — langsam, warm, lebendig mit dem Duft von Papyrus und Lotus, der Hitze von Steinen, die seit viertausend Jahren stehen.
    </p>
    <p>
      Die Alpen — kalt, klar, unmöglich still. Das Gegenteil des Nils in jeder Hinsicht.
    </p>
    <p>
      Die meisten Luxusmarken wählen eine Welt. NILIUM wählt beide.
    </p>
    <p>
      Gegründet in der Schweiz von M. Atteya, einem ägyptischen Arzt, dessen Weg drei Länder durchquerte, ist NILIUM vom Kontrast geprägt. Jede Kerze wird von Hand gegossen — mit der Disziplin der Schweizer und der Seele einer älteren Zivilisation.
    </p>
    <p>
      Langsam gefertigt. Mit Sorgfalt gemacht. In Stille entzündet.
    </p>
    <p>
      Wo der Nil auf die Alpen trifft, existiert NILIUM.
    </p>
  </div>
);

// =====================================
// FRENCH STORY
// =====================================
const StoryFR: React.FC = () => (
  <div className="space-y-6 text-nile-dark font-body text-base md:text-lg leading-relaxed">
    <p className="first-letter:text-5xl first-letter:font-display first-letter:text-solar first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1">
      NILIUM est une question.
    </p>
    <p className="italic text-nile-dark/80 text-center py-4 font-display">
      Et si une bougie pouvait contenir deux mondes anciens à la fois ?
    </p>
    <p>
      Le Nil — lent, chaud, vivant du parfum de papyrus et de lotus, de la chaleur de pierres qui se tiennent depuis quatre mille ans.
    </p>
    <p>
      Les Alpes — froides, claires, impossiblement silencieuses. L'opposé du Nil à tous égards.
    </p>
    <p>
      La plupart des marques de luxe choisissent un seul monde. NILIUM choisit les deux.
    </p>
    <p>
      Fondé en Suisse par M. Atteya, un médecin égyptien dont le chemin a traversé trois pays, NILIUM est façonné par le contraste. Chaque bougie est coulée à la main — avec la discipline des Suisses et l'âme d'une civilisation plus ancienne.
    </p>
    <p>
      Façonné lentement. Fait avec soin. Allumé en silence.
    </p>
    <p>
      Là où le Nil rencontre les Alpes, NILIUM existe.
    </p>
  </div>
);
