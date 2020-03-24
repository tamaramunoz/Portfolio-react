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
            <div>
                <h2 className="subtitle">Contacto</h2>

                <div className="contactInfo">
                    <p className="contactDescription">Puedes encontrarme en las siguientes redes:</p>

                    <div className="carousel-contact responsive">
                        <Carousel activeIndex={index} onSelect={handleSelect}>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={gmail}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="contactCard">Correo</h3>
                                    <a 
                                        href="https://mail.google.com/mail/u/0/#inbox" 
                                        target="blank"
                                    > tami.skt@gmail.com </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={github}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="contactCard">GitHub</h3>
                                    <a 
                                        href="https://github.com/tamaramunoz" 
                                        target="blank"
                                        
                                    > /tamaramunoz </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={linkedin}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="contactCard">LinkedIn</h3>
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
