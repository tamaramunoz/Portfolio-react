import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Technologies from './components/Technologies';


function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/profile">EXPERIENCE</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/tech" component={Technologies} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
