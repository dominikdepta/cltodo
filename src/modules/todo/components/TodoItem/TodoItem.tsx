import { Box, Text } from "ink";
import { UncontrolledTextInput } from "ink-text-input";
import React from "react";
import { TodoItemProps } from "./types.ts";

export const TodoItem = ({
  id,
  active,
  isEditing,
  completed,
  title,
  onEdit = () => {},
}: TodoItemProps) => {
  return (
    <Box flexDirection="row">
      <Box marginRight={1}>
        <Text>{completed ? "⬤" : "🞆 "}</Text>
      </Box>

      {isEditing ? (
        <Text color="blue">
          <UncontrolledTextInput initialValue={title} onSubmit={onEdit} />
        </Text>
      ) : (
        <Text
          key={id}
          color={active ? "green" : "white"}
          strikethrough={completed}
        >
          {title}
        </Text>
      )}
    </Box>
  );
};
