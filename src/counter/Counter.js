import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
  }

  incrementIfOdd = () => {
    console.log(this)
    if(this.props.value % 2 !== 0) {
      this.props.onIncrement();
    }
  }

  incrementAsync = () => {
    setTimeout(this.props.onIncrement, 1000);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;

    return (
      <p> {value}
        <button onClick={onIncrement}> + </button>
        <button onClick={onDecrement}> - </button>
        <button onClick={this.incrementIfOdd}> Increment If Odd </button>
        <button onClick={this.incrementAsync}> Increment Async </button>
      </p>
    )
  }
}