import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-evil-icons';

const IconButton = ({
  icon, onClick, highlighted, className
}) => (
  <button className={`icon-button ${highlighted ? 'red' : ''} ${className}`} onClick={onClick}>
    <Icon name={`ei-${icon}`} size="1" />
  </button>
);

IconButton.propTypes = {
  icon: PropTypes.oneOf(['plus', 'heart', 'clock', 'pencil', 'arrow-left']).isRequired,
  highlighted: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

IconButton.defaultProps = {
  className: '',
  highlighted: false
};

export default IconButton;
