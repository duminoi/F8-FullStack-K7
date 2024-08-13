/* eslint-disable no-unused-vars */
import { useState } from "react";
import Text from "./Text";
export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(() => {
      return count + 1;
    });
  };
  const handleDecrement = () => {
    setCount((count) => {
      return count - 1;
    });
  };
  console.log("Re-renders");
  console.log(count);
  f;
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <Text />
    </div>
  );
}
