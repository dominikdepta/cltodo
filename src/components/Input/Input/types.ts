import TextInput from "ink-text-input";
import React from "react";
import { BaseInputProps } from "../BaseInput/types.ts";

export type InputProps = Omit<BaseInputProps, "children"> &
  React.ComponentProps<typeof TextInput>;
