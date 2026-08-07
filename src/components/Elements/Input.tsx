import { type Dispatch, type SetStateAction } from "react";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export default function Input({
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      aria-label={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
