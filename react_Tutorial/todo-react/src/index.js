import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//removed service worker as they are not in the scope of this tutorial
//make sure to look into them

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
