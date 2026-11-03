import React from 'react';
import './Portfolio.css';

const projectsData = [
  {
    id: 1,
    title: "Game Club",
    tech: "React, Firebase, SASS, Flexbox",
    description: "Social network to find friends with video game interests similar to yours.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    deployUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "Tetris Game",
    tech: "React-Hooks, Heroku, CSS3, Flexbox",
    description: "Tetris, an all-time classic game, where you can advance through levels and increase the speed to test your skill in fitting the tetrominoes.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    deployUrl: "#",
    repoUrl: "#"
  },
  {
    id: 3,
    title: "Portafolio",
    tech: "React-Hooks, HTML5, CSS3, Bootstrap, Firebase",
    description: "Personal portfolio where I provide information about my professional profile and the projects I have developed.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    deployUrl: "#",
    repoUrl: "#"
  },
  {
    id: 4,
    title: "Burger Queen",
    tech: "ReactJS, HTML5, CSS3, Bootstrap, Firebase",
    description: "Interface for tablets, used to manage orders in restaurants from the waiter to the kitchen.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    deployUrl: "#",
    repoUrl: "#"
  },
  {
    id: 5,
    title: "Pet Places",
    tech: "React-Hooks, HTML5, CSS3, Bootstrap, Firebase, API: Here Maps",
    description: "Here Company Project, where we use the company's maps to create a social network with an inclusive approach.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80",
    deployUrl: "#",
    repoUrl: "#"
  }
];

const Portfolio = () => {
  return (
    <div className="exp-port-container">
      <h2 className="section-main-title">EXPERIENCE</h2>

      <div className="job-card">
        <div className="job-header">
          <span className="job-company" style={{ fontWeight: 'bold' }}>G &gt; Globant</span>
        </div>
        <p className="job-date">june 2021 - present</p>
        <h3 className="job-role">Frontend developer</h3>
        <ul className="job-duties">
          <li>Create functionality using React, Next & NodeJs.</li>
          <li>Create new components using React & Styled components.</li>
          <li>Unit testing with Jest & Enzyme.</li>
          <li>Endpoints in NodeJs & RxJs.</li>
          <li>Code Review (Bitbucket).</li>
          <li>Documentation in Confluence.</li>
        </ul>
      </div>

      <div className="job-card">
        <div className="job-header">
          <span className="job-company" style={{ fontWeight: 'bold' }}>Genomawork</span>
        </div>
        <p className="job-date">august 2020 - june 2021</p>
        <h3 className="job-role">Frontend developer</h3>
        <p style={{ fontFamily: 'Sen', color: '#fff', marginBottom: '1rem' }}>Giving functionality to components using React and Redux.</p>
        <p style={{ fontFamily: 'Sen', color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>Some of my duties:</p>
        <ul className="job-duties">
          <li>Creating new features using React Hooks.</li>
          <li>Refactoring some old views using Hooks instead of Class Components.</li>
          <li>QA for new features (Gitlab).</li>
          <li>Code review.</li>
          <li>Documenting in Notion.</li>
          <li>UI: Creating and designing components using Sass, CSS3, Flexbox and Media Query for responsiveness. As UI framework I use Ant Design and Bootstrap. Mockups using Figma and Photoshop.</li>
        </ul>
      </div>

      {/* SECCIÓN PORTAFOLIO */}
      <h2 className="portfolio-section-title">Portafolio</h2>
      <p className="portfolio-subtitle-desc">
        You can learn more about the projects in this section one by one by viewing their deploy or repository. Developed with technologies such as Javascript, HTML5, CSS3, NodeJS, React, Bootstrap, Firebase, and others.
      </p>

      {/* LISTA DE PROYECTOS */}
      {projectsData.map((project, index) => {
        const isEven = index % 2 === 1;
        return (
          <div key={project.id} className={`project-card ${isEven ? 'reverse' : ''}`}>
            <div className="project-info">
              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-arrow">{isEven ? '<' : '>'}</span>
              </div>
              <p className="project-tech">{project.tech}</p>
              <p className="project-desc">{project.description}</p>
              <div className="project-buttons">
                <a href={project.deployUrl} className="proj-btn" target="_blank" rel="noreferrer">View deploy</a>
                <a href={project.repoUrl} className="proj-btn" target="_blank" rel="noreferrer">View repository</a>
              </div>
            </div>
            <div className="project-img-container">
              <img src={project.image} alt={project.title} className="project-screenshot" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;