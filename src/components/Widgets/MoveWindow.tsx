// Element imports
import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Span2 from "../Elements/Span2";
import Span1 from "../Elements/Span1";

// Icon imports
import {
  GoArrowDown,
  GoArrowUp,
  GoArrowLeft,
  GoArrowRight,
  GoArrowUpLeft,
  GoArrowUpRight,
  GoArrowDownLeft,
  GoArrowDownRight,
} from "react-icons/go";

import { useEffect, useState } from "react";
import type { Theme } from "../../types/types";
import WidgetDescription from "../Elements/WidgetDescripiton";

function getLocalStorageTheme(): Theme {
  const theme = localStorage.getItem("theme");
  if (theme === "style-1" || theme === "style-2" || theme === "style-3") {
    return theme;
  }
  return "style-1";
}

export function MiniMover() {
  const [theme, setTheme] = useState<Theme>(getLocalStorageTheme);

  useEffect(() => {
    function handleStorageChange(e: StorageEvent) {
      if (e.key === "theme" && e.newValue) {
        setTheme(e.newValue as Theme);
      }
    }
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const [pixels, setPixels] = useState("20");

  function moveLeft() {
    window.moveBy(parseInt(pixels) * -1, 0);
  }

  function moveUpLeft() {
    window.moveBy(parseInt(pixels) * -1, parseInt(pixels) * -1);
  }

  function moveUp() {
    window.moveBy(0, parseInt(pixels) * -1);
  }

  function moveUpRight() {
    window.moveBy(parseInt(pixels), parseInt(pixels) * -1);
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
    window.moveBy(parseInt(pixels) * -1, parseInt(pixels));
  }

  const iconClassName = "text-2xl";

  return (
    <main data-theme={theme}>
      <title>window.moveBy()</title>

      <div className="grid h-screen min-h-70 min-w-70 grid-cols-3 grid-rows-3 items-center justify-items-center gap-4 bg-slate-950 p-4">
        <button
          className="flex items-center justify-center self-start justify-self-start size-20"
          onClick={moveUpLeft}
        >
          <GoArrowUpLeft className={iconClassName} />
        </button>

        <button className="flex items-center justify-center self-start size-20" onClick={moveUp}>
          <GoArrowUp className={iconClassName} />
        </button>

        <button
          className="flex items-center justify-center self-start justify-self-end size-20"
          onClick={moveUpRight}
        >
          <GoArrowUpRight className={iconClassName} />
        </button>

        <button
          className="flex items-center justify-center justify-self-start size-20"
          onClick={moveLeft}
        >
          <GoArrowLeft className={iconClassName} />
        </button>

        <div className="flex-col justify-items-center text-center">
          <Span2>Move by </Span2>
          <input
            placeholder={"pixels"}
            value={pixels}
            type="number"
            min="10"
            max="200"
            step="10"
            onChange={(e) => setPixels(e.target.value)}
          />
          <Span2> pixels</Span2>
        </div>

        <button
          className="flex items-center justify-center justify-self-end size-20"
          onClick={moveRight}
        >
          <GoArrowRight className={iconClassName} />
        </button>

        <button
          className="flex items-center justify-center self-end justify-self-start size-20"
          onClick={moveDownLeft}
        >
          <GoArrowDownLeft className={iconClassName} />
        </button>

        <button className="flex items-center justify-center self-end size-20" onClick={moveDown}>
          <GoArrowDown className={iconClassName} />
        </button>

        <button
          className="flex items-center justify-center self-end justify-self-end size-20"
          onClick={moveDownRight}
        >
          <GoArrowDownRight className={iconClassName} />
        </button>
      </div>
    </main>
  );
}

export default function MoveWindow() {
  // center the popup window on the screen
  const screenWidth = window.screen.availWidth;
  const screenHeight = window.screen.availHeight;

  const middleOfScreenX = screenWidth / 2;
  const middleOfScreenY = screenHeight / 2;

  function openWindow() {
    window.open(
      "/window-mover",
      "_blank",
      `popup left=${middleOfScreenX - 200},top=${middleOfScreenY - 200},width=400,height=400`,
    );
  }

  return (
    <WidgetContainer>
      <Header3>
        <code>window.open(), window.moveBy()</code>
      </Header3>

      <Button handleClick={openWindow}>Open a moveable window!</Button>

      <br />

      <Span1>
        *The moveable window won't work while in fullscreen or on a mobile
        device.
      </Span1>
      
      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            The <code>open()</code> method of the Window interface loads a specified resource into a new or existing browsing context (that is, a tab, a window, or an iframe) under a specified name.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/open"
          >
            Window: open() method - Web APIs | MDN
          </a>
        </cite>
        <div className="h-4"/>
        <blockquote>
          <p className="span-3">
            The <code>moveBy()</code> method of the Window interface moves the current window by a specified amount.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/moveBy"
          >
            Window: moveBy() method - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
