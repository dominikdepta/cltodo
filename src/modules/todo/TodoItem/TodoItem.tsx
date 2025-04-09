import React from "react";
import { Text } from "ink";
import { TodoItemProps } from "./types.ts";

export const TodoItem = ({ id, active, completed, title }: TodoItemProps) => {
  return (
    <Text key={id} color={active ? "green" : "white"}>
      {completed ? "✓" : "○"} {title}
    </Text>
  );
};
