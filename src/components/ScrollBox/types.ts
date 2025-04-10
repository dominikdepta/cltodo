import type React from "react";

export interface ScrollBoxProps {
  children: React.ReactNode;
  initialIndex?: number;
  keyNavigation?: boolean;
  maxItems?: number;
  onChange?: (index: number) => void;
}
