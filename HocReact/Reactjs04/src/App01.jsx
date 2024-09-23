// import React from "react";

import Input from "./components/Input";
import { useEffect, useRef, useState } from "react";
export default function App01() {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  console.log(inputRef);

  const handleSetValue = () => {
    inputRef.current.value = "Ahihi";
  };
  const handleGetValue = () => {
    const value = inputRef.current.value;
    console.log(value);
    setValue(value);
  };
  const handleChangePlaceholder = () => {
    inputRef.current.placeholder = "ok chưa";
    // inputRef.current.remove();
  };
  useEffect(() => {
    console.dir(inputRef.current);
  }, []);
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={handleSetValue}>Set value</button>
      <button onClick={handleGetValue}>Get value</button>
      <button onClick={handleChangePlaceholder}>Change Placeholder</button>
      <div> Value: {value}</div>
    </div>
  );
}

//useImperativeHandle
