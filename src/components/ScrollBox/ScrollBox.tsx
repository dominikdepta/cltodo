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

  useInput((input, key) => {
    if (!keyNavigation) {
      return;
    }

    if (input === "j" || key.downArrow) {
      onChange((activeIndex + 1) % items.length);
    }
    if (input === "k" || key.upArrow) {
      onChange((activeIndex - 1 + items.length) % items.length);
    }
  });

  const startIndex = Math.max(
    0,
    Math.min(
      activeIndex - Math.floor(visibleCount / 2),
      items.length - visibleCount
    )
  );
  const endIndex = Math.min(items.length, startIndex + visibleCount);
  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <Box flexDirection="column">
      <Text color="gray">
        {activeIndex > Math.floor(visibleCount / 2) ? "⇡" : " "}
      </Text>

      {visibleItems}

      <Text color="gray">{endIndex < items.length - 1 ? "⇣" : " "}</Text>
    </Box>
  );
};
