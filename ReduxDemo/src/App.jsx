import React from "react";
import Counter from "./components/Counter";
import Email from "./components/Email";
export default function App() {
  console.log("vào App");

  return (
    <div>
      <Counter />
      <Email />
    </div>
  );
}
