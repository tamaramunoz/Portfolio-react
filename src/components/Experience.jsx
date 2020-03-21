import React, { Fragment } from 'react'
import '../App.css';
import { Media } from 'react-bootstrap'
import img from '../images/logo.png';


const Experience = () => {

    const isBackgroundWhite = true;

    return (
        <Fragment>
            <div>
                <div className={isBackgroundWhite ? 'background-white' : 'background-blue'}>

                    <h2 className="subtitle">Experiencia</h2>

                    <ul className="list-unstyled">
                        <Media as="li">
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={img}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>List-based media object</h5>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                    fringilla. Donec lacinia congue felis in faucibus.
      </p>
                            </Media.Body>
                        </Media>

                        <Media as="li">
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={img}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>List-based media object</h5>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                    fringilla. Donec lacinia congue felis in faucibus.
      </p>
                            </Media.Body>
                        </Media>

                        <Media as="li">
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={img}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>List-based media object</h5>
                                <p>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                    fringilla. Donec lacinia congue felis in faucibus.
      </p>
                            </Media.Body>
                        </Media>
                    </ul>


                </div>
            </div>
        </Fragment>
    );
}

export default Experience;
