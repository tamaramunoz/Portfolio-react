import React from 'react';
import github from '../images/contactCard-github.png';
import linkedin from '../images/contactCard-linkedin.png';

const Contact = () => {

  return (
    <div className="contact-container">
      <h2 className="subtitle">Contacto</h2>
      <div>
        <p className="contactDescription">
            Si te gustó mi trabajo o quieres conocer más acerca de <br />
          mi experiencia como front, ¡Contáctame!</p>
      </div>

      <div>
        <div >
          <div>
            <a href="https://github.com/tamaramunoz" target="blank">
              <img src={github} alt="Github" className="img-contact" />
            </a>
            <div>
              <a href="https://github.com/tamaramunoz" target="blank">
                <button className="btn-contact">Github</button>
              </a>
            </div>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/tamara-munoz-zamora/" target="blank">
              <img src={linkedin} alt="LinkedIn" className="img-contact" />
            </a>
            <div>
              <a href="https://www.linkedin.com/in/tamara-munoz-zamora/" target="blank">
                  <button className="btn-contact">LinkedIn</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
