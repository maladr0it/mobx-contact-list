import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

const FormInput = ({ className, error, ...props }) => (
  <div className={`form-input ${className}`}>
    <Field className={`field ${error ? 'error' : ''}`} {...props} />
    <span className="error-message">{error}</span>
  </div>
);

FormInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string
};

FormInput.defaultProps = {
  className: '',
  error: null
};

export default FormInput;
