import { UncontrolledTextInput } from "ink-text-input";
import React from "react";
import { BaseInput } from "../BaseInput/BaseInput.tsx";
import { UncontrolledInputProps } from "./types.ts";

export const UncontrolledInput = ({
  symbol,
  ...inputProps
}: UncontrolledInputProps) => {
  return (
    <BaseInput>
      <UncontrolledTextInput {...inputProps} />
    </BaseInput>
  );
};
