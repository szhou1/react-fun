import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counterReducer from './components/counter/CounterReducer';
import Counter from './components/counter/Counter';

const store = createStore(counterReducer);

const render = () => ReactDOM.render(
    <div>
      Counter
      <Counter value={store.getState()} 
      onIncrement = {() => store.dispatch({ type: 'INC' })} 
      onDecrement = {() => store.dispatch({ type: 'DEC' })}
      />
    </div>
, document.getElementById('app'));

render();
store.subscribe(render);