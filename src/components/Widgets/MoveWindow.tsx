// Element imports
import Button from "../Elements/Button";
import Container from "../Elements/Container";
import Header3 from "../Elements/Header3";

// Type imports
import type { Style } from "../../types/types";

type MoveWindowProps = {
  style: Style;
};

type MiniMoverProps = {
    style: Style;
};

export function MiniMover({ style }: MiniMoverProps) {
    function moveLeft() {
        window.moveBy(-20, 0);
    }

    function moveRight() {
        window.moveBy(20, 0);
    }

    function moveUp() {
        window.moveBy(0, -20);
    }

    function moveDown() {
        window.moveBy(0, 20);
    }

    return (
        <div className="bg-slate-950">
            <Button style={style.buttonClass} handleClick={moveLeft}>
                {"<"}
            </Button>

            <Button style={style.buttonClass} handleClick={moveRight}>
                {">"}
            </Button>

            <Button style={style.buttonClass} handleClick={moveUp}>
                {"^"}
            </Button>

            <Button style={style.buttonClass} handleClick={moveDown}>
                {"⌄"}
            </Button>
        </div> 
    ) 
}

export default function MoveWindow({ style }: MoveWindowProps) {
    const { containerClass, h3Class, buttonClass } = style;

    // center the popup window on the screen

    function openWindow() {
        window.open("window-mover", "_target", "popup left=100,top=100,width=200,height=200");
    }

    return (
        <Container style={containerClass}>
            <Header3 style={h3Class}>
                <div className="flex flex-wrap text-sm xs:text-base sm:text-lg">
                    <code>window</code>
                    <code className="wrap-anywhere">.moveBy(deltaX, deltaY)</code>
                </div>
            </Header3>

            <Button style={buttonClass} handleClick={openWindow}>
                Move a window!
            </Button>
        </Container>
    );
}
