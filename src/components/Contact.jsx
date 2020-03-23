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
                    <p>Puedes encontrarme en las siguientes redes:</p>

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
                                    <p>tami.skt@gmail.com</p>
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
                                    <a href="https://github.com/tamaramunoz" target="blank"> /tamaramunoz </a>
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
                                    <a href="https://www.linkedin.com/in/tamara-munoz-zamora/" target="blank"> /tamara-munoz-zamora </a>
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
