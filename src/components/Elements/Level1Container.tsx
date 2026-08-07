import type { ReactNode } from "react";

type Level1ContainerProps = {
  children: ReactNode | ReactNode[];
};

export default function Level1Container({ children }: Level1ContainerProps) {
    return (
        <div className="level-one">
            {children}
        </div>
    );
}