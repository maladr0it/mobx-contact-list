import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ children, className }) => (
  <div className={`grid box ${className}`}>{children}</div>
);

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  className: PropTypes.string
};

Box.defaultProps = {
  className: '',
  children: null
};

export default Box;
