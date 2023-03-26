import styled from 'styled-components';
import { media } from '@constants/mediaQueries';

export const StyledHistory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  max-height: 60vh;
  margin-top: 20px;
  max-width: 100px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 10px; 
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aaa; 
    border-radius: 5px; 
  }

  @media (${media.laptopS}) {
    max-width: 70px;
  }
  @media (${media.mobile}) {
    max-width: 50px;
  }
`;

export const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  @media (${media.laptopL}) {
    font-size: 1.5rem;
  }
  @media (${media.mobile}) {
    font-size: 1rem;
  }
`;
