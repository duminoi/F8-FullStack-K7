import ReactDom from "react-dom/client";
import React from "react";
import App from "../App";
const root = document.querySelector("#root");
ReactDom.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
