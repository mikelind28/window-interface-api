import type { ReactNode } from "react";

type Header3Props = {
  children: ReactNode;
  style: string | undefined;
};

export default function Header3({ children, style }: Header3Props) {
  return (
    <h3 className={style}>
      <div className="flex flex-wrap text-base sm:text-lg">
        {children}
      </div>
    </h3>
  );
}
