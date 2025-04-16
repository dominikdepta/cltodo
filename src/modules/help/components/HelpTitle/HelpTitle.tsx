import { Text } from "ink";
import React from "react";
import { HelpTitleProps } from "./types.ts";

export const HelpTitle = ({ children }: HelpTitleProps) => {
  return (
    <Text backgroundColor="black" color="blue">
      {children}
    </Text>
  );
};
