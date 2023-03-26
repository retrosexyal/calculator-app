import { createGlobalStyle } from 'styled-components';
import { media } from '@constants/mediaQueries';

export const Global = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
       background: ${({ theme }) => theme.colors.background};
       font-size: 20px;
       color: ${({ theme }) => theme.colors.text};
       @media (${media.laptopS}) {
        font-size: 14px;
      }
      @media (${media.laptopS}) {
        font-size: 12px;
      }
   }
`;
