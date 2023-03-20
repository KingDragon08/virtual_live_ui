import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as PIXI from 'pixi.js';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

window.PIXI = PIXI;

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
