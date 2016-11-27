import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js';

export default class App extends React.Component {

  constructor(props) {
    super();
    console.log('constructor()');
    this.state = {
      name: 'Steve Zhou',
      age: 29
    }
  }

  componentWillMount() {
    console.log('componentWillMount()');

  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps()', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate()', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate()', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  handleMakeOlder() {
    console.log('handleMakeOlder()');
    this.setState((prevState, props) => {
      console.log('prevState', prevState);
      console.log('props', props);
    })


    this.setState({
      age: this.state.age + 1
    })

  }

  handleMakeYounger() {
    console.log('handleMakeYounger()');
    this.setState({
      age: this.state.age - 1
    })
  }

  render() {
    console.log('render()');
    return (
      <div>
        <h3>Naaaame: {this.state.name}</h3>
        <h3>Age: {this.state.age}</h3>
        <button onClick={this.handleMakeOlder.bind(this)} >Make Older!</button>
        <button onClick={this.handleMakeYounger.bind(this)} >Make Younger!</button>
        <TodoList> </TodoList>
      </div>
    )
  }
}

// ReactDOM.render(<App/>, document.getElementById('app'));