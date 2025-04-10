import { Box, useApp, useInput } from "ink";
import React, { useMemo, useState } from "react";
import { Header } from "../../components/Header/Header.tsx";
import { Search } from "../../components/Search/Search.tsx";
import { _tempTodos } from "../../modules/todo/constants.ts";
import { TodoList } from "../../modules/todo/TodoList/TodoList.tsx";
import { TodoItem } from "../todo/TodoItem/TodoItem.tsx";
import { Todo } from "../todo/types.ts";

export const App = () => {
  const { exit } = useApp();
  const [todos, setTodos] = useState(_tempTodos);
  const [activeItem, setActiveItem] = useState<Todo>(todos[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [todos, searchValue]
  );

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleItemSelect = (index: number) => {
    setActiveItem(filteredTodos[index]);
  };

  const handleItemEdit = (id: string) => (newTitle: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
    setIsEditing(false);
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSearchSubmit = () => {
    setIsSearching(!isSearching);
    setActiveItem(filteredTodos[0]);
  };

  useInput((input, key) => {
    if (isSearching || isEditing) {
      return;
    }

    if ((key.ctrl && input === "c") || input === "q") {
      exit();
      process.exit(0);
    }

    if (input === "s") {
      setIsSearching(true);
    }

    if (input === "e") {
      setIsEditing(!isEditing);
    }

    if (input === " ") {
      toggleTodo(activeItem.id);
    }
  });

  return (
    <Box flexDirection="column">
      <Header title="CLTodo">
        {(isSearching || searchValue.length > 0) && (
          <Search
            value={searchValue}
            isFocused={isSearching}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
          />
        )}
      </Header>

      <TodoList
        keyNavigation={!isEditing && !isSearching}
        onSelect={handleItemSelect}
      >
        {filteredTodos.map(({ id, title, completed }, index) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            completed={completed}
            active={id === activeItem.id}
            isEditing={isEditing && id === activeItem.id}
            onEdit={handleItemEdit(id)}
          />
        ))}
      </TodoList>
    </Box>
  );
};
