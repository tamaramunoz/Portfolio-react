import React from 'react'
import Background from '../images/fondo-home.png'

let sectionStyle = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${Background})`
  };

const Home = () => {
  return (
    <div style={ sectionStyle } className="home-container">
      <h2 className="hi">Hola!</h2>
      <h1 className="im">soy Tamara Muñoz</h1>
      <h3 className="front"> Front-end Developer </h3>
    </div>
  );
}

export default Home;
