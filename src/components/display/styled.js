import styled from 'styled-components';

export const StyledDisplay = styled.input`
  border: 0;
  width: 100%;
  heigth: 100%;
  text-align: right;
  padding: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
`;
