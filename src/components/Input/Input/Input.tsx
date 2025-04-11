import TextInput from "ink-text-input";
import React from "react";
import { BaseInput } from "../BaseInput/BaseInput.tsx";
import { InputProps } from "./types.ts";

export const Input = ({ symbol, ...inputProps }: InputProps) => {
  return (
    <BaseInput symbol={symbol}>
      <TextInput {...inputProps} />
    </BaseInput>
  );
};
