import React from "react";
import { ScrollBox } from "../../../components/ScrollBox/ScrollBox.tsx";
import type { TodoListProps } from "./types.tsx";

export const TodoList = ({
  children,
  initialIndex,
  keyNavigation,
  onSelect,
}: TodoListProps) => {
  return (
    <ScrollBox
      initialIndex={initialIndex}
      keyNavigation={keyNavigation}
      maxItems={5}
      onChange={onSelect}
    >
      {children}
    </ScrollBox>
  );
};
