import { Box, Text, useInput } from "ink";
import React from "react";
import type { ScrollBoxProps } from "./types.ts";

export const ScrollBox = ({
  children,
  activeIndex,
  keyNavigation = true,
  maxItems = 5,
  onChange = () => {},
}: ScrollBoxProps) => {
  const items = React.Children.toArray(children);
  const visibleCount = Math.min(maxItems, items.length);
  const startIndex = Math.max(
    0,
    Math.min(
      activeIndex - Math.floor(visibleCount / 2),
      items.length - visibleCount
    )
  );
  const endIndex = Math.min(items.length, startIndex + visibleCount);
  const visibleItems = items.slice(startIndex, endIndex);
  const isOverflowTop =
    items.length > visibleCount && activeIndex > Math.floor(visibleCount / 2);
  const isOverflowBottom =
    items.length > visibleCount && endIndex < items.length;

  useInput((input, key) => {
    if (!keyNavigation) {
      return;
    }

    if (input === "j" || key.downArrow) {
      const newIndex = (activeIndex + 1) % items.length;
      onChange(newIndex);
    }
    if (input === "k" || key.upArrow) {
      const newIndex = (activeIndex - 1 + items.length) % items.length;
      onChange(newIndex);
    }
  });

  return (
    <Box flexDirection="column">
      <Box height={1}>{isOverflowTop && <Text color="gray">{"⇡"}</Text>}</Box>

      {visibleItems}

      <Box height={1}>
        {isOverflowBottom && <Text color="gray">{"⇣"}</Text>}
      </Box>
    </Box>
  );
};
