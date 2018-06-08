import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ className, placeholder, ...props }) => (
  <input className={`search-box ${className}`} placeholder={placeholder} {...props} />
);

export default SearchBox;

SearchBox.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string
};

SearchBox.defaultProps = {
  className: '',
  placeholder: ''
};
