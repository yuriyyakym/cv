import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Contact = ({ phone, email, linkedin, stackoverflow }) => (
  <div className='cv-contact'>
      <div className='contact-row'>
        <div className='contact-name'>Phone</div>
        <a href={`tel:${phone}`}>{phone}</a>
      </div>

      <div className='contact-row'>
        <div className='contact-name'>Email</div>
        <a href={`mailto:${email}`}>{email}</a>
      </div>

      <div className='contact-row'>
        <div className='contact-name'>Linkedin</div>
        <a target='__blank' href={linkedin}>{linkedin}</a>
      </div>

      <div className='contact-row'>
        <div className='contact-name'>Stack Overflow</div>
        <a target='__blank' href={stackoverflow}>{stackoverflow}</a>
      </div>
  </div>
);

Contact.propTypes = {
  email: PropTypes.string,
  linkedin: PropTypes.string,
  phone: PropTypes.string
};

export default Contact;
