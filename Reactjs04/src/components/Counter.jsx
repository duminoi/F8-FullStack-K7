// import React, { useState } from "react";
import { useCallback, useState } from "react";
import Reset from "./Reset";
// import Content from "./Content";
// let a = 0;
export default function Counter() {
  const [count, setCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);
  // console.log("1. Counter render");
  // if (count < 5) {
  //   a = count;
  // }
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = useCallback(() => {
    setCount((count) => {
      setCurrentCount(count);
      return 0;
    });
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Bấm tớ đi</button>
      <hr />
      <Reset reset={handleReset} />
      <div>{currentCount}</div>
    </div>
  );
}
