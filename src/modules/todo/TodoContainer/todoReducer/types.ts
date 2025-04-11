import { Todo } from "../../types.ts";

export type TodoMode = "edit" | "search" | "list";

export interface TodoState {
  items: Todo[];
  searchValue: string;
  activeItem: Todo;
  mode: TodoMode;
}

export type TodoAction =
  | {
      type: "MODE_SELECT";
      payload: {
        mode: TodoMode;
      };
    }
  | {
      type: "ITEM_SELECT";
      payload: {
        id: string;
      };
    }
  | {
      type: "ITEM_EDIT";
      payload: {
        id: string;
        newTitle: string;
      };
    }
  | {
      type: "ITEM_TOGGLE";
      payload: {
        id: string;
      };
    }
  | {
      type: "SEARCH_CHANGE";
      payload: {
        value: string;
      };
    }
  | {
      type: "SEARCH_SUBMIT";
    }
  | {
      type: "SEARCH_CLEAR";
    };
