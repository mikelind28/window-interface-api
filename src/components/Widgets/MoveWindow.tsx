// Element imports
import Button from "../Elements/Button";
import Container from "../Elements/Container";
import Header3 from "../Elements/Header3";

// Icon imports 
import { GoArrowDown, GoArrowUp, GoArrowLeft, GoArrowRight, GoArrowUpLeft, GoArrowUpRight, GoArrowDownLeft, GoArrowDownRight } from "react-icons/go";

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

    function moveUpLeft() {
        window.moveBy(-20, -20);
    }

    function moveUp() {
        window.moveBy(0, -20);
    }

    function moveUpRight() {
        window.moveBy(20, -20);
    }

    function moveRight() {
        window.moveBy(20, 0);
    }

    function moveDownRight() {
        window.moveBy(20, 20);
    }

    function moveDown() {
        window.moveBy(0, 20);
    }

    function moveDownLeft() {
        window.moveBy(-20, 20);
    }

    return (
        <div className="bg-slate-950 p-4 h-[100vh] grid grid-cols-3 grid-rows-3 gap-4 justify-center align-middle">

            <Button style={style.buttonClass} handleClick={moveUpLeft}>
                <GoArrowUpLeft />
            </Button>

            <Button style={style.buttonClass} handleClick={moveUp}>
                <GoArrowUp />
            </Button>

            <Button style={style.buttonClass} handleClick={moveUpRight}>
                <GoArrowUpRight />
            </Button>

            <Button style={style.buttonClass} handleClick={moveLeft}>
                <GoArrowLeft />
            </Button>

            <div></div>

            <Button style={style.buttonClass} handleClick={moveRight}>
                <GoArrowRight />
            </Button>

            <Button style={style.buttonClass} handleClick={moveDownLeft}>
                <GoArrowDownLeft />
            </Button>

            <Button style={style.buttonClass} handleClick={moveDown}>
                <GoArrowDown className="justify-self-center"/>
            </Button>

            <Button style={style.buttonClass} handleClick={moveDownRight}>
                <GoArrowDownRight />
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
