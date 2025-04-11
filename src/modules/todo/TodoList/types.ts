export interface TodoListProps {
  children: React.ReactNode;
  activeIndex: number;
  keyNavigation?: boolean;
  maxItems?: number;
  onSelect: (index: number) => void;
}
