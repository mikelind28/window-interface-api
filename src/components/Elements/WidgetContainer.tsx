import type { ReactNode } from "react";

type WidgetContainerProps = {
  children: ReactNode | ReactNode[];
  style: string | undefined;
};

export default function WidgetContainer({ children, style }: WidgetContainerProps) {
  return (
    <div className={style}>
      {children}
    </div>
  );
}
