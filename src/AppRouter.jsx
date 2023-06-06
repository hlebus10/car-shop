import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Header/Main/Main';
import AvailCars from './components/Header/AvailCars/AvailCars';
import Dealers from './components/Header/Dealers/Dealers';
import Reviews from './components/Header/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import About from './components/Footer/About';
import Contact from './components/Footer/Contact';
import NotFound from './components/NotFound/NotFound';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/available-cars" element={<AvailCars />} />
            <Route path="/dealers" element={<Dealers />} />
            <Route path="/about-us" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
