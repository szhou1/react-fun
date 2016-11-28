import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import counterReducer from './counter/CounterReducer';
import Counter from './counter/Counter';

import App from './todos/components/App';
import todosReducer from './todos/reducers';


const storeCounter = createStore(counterReducer);
const storeTodos = createStore(todosReducer);

const render = () => ReactDOM.render(
    <div>
      Counter
      <Counter value={storeCounter.getState()} 
        onIncrement = {() => storeCounter.dispatch({ type: 'INC' })} 
        onDecrement = {() => storeCounter.dispatch({ type: 'DEC' })} />

      <Provider store={storeTodos}>
        <App/>
      </Provider>
    </div>
, document.getElementById('app'));

render();
storeCounter.subscribe(render);