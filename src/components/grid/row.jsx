import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ children, className }) => (
  <div className={`grid row ${className}`}>{children}</div>
);

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  className: PropTypes.string
};

Row.defaultProps = {
  className: '',
  children: null
};

export default Row;
