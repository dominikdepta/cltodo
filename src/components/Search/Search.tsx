import React from "react";
import { Box, Text } from "ink";
import TextInput from "ink-text-input";
import { SearchProps } from "./types.ts";

export const Search = ({
  value,
  isFocused,
  onChange,
  onSubmit,
}: SearchProps) => {
  return (
    <Box>
      <Text>🔎 </Text>
      <TextInput
        focus={isFocused}
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </Box>
  );
};
