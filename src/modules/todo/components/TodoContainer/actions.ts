import { container } from "../../module.ts";
import { TodoService } from "../../service/TodoService.ts";
import { Todo } from "../../types.ts";
import { TodoAsyncAction } from "./todoReducer/types.ts";

const todoService = container.get(TodoService);

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

export const deleteTodo =
  (id: string): TodoAsyncAction =>
  async ({ dispatch }) => {
    try {
      await todoService.delete(id);
      dispatch({ type: "ITEM_DELETE", payload: { id } });
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
