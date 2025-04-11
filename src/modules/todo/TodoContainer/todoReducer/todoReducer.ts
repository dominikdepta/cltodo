import { nanoid } from "nanoid";
import { TodoAction, TodoState } from "./types.ts";

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "MODE_SELECT": {
      const { mode } = action.payload;

      return {
        ...state,
        mode,
      };
    }
    case "ITEM_SELECT": {
      const { id } = action.payload;
      const selectedItem = state.items.find((todo) => todo.id === id);
      const activeItem = selectedItem || state.items[0];

      return {
        ...state,
        activeItem,
      };
    }
    case "ITEM_ADD": {
      const { title } = action.payload;
      const newItem = {
        id: nanoid(),
        title,
        completed: false,
      };
      const updatedItems = [newItem, ...state.items];
      const activeItem = updatedItems[0];
      return {
        ...state,
        items: updatedItems,
        activeItem,
        mode: "list",
      };
    }
    case "ITEM_ADD_CANCEL": {
      return {
        ...state,
        mode: "list",
        activeItem: state.items[0],
      };
    }
    case "ITEM_EDIT": {
      const { id, newTitle } = action.payload;

      return {
        ...state,
        mode: "list",
        items: state.items.map((todo) =>
          todo.id === id ? { ...todo, title: newTitle } : todo
        ),
      };
    }

    case "ITEM_TOGGLE": {
      const { id } = action.payload;

      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    }

    case "SEARCH_CHANGE": {
      const { value } = action.payload;

      return {
        ...state,
        searchValue: value,
      };
    }

    case "SEARCH_SUBMIT": {
      return {
        ...state,
        mode: "list",
      };
    }

    case "SEARCH_CLEAR": {
      return {
        ...state,
        searchValue: "",
        mode: "list",
        activeItem: state.items[0],
      };
    }

    default:
      return state;
  }
};
