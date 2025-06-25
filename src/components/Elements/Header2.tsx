import type { ReactNode } from "react";

type Header2Props = {
  children: ReactNode;
  style: string | undefined;
};

export default function Header2({ children, style }: Header2Props) {
  return <h2 className={style}>{children}</h2>;
}
