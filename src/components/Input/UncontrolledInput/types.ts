import { UncontrolledTextInput } from "ink-text-input";
import React from "react";
import { BaseInputProps } from "../BaseInput/types.ts";

export type UncontrolledInputProps = Omit<BaseInputProps, "children"> &
  React.ComponentProps<typeof UncontrolledTextInput>;
