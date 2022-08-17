import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "./router";
import "./style/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </Provider>
);
