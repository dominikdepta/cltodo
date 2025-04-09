import { Box, Text, useInput } from "ink";
import React, { useState } from "react";
import { Header } from "../../components/Header/Header.tsx";
import { _tempTodos } from "../../modules/todo/constants.ts";
import { TodoList } from "../../modules/todo/TodoList/TodoList.tsx";
import { TodoItem } from "../todo/TodoItem/TodoItem.tsx";

export const App = () => {
  const [todos, setTodos] = useState(_tempTodos);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemSelect = (index: number) => {
    setActiveIndex(index);
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

      <TodoList activeIndex={activeIndex} onSelect={handleItemSelect}>
        {todos.map(({ id, title, completed }, index) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            completed={completed}
            active={index === activeIndex}
          />
        ))}
      </TodoList>
    </Box>
  );
};
