import type { ReactNode } from "react";

type Span2Props = {
    children: ReactNode;
    style: string | undefined;
}

export default function Span2({ children, style }: Span2Props) {
    return (
        <span className={style}>
            {children}
        </span>
    );
}