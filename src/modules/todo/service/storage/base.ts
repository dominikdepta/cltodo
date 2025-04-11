import type { Todo } from "../types.ts";

export abstract class BaseStorage {
  abstract getAll(): Promise<Todo[]>;
  abstract getItem(id: string): Promise<Todo | null>;
  abstract putItem(id: string, value: Todo): Promise<Todo>;
  abstract removeItem(id: string): Promise<void>;
}
