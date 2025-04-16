import { Box, Text } from "ink";
import React from "react";
import { Key } from "../../../../components/Key/Key.tsx";

export const TodoListEmpty = () => {
  return (
    <Box>
      <Text>Press </Text>
      <Key value="a" />
      <Text> to add your first todo!</Text>
    </Box>
  );
};
