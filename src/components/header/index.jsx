import React, { useState, useEffect } from 'react';

import Link from '@components/link';
import { routes } from '@constants/routes';
import { useLocation } from 'react-router-dom';
import { StyledH1, StyledHeader, StyledLinkContainer, StyledBurger, StyledBurgerContent } from './styled';

function Header() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setIsActive(false);
  }, [location]);

  useEffect(() => {
    const resize = () => {
      setIsActive(false);
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <StyledHeader data-test-id="header">
      <StyledH1>Calculator App</StyledH1>
      <StyledBurger>
        <StyledBurgerContent onClick={toggleMenu} />
      </StyledBurger>
      <StyledLinkContainer isActive={isActive}>
        <Link to={routes.HOME_FC} text="HomeFC" />
        <Link to={routes.HOME_CC} text="HomeCC" />
        <Link to={routes.SETTINGS} text="Settings" />
      </StyledLinkContainer>
    </StyledHeader>
  );
}

export default Header;
