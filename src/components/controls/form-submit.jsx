import React from 'react';
import PropTypes from 'prop-types';

const FormSubmit = ({ className, ...props }) => (
  <input className={`button ${className}`} type="submit" {...props} />
);

export default FormSubmit;

FormSubmit.propTypes = {
  className: PropTypes.string
};

FormSubmit.defaultProps = {
  className: ''
};
