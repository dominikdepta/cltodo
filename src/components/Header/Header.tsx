import React from "react";
import { Box, Text } from "ink";
import { HeaderProps } from "./types.ts";

export const Header = ({ title, children }: HeaderProps) => {
  return (
    <Box flexDirection="column">
      <Text color="black" backgroundColor="green" bold>
        {'▒▒▒▒▒▒  '}{title}{'  ▒▒▒▒▒▒'}
      </Text>

      {children}
    </Box>
  );
};
