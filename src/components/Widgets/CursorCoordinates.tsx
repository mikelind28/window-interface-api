// Element imports
import Container from "../Elements/Container";
import Header3 from "../Elements/Header3";
import Header4 from "../Elements/Header4";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";

// React imports
import { useState } from "react";

// Type imports
import type { Style } from "../../types/types";

type CursorCoordinatesProps = {
  style: Style;
};

export default function CursorCoordinates({ style }: CursorCoordinatesProps) {
  const { containerClass, h3Class, h4Class, pClass, spanClass1 } = style;

  const [cursorCoordinates, setCursorCoordinates] = useState({
    x: 0,
    y: 0,
  });

  function handleMouseMove(e: MouseEvent) {
    setCursorCoordinates({
        x: e.clientX,
        y: e.clientY,
    })
  }

  window.document.addEventListener('mousemove', handleMouseMove);

  return (
    <Container style={containerClass}>
      <Header3 style={h3Class}>Cursor Coordinates:</Header3>

      <Header4 style={h4Class}>X:</Header4>
      <Paragraph style={pClass}>
        {cursorCoordinates.x}
        <Span1 style={spanClass1}> px</Span1>
      </Paragraph>

      <Header4 style={h4Class}>Y:</Header4>
      <Paragraph style={pClass}>
        {cursorCoordinates.y}
        <span className={spanClass1}> px</span>
      </Paragraph>
    </Container>
  );
}
