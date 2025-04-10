import type { Todo } from "../types.ts";

export interface TodoListProps {
  children: React.ReactNode;
  initialIndex?: number;
  keyNavigation?: boolean;
  maxItems?: number;
  onSelect: (index: number) => void;
}
