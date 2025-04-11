import { Box } from "ink";
import React from "react";
import { Footer } from "../../components/Footer/Footer.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { Key } from "../../components/Key/Key.tsx";
import { Help } from "../help/Help.tsx";

export const HelpView = () => {
  return (
    <Box flexDirection="column">
      <Header title="Help" />

      <Help />

      <Footer>
        <Key value="l" label="todo list" variant="secondary" />
      </Footer>
    </Box>
  );
};
