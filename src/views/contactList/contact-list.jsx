import React from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import { Column, Button } from '../../components';
import Contact from './contact';

const ContactList = observer(({ store, history }) => (
  <Column className="contact-list-view">
    <Button onClick={() => history.push('/add')}>Add Contact</Button>
    <p>Length: {store.numContacts}</p>
    <ul className="contact-list">
      {store.contacts.map(contact => <Contact key={contact.id} {...contact} />)}
    </ul>
  </Column>
));
export default withRouter(ContactList);
