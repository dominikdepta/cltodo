import React from "react";
import { Todo } from "../../../types.ts";

export type TodoMode = "add" | "edit" | "search" | "list";

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
      type: "ITEM_ADD";
      payload: {
        item: Todo;
      };
    }
  | {
      type: "ITEM_ADD_CANCEL";
    }
  | {
      type: "ITEM_UPDATE";
      payload: {
        item: Todo;
      };
    }
  | {
      type: "ITEM_DELETE";
      payload: {
        id: string;
      };
    }
  | {
      type: "ITEMS_SET";
      payload: {
        items: Todo[];
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

export type TodoAsyncActionParams = {
  dispatch: React.ActionDispatch<any>;
  state: TodoState;
};
export type TodoAsyncAction = (params: TodoAsyncActionParams) => Promise<void>;
export type TodoDispatch = (
  action: TodoAction | TodoAsyncAction
) => Promise<void>;
