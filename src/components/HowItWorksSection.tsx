import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { FlameIcon, WardrobeIcon, GiftBoxIcon, ClockIcon } from './BrandIcons';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props { lang: Language; }

const UsageCard: React.FC<{ icon: React.ReactNode; title: string; sub: string; delay: number }> = ({
  icon, title, sub, delay,
}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col items-center text-center group p-6 border border-cream/10 hover:border-solar/30 transition-colors duration-500"
    >
      <div className="text-solar mb-4 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <p className="font-display text-cream text-base mb-1">{title}</p>
      <p className="font-body text-cream/40 text-xs">{sub}</p>
    </motion.div>
  );
};

export const HowItWorksSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openAccordion, setOpenAccordion] = useState<string | null>('candle');

  const toggle = (key: string) => setOpenAccordion(prev => prev === key ? null : key);

  const candleSteps = [
    t['howto.candle.step1'],
    t['howto.candle.step2'],
    t['howto.candle.step3'],
    t['howto.candle.step4'],
  ];
  const sachetSteps = [
    t['howto.sachet.step1'],
    t['howto.sachet.step2'],
    t['howto.sachet.step3'],
  ];

  const accordions = [
    { key: 'candle', icon: <FlameIcon size={20} strokeWidth={1.4} />, title: t['howto.candle.title'], steps: candleSteps },
    { key: 'sachet', icon: <WardrobeIcon size={20} strokeWidth={1.4} />, title: t['howto.sachet.title'], steps: sachetSteps },
    { key: 'safety', icon: <AlertTriangle size={20} />, title: t['howto.safety'], steps: [t['howto.safety.text']] },
  ];

  return (
    <section id="howto" className="relative py-28 md:py-36 bg-nile-dark text-cream">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(212,175,55,0.15) 40px, rgba(212,175,55,0.15) 41px)`
      }} />

      <div className="max-w-4xl mx-auto px-5 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-solar text-[11px] tracking-[0.4em] uppercase font-accent font-light">
            — {t['howto.label']} —
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-cream mt-3 tracking-wide">
            {t['howto.title']}
          </h2>
          <p className="text-cream/40 font-body font-light text-sm mt-3">
            {t['howto.subtitle']}
          </p>
        </motion.div>

        {/* Usage Icons Trio (matching brand kit) */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-14">
          <UsageCard
            icon={<WardrobeIcon size={44} strokeWidth={1.3} />}
            title={t['howto.usage.sachets.title']}
            sub={t['howto.usage.sachets.sub']}
            delay={0.2}
          />
          <UsageCard
            icon={<GiftBoxIcon size={44} strokeWidth={1.3} />}
            title={t['howto.usage.giftsets.title']}
            sub={t['howto.usage.giftsets.sub']}
            delay={0.3}
          />
          <UsageCard
            icon={<ClockIcon size={44} strokeWidth={1.3} />}
            title={t['howto.usage.burntime.title']}
            sub={t['howto.usage.burntime.sub']}
            delay={0.4}
          />
        </div>

        {/* Accordion guides */}
        <div className="space-y-3">
          {accordions.map((acc, i) => {
            const isOpen = openAccordion === acc.key;
            return (
              <motion.div
                key={acc.key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="border border-cream/10 overflow-hidden"
              >
                <button
                  onClick={() => toggle(acc.key)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-cream/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-solar">{acc.icon}</span>
                    <span className="font-display text-base text-cream">{acc.title}</span>
                  </div>
                  {isOpen ? <ChevronUp size={16} className="text-cream/30" /> : <ChevronDown size={16} className="text-cream/30" />}
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-5 pb-5"
                  >
                    <ol className="space-y-3 ml-8">
                      {acc.steps.map((step, j) => (
                        <li key={j} className="text-cream/55 text-sm font-body font-light leading-relaxed relative">
                          {acc.steps.length > 1 && (
                            <span className="absolute -left-6 top-0 text-solar/40 font-accent text-xs">{String(j + 1).padStart(2, '0')}</span>
                          )}
                          {step}
                        </li>
                      ))}
                    </ol>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
