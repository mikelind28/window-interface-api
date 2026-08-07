import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, handleClick }: ButtonProps) {
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
}
