import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import PureComponent1 from "./components/PureComponent.jsx";
import SimpleComponent from "./components/SimpleComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SimpleComponent />
    <PureComponent1 />
  </React.StrictMode>
);
