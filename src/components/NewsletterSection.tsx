import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props { lang: Language; }

export const NewsletterSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      setStatus('success');
      setMessage('Thank you for subscribing.');
      setEmail('');
    } catch (error: any) {
      setStatus('error');
      setMessage(error?.message || 'Subscription failed.');
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
          <h2 className="text-3xl md:text-4xl font-display font-normal text-cream tracking-wide mb-4">
            {t['newsletter.title']}
          </h2>
          <p className="text-cream/45 font-body font-light text-sm leading-relaxed mb-8">
            {t['newsletter.desc']}
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t['newsletter.placeholder']}
              className="flex-1 bg-transparent border border-cream/15 px-5 py-3.5 text-sm font-body text-cream placeholder-cream/25 focus:outline-none focus:border-solar/40 transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-solar text-nile-dark text-[11px] tracking-[0.2em] uppercase font-accent font-medium px-8 py-3.5 hover:bg-solar-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Submitting...' : t['newsletter.cta']}
            </button>
          </form>
          {message && (
            <p className={`text-[10px] font-body mt-3 ${status === 'success' ? 'text-emerald-300' : 'text-rose-200'}`}>
              {message}
            </p>
          )}
          <p className="text-cream/20 text-[10px] font-body mt-3">{t['newsletter.privacy']}</p>
        </motion.div>
      </div>
    </section>
  );
};
