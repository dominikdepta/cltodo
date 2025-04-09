import type { Todo } from "../types.ts";

export interface TodoListProps {
  activeIndex: number;
  children: React.ReactNode;
  maxItems?: number;
  keyNavigation?: boolean;
  onSelect: (index: number) => void;
}
