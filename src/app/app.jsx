import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './app.scss';
import { Column } from '../components';
import { ContactList, EditContact, AddContact } from '../views';
import ContactStore from '../contactStore';

const App = () => (
  <Router>
    <Column className="app">
      <Route path="/" exact render={() => <ContactList store={ContactStore} />} />
      <Route path="/add" render={() => <AddContact store={ContactStore} />} />
      <Route path="/edit/:id" render={() => <EditContact store={ContactStore} />} />
    </Column>
  </Router>
);

export default App;
