import React, { Component } from 'react';
import { DisplayCC } from '@components/display';
import { KeypadCC } from '@components/keypad';
import { HistoryCC } from '@components/history';
import { StyledCalculator, StyledHome, StyledHistory, StyledDisplay } from './styled';

/* eslint-disable-next-line react/prefer-stateless-function */
export class HomeCC extends Component {
  render() {
    return (
      <StyledHome>
        <StyledCalculator>
          <StyledDisplay>
            <DisplayCC />
          </StyledDisplay>
          <KeypadCC />
        </StyledCalculator>
        <StyledHistory>
          <HistoryCC />
        </StyledHistory>
      </StyledHome>
    );
  }
}
