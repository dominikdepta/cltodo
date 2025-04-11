import { Box } from "ink";
import React from "react";
import { Footer } from "../../../components/Footer/Footer.tsx";
import { Header } from "../../../components/Header/Header.tsx";
import { HelpKey } from "../HelpKey/HelpKey.tsx";
import { HelpTitle } from "../HelpTitle/HelpTitle.tsx";
import { Key } from "../../../components/Key/Key.tsx";

export const HelpContainer = () => {
  return (
    <Box flexDirection="column">
      <Header title="Help" />

      <Box flexDirection="column" gap={1}>
        <Box flexDirection="column">
          <HelpTitle>General</HelpTitle>
          <HelpKey value="q" label="quit" />
          <HelpKey value="h" label="help" />
          <HelpKey value="l" label="todo list" />
        </Box>

        <Box flexDirection="column">
          <HelpTitle>Todo list</HelpTitle>
          <HelpKey value="a" label="add" />
          <HelpKey value="e" label="edit" />
          <HelpKey value="space" label="toggle" />
          <HelpKey value="s" label="search" />
          <HelpKey value="↑ k" label="up" />
          <HelpKey value="↓ j" label="down" />
        </Box>
      </Box>

      <Footer>
        <Key value="l" label="todo list" variant="secondary" />
      </Footer>
    </Box>
  );
};
