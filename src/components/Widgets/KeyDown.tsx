// Element imports
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Span1 from "../Elements/Span1";

// React imports
import { useEffect, useState } from "react";

// Type imports
import Header4 from "../Elements/Header4";
import WidgetDescription from "../Elements/WidgetDescripiton";

export default function KeyDown() {
  const [currentKeyDown, setCurrentKeyDown] = useState("");

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      setCurrentKeyDown(event.key);
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <WidgetContainer>
      <Header3>
        <code>document</code>
        <code>.addEventListener</code>
        <code>('keydown', ...)</code>
      </Header3>

      <Header4>Press a keyboard key!</Header4>

      <Span1>You pressed:</Span1>

      <br />

      <kbd className="mt-1 inline-block rounded-sm border border-neutral-500 bg-neutral-200 px-2 font-bold text-neutral-900 inset-shadow-neutral-50 drop-shadow-neutral-800">
        {currentKeyDown}
      </kbd>

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            The <code>keydown</code> event is fired when a key is pressed.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event"
          >
            Element: keydown event - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
