import React from 'react';
import PropTypes from 'prop-types';

const resolveButtonLabel = (children, label) => {
  if (typeof children === 'string' && children.length > 0) {
    return children;
  } else if (typeof label === 'string' && label.length > 0) {
    return label;
  }

  return 'Label';
};

const Button = ({
  children, label, onClick, className
}) => (
  <button className={`button ${className}`} onClick={onClick}>
    {resolveButtonLabel(children, label)}
  </button>
);

Button.propTypes = {
  children: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

Button.defaultProps = {
  label: null,
  children: null,
  className: ''
};

export default Button;
