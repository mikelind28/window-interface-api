import type { ReactNode } from "react";

type Span1Props = {
  children: ReactNode;
};

export default function Span1({ children }: Span1Props) {
  return <span className="span-1">{children}</span>;
}
