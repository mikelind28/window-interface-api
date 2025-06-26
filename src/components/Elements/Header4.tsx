import type { ReactNode } from "react";

type Header4Props = {
  children: ReactNode;
  style: string | undefined;
};

export default function Header4({ children, style }: Header4Props) {
  return <h4 className={style}>{children}</h4>;
}
