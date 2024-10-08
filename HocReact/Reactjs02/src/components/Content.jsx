// import React from "react";
import { useContext } from "react";
import App, { AppContext } from "../App";
export default function Content() {
  const { onclick, msg } = useContext(AppContext);

  return (
    <div>
      <h1>{msg}</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nihil
      assumenda modi, at accusantium alias commodi adipisci magnam aliquam
      quaerat non perspiciatis culpa neque. Est unde, nulla deserunt
      perspiciatis ratione praesentium quaerat alias animi consequatur, non
      voluptates dolorem, voluptatem corrupti?
      <button onClick={onclick}>Click me</button>
    </div>
  );
}
