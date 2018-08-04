import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/shared/section';
import './styles.css';

const Skills = ({ skills }) => (
  <Section className='cv-skills' title='Skills'>
    {skills.map(([ category, values ]) => (
      <div className='row'>
        <span className='category'>{category}</span>

        <span className='values'>
          {values.map((value) => (
            <span className='value'>{value}</span>
          ))}
        </span>
      </div>
    ))}
  </Section>
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any))
};

export default Skills;
