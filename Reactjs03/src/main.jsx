import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Provider from "./store/Provider.jsx";
import App02 from "./App02.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
