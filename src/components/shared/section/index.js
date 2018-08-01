import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const Section = ({ children, className, title }) => (
  <div className={classNames('x-section', className)}>
    <h3>{title}</h3>
    <div>
      {children}
    </div>
  </div>
);

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string
};

export default Section;
