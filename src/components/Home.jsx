import React, { Fragment, useState } from 'react'
import Background from '../images/fondo-home.png'
import CVTamara from '../images/Tamara-2020.pdf'
import { Button } from 'react-bootstrap'
import './Home.scss'

import { useTransition, animated } from 'react-spring'

let sectionStyle = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${Background})`
};

const Home = () => {

    const [isVisible, setIsVisible] = useState(false);
    const transition = useTransition(isVisible, (p) => p, {
        from: { x: -100, y: 800, opacity: 0, background: 'lightpink'},
        enter: { x: 0, y: 0, opacity: 1 },
        leave: { x: 100, y: 800, opacity: 0 },
    });


    return (
        <Fragment>
            <div style={sectionStyle} className="home-container">
                <h2 className="hi">Hola!</h2>
                <h1 className="im">soy Tamara Muñoz</h1>
                <h3 className="front"> Front-end Developer </h3>

                <a href={CVTamara} target="blank">
                    <button className="btn-cv">Ver Curriculum</button>
                </a>

                <Button variant="primary" onClick={() => setIsVisible(v => !v)} >
                    Hola
                </Button>

                <div>
                    {
                        transition.map(({item, props, key}) =>
                            item ? <animated.div style={props} key={key} >Si estoy visible</animated.div> : null
                        )
                    }
                </div>

            </div>
        </Fragment>
    );
}

export default Home;
