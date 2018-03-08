import React from 'react';
import PropTypes from 'prop-types';

const Subtitle = ({ children, className }) => (
  <h1 className={`typography subtitle ${className}`}>{children}</h1>
);

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

Subtitle.defaultProps = {
  className: ''
};

export default Subtitle;
