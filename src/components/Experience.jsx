import React from 'react';
import '../App.css';

const Experience = () => {
  return (
    <div className='section'>
      <h2 className="subtitle">EXPERIENCE</h2>
      <div className="experience-container">
        <p className="experience-text">
          Throughout my journey as a frontend developer, I’ve taken part in challenging projects that have helped me grow both technically and professionally.
          Learn more about my professional path and the experiences that have shaped me.
        </p>
      </div>
        <button className='primary-btn'>Learn more</button>

        <div className='experience-icons'>
          <span className='experience-icons-text'>
            ADAPTABILITY AND <br/> COMMITMENT
          </span>
          <span className='experience-icons-text'>
            EXCHANGE OF IDEAS
          </span>
          <span className='experience-icons-text'>
            COLLABORATION
          </span>
        </div>
    </div>
  );
};

export default Experience;