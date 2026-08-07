import type { ReactNode } from "react";

type Level2ContainerProps = {
  children: ReactNode | ReactNode[];
};

export default function Level2Container({ children }: Level2ContainerProps) {
    return (
        <div className="level-two">
            {children}
        </div>
    );
}