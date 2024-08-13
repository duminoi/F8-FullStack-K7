import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import App02 from "./App02";
const root = document.querySelector("#root");
ReactDom.createRoot(root).render(
  <React.StrictMode>
    <App02 />
  </React.StrictMode>
);
