import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyledHistory, StyledTitle } from './styled';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('history')) {
      const hist = JSON.parse(localStorage.getItem('history'));
      this.setState({ history: hist.reverse() });
    }
  }

  componentDidUpdate(prevProps) {
    const { historyAction } = this.props;
    if (historyAction !== prevProps.historyAction) {
      if (localStorage.getItem('history')) {
        const hist = JSON.parse(localStorage.getItem('history'));
        this.setState({ history: hist.reverse() });
      }
    }
  }

  render() {
    const { history } = this.state;
    return (
      <div data-test-id="historyCC">
        <StyledTitle>History</StyledTitle>
        <StyledHistory>
          {history.map((command, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={key}>{command}</div>
          ))}
        </StyledHistory>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  historyAction: state.calculator.history,
});

History.propTypes = {
  historyAction: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const HistoryCC = connect(mapStateToProps)(History);
