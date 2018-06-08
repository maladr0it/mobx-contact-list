import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

import { Label, FormInput, FormSubmit } from '../../components';

// a re-usable component for entering information for new or existing contacts
const ContactDetailForm = ({
  name, phone, email, favourited, onSubmit
}) => (
  <Formik
    initialValues={{
      name,
      phone,
      email,
      favourited
    }}
    validate={(values) => {
      const errors = {};
      if (!values.name.trim()) {
        errors.name = 'Required';
      }
      // If email has a value, validate its format
      if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format';
      }
      return errors;
    }}
    onSubmit={(values, actions) => {
      actions.resetForm();
      onSubmit(values);
    }}
    // TODO: prettier messes up formatting here
    render={({
 isValid, errors, touched, values
}) => (
  <Form className="contact-detail-form" autoComplete="off">
    <Label>name*</Label>
    <FormInput autoFocus type="text" name="name" error={touched.name && errors.name} />
    <Label>phone</Label>
    <FormInput type="text" name="phone" />
    <Label>email</Label>
    <FormInput type="text" name="email" error={touched.email && errors.email} />
    <div className="submit-bar">
      <div className="favorite-box">
        <Label>favorite</Label>
        <Field type="checkbox" name="favourited" checked={values.favourited} />
      </div>
      <FormSubmit value="OK" disabled={!isValid} />
    </div>
  </Form>
    )}
  />
);

ContactDetailForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  favourited: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};

ContactDetailForm.defaultProps = {
  name: '',
  phone: '',
  email: '',
  favourited: false
};

export default ContactDetailForm;
