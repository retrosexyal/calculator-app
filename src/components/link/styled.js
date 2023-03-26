import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: ${({theme})=>theme.colors.link};
  text-decoration: none;
  background: none;
  opacity: .7;

  &.active {
    text-decoration: underline;
    text-underline-offset: 4px;
    opacity: 1;
  }
`;