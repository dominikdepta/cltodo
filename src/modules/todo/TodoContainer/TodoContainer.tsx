import { Box, useInput } from "ink";
import React, { useEffect, useMemo, useReducer } from "react";
import { Footer } from "../../../components/Footer/Footer.tsx";
import { Header } from "../../../components/Header/Header.tsx";
import { Key } from "../../../components/Key/Key.tsx";
import { Search } from "../../../components/Search/Search.tsx";
import { useAppContext } from "../../../contexts/app/AppContext.tsx";
import { _tempTodos } from "../../todo/constants.ts";
import { TodoItem } from "../../todo/TodoItem/TodoItem.tsx";
import { TodoList } from "../../todo/TodoList/TodoList.tsx";
import { todoInitialState } from "./todoReducer/constants.ts";
import { todoReducer } from "./todoReducer/todoReducer.ts";

export const TodoContainer = () => {
  const { setGlobalKeysEnabled } = useAppContext();
  const [state, dispatch] = useReducer(todoReducer, {
    ...todoInitialState,
    items: _tempTodos,
    activeItem: _tempTodos[0],
  });
  const { items, activeItem, searchValue, mode } = state;
  const filteredItems = useMemo(
    () =>
      items.filter((todo) =>
        todo.title.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [items, searchValue]
  );
  const doneItems = useMemo(
    () => items.filter((todo) => todo.completed),
    [items]
  );
  const activeIndex = filteredItems.findIndex(
    (todo) => todo.id === activeItem.id
  );

  const toggleTodo = (id: string) => {
    dispatch({ type: "ITEM_TOGGLE", payload: { id } });
  };

  const handleItemSelect = (index: number) => {
    dispatch({ type: "ITEM_SELECT", payload: { id: filteredItems[index].id } });
  };

  const handleItemEdit = (id: string) => (newTitle: string) => {
    dispatch({ type: "ITEM_EDIT", payload: { id, newTitle } });
  };

  const handleSearchChange = (value: string) => {
    dispatch({ type: "SEARCH_CHANGE", payload: { value } });
  };

  const handleSearchSubmit = () => {
    dispatch({ type: "SEARCH_SUBMIT" });

    if (!filteredItems[0]) {
      dispatch({ type: "SEARCH_CLEAR" });
    } else {
      dispatch({ type: "ITEM_SELECT", payload: { id: filteredItems[0].id } });
    }
  };

  useInput((input) => {
    if (mode !== "list") {
      return;
    }

    if (input === "s") {
      dispatch({ type: "MODE_SELECT", payload: { mode: "search" } });
    }

    if (input === "e") {
      dispatch({ type: "MODE_SELECT", payload: { mode: "edit" } });
    }

    if (input === " ") {
      toggleTodo(activeItem.id);
    }
  });

  useEffect(() => {
    setGlobalKeysEnabled(mode === "list");
  }, [mode, setGlobalKeysEnabled]);

  return (
    <Box flexDirection="column">
      <Header title={`CLTodo (${doneItems.length}/${items.length})`}>
        {(mode === "search" || searchValue.length > 0) && (
          <Search
            value={searchValue}
            isFocused={mode === "search"}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
          />
        )}
      </Header>

      <TodoList
        activeIndex={activeIndex}
        keyNavigation={mode === "list"}
        onSelect={handleItemSelect}
      >
        {filteredItems.map(({ id, title, completed }, index) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            completed={completed}
            active={id === activeItem.id}
            isEditing={mode === "edit" && id === activeItem.id}
            onEdit={handleItemEdit(id)}
          />
        ))}
      </TodoList>

      <Footer>
        <Key value="h" label="help" variant="secondary" />
      </Footer>
    </Box>
  );
};
