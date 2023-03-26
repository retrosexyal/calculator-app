export const handleHistory = (history) => {
  return history.map((command) => {
    if (command.constructor.name === 'AddCommand') {
      return `${command.firstValue}+${command.secondValue}`;
    }
    if (command.constructor.name === 'SubtractCommand') {
      return `${command.firstValue}-${command.secondValue}`;
    }
    if (command.constructor.name === 'DivideCommand') {
      return `${command.firstValue}/${command.secondValue}`;
    }
    if (command.constructor.name === 'MultiplyCommand') {
      return `${command.firstValue}*${command.secondValue}`;
    }
    if (command.constructor.name === 'RODCommand') {
      return `${command.firstValue}%${command.secondValue}`;
    }
  });
};
