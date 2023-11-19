import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter, Route y Routes
import App from './App';
import Studio from './layouts/Studio'
import './index.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
