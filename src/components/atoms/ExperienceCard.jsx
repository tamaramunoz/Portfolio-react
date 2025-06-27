import React from 'react'
import jobsData from '../../jobsData';

const ExperienceCard = () => {
  return (
    <div>
      {jobsData
        .sort((a, b) => b.order - a.order)
        .map((job, index) => (
          <div key={index} className="experience-card">
            <div className='experience-card-header'>
              <img src={job.logo} alt={`Logo de ${job.companyName}`} className='company-logo' />
              <p className='company-name'>{job.companyName}</p>
            </div>
            <div className='experience-card-content'>
              <p className='duration'>{job.workDuration}</p>
              <p className='role'>{job.role}</p>
              <p className='description'>{job.workDescription}</p>
            </div>
          </div>
      ))}
    </div>
  );
}

export default ExperienceCard;