import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import Profile from './components/Profile';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <nav class="menu">
        <ul>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">Perfil</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">Portafolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contacto</Link>
          </li>
        </ul>
      </nav>
      

      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/portfolio" component={Experience} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
