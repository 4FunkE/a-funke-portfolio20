import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your global CSS styles
import App from './App'; // Import your main application component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
);