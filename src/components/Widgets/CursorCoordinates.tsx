// Element imports
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Header4 from "../Elements/Header4";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";

// React imports
import { useState } from "react";
import WidgetDescription from "../Elements/WidgetDescripiton";

export default function CursorCoordinates() {
  const [cursorCoordinates, setCursorCoordinates] = useState({
    x: 0,
    y: 0,
  });

  function handleMouseMove(e: MouseEvent) {
    setCursorCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  window.document.addEventListener("mousemove", handleMouseMove);

  return (
    <WidgetContainer>
      <Header3>
        <code>document</code>
        <code>.addEventListener</code>
        <code>('mousemove', ...)</code>
      </Header3>

      <Header4>Mouse coordinate X:</Header4>
      <Paragraph>
        {cursorCoordinates.x}
        <Span1> px</Span1>
      </Paragraph>

      <Header4>Mouse coordinate Y:</Header4>
      <Paragraph>
        {cursorCoordinates.y}
        <span className="span-1"> px</span>
      </Paragraph>
      
      <WidgetDescription>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event"
          >
            Element: mousemove event - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
