import { Box, Text } from "ink";
import TextInput from "ink-text-input";
import React from "react";
import { InputProps } from "./types.ts";

export const Input = ({ icon, ...inputProps }: InputProps) => {
  return (
    <Box flexDirection="row" gap={1}>
      {icon && <Text>{icon}</Text>}
      <TextInput {...inputProps} />
    </Box>
  );
};
