import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { inputValueAction } from '@store/actions/inputValueAction';
import { validator } from '@utils/validator';

import { StyledDisplay } from './styled';

class Display extends Component {
  inputRef = React.createRef();

  componentDidMount() {
    this.inputRef.current.focus();
  }

  // eslint-disable-next-line class-methods-use-this
  handleBlur = (e) => {
    e.target.focus();
  };

  handleValueChange = (e) => {
    const currentValue = e.target.value;
    const cursorPosition = e.target.selectionStart;

    if (currentValue.length !== cursorPosition && e.bubbles) {
      return;
    }
    const { updateValue } = this.props;
    updateValue(validator(currentValue));
  };

  render() {
    const { value } = this.props;

    return (
      <StyledDisplay
        ref={this.inputRef}
        data-test-id="displayCC"
        type="text"
        value={value}
        onChange={this.handleValueChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value.value,
});

const mapDispatchToProps = (dispatch) => ({
  updateValue: (value) => dispatch(inputValueAction(value)),
});

Display.propTypes = {
  value: PropTypes.string.isRequired,
  updateValue: PropTypes.func.isRequired,
};

export const DisplayCC = connect(mapStateToProps, mapDispatchToProps)(Display);
