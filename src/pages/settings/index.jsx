import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeAction } from '@store/actions/themeAction';
import { calculatorAction } from '@store/actions/calculatorAction';
import Calculator from '@utils/calculator';
import {
  StyledSettings,
  StyledArrow,
  StyledList,
  StyledSelectWrapper,
  StyledButton,
  StyledTitle,
  StyledListItem,
} from './styled';

function Settings() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const listRef = useRef(null);

  let currentTheme = theme;
  const historyTheme = localStorage.getItem('theme');
  if (historyTheme) {
    currentTheme = historyTheme;
  }

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive((prev) => !prev);
  };

  const handleThemeClick = (e) => {
    e.preventDefault();
    setIsActive(false);
    dispatch(themeAction(e.target.innerText));
    localStorage.setItem('theme', e.target.innerText);
  };

  const handleClearHistory = () => {
    dispatch(calculatorAction(new Calculator()));
    localStorage.setItem('history', '');
  };

  const handleClickOutside = (e) => {
    if (listRef.current && !listRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <StyledSettings data-test-id="settings">
      <StyledTitle>Settings</StyledTitle>
      <StyledSelectWrapper>
        <div>Switch theme</div>
        <StyledButton isSelect type="button" onClick={handleClick} data-test-id="select">
          {currentTheme}
        </StyledButton>
        {isActive && (
          <StyledList ref={listRef} onClick={handleThemeClick} data-test-id="options">
            <StyledListItem>Ligth theme</StyledListItem>
            <StyledListItem>Dark theme</StyledListItem>
            <StyledListItem>Colored theme</StyledListItem>
          </StyledList>
        )}
        <StyledArrow deg={isActive ? 180 : 0} onClick={handleClick} />
      </StyledSelectWrapper>
      <StyledButton type="button" onClick={handleClearHistory}>
        Clear all History
      </StyledButton>
    </StyledSettings>
  );
}

export default Settings;
