import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <button className="burger" onClick={toggleMenu} aria-label="Abrir menú">
            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
            <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          </button>

          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <button onClick={() => scrollToSection('home')} className="nav-btn">HOME</button>
            <button onClick={() => scrollToSection('profile')} className="nav-btn">ABOUT</button>
            <button onClick={() => scrollToSection('experience')} className="nav-btn">EXPERIENCE</button>
            <button onClick={() => scrollToSection('contact')} className="nav-btn">CONTACT</button>
          </div>
        </nav>

      <section id="home"><Home /></section>
      <section id="profile"><Profile /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
      </div>
    </Router>
  );
}

export default App;