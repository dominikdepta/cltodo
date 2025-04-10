import React from "react";
import { Box, Text } from "ink";
import { HeaderProps } from "./types.ts";

export const Header = ({ title, children }: HeaderProps) => {
  return (
    <Box flexDirection="column">
      <Text color="black" backgroundColor="green" bold>
        {"▒▒▒▒▒▒  "}
        {title}
        {"  ▒▒▒▒▒▒"}
      </Text>

      <Box height={1}>
        {children}
      </Box>
    </Box>
  );
};
