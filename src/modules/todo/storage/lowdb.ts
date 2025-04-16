import fs from "node:fs";
import path from "node:path";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { Todo } from "../types.ts";
import { BaseStorage } from "./base.ts";

const DB_PATH = "./data/todos.json";

export class LowDBStorage implements BaseStorage {
  private db: Low<{ todos: Todo[] }>;

  constructor(private dbPath: string = DB_PATH) {
    const dir = path.dirname(this.dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    this.db = new Low(new JSONFile(this.dbPath), { todos: [] });
  }

  async getAll() {
    await this.db.read();

    return Promise.resolve([...this.db.data.todos]);
  }

  async getItem(id: string) {
    await this.db.read();

    const item = this.db.data.todos.find((todo) => todo.id === id);
    return Promise.resolve(item !== undefined ? item : null);
  }

  async putItem(id: string, value: Todo) {
    await this.db.read();
    const index = this.db.data.todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      this.db.data.todos[index] = value;
    } else {
      this.db.data.todos = [value, ...this.db.data.todos];
    }

    await this.db.write();
    return Promise.resolve(value);
  }

  async removeItem(id: string) {
    await this.db.read();
    this.db.data.todos = this.db.data.todos.filter((todo) => todo.id !== id);
    await this.db.write();
    return Promise.resolve();
  }
}
