import React from 'react'
import Profile from './Profile';
import Experience from './Experience';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="home-scroll-container">
      <section id="inicio" className="section">
        <div className="home-container">
          <h2 className="hi">I AM</h2>
          <h1 className="im">TAMARA MUÑOZ</h1>
          <h3 className="front">FRONTEND DEVELOPER</h3>

          <button className='primary-btn'>About me</button>

          <div className='home-description'>
          <hr/>
            <p className='home-description-text'>
              My key soft skills include self-learning, planning, adaptability, attention to detail, and a <br/> 
              strong sense of commitment to everything I do. I'm also a great team player, especially in agile <br/> 
              environments. I believe in the power of collaboration and the exchange of ideas to achieve <br/>
              meaningful goals. I'm fluent in both Spanish and English.
            </p>
          </div>
        </div>
      </section>
      
    
      {/* <section id="sobre-mi"><Profile /></section> */}
      <section id="proyectos" className="section"><Experience /></section>
      <section id="contacto" className="section"><Contact /></section>
    </div>
  );
}

export default Home;
