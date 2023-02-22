import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'remixicon/fonts/remixicon.css'

const Root = createRoot(document.getElementById('root'));

Root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
