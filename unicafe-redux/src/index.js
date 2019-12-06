import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    });
  };

  const ok = () => {
    store.dispatch({
      type: 'OK'
    });
  };

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    });
  };

  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    });
  };

  return (
    <div>
      <button onClick={good}>Good</button>
      <button onClick={ok}>Ok</button>
      <button onClick={bad}>Bad</button>
      <button onClick={zero}>Zero</button>
      <div>Good {store.getState().good}</div>
      <div>Ok {store.getState().ok}</div>
      <div>Bad {store.getState().bad}</div>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();
store.subscribe(renderApp);
