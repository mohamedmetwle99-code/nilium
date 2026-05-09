import React from 'react';
import type { Language } from '../i18n';

interface Props {
  current: Language;
  onChange: (lang: Language) => void;
}

const langLabels: Record<Language, string> = {
  en: 'EN',
  de: 'DE',
};

export const LanguageSwitcher: React.FC<Props> = ({ current, onChange }) => (
  <div className="flex items-center gap-1 text-xs tracking-[0.15em] font-accent">
    {(['en', 'de'] as Language[]).map((lang, i) => (
      <React.Fragment key={lang}>
        {i > 0 && <span className="opacity-30 mx-0.5">|</span>}
        <button
          onClick={() => onChange(lang)}
          className={`transition-all duration-300 px-1 py-0.5 ${
            current === lang
              ? 'text-solar font-medium'
              : 'text-current opacity-50 hover:opacity-100'
          }`}
        >
          {langLabels[lang]}
        </button>
      </React.Fragment>
    ))}
  </div>
);
