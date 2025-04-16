import React from "react";
import { Key } from "../../../../components/Key/Key.tsx";
import type { KeyProps } from "../../../../components/Key/types.ts";

export const HelpKey = (props: KeyProps) => {
  return <Key delimiter={"\t"} variant="primary" {...props} />;
};
