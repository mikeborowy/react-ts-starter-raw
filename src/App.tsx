import React from 'react';
import './App.css';

export const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div data-testid="component-app" className="App">
      <h1 data-testid="counter-display">
        The counter is currently&nbsp;
        {count >= 0 && <span data-testid="count">{count}</span>}
        {count <= 0 && (
          <div data-testid="warning" style={{ color: 'red' }}>
            Counter cannot go below 0
          </div>
        )}
      </h1>
      <button
        type="button"
        data-testid="increment-button"
        onClick={() => {
          return setCount(count + 1);
        }}
      >
        Increment counter
      </button>
      <button
        type="button"
        data-testid="decrement-button"
        onClick={() => {
          if (count === 0) return setCount(0);
          return setCount(count - 1);
        }}
      >
        {' '}
        Decrement counter
      </button>
    </div>
  );
};
