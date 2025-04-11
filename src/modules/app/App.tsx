import React from "react";
import { AppProvider } from "../../contexts/app/AppContext.tsx";
import { ViewToggle } from "./views/ViewToggle.tsx";

export const App = () => {
  return (
    <AppProvider>
      <ViewToggle />
    </AppProvider>
  );
};
