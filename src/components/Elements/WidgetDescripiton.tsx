import type { ReactNode } from "react";

export default function WidgetDescription({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return (
    <div className="widget-description">
      {children}
    </div>
  )
}