export default class Calculator {
  #history = [];

  #result = 0;

  add(firstValue, secondValue) {
    this.#result = firstValue + secondValue;
  }

  subtract(firstValue, secondValue) {
    this.#result = firstValue - secondValue;
  }

  multiply(firstValue, secondValue) {
    this.#result = firstValue * secondValue;
  }

  divide(firstValue, secondValue) {
    if (secondValue === 0) {
      this.#result = 'на 0 делить нельзя!';
    } else {
      this.#result = firstValue / secondValue;
    }
  }

  rod(firstValue, secondValue) {
    this.#result = firstValue % secondValue;
  }

  executeCommand(command) {
    command.execute();
    this.#history.push(command);
  }

  undoLastCommand() {
    const command = this.#history.pop();
    if (command) {
      command.undo();
    }
  }

  setResult(value) {
    this.#result = value;
    return this.#result;
  }

  getHistory() {
    return this.#history;
  }

  setHistory(history) {
    return this.#history.push(history);
  }

  getLastComand() {
    return [...this.#history].pop();
  }

  getResult() {
    if (Number.isNaN(+this.#result)) {
      return this.#result;
    }
    return parseFloat(this.#result.toFixed(3)).toString();
  }
}
