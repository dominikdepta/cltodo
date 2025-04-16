import { Todo } from "../types.ts";
import { BaseStorage } from "./base.ts";

export class MemoryStorage implements BaseStorage {
  private storage: Todo[] = [];

  async getAll() {
    return Promise.resolve([...this.storage]);
  }

  async getItem(id: string) {
    const value = this.storage.find(todo => todo.id === id);
    return Promise.resolve(value !== undefined ? value : null);
  }

  async putItem(id: string, value: Todo) {
    const index = this.storage.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.storage[index] = value;
    } else {
      this.storage = [value, ...this.storage];
    }
    return Promise.resolve(value);
  }

  async removeItem(id: string) {
    this.storage = this.storage.filter(todo => todo.id !== id);
    return Promise.resolve();
  }
}
