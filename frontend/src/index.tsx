import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./Home";

const root = document.getElementById("root");

if (!root) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
