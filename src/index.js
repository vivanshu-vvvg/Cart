
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import img from './img/shopping-trolley-with-little-snooze_23-2147957113.avif';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div style={{ backgroundImage:`url(${img})` ,marginRight:'100px'}}>
    <div style={{marginLeft:'100px'}}>
      <App />
    </div>
  </div>
  </React.StrictMode>
);


