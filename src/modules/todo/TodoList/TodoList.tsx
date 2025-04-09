import React from "react";
import { ScrollBox } from "../../../components/ScrollBox/ScrollBox.tsx";
import { TodoItem } from "../TodoItem/TodoItem.tsx";
import type { TodoListProps } from "./types.tsx";

export const TodoList = ({
  items,
  activeIndex = 0,
  keyNavigation,
  onSelect,
}: TodoListProps) => {
  const handleIndexChange = (index: number) => {
    onSelect(items[index]);
  };

  return (
    <ScrollBox
      activeIndex={activeIndex}
      keyNavigation={keyNavigation}
      maxItems={5}
      onChange={handleIndexChange}
    >
      {items.map(({ id, title, completed }, index) => (
        <TodoItem
          key={id}
          id={id}
          title={title}
          completed={completed}
          active={index === activeIndex}
        />
      ))}
    </ScrollBox>
  );
};
