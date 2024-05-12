import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from'./home';
import Culto from './culto';
import Selecao from './selecao';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState, useEffect } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Selecao />} />
      <Route path="/Culto" element={<Culto />} />
      <Route path="/selecao" element={<Culto   />} />
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
