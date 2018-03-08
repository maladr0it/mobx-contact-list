import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-evil-icons';

const IconButton = ({ icon, onClick }) => (
  <Icon name={`ei-${icon}`} size="1" onClick={onClick} />
);

IconButton.propTypes = {
  icon: PropTypes.oneOf([
    'plus',
    'heart',
    'clock'
  ]).isRequired,
  onClick: PropTypes.func.isRequired
};

export default IconButton;
