import styled from 'styled-components';
import { media } from '@constants/mediaQueries';

export const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 200px;
  gap: 20px;
  @media (${media.mobile}) {
    width: 100%;
  }
`;

export const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledSelect = styled.select`
  padding: 5px 5px;
  border-radius: 5px;
`;

export const StyledArrow = styled.div`
  position: absolute;
  top: 60%;
  left: 170px;
  width: 0;
  height: 0;
  border-top: 10px solid #333;
  border-right: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  background-color: transparent;
  transform: rotate(${(props) => props.deg}deg);
  transform-origin: top;
  @media (${media.mobile}) {
    left: 80%;
  }
`;

export const StyledList = styled.div`
  position: absolute;
  top: 20px;
  width: 200px;
`;

export const StyledListItem = styled.div`
  border: 1px solid black;
  padding: 10px 5px;
  &:hover{
    background: blue;
    cursor: pointer;
  }
`;

export const StyledSelectWrapper = styled.div`
  position: relative;
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background: ${({ isSelect, theme }) => (isSelect ? theme.colors.background : theme.colors.key)};
  &:hover{
    cursor: pointer;
  }
`;
