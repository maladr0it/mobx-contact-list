import React from 'react';
import { Link } from 'react-router-dom';

const Contact = ({
  id, name, phone, email
}) => (
  <li>
    <p>name: {name}</p>
    <p>phone: {phone}</p>
    <p>email: {email}</p>
    <p>
      <Link to={`/edit/${id}`}>EDIT</Link>
    </p>
  </li>
);
export default Contact;
