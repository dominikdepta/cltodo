import type React from "react";

export interface ScrollBoxProps {
  children: React.ReactNode;
  activeIndex: number;
  keyNavigation?: boolean;
  maxItems?: number;
  onChange?: (index: number) => void;
}
