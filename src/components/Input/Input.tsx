import { Box, Text } from "ink";
import TextInput from "ink-text-input";
import React from "react";
import { InputProps } from "./types.ts";

export const Input = ({ symbol, ...inputProps }: InputProps) => {
  return (
    <Box flexDirection="row">
      {symbol && (
        <Box marginRight={1}>
          <Text backgroundColor="blue" color="black">{` ${symbol} `}</Text>
        </Box>
      )}
      <TextInput {...inputProps} />
    </Box>
  );
};
