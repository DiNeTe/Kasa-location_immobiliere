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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppDependenciesContext.Provider value={appDependencies}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppDependenciesContext.Provider>
  </React.StrictMode>
);
