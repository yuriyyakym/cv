import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import './styles.css';

const DATE_FORMAT = 'MMM YYYY';

const CompanyDetails = ({ details }) => (
  <div className='company-details'>
    <div className='main-details'>
      <div className='position'>{details.position}</div>
      <div>
        at <span className='company-name'>{details.companyName}</span>
      </div>
      <a
        className='website'
        target='__blank'
        href={details.website}>
        {details.website}
      </a>
      <div className='period'>
        {moment(details.startDate).format(DATE_FORMAT)}
        &nbsp;-&nbsp;
        {moment(details.endDate).format(DATE_FORMAT)}
      </div>
    </div>

    <div className='projects'>
      {details.details.map((project) => (
        <div className='project'>
          <div>{project.description}</div>
          <div className='technologies'>
            {project.technologies.join(', ')}
          </div>
        </div>
      ))}
    </div>
  </div>
);

CompanyDetails.propTypes = {
  details: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    startDate: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
    website: PropTypes.string,
    position: PropTypes.string,
    details: PropTypes.arrayOf({
      description: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string)
    })
  })
};

export default CompanyDetails;
