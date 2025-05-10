import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Only use StrictMode in development to avoid double-rendering in production
const AppWithStrictMode = process.env.NODE_ENV === 'development' ? (
  <React.StrictMode>
    <App />
  </React.StrictMode>
) : <App />;

// Create root with concurrent features
const root = createRoot(document.getElementById('root'));

// Deferred rendering to allow browser paint
setTimeout(() => {
  root.render(AppWithStrictMode);
}, 0);

