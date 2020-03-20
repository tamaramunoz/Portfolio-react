import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home" className="navbar-brand">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">Perfil</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">Portafolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/experience" className="nav-link">Experiencia</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
    </Router>

  );
}

export default App;
