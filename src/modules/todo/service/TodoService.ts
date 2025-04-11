import { nanoid } from "nanoid";
import { BaseStorage } from "./storage/base.ts";
import { Todo } from "./types.ts";

export class TodoService {
  #todoStorage: BaseStorage;

  constructor(storage: BaseStorage) {
    this.#todoStorage = storage;
  }

  async getAll() {
    return await this.#todoStorage.getAll();
  }

  async add(title: string, completed: boolean) {
    const todo = {
      id: nanoid(),
      title,
      completed,
    };
    await this.#todoStorage.putItem(todo.id, todo);
    return todo;
  }

  async update(id: string, updates: Partial<Omit<Todo, "id">>) {
    const todo = await this.#todoStorage.getItem(id);
    return await this.#todoStorage.putItem(id, { ...todo, ...updates });
  }
}
