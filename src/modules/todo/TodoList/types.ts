import type { Todo } from "../types.ts";

export interface TodoListProps {
  items: Todo[];
  activeIndex: number;
  maxItems?: number;
  keyNavigation?: boolean;
  onSelect: (todo: Todo) => void;
}
