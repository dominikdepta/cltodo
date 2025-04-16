export interface TodoItemProps {
  id: string;
  completed: boolean;
  title: string;
  active?: boolean;
  isEditing?: boolean;
  onEdit?: (id: string) => void;
}
