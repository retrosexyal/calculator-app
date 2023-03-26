import styled from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  padding: 10px;
`;

export const StyledCalculator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;

export const StyledHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  border-left: 1px solid ${({ theme }) => theme.colors.text};
`;

export const StyledDisplay = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  width: 90%;
`;
