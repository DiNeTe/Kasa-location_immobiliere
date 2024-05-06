import { createContext, useContext } from "react";
import { AppDependencies } from "./dependencies";

export const AppDependenciesContext = createContext<AppDependencies | null>(
  null
);

export const useAppDependencies = () => {
  const context = useContext(AppDependenciesContext);

  if (!context) {
    throw new Error(
      "useAppDependencies must be used within a AppDependenciesContext"
    );
  }

  return context;
};
