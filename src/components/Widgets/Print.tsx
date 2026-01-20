import type { Style } from "../../types/types";
import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";

type PrintProps = {
    style: Style;
}

export default function Print({ style }: PrintProps) {
    const { buttonClass, containerClass, h3Class } = style;

    return (
        <WidgetContainer style={containerClass}>
            <Header3 style={h3Class}>
                <code>window.print()</code>
            </Header3>
    
            <Button style={buttonClass} handleClick={() => window.print()}>
            Print...
            </Button>
    
        </WidgetContainer>
    );
}