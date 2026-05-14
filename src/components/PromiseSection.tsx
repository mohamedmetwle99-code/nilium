import React from 'react';
import { motion } from 'framer-motion';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props { lang: Language; }

const columns = [
  { icon: '/icons/icon-purity.png', titleKey: 'promise.purity.title', descKey: 'promise.purity.desc' },
  { icon: '/icons/icon-scent-journey.png', titleKey: 'promise.journey.title', descKey: 'promise.journey.desc' },
  { icon: '/icons/icon-sustainable.png', titleKey: 'promise.sustainable.title', descKey: 'promise.sustainable.desc' },
];

export const PromiseSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="relative py-20 md:py-28 bg-cream">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-solar text-[11px] tracking-[0.4em] uppercase font-accent font-light">
            — {t['promise.eyebrow']} —
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-normal text-nile-dark mt-3 tracking-wide">
            {t['promise.title']}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mt-16">
          {columns.map((col, i) => (
            <motion.div
              key={col.titleKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={col.icon}
                alt={t[col.titleKey]}
                className="w-24 h-24 object-contain mx-auto mb-6"
                loading="lazy"
              />
              <h3 className="font-display text-xl text-nile-dark mb-4">
                {t[col.titleKey]}
              </h3>
              <p className="font-body text-sm text-nile-dark/65 leading-relaxed">
                {t[col.descKey]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
