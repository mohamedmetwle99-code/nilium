import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingBag, ChevronDown, ChevronUp, Leaf, MapPin } from 'lucide-react';
import { LotusIcon } from './BrandIcons';
import type { Language } from '../i18n';
import type { CartItem } from '../store';
import { translations } from '../i18n';

interface Props {
  lang: Language;
  formatPrice: (n: number) => string;
  onAddToCart: (item: Omit<CartItem, 'qty'>) => void;
}

type Variant = 'candle' | 'gift' | 'sachet';

interface Product {
  id: string;
  key: string;
  image: string;
  collection: string;
  isNew?: boolean;
}

const products: Product[] = [
  { id: 'nile', key: 'nile', image: '/images/candle-nile.jpg', collection: 'nile', isNew: true },
  { id: 'alpine', key: 'alpine', image: '/images/candle-alpine.jpg', collection: 'alpine', isNew: true },
];

const ProductCard: React.FC<{
  product: Product;
  lang: Language;
  formatPrice: (n: number) => string;
  onAddToCart: (item: Omit<CartItem, 'qty'>) => void;
  delay: number;
}> = ({ product, lang, formatPrice, onAddToCart, delay }) => {
  const t = translations[lang];
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [expanded, setExpanded] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<Variant>('candle');

  const name = t[`products.${product.key}.name`];
  const notes = t[`products.${product.key}.notes`];
  const desc = t[`products.${product.key}.desc`];
  const ingredients = t[`products.${product.key}.ingredients`];
  const price = Number(t[`products.${product.key}.price.${selectedVariant}`]);

  const variantLabels: Record<Variant, string> = {
    candle: t['product.singleCandle'],
    gift: t['product.giftSet'],
    sachet: t['product.sachet'],
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7 }}
      className="group bg-white border border-transparent hover:border-solar/20 hover:shadow-2xl hover:shadow-nile-dark/15 hover:-translate-y-1 transition-all duration-500"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-nile-dark/0 group-hover:bg-nile-dark/10 transition-all duration-500" />
        {/* NEW badge */}
        {product.isNew && (
          <div className="absolute top-3 left-3 z-10 bg-solar text-nile-dark text-[10px] tracking-[0.18em] uppercase font-accent font-medium px-3 py-1">
            {t['shop.badge.new']}
          </div>
        )}
        {/* Bestseller badge */}
        {product.id === 'nile' && (
          <div className="absolute top-3 right-3 bg-solar text-nile-dark text-[9px] font-accent font-semibold tracking-wider uppercase px-3 py-1">
            Bestseller
          </div>
        )}
      </div>

      <div className="p-5">
        {/* Monogram dot */}
        <div className="flex items-center gap-2 mb-2">
          <LotusIcon size={16} strokeWidth={1.6} className="text-solar flex-shrink-0" />
          <span className="text-[9px] tracking-[0.3em] text-charcoal/30 font-accent uppercase">NILIUM</span>
        </div>

        <h3 className="font-display text-xl text-charcoal tracking-wide mb-1">{name}</h3>
        <p className="text-[10px] tracking-[0.12em] text-solar-dark font-accent uppercase mb-3">{notes}</p>
        <p className="text-xs text-charcoal/50 font-body font-light leading-relaxed mb-2 line-clamp-2">{desc}</p>

        <div className="flex items-center gap-2 text-nile-dark/50 text-[10px] tracking-wider uppercase font-accent my-2">
          <MapPin size={10} className="text-solar/70" />
          <span>{t['shop.handpoured']}</span>
        </div>

        {/* Variant selector */}
        <div className="flex gap-1.5 mb-4">
          {(['candle', 'gift', 'sachet'] as Variant[]).map((v) => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`text-[9px] font-accent tracking-wider uppercase px-2.5 py-1.5 border transition-all ${
                selectedVariant === v
                  ? 'border-solar bg-solar/5 text-solar-dark'
                  : 'border-cream-dark text-charcoal/30 hover:border-charcoal/20'
              }`}
            >
              {variantLabels[v]}
            </button>
          ))}
        </div>

        {/* Price + Add to cart */}
        <div className="flex items-center justify-between">
          <span className="font-display text-lg text-charcoal">{formatPrice(price)}</span>
          <button
            onClick={() => onAddToCart({
              id: product.id,
              name,
              variant: variantLabels[selectedVariant],
              price,
              image: product.image,
            })}
            className="flex items-center gap-2 bg-nile text-cream text-[10px] font-accent tracking-[0.15em] uppercase px-4 py-2.5 hover:bg-nile-light transition-colors"
          >
            <ShoppingBag size={12} />
            {t['product.addToCart']}
          </button>
        </div>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 mt-4 text-[10px] text-charcoal/30 hover:text-charcoal/60 font-accent tracking-wider uppercase transition-colors w-full"
        >
          {t['product.details']}
          {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>

        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="mt-3 pt-3 border-t border-cream-dark space-y-3"
          >
            <div>
              <h5 className="text-[10px] font-accent tracking-wider uppercase text-charcoal/50 mb-1 flex items-center gap-1">
                <Leaf size={10} /> {t['product.ingredients']}
              </h5>
              <p className="text-xs text-charcoal/40 font-body leading-relaxed">{ingredients}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export const ShopSection: React.FC<Props> = ({ lang, formatPrice, onAddToCart }) => {
  const t = translations[lang];
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [filter, setFilter] = useState<string>('all');

  const collections = [
    { key: 'all', label: 'All' },
    { key: 'nile', label: t['collections.nile'] },
    { key: 'alpine', label: t['collections.alpine'] },
  ];

  const filtered = filter === 'all' ? products : products.filter(p => p.collection === filter);

  return (
    <section id="shop" className="relative py-24 md:py-32 bg-cream">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-5" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-solar text-[11px] tracking-[0.4em] uppercase font-accent font-light">
            — {t['featured.label']} —
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-normal text-charcoal mt-3 tracking-wide">
            {t['featured.title']}
          </h2>
          <p className="text-charcoal/40 font-body font-light text-sm mt-3 max-w-lg mx-auto">
            {t['featured.subtitle']}
          </p>
        </motion.div>

        {/* Collection filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {collections.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-5 py-2 text-[10px] tracking-[0.18em] uppercase font-accent border transition-all duration-300 ${
                filter === c.key
                  ? 'border-solar bg-solar/10 text-charcoal'
                  : 'border-cream-dark bg-white text-charcoal/40 hover:border-solar/30'
              }`}
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              lang={lang}
              formatPrice={formatPrice}
              onAddToCart={onAddToCart}
              delay={i * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
