import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import { LotusIcon, MountainIcon, SunburstIcon, SoyBeanIcon, HandmadeIcon, EcoIcon } from './BrandIcons';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props { lang: Language; }

const ValueCard: React.FC<{ icon: React.ReactNode; label: string; sub: string; delay: number }> = ({
  icon, label, sub, delay,
}) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="text-solar mb-3 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <p className="font-accent text-[11px] tracking-[0.2em] uppercase text-charcoal mb-1">{label}</p>
      <p className="font-body text-[10px] text-charcoal/40">{sub}</p>
    </motion.div>
  );
};

export const StorySection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="story" className="relative py-28 md:py-36 bg-ivory overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-5" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-solar text-[11px] tracking-[0.4em] uppercase font-accent font-light">
            — {t['story.label']} —
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-charcoal mt-3 tracking-wide">
            {t['story.title']}
          </h2>
        </motion.div>

        {/* Brand identity dual icon — Lotus + Mountain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-8 md:gap-16 mb-14 text-solar/70"
        >
          <div className="flex flex-col items-center gap-2">
            <LotusIcon size={48} strokeWidth={1.3} />
            <span className="text-[9px] tracking-[0.3em] uppercase font-accent text-charcoal/40">
              {t['story.values.nile']}
            </span>
          </div>
          <div className="w-12 md:w-24 h-px bg-solar/30" />
          <SunburstIcon size={36} strokeWidth={1.2} />
          <div className="w-12 md:w-24 h-px bg-solar/30" />
          <div className="flex flex-col items-center gap-2">
            <MountainIcon size={48} strokeWidth={1.3} />
            <span className="text-[9px] tracking-[0.3em] uppercase font-accent text-charcoal/40">
              {t['story.values.alps']}
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src="/images/about-bg.jpg" alt="Nile meets Alps" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t border-l border-solar/25" />
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b border-r border-solar/25" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-5"
          >
            <p className="text-charcoal/75 font-body font-light leading-[1.9] text-[15px]">{t['story.p1']}</p>
            <p className="text-charcoal/75 font-body font-light leading-[1.9] text-[15px]">{t['story.p2']}</p>
            <div className="w-14 h-px bg-solar/30" />
            <p className="text-charcoal/60 font-body font-light leading-[1.9] text-[15px]">{t['story.p3']}</p>
          </motion.div>
        </div>

        {/* Brand Values — Product Features Icons */}
        <div className="border-t border-cream-dark pt-12 mb-14">
          <h3 className="text-center text-[10px] tracking-[0.4em] uppercase font-accent text-charcoal/40 mb-10">
            — {t['story.values.title']} —
          </h3>
          <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto">
            <ValueCard
              icon={<SoyBeanIcon size={42} strokeWidth={1.3} />}
              label={t['story.values.soy.label']}
              sub={t['story.values.soy.sub']}
              delay={0.5}
            />
            <ValueCard
              icon={<HandmadeIcon size={42} strokeWidth={1.3} />}
              label={t['story.values.handmade.label']}
              sub={t['story.values.handmade.sub']}
              delay={0.6}
            />
            <ValueCard
              icon={<EcoIcon size={42} strokeWidth={1.3} />}
              label={t['story.values.eco.label']}
              sub={t['story.values.eco.sub']}
              delay={0.7}
            />
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <Quote size={22} className="text-solar/25 mx-auto mb-4" />
          <p className="font-display italic text-lg md:text-xl text-charcoal/45 leading-relaxed">
            {t['story.quote']}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
