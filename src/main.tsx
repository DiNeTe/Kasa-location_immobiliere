import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./main.scss";
import { BrowserRouter } from "react-router-dom"; // Importer BrowserRouter

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
