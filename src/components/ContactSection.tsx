import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Globe } from 'lucide-react';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props { lang: Language; }

export const ContactSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-cream">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-5" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-solar text-[11px] tracking-[0.4em] uppercase font-accent font-light">
            — {t['contact.label']} —
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-charcoal mt-3 tracking-wide">
            {t['contact.title']}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              { icon: Mail, label: t['contact.label.email'], value: t['contact.info.email'] },
              { icon: MapPin, label: t['contact.label.location'], value: t['contact.info.location'] },
              { icon: Globe, label: t['contact.label.web'], value: t['contact.info.web'] },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-solar/25 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-solar" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] font-accent text-charcoal/40 uppercase">{item.label}</p>
                    <p className="text-sm font-body text-charcoal/70 mt-0.5">{item.value}</p>
                  </div>
                </div>
              );
            })}

            {/* Payment methods */}
            <div className="pt-6 border-t border-cream-dark">
              <p className="text-[10px] tracking-[0.2em] font-accent text-charcoal/30 uppercase mb-3">{t['contact.payment']}</p>
              <div className="flex flex-wrap gap-2">
                {['PostFinance', 'TWINT', 'Visa', 'Mastercard', 'PayPal'].map((m) => (
                  <span key={m} className="text-[9px] font-accent tracking-wider text-charcoal/40 border border-cream-dark px-2.5 py-1 bg-white/50">{m}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="lg:col-span-3 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[10px] tracking-[0.15em] font-accent text-charcoal/50 uppercase block mb-1.5">{t['contact.name']}</label>
                <input
                  type="text"
                  className="w-full bg-white border border-cream-dark px-4 py-3 text-sm font-body text-charcoal focus:outline-none focus:border-solar/40 focus:ring-1 focus:ring-solar/20 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.15em] font-accent text-charcoal/50 uppercase block mb-1.5">{t['contact.email']}</label>
                <input
                  type="email"
                  className="w-full bg-white border border-cream-dark px-4 py-3 text-sm font-body text-charcoal focus:outline-none focus:border-solar/40 focus:ring-1 focus:ring-solar/20 transition-colors duration-300"
                />
              </div>
            </div>
            <div>
              <label className="text-[10px] tracking-[0.15em] font-accent text-charcoal/50 uppercase block mb-1.5">{t['contact.subject']}</label>
              <input
                type="text"
                className="w-full bg-white border border-cream-dark px-4 py-3 text-sm font-body text-charcoal focus:outline-none focus:border-solar/40 focus:ring-1 focus:ring-solar/20 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.15em] font-accent text-charcoal/50 uppercase block mb-1.5">{t['contact.message']}</label>
              <textarea
                rows={5}
                className="w-full bg-white border border-cream-dark px-4 py-3 text-sm font-body text-charcoal focus:outline-none focus:border-solar/40 focus:ring-1 focus:ring-solar/20 transition-colors duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-nile text-cream text-[11px] tracking-[0.2em] uppercase font-accent px-10 py-4 hover:bg-nile-light transition-colors"
            >
              {t['contact.send']}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
