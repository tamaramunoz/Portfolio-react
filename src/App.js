import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'



function App() {
  return (
    <Router>
      <button className="navButton">
        <Link to="/home">Home</Link>
      </button>

      <Route path="/home" component={Home} />
    </Router>

  );
}

export default App;
