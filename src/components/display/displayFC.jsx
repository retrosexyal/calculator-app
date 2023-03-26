import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputValueAction } from '@store/actions/inputValueAction';
import { validator } from '@utils/validator';

import { StyledDisplay } from './styled';

export function DisplayFC() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.value);

  const handleBlur = (e) => {
    e.target.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleValueChange = (e) => {
    const currentValue = e.target.value;
    const cursorPosition = e.target.selectionStart;

    if (currentValue.length !== cursorPosition && e.bubbles) {
      return;
    }

    dispatch(inputValueAction(validator(currentValue)));
  };

  return (
    <StyledDisplay
      data-test-id="displayFC"
      ref={inputRef}
      type="text"
      value={value}
      onChange={handleValueChange}
      onBlur={handleBlur}
    />
  );
}
