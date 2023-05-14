import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { FullScreenProvider } from './context/FullScreenCtx.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FullScreenProvider>
      <App />
    </FullScreenProvider>
  </React.StrictMode>
);
