import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRouter from "./router";
import "./style/tailwind.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>
);
