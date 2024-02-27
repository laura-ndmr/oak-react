import React from 'react';
import Navbar from './components/navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/home.js';
import AboutUs from './components/pages/aboutus.js';
import Services from './components/pages/services.js';
import Contact from './components/pages/contact.js';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/aboutus' element={<AboutUs />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
