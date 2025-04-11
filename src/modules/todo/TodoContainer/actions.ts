import { TodoService } from "../service/TodoService.ts";
import { Todo } from "../service/types.ts";
import { MemoryStorage } from "../service/storage/memory.ts";
import { TodoAsyncAction } from "./todoReducer/types.ts";

const todoService = new TodoService(new MemoryStorage());

export const getTodos =
  (): TodoAsyncAction =>
  async ({ dispatch }) => {
    try {
      const todos = await todoService.getAll();
      dispatch({ type: "ITEMS_SET", payload: { items: todos } });
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

export const addTodo =
  (title: string, completed: boolean): TodoAsyncAction =>
  async ({ dispatch }) => {
    try {
      const todo = await todoService.add(title, completed);
      dispatch({ type: "ITEM_ADD", payload: { item: todo } });
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

export const updateTodo =
  (id: string, updates: Partial<Omit<Todo, "id">>): TodoAsyncAction =>
  async ({ dispatch }) => {
    try {
      const item = await todoService.update(id, updates);

      dispatch({ type: "ITEM_UPDATE", payload: { item } });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
