import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props { lang: Language; }

interface Option {
  text: string;
  nile: number;
  alpine: number;
}

interface Question {
  id: string;
  text: string;
  options: Option[];
}

export const ScentQuiz: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const [currentQ, setCurrentQ] = useState(0);
  const [nileScore, setNileScore] = useState(0);
  const [alpineScore, setAlpineScore] = useState(0);
  const [history, setHistory] = useState<{ nile: number; alpine: number }[]>([]);

  const questions: Question[] = [
    {
      id: 'q1',
      text: t['quiz.q1'],
      options: [
        { text: t['quiz.q1.calm'],      nile: 0,   alpine: 1 },
        { text: t['quiz.q1.mystical'],  nile: 1,   alpine: 0 },
        { text: t['quiz.q1.energized'], nile: 0,   alpine: 1 },
        { text: t['quiz.q1.warm'],      nile: 1,   alpine: 0 },
      ],
    },
    {
      id: 'q2',
      text: t['quiz.q2'],
      options: [
        { text: t['quiz.q2.bedroom'],  nile: 1,   alpine: 0   },
        { text: t['quiz.q2.living'],   nile: 1,   alpine: 0.5 },
        { text: t['quiz.q2.bathroom'], nile: 0,   alpine: 1   },
        { text: t['quiz.q2.office'],   nile: 0,   alpine: 1   },
      ],
    },
    {
      id: 'q3',
      text: t['quiz.q3'],
      options: [
        { text: t['quiz.q3.morning'], nile: 0,   alpine: 1   },
        { text: t['quiz.q3.evening'], nile: 1,   alpine: 0   },
        { text: t['quiz.q3.special'], nile: 1,   alpine: 0   },
        { text: t['quiz.q3.daily'],   nile: 0.5, alpine: 0.5 },
      ],
    },
    {
      id: 'q4',
      text: t['quiz.q4'],
      options: [
        { text: t['quiz.q4.oriental'], nile: 2,   alpine: 0   },
        { text: t['quiz.q4.fresh'],    nile: 0,   alpine: 2   },
        { text: t['quiz.q4.floral'],   nile: 1,   alpine: 0.5 },
        { text: t['quiz.q4.earthy'],   nile: 0.5, alpine: 0.5 },
      ],
    },
    {
      id: 'q5',
      text: t['quiz.q5'],
      options: [
        { text: t['quiz.q5.nile'],   nile: 2, alpine: 0 },
        { text: t['quiz.q5.alpine'], nile: 0, alpine: 2 },
        { text: t['quiz.q5.both'],   nile: 1, alpine: 1 },
      ],
    },
  ];

  const handleAnswer = (option: Option) => {
    setHistory(prev => [...prev, { nile: nileScore, alpine: alpineScore }]);
    setNileScore(nileScore + option.nile);
    setAlpineScore(alpineScore + option.alpine);
    setCurrentQ(currentQ + 1);
  };

  const handleBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setNileScore(prev.nile);
    setAlpineScore(prev.alpine);
    setHistory(h => h.slice(0, -1));
    setCurrentQ(currentQ - 1);
  };

  const handleReset = () => {
    setCurrentQ(0);
    setNileScore(0);
    setAlpineScore(0);
    setHistory([]);
  };

  const diff = nileScore - alpineScore;
  const result: 'nile' | 'alpine' | 'both' =
    diff > 1 ? 'nile' : diff < -1 ? 'alpine' : 'both';

  const resultTitle =
    result === 'nile'   ? t['products.nile.name'] :
    result === 'alpine' ? t['products.alpine.name'] :
                          `${t['products.nile.name']} & ${t['products.alpine.name']}`;

  const shopCta = result === 'both' ? t['quiz.result.shop_plural'] : t['quiz.result.shop'];

  return (
    <section className="relative py-24 md:py-32 bg-nile/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar/20 to-transparent" />

      <div className="max-w-2xl mx-auto px-5" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-solar text-xs tracking-[0.3em] uppercase font-accent mb-3">
            — {t['quiz.eyebrow']} —
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-nile-dark mb-4 tracking-wide">
            {t['quiz.title']}
          </h2>
          <p className="text-nile-dark/60 italic font-display text-sm md:text-base">
            {t['quiz.subtitle']}
          </p>
        </motion.div>

        {/* Quiz body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {currentQ < 5 ? (
            <div>
              {/* Progress */}
              <p className="text-nile-dark/40 text-xs uppercase tracking-widest text-center mb-3">
                {t['quiz.progress']
                  .replace('{current}', String(currentQ + 1))
                  .replace('{total}', '5')}
              </p>
              <div className="h-1 bg-nile-dark/10 mb-12 rounded-full overflow-hidden">
                <div
                  className="h-full bg-solar transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${((currentQ + 1) / 5) * 100}%` }}
                />
              </div>

              {/* Question + options */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQ}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <p className="text-xl md:text-2xl font-display text-nile-dark mb-8 text-center">
                    {questions[currentQ].text}
                  </p>
                  <div className="flex flex-col gap-3">
                    {questions[currentQ].options.map((option, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(option)}
                        className="w-full bg-cream border border-nile-dark/15 hover:border-solar hover:bg-solar/5 px-6 py-4 text-left text-nile-dark font-body text-base transition-all duration-300"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Back */}
              {currentQ > 0 && (
                <div className="text-center mt-8">
                  <button
                    onClick={handleBack}
                    className="text-nile-dark/40 hover:text-nile-dark text-xs uppercase tracking-widest font-accent transition-colors"
                  >
                    ← {t['quiz.back']}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Result screen */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="text-center"
            >
              <img
                src="/icons/icon-lotus.png"
                alt=""
                className="w-12 h-12 mx-auto mb-6 opacity-80"
                loading="lazy"
                decoding="async"
              />
              <p className="text-solar text-xs tracking-[0.3em] uppercase font-accent mb-4">
                {result === 'both' ? t['quiz.result.duo'] : t['quiz.result.match']}
              </p>
              <h3 className="text-3xl md:text-4xl font-display text-nile-dark mb-3 tracking-wide">
                {resultTitle}
              </h3>
              <p className="text-solar font-display italic text-base md:text-lg text-center mb-6">
                {t[`quiz.result.${result}.subtitle`]}
              </p>
              <p className="text-nile-dark/70 font-body text-sm md:text-base text-center leading-relaxed mb-10 max-w-md mx-auto">
                {t[`quiz.result.${result}.body`]}
              </p>
              <button
                onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-solar text-nile-dark text-xs tracking-[0.2em] uppercase font-accent font-medium px-10 py-3 hover:bg-solar-light hover:shadow-lg hover:shadow-solar/30 transition-all duration-300"
              >
                {shopCta}
              </button>
              <div className="mt-6">
                <button
                  onClick={handleReset}
                  className="text-nile-dark/40 hover:text-nile-dark text-xs uppercase tracking-widest font-accent transition-colors"
                >
                  {t['quiz.result.retake']}
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
