import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavLink } from './styled';

function Link({ to, text }) {
  return <StyledNavLink to={to}>{text}</StyledNavLink>;
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Link;
