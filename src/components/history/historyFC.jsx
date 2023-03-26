import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledHistory, StyledTitle } from './styled';

export function HistoryFC() {
  const [history, setHistory] = useState([]);
  const historyAction = useSelector((state) => state.calculator.history);

  useEffect(() => {
    if (localStorage.getItem('history')) {
      const hist = JSON.parse(localStorage.getItem('history'));
      setHistory(hist.reverse());
    }
  }, [historyAction]);

  return (
    <div data-test-id="historyFC">
      <StyledTitle>History</StyledTitle>
      <StyledHistory>
        {history.map((command, key) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={key}>{command}</div>
        ))}
      </StyledHistory>
    </div>
  );
}
