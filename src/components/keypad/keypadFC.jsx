import React, { useEffect, useState, useCallback } from 'react';
import { keys } from '@constants/keys';
import { useDispatch, useSelector } from 'react-redux';
import { inputValueAction } from '@store/actions/inputValueAction';
import { calculatorAction, historyAction } from '@store/actions/calculatorAction';
import { validator } from '@utils/validator';
import { calculate } from '@utils/calculate';
import Calculator from '@utils/calculator';
import { handleHistory } from '@utils/history';
import { StyledKey, StyledKeyCont, StyledKeypad } from './styled';

export function KeypadFC() {
  const [keyPressed, setKeyPressed] = useState('');
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.value);
  const { calculator } = useSelector((state) => state.calculator);

  useEffect(() => {
    dispatch(calculatorAction(new Calculator()));
  }, [dispatch]);

  useEffect(() => {
    if (calculator && localStorage.getItem('history')) {
      JSON.parse(localStorage.getItem('history')).map((val) => calculate(val, calculator));
    }
  }, [calculator]);

  const handleClick = (e) => {
    const key = e.target.innerText;

    if (key.length === 1) {
      dispatch(inputValueAction(validator(value + key)));
    }

    if (key === '=') {
      calculate(value, calculator);
      const history = JSON.stringify(handleHistory(calculator.getHistory()));
      console.log(history);
      console.log(calculator.getHistory());
      dispatch(historyAction(JSON.parse(history)));
      localStorage.setItem('history', history);
      dispatch(inputValueAction(calculator.getResult()));
    }

    if (key === '←') {
      dispatch(inputValueAction(value.slice(0, -1)));
    }

    if (key.toUpperCase() === 'C') {
      dispatch(inputValueAction('0'));
    }

    if (key.toUpperCase() === 'CE') {
      const lastNum = value.match(/(\d+\.?\d*)$/);
      if (lastNum !== null) {
        dispatch(inputValueAction(value.replace(lastNum[0], '')));
      }
    }
    if (key.toUpperCase() === 'UNDO') {
      calculator.undoLastCommand();
      const history = JSON.stringify(handleHistory(calculator.getHistory()));
      dispatch(historyAction(JSON.parse(history)));
      localStorage.setItem('history', history);
      dispatch(inputValueAction(calculator.getResult()));
    }
  };

  const handleKeydown = useCallback(
    (e) => {
      if (e.key.toUpperCase() === 'BACKSPACE') {
        setKeyPressed('←');
      } else if (e.key.toUpperCase() === 'ENTER' || e.key === '=') {
        setKeyPressed('=');

        calculate(value, calculator);
        const history = JSON.stringify(handleHistory(calculator.getHistory()));
        dispatch(historyAction(JSON.parse(history)));
        localStorage.setItem('history', history);
        dispatch(inputValueAction(calculator.getResult()));
      } else {
        setKeyPressed(e.key);
      }
    },
    [dispatch, value, calculator]
  );

  const handleKeyUp = () => {
    setKeyPressed('');
  };

  const handleMoseUp = () => {
    setKeyPressed('');
  };
  const handleMoseDown = (e) => {
    setKeyPressed(e.target.innerText);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeydown]);

  return (
    <StyledKeypad data-test-id="keypadFC">
      {keys.map((key) => (
        <StyledKeyCont key={key}>
          <StyledKey
            opacity={keyPressed === key ? 1 : 0.7}
            onClick={handleClick}
            onMouseUp={handleMoseUp}
            onMouseDown={handleMoseDown}
          >
            {key}
          </StyledKey>
        </StyledKeyCont>
      ))}
    </StyledKeypad>
  );
}
