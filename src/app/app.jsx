import React from 'react';

import './app.scss';
import { Column, Row, Title, Button } from '../components';

const onAddClick = () => {
};

const App = () => (
  <Column className="app">
    <Row><Title>Contact Book</Title></Row>
    <Row><Button label="Add Contact" onClick={onAddClick} /></Row>
  </Column>
);

export default App;
