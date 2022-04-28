import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TelegramWebApp } from 'react-telegram-webapp';
import './fonts/FuturaFuturis/style.css';

async function validateHash(hash) {
  const response = {
    ok: true
  }
  
  return response.ok;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TelegramWebApp validateHash={validateHash}>
    <App />
  </TelegramWebApp>
);
