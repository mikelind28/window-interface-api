import type { ReactNode } from "react";

type Level2ContainerProps = {
  children: ReactNode | ReactNode[];
  style: string | undefined;
};

export default function Level2Container({ children, style }: Level2ContainerProps) {
    return (
        <div className={style}>
            {children}
        </div>
    );
}