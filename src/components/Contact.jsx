import React, { Fragment, useState } from 'react';
import img from '../images/logo.png'
import { Carousel } from 'react-bootstrap'



const Contact = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Fragment>
            <div>
                <h2 className="subtitle">Contacto</h2>

                <div className="contactInfo">
                    <p>Puedes encontrarme en las siguientes redes!</p>

                    <div className="carousel-contact">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Correo</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>GitHub</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={img}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>LinkedIn</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Contact;
