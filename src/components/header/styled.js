import styled from 'styled-components';
import { media } from '@constants/mediaQueries';

export const StyledHeader = styled.div`
  display: flex;
  height: 10vh;
  background: ${({ theme }) => theme.colors.headerBackground};
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: none;
  @media (${media.laptopS}) {
    gap: 5px;
  }
  @media (${media.mobile}) {
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
    position: absolute;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.headerBackground};
    left: 65%;
    top: 40px;
    padding: 5px;
    z-index: 10;
  }
`;

export const StyledH1 = styled.h1`
  background: none;
  color: ${({ theme }) => theme.colors.link};
`;

export const StyledBurger = styled.div`
  display: none;
  @media (${media.mobile}) {
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.headerBackground};
  }
`;

export const StyledBurgerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.link};
  border-radius: 3px;
  transition: transform 0.3s, opacity 0.3s;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: ${({ theme }) => theme.colors.link};
    border-radius: inherit;
    transition: transform 0.3s, opacity 0.3s;
  }

  &::before {
    transform: translateY(-8px);
  }
  &::after {
    transform: translateY(8px);
  }
`;
