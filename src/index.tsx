import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout/Layout';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Layout/>
    </React.StrictMode>
  );
} else {
  console.error('Root element not found. Please ensure there is an element with id="root" in your HTML.');
}

reportWebVitals();
