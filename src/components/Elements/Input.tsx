import { type Dispatch, type SetStateAction } from "react";

type InputProps = {
  placeholder: string;
  style: string | undefined;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};

export default function Input({
  placeholder,
  style,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className={style}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
