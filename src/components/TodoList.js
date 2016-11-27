import React from 'react';
import Todo from './Todo.js';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
    console.log('TodoList constructor')
  }

  render() {
    return (
      <ul className="todolist">
        <li><Todo desc="Learn Redux" completed="false" /></li>
        <li><Todo desc="Build something cool" completed="false" /></li>
      </ul>
    )
  }
}