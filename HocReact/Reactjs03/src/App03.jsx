import React, { useEffect } from "react";
import Content from "./components/Content";
import { useState } from "react";

export default function App03() {
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus((preStatus) => {
      return !preStatus;
    });
  };

  return (
    <div>
      <button onClick={handleClick}>toggle</button>
      {status && <Content></Content>}
    </div>
  );
}
