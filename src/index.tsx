import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as PIXI from 'pixi.js';
import App from './App';
import { init as initPB } from '@utils/pb';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

window.PIXI = PIXI;

async function beforeRender() {
  await initPB();
}

async function init() {
  await beforeRender();

  root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );
}

init();

