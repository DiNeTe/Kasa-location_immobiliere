import "./main.scss";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AppDependencies } from "./app/dependencies.ts";
import fakeAccommodationDataSource from "./data/fakeAccommodationDataSource.tsx";
import { AppDependenciesContext } from "./app/context.ts";

import App from "./components/App.tsx";

const appDependencies: AppDependencies = {
  accommadationDataSource: fakeAccommodationDataSource,
};
// Initialisation app React en appelant ReactDOM
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Fournisseur de Contexte */}
    <AppDependenciesContext.Provider value={appDependencies}>
    {/* Gestionnaire de Routage */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppDependenciesContext.Provider>
  </React.StrictMode>
);