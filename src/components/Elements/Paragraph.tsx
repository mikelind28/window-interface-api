import type { ReactNode } from "react";

type ParagraphProps = {
    children: ReactNode;
    style: string | undefined;
}

export default function Paragraph({ children, style }: ParagraphProps) {
    return (
        <p className={style}>
            {children}
        </p>
    );
}