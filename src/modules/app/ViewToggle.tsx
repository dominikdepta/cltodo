import { useApp, useInput } from "ink";
import React, { useState } from "react";
import { useAppContext } from "../../contexts/app/AppContext.tsx";
import { HelpView } from "./HelpView.tsx";
import { ListView } from "./ListView.tsx";

export const ViewToggle = () => {
  const { exit } = useApp();
  const { areGlobalKeysEnabled } = useAppContext();
  const [view, setView] = useState("list");

  useInput((input) => {
    if (!areGlobalKeysEnabled) {
      return;
    }

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
