import type { ReactNode } from "react";

type Span2Props = {
  children: ReactNode;
};

export default function Span2({ children }: Span2Props) {
  return <span className="span-2">{children}</span>;
}
