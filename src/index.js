import 'preline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

console.log.apply(console, ["%c Designed & Built by Federico Gentili ", "color: #ffffff; background: #5850ec; padding:5px 0; border-radius: 5px; font-weight: bold", ])
root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);

reportWebVitals();
