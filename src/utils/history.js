import { AddCommand, SubtractCommand, DivideCommand, MultiplyCommand, RODCommand } from '@utils/calculatorCommands';
export const handleHistory = (history) => {
  return history.map((command) => {
    if (command instanceof AddCommand) {
      return `${command.firstValue}+${command.secondValue}`;
    }
    if (command instanceof SubtractCommand) {
      return `${command.firstValue}-${command.secondValue}`;
    }
    if (command instanceof DivideCommand) {
      return `${command.firstValue}/${command.secondValue}`;
    }
    if (command instanceof MultiplyCommand) {
      return `${command.firstValue}*${command.secondValue}`;
    }
    if (command instanceof RODCommand) {
      return `${command.firstValue}%${command.secondValue}`;
    }
  });
};
