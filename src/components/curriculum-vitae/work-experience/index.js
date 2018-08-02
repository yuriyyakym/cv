import React from 'react';
import PropTypes from 'prop-types';
import Section from 'components/shared/section';
import CompanyDetails from './company-details';

const WorkExperience = ({ values }) => (
  <Section title='Work experience'>
    {values.map((value) => (
      <CompanyDetails details={value} />
    ))}
  </Section>
);

WorkExperience.propTypes = {
  values: PropTypes.array
};

export default WorkExperience;
