// import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const handleChangeValue = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    document.title = title;
    console.log("side effect");
  }, []);
  console.log("Component Re-render");

  return (
    <div>
      <input type="text" name="" id="" onChange={handleChangeValue} />
      {console.log("UI Update")}
      <button onClick={() => setCount(count + 1)}>Click me ({count})</button>
    </div>
  );
}

/*
Hook useEffect(callback, dependencies?)
- null hoặc undefined ==> Component re-render
callback trong useEffect sẽ được gọi
- [] ==> Callback trong useEffect chỉ gọi khi component được render lần đầu tiên
- [bien1, bien2, ...] ==> callback trong useEffect chỉ gọi khi một trong các biến được thay đổi
*/
