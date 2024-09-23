import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Provider from "./store/Provider.jsx";
import App02 from "./App02.jsx";
import App03 from "./App03.jsx";
import App01 from "./App01.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
      {/* <App03></App03> */}
      {/* <App01 /> */}
    </Provider>
  </React.StrictMode>
);
