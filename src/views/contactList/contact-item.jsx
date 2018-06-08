import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { IconButton, Subtitle, Label, Copy } from '../../components';

// TODO: Possibly more performant if the store is passed instead of these props
const ContactItem = ({
  id, name, phone, email, favourited, history, toggleFavorite
}) => (
  <li className="contact-item">
    <div className="name-bar">
      <Subtitle>{name}</Subtitle>
      <div>
        <IconButton
          icon="pencil"
          onClick={() => {
            history.push(`/edit/${id}`);
          }}
        />
        <IconButton icon="heart" highlighted={favourited} onClick={() => toggleFavorite(id)} />
      </div>
    </div>
    <Label>phone</Label> <Copy>{phone || 'none'}</Copy>
    <br />
    <Label>email</Label> <Copy>{email || 'none'}</Copy>
    {/* <p>{favourited ? 'FAV' : 'HATE'}</p> */}
  </li>
);
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  email: PropTypes.string,
  favourited: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

ContactItem.defaultProps = {
  phone: '',
  email: ''
};

export default withRouter(ContactItem);
