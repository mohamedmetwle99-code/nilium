import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Success } from './pages/Success';
import { Cancel } from './pages/Cancel';
import { NotFound } from './pages/NotFound';
import { Journal } from './pages/Journal';
import { JournalArticle } from './pages/JournalArticle';

const path = window.location.pathname;
const root = createRoot(document.getElementById('root')!);

if (path === '/success') {
  root.render(<StrictMode><Success /></StrictMode>);
} else if (path === '/cancel') {
  root.render(<StrictMode><Cancel /></StrictMode>);
} else if (path === '/journal') {
  root.render(<StrictMode><Journal /></StrictMode>);
} else if (path.startsWith('/journal/')) {
  const slug = path.split('/').filter(Boolean)[1];
  root.render(<StrictMode><JournalArticle slug={slug} /></StrictMode>);
} else if (path === '/' || path === '') {
  root.render(<StrictMode><App /></StrictMode>);
} else {
  root.render(<StrictMode><NotFound /></StrictMode>);
}
