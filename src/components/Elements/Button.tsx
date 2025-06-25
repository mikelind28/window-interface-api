import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  style: string | undefined;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, style, handleClick }: ButtonProps) {
  return (
    <button className={style} onClick={handleClick}>
      {children}
    </button>
  );
}
