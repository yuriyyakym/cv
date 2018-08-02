import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/shared/section';
import './styles.css';

const OwnProjects = ({ values }) => (
  <Section className='cv-own-projects' title='Own projects'>
    {values.map((project) => (
      <div className='project'>
        <div className='details'>
          <div>{project.name}</div>
          <a href={project.website}>{project.website}</a>
        </div>
        <div>
          {project.description}
        </div>
      </div>
    ))}
  </Section>
);

OwnProjects.propTypes = {
  values: PropTypes.array
};

export default OwnProjects;
