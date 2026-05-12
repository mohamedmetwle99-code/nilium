import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Language } from '../i18n';
import { translations } from '../i18n';
import { useToast } from './Toast';
import { NewsletterSuccessModal } from './NewsletterSuccessModal';

interface Props { lang: Language; }

export const NewsletterSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      showToast('Please enter a valid email');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const text = await res.text();
      let data: any;
      try { data = JSON.parse(text); } catch { data = {}; }
      if (res.ok) {
        setEmail('');
        setShowSuccess(true);
      } else {
        showToast(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      showToast('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-nile text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `radial-gradient(circle at 30% 50%, rgba(212,175,55,0.2), transparent 60%), radial-gradient(circle at 70% 50%, rgba(212,175,55,0.15), transparent 50%)`
      }} />

      <div className="max-w-xl mx-auto px-5 text-center relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-normal text-cream tracking-wide mb-4">
            {t['newsletter.title']}
          </h2>
          <p className="text-cream/45 font-body font-light text-sm leading-relaxed mb-8">
            {t['newsletter.desc']}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t['newsletter.placeholder']}
              disabled={submitting}
              className="flex-1 bg-transparent border border-cream/15 px-5 py-3.5 text-sm font-body text-cream placeholder-cream/25 focus:outline-none focus:border-solar/40 focus:ring-1 focus:ring-solar/20 transition-colors duration-300 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-solar text-nile-dark text-[11px] tracking-[0.2em] uppercase font-accent font-medium px-8 py-3.5 hover:bg-solar-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? t['newsletter.joining'] : t['newsletter.cta']}
            </button>
          </form>
          <p className="text-cream/20 text-[10px] font-body mt-3">{t['newsletter.privacy']}</p>
        </motion.div>
      </div>

      <NewsletterSuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        lang={lang}
      />
    </section>
  );
};
