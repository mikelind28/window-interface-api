import type { ReactNode } from "react";

type Header4Props = {
  children: ReactNode;
};

export default function Header4({ children }: Header4Props) {
  return <h4>{children}</h4>;
}
