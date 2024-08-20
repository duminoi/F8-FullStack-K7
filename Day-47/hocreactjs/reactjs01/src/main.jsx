import ReactDom from "react-dom/client";
import React from "react";
import App from "./App";
import App02 from "./App02";
import App03 from "./App03";
const root = document.querySelector("#root");
ReactDom.createRoot(root).render(
<<<<<<< HEAD
  // <React.StrictMode>
  <App03 />
  // </React.StrictMode>
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> d6d034577ba7317b8bcfa6f19644e0d29accb7be
);
