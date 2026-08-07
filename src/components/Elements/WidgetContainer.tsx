import type { ReactNode } from "react";

type WidgetContainerProps = {
  children: ReactNode | ReactNode[];
};

export default function WidgetContainer({ children }: WidgetContainerProps) {
  return (
    <div className="container">
      {children}
    </div>
  );
}
