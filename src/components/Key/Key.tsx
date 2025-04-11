import { Box, Text } from "ink";
import React from "react";
import { KeyProps } from "./types.ts";

export const Key = ({
  value,
  label,
  variant = "primary",
  delimiter = " ",
}: KeyProps) => {
  const color = variant === "primary" ? "blue" : "gray";

  return (
    <Box>
      <Text color="black" backgroundColor={color}>{` ${value} `}</Text>
      {label && <Text color={color}>{`${delimiter}${label}`}</Text>}
    </Box>
  );
};
