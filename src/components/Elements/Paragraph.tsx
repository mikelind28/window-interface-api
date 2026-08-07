import type { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};

export default function Paragraph({ children }: ParagraphProps) {
  return <p>{children}</p>;
}
