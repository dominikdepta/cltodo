import React from "react";
import { ScrollBox } from "../../../../components/ScrollBox/ScrollBox.tsx";
import type { TodoListProps } from "./types.ts";

export const TodoList = ({
  children,
  activeIndex,
  keyNavigation,
  onSelect,
}: TodoListProps) => {
  return (
    <ScrollBox
      activeIndex={activeIndex}
      keyNavigation={keyNavigation}
      maxItems={5}
      onChange={onSelect}
    >
      {children}
    </ScrollBox>
  );
};
