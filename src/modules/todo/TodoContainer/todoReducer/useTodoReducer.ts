import { useCallback, useReducer } from "react";
import { todoInitialState } from "./constants.ts";
import { todoReducer } from "./todoReducer.ts";
import { TodoAction, TodoDispatch, TodoState } from "./types.ts";

export const useTodoReducer = () => {
  const [state, _dispatch] = useReducer(todoReducer, todoInitialState);

  const dispatch = useCallback<TodoDispatch>(
    async (action) => {
      if (typeof action === "function") {
        return await action({ dispatch: _dispatch, state });
      }

      _dispatch(action);
    },
    [_dispatch]
  );

  return [state, dispatch] as const;
};
