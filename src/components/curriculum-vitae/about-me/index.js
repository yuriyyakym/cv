import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/shared/section';

const AboutMe = ({ description }) => (
  <Section title='About me'>
    I specialize in JavaScript-based applications development, mostly in
    frontend area using React.
    Also have a lot of experience in backend.
  </Section>
);

AboutMe.propTypes = {
  description: PropTypes.string
};

export default AboutMe;
