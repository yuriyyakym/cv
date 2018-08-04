import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Contact = ({ phone, email }) => (
  <div className='cv-contact'>
      <div className='contact-row'>
        <div className='contact-name'>Phone</div>
        <a href={`tel:${phone}`}>{phone}</a>
      </div>

      <div className='contact-row'>
        <div className='contact-name'>Email</div>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
  </div>
);

Contact.propTypes = {
  email: PropTypes.string,
  linkedin: PropTypes.string,
  phone: PropTypes.string
};

export default Contact;
