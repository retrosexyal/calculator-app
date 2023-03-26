export const validator = (currentValue) => {
  const valueLastChar = currentValue[currentValue.length - 1];
  const validChars = /[0-9+.\-*\/%()]/g;
  const valueWithoutLastChar = currentValue.slice(0, -1);

  if (!currentValue || currentValue === '-') {
    return '0';
  }

  if (!valueLastChar.match(validChars)) {
    return valueWithoutLastChar;
  }

  if (currentValue.includes('на 0 делить нельзя!')) {
    return valueLastChar;
  }

  if (valueLastChar === ')') {
    const brackets = currentValue.replace(/[^\(\)]/g, '');
    let count = 0;
    for (let i = 0; i < brackets.length; i++) {
      if (brackets[i] === '(') {
        count++;
      } else {
        count--;
      }
      if (count < 0) {
        return valueWithoutLastChar;
      }
    }
  }

  if (currentValue.match(/[-+*/%]-[-+*/%]/)) {
    return valueWithoutLastChar;
  }

  if (currentValue.match(/[0-9]\(/)) {
    return currentValue.slice(0,-1)+'*'+valueLastChar;
  }

  if (currentValue.match(/[0-9]+\.[0-9]+\./)) {
    return valueWithoutLastChar;
  }

  if (currentValue.match(/[-+*/%][+*/%]/)) {
    return valueWithoutLastChar;
  }

  if (currentValue.match(/\.\./)) {
    return valueWithoutLastChar;
  }

  if (currentValue.match(/\(\)/)) {
    return valueWithoutLastChar;
  }

  if (currentValue[0] === '0' && !isNaN(+valueLastChar) && currentValue.length === 2) {
    return valueLastChar;
  }

  if (currentValue[0] === '0' && valueLastChar === '-' && currentValue.length === 2) {
    return valueLastChar;
  }
  return currentValue;
};
