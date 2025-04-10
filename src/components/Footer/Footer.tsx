import { Box } from "ink";
import React from "react";
import { FooterProps } from "./types.ts";

export const Footer = ({ children }: FooterProps) => {
  return (
    <Box height={1} marginTop={1} gap={2}>
      {children}
    </Box>
  );
};
