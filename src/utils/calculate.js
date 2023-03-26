import { AddCommand, SubtractCommand, DivideCommand, MultiplyCommand, RODCommand } from '@utils/calculatorCommands';

export function calculate(expression, calculator) {
  const handleAdd = (firstValue, secondValue) => {
    if (firstValue && secondValue) {
      const command = new AddCommand(firstValue, secondValue, calculator);
      calculator.executeCommand(command);
    }
  };

  const handleSubtract = (firstValue, secondValue) => {
    if (firstValue && secondValue) {
      const command = new SubtractCommand(firstValue, secondValue, calculator);
      calculator.executeCommand(command);
    }
  };

  const handleDivide = (firstValue, secondValue) => {
    if (firstValue && secondValue) {
      const command = new DivideCommand(firstValue, secondValue, calculator);
      calculator.executeCommand(command);
    }
  };

  const handleMultiply = (firstValue, secondValue) => {
    if (firstValue && secondValue) {
      const command = new MultiplyCommand(firstValue, secondValue, calculator);
      calculator.executeCommand(command);
    }
  };

  const handleROD = (firstValue, secondValue) => {
    if (firstValue && secondValue) {
      const command = new RODCommand(firstValue, secondValue, calculator);
      calculator.executeCommand(command);
    }
  };

  const regex = /\(([^()]+)\)/;

  while (regex.test(expression)) {
    expression = expression.replace(regex, (match, subexpression) => {
      return calculate(subexpression, calculator);
    });
  }

  const simpleRegex = /(-?\d+\.?\d*|-?\.\d+)([\%\*\/])(-?\d+\.?\d*|-?\.\d+)/;

  while (simpleRegex.test(expression)) {
    expression = expression.replace(simpleRegex, (match, num1, operator, num2) => {
      switch (operator) {
        case '*':
          handleMultiply(num1, num2);
          return calculator.getResult();
        case '/':
          handleDivide(num1, num2);
          return calculator.getResult();
        case '%':
          handleROD(num1, num2);
          return calculator.getResult();
        default:
          return match;
      }
    });
  }

  const simpleRegex2 = /(-?\d+\.?\d*|-?\.\d+)([\+\-])(-?\d+\.?\d*|-?\.\d+)/;

  while (simpleRegex2.test(expression)) {
    expression = expression.replace(simpleRegex2, (match, num1, operator, num2) => {
      switch (operator) {
        case '+':
          handleAdd(num1, num2);
          return calculator.getResult();
        case '-':
          handleSubtract(num1, num2);
          return calculator.getResult();
        default:
          return match;
      }
    });
  }

  return expression;
}
