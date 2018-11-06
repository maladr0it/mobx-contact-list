import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import { Column, Button, Label, SearchBox } from '../../components';
import ContactItem from './contact-item';

const ContactList = ({ store, history }) => (
  <Column className="contact-list-view">
    {console.log(store)}
    <div className="search-controls">
      <SearchBox
        type="text"
        placeholder="filter by name..."
        value={store.nameFilter}
        onChange={(e) => {
          store.nameFilter = e.target.value;
        }}
      />
      <div className="favorites-box">
        <Label>Favorites only</Label>
        <input
          type="checkbox"
          checked={store.favoriteFilter}
          onChange={(e) => {
            store.favoriteFilter = e.target.checked;
          }}
        />
      </div>
    </div>
    <Button onClick={() => history.push('/add')}>Add Contact</Button>
    <ul className="contact-list">
      {store.filteredContacts.map(contact => (
        <ContactItem key={contact.id} {...contact} toggleFavorite={store.favoriteContactToggle} />
      ))}
    </ul>
  </Column>
);

ContactList.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  store: PropTypes.shape({
    contacts: PropTypes.any.isRequired
  }).isRequired
};

export default withRouter(observer(ContactList));
