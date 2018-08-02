import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Skills = ({ name, surname, title }) => (
  <div className='cv-header'>
    <h1 className='full-name'>{name} {surname}</h1>
    <h4 className='title'>{title}</h4>
  </div>
);

Skills.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Skills;
