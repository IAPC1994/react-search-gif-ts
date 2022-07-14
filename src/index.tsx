import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SearchGifApp } from './SearchGifApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <SearchGifApp defaultGifs={[]} />
  </React.StrictMode>
);
