import { TodoState } from "./types.ts";

export const todoInitialState: TodoState = {
  activeItem: null,
  mode: "list",
  searchValue: "",
  items: [],
};
