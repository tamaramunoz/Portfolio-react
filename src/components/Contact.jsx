import React from 'react';

const Contact = () => {

  return (
    <div className="section">
      <div className='contact-container'>
        <h2 className="subtitle">CONTACT</h2>
        <div>
          <p className="contact-description">
              Interested in my work or want to know more about my experience as a frontend developer? <br />
              I'm available to chat, feel free to reach out! 
          </p>
        </div>

        <button
          className='primary-btn'
          onClick={() => window.open('https://www.linkedin.com/in/tamara-munoz-zamora/', '_blank')}
        >Contact</button>
        <div className='btn-contact-section'>
             <div className="btn-contact">
              <a href="https://www.linkedin.com/in/tamara-munoz-zamora/" target="blank">
                LinkedIn
              </a>
            </div>
            <div className="btn-contact">
              <a href="https://github.com/tamaramunoz" target="blank">
                GitHub
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
