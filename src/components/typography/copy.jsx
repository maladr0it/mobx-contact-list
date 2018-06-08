import React from 'react';
import PropTypes from 'prop-types';

const Copy = ({ children, className }) => (
  <span className={`typography copy ${className}`}>{children}</span>
);

Copy.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

Copy.defaultProps = {
  className: ''
};

export default Copy;
