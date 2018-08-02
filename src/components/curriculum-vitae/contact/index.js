import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Contact = ({ values }) => (
  <div className='cv-contact'>
    {values.map(([ contactName, contactValue ]) => (
      <div className='contact-row'>
        <div className='contact-name'>
          {contactName}
        </div>
        {contactValue}
      </div>
    ))}
  </div>
);

Contact.propTypes = {
  values: PropTypes.array
};

export default Contact;
