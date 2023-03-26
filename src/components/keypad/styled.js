import styled from 'styled-components';
import { media } from '@constants/mediaQueries';

export const StyledKeypad = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  @media (${media.mobile}) {
    gap: 2px;
  }
`;

export const StyledKeyCont = styled.div`
  display: flex;
  width: 18%;
  justify-content: center;
  align-items: center;
  @media (${media.laptopL}) {
    width: 15%;
  }
  @media (${media.mobile}) {
    width: 18%;
  }
`;
export const StyledKey = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.key};
  opacity: ${(props) => props.opacity};
  @media (${media.laptopL}) {
    width: 50px;
    height: 50px;
  }
  @media (${media.mobile}) {
    width: 30px;
    height: 30px;
  }
`;
