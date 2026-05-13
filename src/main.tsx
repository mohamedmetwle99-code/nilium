import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Success } from './pages/Success';
import { Cancel } from './pages/Cancel';
import { NotFound } from './pages/NotFound';
import { Journal } from './pages/Journal';
import { JournalArticle } from './pages/JournalArticle';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiePolicy } from './pages/CookiePolicy';
import { Impressum } from './pages/Impressum';
import { detectLanguage } from './i18n';

const path = window.location.pathname;
const root = createRoot(document.getElementById('root')!);

const lang = detectLanguage();

if (path === '/success') {
  root.render(<StrictMode><Success /></StrictMode>);
} else if (path === '/cancel') {
  root.render(<StrictMode><Cancel /></StrictMode>);
} else if (path === '/journal') {
  root.render(<StrictMode><Journal /></StrictMode>);
} else if (path.startsWith('/journal/')) {
  const slug = path.split('/').filter(Boolean)[1];
  root.render(<StrictMode><JournalArticle slug={slug} /></StrictMode>);
} else if (path === '/privacy') {
  root.render(<StrictMode><PrivacyPolicy lang={lang} /></StrictMode>);
} else if (path === '/cookies') {
  root.render(<StrictMode><CookiePolicy lang={lang} /></StrictMode>);
} else if (path === '/impressum') {
  root.render(<StrictMode><Impressum lang={lang} /></StrictMode>);
} else if (path === '/' || path === '') {
  root.render(<StrictMode><App /></StrictMode>);
} else {
  root.render(<StrictMode><NotFound /></StrictMode>);
}
