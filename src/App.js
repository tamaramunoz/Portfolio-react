import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import icono from './images/icono-portafolio.png'
import Home from './components/Home'
import Profile from './components/Profile';
import Experience from './components/Experience';
import Contact from './components/Contact';


function App() {
  return (
    <Fragment>
      <Router>
        <Navbar className="nav" expand="lg">
          <Navbar.Brand href="/"><img src={icono} alt="logo" width={64} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/portfolio" component={Experience} />
        <Route path="/contact" component={Contact} />

      </Router>
    </Fragment>
  );
}

export default App;
