import React from 'react';

export default class Todo extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <span>{this.props.desc} | {this.props.completed}</span>
    )
  }
}