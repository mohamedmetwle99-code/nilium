import React from 'react';
import { motion, useInView } from 'framer-motion';
import { GiftBoxIcon, SealIcon, PapyrusIcon, WardrobeIcon } from './BrandIcons';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props { lang: Language; }

const features = [
  { Icon: GiftBoxIcon, key: 'f1' },
  { Icon: SealIcon, key: 'f2' },
  { Icon: PapyrusIcon, key: 'f3' },
  { Icon: WardrobeIcon, key: 'f4' },
];

export const PackagingSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-28 md:py-36 bg-ivory">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-5" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-solar text-[11px] tracking-[0.4em] uppercase font-accent font-light">
            — {t['packaging.label']} —
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-charcoal mt-3 tracking-wide">
            {t['packaging.title']}
          </h2>
          <p className="text-charcoal/40 font-display italic text-base mt-3 max-w-2xl mx-auto">
            {t['packaging.subtitle']}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden">
              <img src="/images/gift-box.jpg" alt="NILIUM Gift Box" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -top-2.5 -left-2.5 w-16 h-16 border-t border-l border-solar/20" />
            <div className="absolute -bottom-2.5 -right-2.5 w-16 h-16 border-b border-r border-solar/20" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => {
              const Icon = f.Icon;
              return (
                <motion.div
                  key={f.key}
                  initial={{ opacity: 0, y: 25 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="border border-cream-dark p-5 hover:border-solar/30 transition-colors duration-500 group bg-white/50"
                >
                  <Icon size={32} strokeWidth={1.4} className="text-solar mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-display text-base text-charcoal mb-1.5">{t[`packaging.${f.key}.title`]}</h3>
                  <p className="text-charcoal/45 text-xs font-body font-light leading-relaxed">{t[`packaging.${f.key}.desc`]}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Image row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="grid grid-cols-3 gap-3"
        >
          {['/images/wax-seal.jpg', '/images/sachet.jpg', '/images/ingredients.jpg'].map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
