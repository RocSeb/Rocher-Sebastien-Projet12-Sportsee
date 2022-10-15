import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/Pages/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import HorizontalNav from './Components/Navigations/HorizontalNav'
import VerticalNav from './Components/Navigations/VerticalNav'
import { useParams } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HorizontalNav />
      <VerticalNav />
      <Routes>
        <Route path="/user/:id" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
