import type React from "react";

export interface ScrollBoxProps {
  activeIndex: number;
  children: React.ReactNode;
  keyNavigation?: boolean;
  maxItems?: number;
  onChange?: (index: number) => void;
}
