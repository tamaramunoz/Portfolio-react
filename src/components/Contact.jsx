import React, { Fragment } from 'react';
import gmail from '../images/contactCard-gmail.png'
import github from '../images/contactCard-github.png'
import linkedin from '../images/contactCard-linkedin.png'
import { CardGroup, Card } from 'react-bootstrap'


const Contact = () => {

    return (
        <Fragment>
            <div className="contact-container">
                <h2 className="subtitle">Contacto</h2>
                <div>
                    <p className="contactDescription">
                        Si te gustó mi trabajo o quieres conocer más acerca de mi <br />
                    y mi experiencia como front, ¡Contáctame!</p>
                </div>

                <div>
                    <CardGroup >
                        <Card className="card">
                            <a href="mailto:tami.skt@gmail.com" target="blank" >
                                <img src={gmail} alt="Gmail" className="img-contact" />
                            </a>
                            <Card.Body>
                                <a href="mailto:tami.skt@gmail.com" target="blank">
                                    <button className="btn-contact-gmail">Gmail</button>
                                </a>
                                <Card.Text className="e-mail">
                                    tami.skt@gmail.com
                                 </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <a href="https://github.com/tamaramunoz" target="blank">
                                <img src={github} alt="Github" className="img-contact" />
                            </a>
                            <Card.Body>
                                <a href="https://github.com/tamaramunoz" target="blank">
                                    <button className="btn-contact">Github</button>
                                </a>
                            </Card.Body>
                        </Card>

                        <Card>
                            <a href="https://www.linkedin.com/in/tamara-munoz-zamora/" target="blank">
                                <img src={linkedin} alt="LinkedIn" className="img-contact" />
                            </a>
                            <Card.Body>
                                <a href="https://www.linkedin.com/in/tamara-munoz-zamora/" target="blank">
                                    <button className="btn-contact">LinkedIn</button>
                                </a>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </Fragment>
    );
}

export default Contact;
