import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Profile from './components/Profile';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/profile">ABOUT</Link>
          <Link to="/portfolio">EXPERIENCE</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/portfolio" component={Experience} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
