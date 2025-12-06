import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'typeface-nunito';
import 'prism-themes/themes/prism-atom-dark.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import './components/layout.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
