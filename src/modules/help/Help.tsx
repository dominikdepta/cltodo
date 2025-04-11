import { Box } from "ink";
import React from "react";
import { HelpKey } from "./HelpKey/HelpKey.tsx";
import { HelpTitle } from "./HelpTitle/HelpTitle.tsx";

export const Help = () => {
  return (
    <Box flexDirection="column" gap={1}>
      <Box flexDirection="column">
        <HelpTitle>General</HelpTitle>
        <HelpKey value="q" label="quit" />
        <HelpKey value="h" label="help" />
        <HelpKey value="l" label="todo list" />
      </Box>

      <Box flexDirection="column">
        <HelpTitle>Todo list</HelpTitle>
        <HelpKey value="s" label="search" />
        <HelpKey value="e" label="edit" />
        <HelpKey value="space" label="toggle" />
        <HelpKey value="↑ k" label="up" />
        <HelpKey value="↓ j" label="down" />
      </Box>
    </Box>
  );
};
