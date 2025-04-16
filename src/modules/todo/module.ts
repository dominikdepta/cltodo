import { Container } from "inversify";
import { TodoService } from "./service/TodoService.ts";
import { BaseStorage } from "./storage/base.ts";
import { LowDBStorage } from "./storage/lowdb.ts";

const container = new Container();

container.bind<BaseStorage>("BaseStorage").to(LowDBStorage);
container.bind<TodoService>(TodoService).toSelf();

export { container };
