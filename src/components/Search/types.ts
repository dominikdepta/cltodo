export interface SearchProps {
  value: string;
  isFocused?: boolean;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}
