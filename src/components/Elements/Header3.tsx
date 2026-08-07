import type { ReactNode } from "react";

type Header3Props = {
  children: ReactNode;
};

export default function Header3({ children }: Header3Props) {
  return (
    <h3>
      {children}
    </h3>
  );
}
