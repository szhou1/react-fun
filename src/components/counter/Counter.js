import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;

    return (
      <p> {value}
        <button onClick={onIncrement}> + </button>
        <button onClick={onDecrement}> - </button>
      </p>
    )
  }
}