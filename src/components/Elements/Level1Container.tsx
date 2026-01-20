import type { ReactNode } from "react";

type Level1ContainerProps = {
  children: ReactNode | ReactNode[];
  style: string | undefined;
};

export default function Level1Container({ children, style }: Level1ContainerProps) {
    return (
        <div className={style}>
            {children}
        </div>
    );
}