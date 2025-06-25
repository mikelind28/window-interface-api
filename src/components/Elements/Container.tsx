import type { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode[];
    style: string | undefined;
}

export default function Container({ children, style }: ContainerProps) {
    return (
        <div className={style}>
            {children}
        </div>
    );
}