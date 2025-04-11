import TextInput from "ink-text-input";
import React from "react";

export interface InputProps extends React.ComponentProps<typeof TextInput> {
  icon?: React.ReactNode;
}
