import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/shared/section';

const AboutMe = ({ description }) => (
  <Section title='About me'>
    I specialize in JavaScript-based applications development, mostly in
    frontend area, but also have lots of experience in backend. I am keen
    to work with Angular, Vue.js or Node.js.
  </Section>
);

AboutMe.propTypes = {
  description: PropTypes.string
};

export default AboutMe;
