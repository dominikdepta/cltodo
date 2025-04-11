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
      const { item } = action.payload;
      const updatedItems = [item, ...state.items];
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
    case "ITEM_UPDATE": {
      const { item } = action.payload;
      const items = state.items.map((todo) =>
        todo.id === item.id ? item : todo
      );

      return {
        ...state,
        items,
        activeItem: item,
        mode: "list",
      };
    }

    case "ITEMS_SET": {
      const { items } = action.payload;

      return {
        ...state,
        items,
        activeItem: items[0] || null,
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
