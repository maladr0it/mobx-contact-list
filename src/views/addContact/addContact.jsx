import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Column, Title, ContactDetailForm } from '../../components';
// import ContactForm from './contactForm';

const AddContact = ({ store, history }) => {
  const handleSubmit = (values) => {
    store.addContact({ ...values });
    history.push('/');
  };
  return (
    <Column>
      <Link to="/">Back</Link>
      <Title>Add a new contact</Title>
      <ContactDetailForm onSubmit={values => handleSubmit(values)} />
    </Column>
  );
};

export default withRouter(AddContact);
