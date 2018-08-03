import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/shared/section';

const AboutMe = ({ value }) => (
  <Section title='About me'>
    {value.map((paragraph) => (
      <div>{paragraph}</div>
    ))}
  </Section>
);

AboutMe.propTypes = {
  description: PropTypes.string
};

export default AboutMe;
