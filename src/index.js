import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./router";
import "./style/tailwind.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
);
