import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Success } from './pages/Success';
import { Cancel } from './pages/Cancel';

const path = window.location.pathname;
const root = createRoot(document.getElementById('root')!);

if (path === '/success') {
  root.render(<StrictMode><Success /></StrictMode>);
} else if (path === '/cancel') {
  root.render(<StrictMode><Cancel /></StrictMode>);
} else {
  root.render(<StrictMode><App /></StrictMode>);
}
