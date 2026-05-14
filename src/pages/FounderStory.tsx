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
      NILIUM was founded by M. Atteya, an Egyptian doctor whose path crossed three countries before settling into the quiet of Switzerland.
    </p>
    <p>
      Born in Egypt, he grew up surrounded by the warmth of an ancient civilization — the perfume of lotus, the rhythm of the Nile, the slow heat of stones that had stood for four thousand years.
    </p>
    <p>
      In 2018, he left Egypt to study medicine in Ukraine. Four years of discipline, observation, and the careful work of learning to heal others.
    </p>
    <p>
      Then, in 2022, war changed everything.
    </p>
    <p>
      He came to Switzerland — a country of cold mountains and clear silence, the exact opposite of the warmth he had known. The Alps did not feel like home at first. They felt like a question.
    </p>
    <p>
      But between the noise he had left behind and the stillness he had found, an idea began to take shape:
    </p>
    <p className="italic text-nile-dark/80 text-center py-4 font-display">
      What if a candle could hold both worlds at once?
    </p>
    <p>
      NILIUM was born from this question.
    </p>
    <p>
      Today, NILIUM candles are crafted in Switzerland with the same care a doctor brings to a patient: slow attention, honest materials, no shortcuts. Each candle carries echoes of older worlds — papyrus, lotus, sandalwood, bergamot — held by the Swiss precision of soy wax, clean burn, and quiet design.
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
      NILIUM wurde von M. Atteya gegründet, einem ägyptischen Arzt, dessen Weg drei Länder durchquerte, bevor er sich in der Stille der Schweiz niederließ.
    </p>
    <p>
      Geboren in Ägypten, wuchs er umgeben von der Wärme einer alten Zivilisation auf — dem Duft von Lotus, dem Rhythmus des Nils, der langsamen Hitze von Steinen, die seit viertausend Jahren standen.
    </p>
    <p>
      Im Jahr 2018 verließ er Ägypten, um in der Ukraine Medizin zu studieren. Vier Jahre der Disziplin, der Beobachtung und der sorgfältigen Arbeit zu lernen, anderen zu heilen.
    </p>
    <p>
      Dann, im Jahr 2022, veränderte der Krieg alles.
    </p>
    <p>
      Er kam in die Schweiz — ein Land kalter Berge und klarer Stille, das genaue Gegenteil der Wärme, die er kannte. Die Alpen fühlten sich zunächst nicht wie zu Hause an. Sie fühlten sich wie eine Frage an.
    </p>
    <p>
      Aber zwischen dem Lärm, den er hinter sich gelassen hatte, und der Stille, die er gefunden hatte, begann eine Idee Gestalt anzunehmen:
    </p>
    <p className="italic text-nile-dark/80 text-center py-4 font-display">
      Was, wenn eine Kerze beide Welten gleichzeitig halten könnte?
    </p>
    <p>
      NILIUM wurde aus dieser Frage geboren.
    </p>
    <p>
      Heute werden NILIUM-Kerzen in der Schweiz mit derselben Sorgfalt gefertigt, die ein Arzt einem Patienten entgegenbringt: langsame Aufmerksamkeit, ehrliche Materialien, keine Abkürzungen. Jede Kerze trägt Echos älterer Welten — Papyrus, Lotus, Sandelholz, Bergamotte — gehalten von der Schweizer Präzision von Sojawachs, sauberem Brand und stillem Design.
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
      NILIUM a été fondé par M. Atteya, un médecin égyptien dont le chemin a traversé trois pays avant de s'installer dans le calme de la Suisse.
    </p>
    <p>
      Né en Égypte, il a grandi entouré de la chaleur d'une civilisation ancienne — le parfum du lotus, le rythme du Nil, la chaleur lente de pierres qui se tenaient depuis quatre mille ans.
    </p>
    <p>
      En 2018, il a quitté l'Égypte pour étudier la médecine en Ukraine. Quatre années de discipline, d'observation et du travail soigneux d'apprendre à soigner les autres.
    </p>
    <p>
      Puis, en 2022, la guerre a tout changé.
    </p>
    <p>
      Il est venu en Suisse — un pays de montagnes froides et de silence clair, l'exact opposé de la chaleur qu'il avait connue. Les Alpes ne se sont pas senties comme chez lui au début. Elles se sont senties comme une question.
    </p>
    <p>
      Mais entre le bruit qu'il avait laissé derrière lui et l'immobilité qu'il avait trouvée, une idée a commencé à prendre forme :
    </p>
    <p className="italic text-nile-dark/80 text-center py-4 font-display">
      Et si une bougie pouvait contenir les deux mondes à la fois ?
    </p>
    <p>
      NILIUM est né de cette question.
    </p>
    <p>
      Aujourd'hui, les bougies NILIUM sont fabriquées en Suisse avec le même soin qu'un médecin apporte à un patient : attention lente, matériaux honnêtes, aucun raccourci. Chaque bougie porte des échos de mondes plus anciens — papyrus, lotus, bois de santal, bergamote — maintenus par la précision suisse de la cire de soja, d'une combustion propre et d'un design tranquille.
    </p>
    <p>
      Là où le Nil rencontre les Alpes, NILIUM existe.
    </p>
  </div>
);
