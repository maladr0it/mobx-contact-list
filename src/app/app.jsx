import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './app.scss';
import { Column, Row, Title, Button } from '../components';
import { ContactList, EditContact, AddContact } from '../views';

import ContactStore from '../contactStore';

// const onAddClick = () => {};

const App = () => (
  <Router>
    <Column className="app">
      {/* <Row>
        <Title>Contact Book</Title>
      </Row> */}
      <Route path="/" exact render={() => <ContactList store={ContactStore} />} />
      <Route path="/add" render={() => <AddContact store={ContactStore} />} />
      <Route path="/edit/:id" component={EditContact} />
    </Column>
  </Router>
);

export default App;
