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
                <p className="contactDescription">
                    Si te gustó mi trabajo o quieres conocer más acerca de mi <br/>
                    y mi experiencia como front, ¡Contáctame!</p>
                </div>

                <div>
                    <div className="carousel-contact responsive">
                        <Carousel activeIndex={index} onSelect={handleSelect}>

                            <Carousel.Item>
                                <a href="mailto:tami.skt@gmail.com?Subject=Contact%20Tamara" target="blank">
                                    <img
                                        className="d-block "
                                        src={gmail}
                                        alt="Mail"
                                    />
                                </a>
                                <Carousel.Caption>
                                    <a href="https://mail.google.com/mail/u/0/#inbox" target="blank">
                                    </a>
                                    
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <a href="https://github.com/tamaramunoz" target="blank">
                                    <img
                                        className="d-block"
                                        src={github}
                                        alt="Github"
                                    />
                                </a>
                                <Carousel.Caption>
                                    <a href="https://github.com/tamaramunoz" target="blank">
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <a href="https://www.linkedin.com/in/tamara-munoz-zamora/" target="blank">
                                    <img
                                        className="d-block "
                                        src={linkedin}
                                        alt="LindedIn"
                                    />
                                </a>
                                <Carousel.Caption>
                                    <a href="https://www.linkedin.com/in/tamara-munoz-zamora/" target="blank">
                                    </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>
                    </div>
                </div>
                <p className="mail">tami.skt@gmail.com</p>
            </div>
        </Fragment>
    );
}

export default Contact;
