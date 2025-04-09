import { Box, Text, useInput } from "ink";
import React, { useState } from "react";
import { _tempTodos } from "../../modules/todo/constants.ts";
import { TodoList } from "../../modules/todo/TodoList/TodoList.tsx";
import { Todo } from "../../modules/todo/types.js";
import { Header } from "../../components/Header/Header.tsx";

export const App = () => {
  const [todos, setTodos] = useState(_tempTodos);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemSelect = (item: Todo) => {
    setActiveIndex(todos.findIndex((todo) => todo.id === item.id));
  };

  useInput((input, key) => {
    if ((key.ctrl && input === "c") || input === "q") {
      process.exit();
    }
  });

  return (
    <Box flexDirection="column">
      <Header title="CLTodo">
        <Text>{"<slot />"}</Text>
      </Header>

      <TodoList
        items={todos}
        activeIndex={activeIndex}
        onSelect={handleItemSelect}
      />
    </Box>
  );
};
