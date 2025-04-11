import { useApp, useInput } from "ink";
import React, { useState } from "react";
import { HelpView } from "./HelpView.tsx";
import { ListView } from "./ListView.tsx";

export const App = () => {
  const { exit } = useApp();
  const [view, setView] = useState("list");

  useInput((input, key) => {
    if (input === "q") {
      exit();
    } else if (input === "h") {
      setView("help");
    } else if (input === "l") {
      setView("list");
    }
  });

  if (view === "help") {
    return <HelpView />;
  }

  return <ListView />;
};
