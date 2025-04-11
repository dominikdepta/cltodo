import { Box, Text } from "ink";
import React from "react";
import { BaseInputProps } from "./types.ts";

export const BaseInput = ({ symbol, children }: BaseInputProps) => {
  return (
    <Box flexDirection="row">
      {symbol && (
        <Box marginRight={1}>
          <Text backgroundColor="blue" color="black">{` ${symbol} `}</Text>
        </Box>
      )}
      {children}
    </Box>
  );
};
