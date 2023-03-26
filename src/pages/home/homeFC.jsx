import React from 'react';
import { DisplayFC } from '@components/display';
import { KeypadFC } from '@components/keypad';
import { HistoryFC } from '@components/history';
import { StyledCalculator, StyledHome, StyledHistory, StyledDisplay } from './styled';

export function HomeFC() {
  return (
    <StyledHome>
      <StyledCalculator>
        <StyledDisplay>
          <DisplayFC />
        </StyledDisplay>
        <KeypadFC />
      </StyledCalculator>
      <StyledHistory>
        <HistoryFC />
      </StyledHistory>
    </StyledHome>
  );
}
