import React, { useState } from 'react';

// import { Container } from './styles';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increment(count) {
    return setCounter( count + 1 );
  }

  function decrement(count) {
    if (count > 0 ){
      return setCounter( count - 1 );
    }
    
  }

  return (
    <div>
      <h1>This is counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => increment(counter)}>Increment</button>
      <button id="decrement-btn" onClick={() => decrement(counter)}>Increment</button>
    </div>
  );
}
