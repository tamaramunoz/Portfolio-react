import React, { Fragment, useState } from 'react';
import gmail from '../images/contactCard-gmail.png'
import github from '../images/contactCard-github.png'
import linkedin from '../images/contactCard-linkedin.png'
import { Carousel } from 'react-bootstrap'


const Contact = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Fragment>
            <div className="contact-container">
                <h2 className="subtitle">Contacto</h2>

                <div>
                    <p className="contactDescription">Puedes encontrarme en las siguientes redes:</p>

                    <div className="carousel-contact responsive">
                        <Carousel activeIndex={index} onSelect={handleSelect}>

                            <Carousel.Item>
                                <a href="mailto:tami.skt@gmail.com?Subject=Contact%20Tamara" target="blank">
                                    <img
                                        className="d-block "
                                        src={gmail}
                                        alt="First slide"
                                    />
                                </a>
                                <Carousel.Caption>
                                    <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">
                                        <h3 className="contactCard">Correo</h3>
                                     tami.skt@gmail.com </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <a href="https://github.com/tamaramunoz" target="blank">
                                    <img
                                        className="d-block"
                                        src={github}
                                        alt="Second slide"
                                    />
                                </a>
                                <Carousel.Caption>
                                    <a href="https://github.com/tamaramunoz" target="blank">
                                        <h3 className="contactCard">GitHub</h3>
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <a href="https://www.linkedin.com/in/tamara-munoz-zamora/" target="blank">
                                    <img
                                        className="d-block "
                                        src={linkedin}
                                        alt="Third slide"
                                    />
                                </a>
                                <Carousel.Caption>
                                    <a href="https://www.linkedin.com/in/tamara-munoz-zamora/" target="blank">
                                        <h3 className="contactCard">LinkedIn</h3>
                                    </a>
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
