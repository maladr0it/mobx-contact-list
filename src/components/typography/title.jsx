import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children, className }) => (
  <h1 className={`typography title ${className}`}>{children}</h1>
);

Title.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

Title.defaultProps = {
  className: ''
};

export default Title;
