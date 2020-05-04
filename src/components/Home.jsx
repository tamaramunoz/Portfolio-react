import React, { Fragment } from 'react'
import Background from '../images/fondo-home.png'
import CVTamara from '../images/Tamara-2020.pdf'

let sectionStyle = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${Background})`
  };

const Home = () => {
    return (
        <Fragment>
            <div style={ sectionStyle } className="home-container">
                <h2 className="hi">Hola!</h2>
                <h1 className="im">soy Tamara Muñoz</h1>
                <h3 className="front"> Front-end Developer </h3>

                <a href={CVTamara} target="blank">
                    <button className="btn-cv">Ver Curriculum</button>
                </a>

            </div>
        </Fragment>
    );
}

export default Home;
