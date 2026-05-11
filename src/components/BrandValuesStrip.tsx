import React from 'react';
import { Leaf, Flame, Recycle, Waves } from 'lucide-react';
import type { Language } from '../i18n';
import { translations } from '../i18n';

interface Props { lang: Language; }

const values = [
  { Icon: Leaf,    key: 'values.soyWax' },
  { Icon: Flame,   key: 'values.handPoured' },
  { Icon: Recycle, key: 'values.ecoConscious' },
  { Icon: Waves,   key: 'values.nileInspired' },
];

export const BrandValuesStrip: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="bg-nilium-navy py-8">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map(({ Icon, key }) => (
            <div key={key} className="flex flex-col items-center gap-3 text-center">
              <Icon size={22} className="text-nilium-gold" strokeWidth={1.5} />
              <span className="text-nilium-gold text-[11px] font-accent font-bold tracking-[0.12em] uppercase">
                {t[key]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
