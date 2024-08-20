// import React from 'react'

import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function Counter() {
  //   const [count, setCount] = useState(0);
  //   const myRef = useRef(0);
  //   console.log(myRef);

  //   const a = {
  //     value: 0,
  //   };
  //   const handleClick = () => {
  //     setCount(count + 1);
  //     a.value++;
  //     myRef.current++;
  //     console.log(myRef.current);
  //   };
  const inputRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.placeholder = "ok chưa";
    console.log(inputRef);
    console.log(buttonRef);
    buttonRef.current.style.color = "red";
  }, []);
  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <h2>Count: {a.value}</h2>
      <h3>Count: {myRef.current}</h3>
      <button onClick={handleClick}>Click me</button> */}
      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <Button ref={buttonRef} />
    </div>
  );
}
