import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ children, className }) => (
  <div className={`grid column ${className}`}>{children}</div>
);

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  className: PropTypes.string
};

Column.defaultProps = {
  className: '',
  children: null
};

export default Column;
