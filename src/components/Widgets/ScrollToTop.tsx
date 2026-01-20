import type { Style } from "../../types/types";
import Button from "../Elements/Button";

type ScrollToTopProps = {
    style: Style;
}

export default function ScrollToTop({ style }: ScrollToTopProps) {
    const { buttonClass } = style;

    return (
        <Button 
            style={buttonClass} 
            handleClick={() => window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            })}
        >
            Scroll to top
        </Button>
    );
}
