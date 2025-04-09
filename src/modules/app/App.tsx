import { Box, Text, useInput } from "ink";
import React, { useState } from "react";
import { Header } from "../../components/Header/Header.tsx";
import { _tempTodos } from "../../modules/todo/constants.ts";
import { TodoList } from "../../modules/todo/TodoList/TodoList.tsx";
import { TodoItem } from "../todo/TodoItem/TodoItem.tsx";

export const App = () => {
  const [todos, setTodos] = useState(_tempTodos);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const selectedTodo = todos[activeIndex];

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleItemSelect = (index: number) => {
    setActiveIndex(index);
  };

  const handleItemEdit = (id: string) => (newTitle: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
    setIsEditing(false);
  };

  useInput((input, key) => {
    if ((key.ctrl && input === "c") || input === "q") {
      process.exit();
    }

    if (input === "e") {
      setIsEditing(!isEditing);
    }

    if (isEditing) {
      return;
    }

    if (input === " ") {
      toggleTodo(selectedTodo.id);
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
            isEditing={isEditing && index === activeIndex}
            onEdit={handleItemEdit(id)}
          />
        ))}
      </TodoList>
    </Box>
  );
};
