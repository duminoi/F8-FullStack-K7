import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import App02 from "./App02";
import App03 from "./App03";
const root = document.querySelector("#root");
ReactDom.createRoot(root).render(
  // <React.StrictMode>
  <App03 />
  // </React.StrictMode>
);
