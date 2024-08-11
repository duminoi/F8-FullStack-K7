/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(() => {
      return count + 1;
    });
  };
  const handleDecrement = () => {
    setCount(() => {
      return count - 1;
    });
  };
  console.log("Re-renders");
  console.log(count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
