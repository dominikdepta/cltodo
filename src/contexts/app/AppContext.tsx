import React, { createContext, useContext, useMemo, useState } from "react";
import type { AppContextProps } from "./types.ts";

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [areGlobalKeysEnabled, setAreGlobalKeysEnabled] = useState(true);

  const setGlobalKeysEnabled = useMemo(
    () => (enabled: boolean) => {
      setAreGlobalKeysEnabled(enabled);
    },
    []
  );

  return (
    <AppContext.Provider value={{ areGlobalKeysEnabled, setGlobalKeysEnabled }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
