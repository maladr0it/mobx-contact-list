import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Column, Title, IconButton, ContactDetailForm } from '../../components';

const EditContact = ({ match, store, history }) => {
  const contactId = match.params.id;
  const contactData = store.getContact(contactId);
  return (
    <Column>
      <IconButton
        icon="arrow-left"
        onClick={() => {
          history.push('/');
        }}
      />
      <Title>Edit contact</Title>
      <ContactDetailForm
        {...contactData}
        onSubmit={(values) => {
          store.editContact(contactId, values);
          history.push('/');
        }}
      />
    </Column>
  );
};

EditContact.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  store: PropTypes.shape({
    getContact: PropTypes.func.isRequired,
    editContact: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(EditContact);
