import type { ReactNode } from "react";

type Span1Props = {
  children: ReactNode;
  style: string | undefined;
};

export default function Span1({ children, style }: Span1Props) {
  return <span className={style}>{children}</span>;
}
