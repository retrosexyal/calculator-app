import React, { Component } from 'react';
import { keys } from '@constants/keys';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { inputValueAction } from '@store/actions/inputValueAction';
import { calculatorAction, historyAction } from '@store/actions/calculatorAction';
import { validator } from '@utils/validator';
import { calculate } from '@utils/calculate';
import Calculator from '@utils/calculator';
import { handleHistory } from '@utils/history';
import { StyledKey, StyledKeyCont, StyledKeypad } from './styled';

class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressed: '',
    };
  }

  componentDidMount() {
    const { calculatorDispatch } = this.props;
    calculatorDispatch(new Calculator());
    window.addEventListener('keydown', this.handleKeydown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentDidUpdate(prevProps) {
    const { calculator } = this.props;
    if (prevProps.calculator !== calculator && localStorage.getItem('history')) {
      JSON.parse(localStorage.getItem('history')).map((val) => calculate(val, calculator));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleClick = (e) => {
    const key = e.target.innerText;
    const { value, updateValue, calculator, historyDispatch } = this.props;

    if (key.length === 1) {
      updateValue(validator(value + key));
    }

    if (key === '=') {
      calculate(value, calculator);
      const history = JSON.stringify(handleHistory(calculator.getHistory()));
      historyDispatch(JSON.parse(history));
      localStorage.setItem('history', history);
      updateValue(calculator.getResult());
    }

    if (key === '←') {
      updateValue(value.slice(0, -1));
    }

    if (key.toUpperCase() === 'C') {
      updateValue('0');
    }

    if (key.toUpperCase() === 'CE') {
      const lastNum = value.match(/(\d+\.?\d*)$/);
      if (lastNum !== null) {
        updateValue(value.replace(lastNum[0], ''));
      }
    }
    if (key.toUpperCase() === 'UNDO') {
      calculator.undoLastCommand();
      const history = JSON.stringify(handleHistory(calculator.getHistory()));
      historyDispatch(JSON.parse(history));
      localStorage.setItem('history', history);
      updateValue(calculator.getResult());
    }
  };

  handleKeydown = (e) => {
    const { value, updateValue, calculator, historyDispatch } = this.props;
    if (e.key.toUpperCase() === 'BACKSPACE') {
      this.setState({ keyPressed: '←' });
    } else if (e.key.toUpperCase() === 'ENTER' || e.key === '=') {
      this.setState({ keyPressed: '=' });

      calculate(value, calculator);
      const history = JSON.stringify(handleHistory(calculator.getHistory()));
      historyDispatch(JSON.parse(history));
      localStorage.setItem('history', history);
      updateValue(calculator.getResult());
    } else {
      this.setState({ keyPressed: e.key });
    }
  };

  handleKeyUp = () => {
    this.setState({ keyPressed: '' });
  };

  handleMoseUp = () => {
    this.setState({ keyPressed: '' });
  };

  handleMoseDown = (e) => {
    this.setState({ keyPressed: e.target.innerText });
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <StyledKeypad data-test-id="keypadCC">
        {keys.map((key) => (
          <StyledKeyCont key={key}>
            <StyledKey
              opacity={keyPressed === key ? 1 : 0.7}
              onClick={this.handleClick}
              onMouseUp={this.handleMoseUp}
              onMouseDown={this.handleMoseDown}
            >
              {key}
            </StyledKey>
          </StyledKeyCont>
        ))}
      </StyledKeypad>
    );
  }
}

Keypad.propTypes = {
  value: PropTypes.string.isRequired,
  calculator: PropTypes.instanceOf(Calculator).isRequired,
  calculatorDispatch: PropTypes.func.isRequired,
  updateValue: PropTypes.func.isRequired,
  historyDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.value.value,
  calculator: state.calculator.calculator,
});

const mapDispatchToProps = (dispatch) => ({
  calculatorDispatch: (value) => dispatch(calculatorAction(value)),
  updateValue: (value) => dispatch(inputValueAction(value)),
  historyDispatch: (value) => dispatch(historyAction(value)),
});

export const KeypadCC = connect(mapStateToProps, mapDispatchToProps)(Keypad);
