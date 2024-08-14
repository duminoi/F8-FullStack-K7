import React from "react";
import { useState } from "react";
import Counter2 from "./components/Counter2";
import UploadImage from "./components/UploadImage";

export default function App() {
  //   const [status, setStatus] = useState(true);
  //   const handleClick = () => {
  //     setStatus(!status);
  //   };
  return (
    <div>
      {/* {status ? <Counter2 disable={true} /> : ""}
      <button onClick={handleClick}>toggle</button> */}
      <UploadImage />
    </div>
  );
}
