import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import InscriptionForm from './pages/InscriptionForm';
import Gate from './pages/Gate';
import Header from './components/Header';
import Error from './pages/Error';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gate" element={<Gate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/InscriptionForm" element={<InscriptionForm />} />
        <Route path = "*" element ={<Error />} /> 
    </Routes>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
