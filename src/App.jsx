import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import About from './components/about';
import Contact from './components/contacts';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Services from './components/services';
import Projects from './components/projects';
import PortfolioDetails from './details/portfoliodetails';

function App() {

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/:id' element={<PortfolioDetails />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
