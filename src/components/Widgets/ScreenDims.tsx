// Element imports
import Container from "../Elements/Container";
import Header3 from "../Elements/Header3";
import Header4 from "../Elements/Header4";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";

// React imports
import { useEffect, useState } from "react";

// Type imports
import type { Style } from "../../types/types";

type ScreenDimsProps = {
  style: Style;
};

export default function ScreenDims({ style }: ScreenDimsProps) {
  const { containerClass, h3Class, h4Class, pClass, spanClass1 } = style;

  const [screenDims, setScreenDims] = useState({
    width: window.screen.availWidth,
    height: window.screen.availHeight,
  });

  useEffect(() => {
    setScreenDims({
      width: window.screen.availWidth,
      height: window.screen.availHeight,
    });
  }, [window.screen]);

  return (
    <Container style={containerClass}>
      <Header3 style={h3Class}>Your Screen Dimensions:</Header3>

      <Header4 style={h4Class}>Width:</Header4>
      <Paragraph style={pClass}>
        {screenDims.width}
        <Span1 style={spanClass1}> px</Span1>
      </Paragraph>

      <Header4 style={h4Class}>Height:</Header4>
      <Paragraph style={pClass}>
        {screenDims.height}
        <span className={spanClass1}> px</span>
      </Paragraph>
    </Container>
  );
}
