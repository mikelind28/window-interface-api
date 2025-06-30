// Element imports
import Button from "../Elements/Button";
import Container from "../Elements/Container";
import Header3 from "../Elements/Header3";

// Icon imports 
import { GoArrowDown, GoArrowUp, GoArrowLeft, GoArrowRight, GoArrowUpLeft, GoArrowUpRight, GoArrowDownLeft, GoArrowDownRight } from "react-icons/go";

// Type imports
import type { Style } from "../../types/types";
import { useState } from "react";
import Span2 from "../Elements/Span2";

type MoveWindowProps = {
  style: Style;
};

type MiniMoverProps = {
    style: Style;
};

export function MiniMover({ style }: MiniMoverProps) {
    const {
        buttonClass,
        inputClass,
        spanClass2
    } = style;

    const [pixels, setPixels] = useState("20");

    function moveLeft() {
        window.moveBy((parseInt(pixels) * -1), 0);
    }

    function moveUpLeft() {
        window.moveBy((parseInt(pixels) * -1), (parseInt(pixels) * -1));
    }

    function moveUp() {
        window.moveBy(0, (parseInt(pixels) * -1));
    }

    function moveUpRight() {
        window.moveBy(parseInt(pixels), (parseInt(pixels) * -1));
    }

    function moveRight() {
        window.moveBy(parseInt(pixels), 0);
    }

    function moveDownRight() {
        window.moveBy(parseInt(pixels), parseInt(pixels));
    }

    function moveDown() {
        window.moveBy(0, parseInt(pixels));
    }

    function moveDownLeft() {
        window.moveBy((parseInt(pixels) * -1), parseInt(pixels));
    }

    const iconClassName = " justify-self-center text-2xl";
    const buttonClassName = " w-20 h-20";

    return (
        <div className="bg-slate-950 min-w-70 min-h-70 p-4 h-[100vh] grid grid-cols-3 grid-rows-3 gap-4 justify-items-center items-center">

            <Button style={buttonClass?.concat(buttonClassName)} handleClick={moveUpLeft}>
                <GoArrowUpLeft className={iconClassName}/>
            </Button>

            <Button style={buttonClass?.concat(buttonClassName)} handleClick={moveUp}>
                <GoArrowUp className={iconClassName}/>
            </Button>

            <Button style={buttonClass?.concat(buttonClassName)} handleClick={moveUpRight}>
                <GoArrowUpRight className={iconClassName}/>
            </Button>

            <Button style={buttonClass?.concat(buttonClassName)} handleClick={moveLeft}>
                <GoArrowLeft className={iconClassName}/>
            </Button>

            <div className="flex-col text-center justify-items-center">
                <Span2 style={spanClass2}>Move by </Span2>
                <input 
                    className={inputClass} 
                    placeholder={"pixels"} 
                    value={pixels} 
                    type="number"
                    min="10"
                    max="200"
                    step="10"
                    onChange={(e) => setPixels(e.target.value)}                    
                />
                <Span2 style={spanClass2}> pixels</Span2>
            </div>

            <Button style={buttonClass?.concat(buttonClassName)} handleClick={moveRight}>
                <GoArrowRight className={iconClassName}/>
            </Button>

            <Button style={buttonClass?.concat(buttonClassName)} handleClick={moveDownLeft}>
                <GoArrowDownLeft className={iconClassName}/>
            </Button>

            <Button style={buttonClass?.concat(buttonClassName)} handleClick={moveDown}>
                <GoArrowDown className={iconClassName}/>
            </Button>

            <Button style={buttonClass?.concat(buttonClassName)} handleClick={moveDownRight}>
                <GoArrowDownRight className={iconClassName}/>
            </Button>
 
        </div> 
    ) 
}

export default function MoveWindow({ style }: MoveWindowProps) {
    const { containerClass, h3Class, buttonClass } = style;

    // center the popup window on the screen
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;

    const middleOfScreenX = screenWidth/2;
    const middleOfScreenY = screenHeight/2;

    console.log(middleOfScreenX, middleOfScreenY)

    function openWindow() {
        window.open("window-mover", "_target", `popup left=${middleOfScreenX - 200},top=${middleOfScreenY - 200},width=400,height=400`);
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
