import React, { Fragment } from 'react';
import Background from '../images/fondo-home.png';

let sectionStyle = {
    width: "100%",
    height: "700px",
    backgroundImage: `url(${Background})`
  };

const Home = () => {
    return (
        <Fragment>
            <div style={ sectionStyle }>
                <h2 className="subtitle">Hello to Ratsi</h2>
            </div>
        </Fragment>
    );
}

export default Home;