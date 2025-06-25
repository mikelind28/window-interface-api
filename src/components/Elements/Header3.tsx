import type { ReactNode } from "react";

type Header3Props = {
    children: ReactNode;
    style: string | undefined;
}

export default function Header3({ children, style }: Header3Props) {
    return (
        <h3 className={style}>
            {children}
        </h3>
    );
}