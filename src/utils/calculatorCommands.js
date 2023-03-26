export class AddCommand {
  constructor(firstValue, secondValue, calculator) {
    this.firstValue = +firstValue;
    this.secondValue = +secondValue;
    this.calculator = calculator;
  }

  execute() {
    this.calculator.add(this.firstValue, this.secondValue);
  }

  undo() {
    this.calculator.setResult(this.firstValue);
  }
}

export class SubtractCommand {
  constructor(firstValue, secondValue, calculator) {
    this.firstValue = +firstValue;
    this.secondValue = +secondValue;
    this.calculator = calculator;
  }

  execute() {
    this.calculator.subtract(this.firstValue, this.secondValue);
  }

  undo() {
    this.calculator.setResult(this.firstValue);
  }
}

export class DivideCommand {
  constructor(firstValue, secondValue, calculator) {
    this.firstValue = +firstValue;
    this.secondValue = +secondValue;
    this.calculator = calculator;
  }

  execute() {
    this.calculator.divide(this.firstValue, this.secondValue);
  }

  undo() {
    this.calculator.setResult(this.firstValue);
  }
}

export class MultiplyCommand {
  constructor(firstValue, secondValue, calculator) {
    this.firstValue = +firstValue;
    this.secondValue = +secondValue;
    this.calculator = calculator;
  }

  execute() {
    this.calculator.multiply(this.firstValue, this.secondValue);
  }

  undo() {
    this.calculator.setResult(this.firstValue);
  }
}

export class RODCommand {
  constructor(firstValue, secondValue, calculator) {
    this.firstValue = +firstValue;
    this.secondValue = +secondValue;
    this.calculator = calculator;
  }

  execute() {
    this.calculator.rod(this.firstValue, this.secondValue);
  }

  undo() {
    this.calculator.setResult(this.firstValue);
  }
}
