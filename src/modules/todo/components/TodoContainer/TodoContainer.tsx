import { Box, useInput } from "ink";
import React, { useEffect, useMemo } from "react";
import { Footer } from "../../../../components/Footer/Footer.tsx";
import { Header } from "../../../../components/Header/Header.tsx";
import { Input } from "../../../../components/Input/Input/Input.tsx";
import { UncontrolledInput } from "../../../../components/Input/UncontrolledInput/UncontrolledInput.tsx";
import { Key } from "../../../../components/Key/Key.tsx";
import { useAppContext } from "../../../../contexts/app/AppContext.tsx";
import { Todo } from "../../types.ts";
import { TodoItem } from "../TodoItem/TodoItem.tsx";
import { TodoList } from "../TodoList/TodoList.tsx";
import { TodoListEmpty } from "../TodoListEmpty/TodoListEmpty.tsx";
import * as actions from "./actions.ts";
import { useTodoReducer } from "./todoReducer/useTodoReducer.ts";

export const TodoContainer = () => {
  const { setGlobalKeysEnabled } = useAppContext();
  const [state, dispatch] = useTodoReducer();
  const { items, activeItem, searchValue, mode } = state;
  const filteredItems = useMemo(
    () =>
      items.filter((todo) =>
        todo.title.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [items, searchValue]
  );
  const completedItems = useMemo(
    () => items.filter((todo) => todo.completed),
    [items]
  );
  const activeIndex = filteredItems.findIndex(
    (todo) => todo.id === activeItem.id
  );
  const hasSearchValue = searchValue.length > 0;

  const handleItemSelect = (index: number) => {
    dispatch({ type: "ITEM_SELECT", payload: { id: filteredItems[index].id } });
  };

  const handleItemEdit = (item: Todo) => (newTitle: string) => {
    const title = newTitle.trim();

    if (title.length) {
      dispatch(actions.updateTodo(item.id, { title }));
    }
  };

  const handleItemToggle = (item: Todo) => {
    dispatch(actions.updateTodo(item.id, { completed: !item.completed }));
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

  const handleAddSubmit = async (value: string) => {
    const title = value.trim();

    if (title.length) {
      dispatch(actions.addTodo(title, false));
    } else {
      dispatch({ type: "ITEM_ADD_CANCEL" });
    }
  };

  useInput((input) => {
    if (mode !== "list") {
      return;
    }

    if (!hasSearchValue && input === "a") {
      dispatch({ type: "MODE_SELECT", payload: { mode: "add" } });
    }

    if (!activeItem?.id) {
      return;
    }

    if (input === "s") {
      dispatch({ type: "MODE_SELECT", payload: { mode: "search" } });
    }

    if (input === "e") {
      dispatch({ type: "MODE_SELECT", payload: { mode: "edit" } });
    }

    if (input === "d") {
      dispatch(actions.deleteTodo(activeItem.id));
    }

    if (input === " ") {
      handleItemToggle(activeItem);
    }
  });

  useEffect(() => {
    setGlobalKeysEnabled(mode === "list");
  }, [mode, setGlobalKeysEnabled]);

  useEffect(() => {
    dispatch(actions.getTodos());
  }, []);

  return (
    <Box flexDirection="column">
      <Header title={`CLTodo (${completedItems.length}/${items.length})`}>
        {(mode === "search" || hasSearchValue) && (
          <Input
            symbol="?"
            value={searchValue}
            focus={mode === "search"}
            onChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
          />
        )}
        {mode === "add" && (
          <UncontrolledInput
            symbol="+"
            focus={mode === "add"}
            onSubmit={handleAddSubmit}
          />
        )}
      </Header>

      <TodoList
        activeIndex={activeIndex}
        keyNavigation={mode === "list"}
        onSelect={handleItemSelect}
      >
        {items.length === 0 && <TodoListEmpty />}
        {filteredItems.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
            active={item.id === activeItem.id}
            isEditing={mode === "edit" && item.id === activeItem.id}
            onEdit={handleItemEdit(item)}
          />
        ))}
      </TodoList>

      <Footer>
        <Key value="h" label="help" variant="secondary" />
      </Footer>
    </Box>
  );
};
