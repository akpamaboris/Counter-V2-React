import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incremCount = () => {
    setCount(count + 1);
  };

  const decremCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="Counter">
      <button onClick={decremCount}>-</button>
      <h1>{count}</h1>
      <button onClick={incremCount}>+</button>
    </div>
  );
};

export default Counter;
