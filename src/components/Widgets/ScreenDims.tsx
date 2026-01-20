// Element imports
import WidgetContainer from "../Elements/WidgetContainer";
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
    width: window.screen.width,
    height: window.screen.height,
  });

  useEffect(() => {
    setScreenDims({
      width: window.screen.width,
      height: window.screen.height,
    });
  }, [window.screen]);

  return (
    <WidgetContainer style={containerClass}>
      <Header3 style={h3Class}>
        <code>window.screen.width, window.screen.height</code>
      </Header3>

      <Header4 style={h4Class}>Screen's Width:</Header4>
      <Paragraph style={pClass}>
        {screenDims.width}
        <Span1 style={spanClass1}> px</Span1>
      </Paragraph>

      <Header4 style={h4Class}>Screen's Height:</Header4>
      <Paragraph style={pClass}>
        {screenDims.height}
        <span className={spanClass1}> px</span>
      </Paragraph>
    </WidgetContainer>
  );
}
