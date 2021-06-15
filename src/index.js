import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const mycomponent = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(mycomponent, document.getElementById("jasonscoolapp"));
