import React from 'react';
import { withRouter } from 'react-router-dom';

import { Column, Title, IconButton, ContactDetailForm } from '../../components';
// import ContactForm from './contactForm';

const AddContact = ({ store, history }) => (
  <Column>
    <IconButton
      icon="arrow-left"
      onClick={() => {
        history.push('/');
      }}
    />
    <Title>Add a new contact</Title>
    <ContactDetailForm
      onSubmit={(values) => {
        store.addContact(values);
        history.push('/');
      }}
    />
  </Column>
);

export default withRouter(AddContact);
