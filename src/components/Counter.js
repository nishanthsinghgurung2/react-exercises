import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return(
    <div>
      <button data-testid="decrement-btn" onClick={() => setCount(count - 1)}>-</button>
      <span data-testid="count-value">{count}</span>
      <button data-testid="increment-btn" onClick={() => setCount( count + 1)}>+</button>
    </div>
  );
};

export default Counter;