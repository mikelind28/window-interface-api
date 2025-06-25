// Element imports
import Container from "../Elements/Container";
import Header2 from "../Elements/Header2";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";

// React imports
import { useEffect, useState } from "react";

// Type imports
import type { Style } from "../../types/types";

type StopwatchProps = {
  style: Style;
};

export default function RefreshStopwatch({ style }: StopwatchProps) {
  const { containerClass, h2Class, pClass, spanClass1 } = style;

  const [startTime, setStartTime] = useState(Date.now());
  const [currentTime, setCurrentTime] = useState(Date.now());

  let secondsPassed = "0";
  secondsPassed = ((currentTime - startTime) / 1000).toFixed(0);

  useEffect(() => {
    setStartTime(Date.now());
    setCurrentTime(Date.now());

    window.setInterval(() => setCurrentTime(Date.now), 1000);

    let secondsPassed = "0";
    secondsPassed = ((currentTime - startTime) / 100).toFixed(0);
  }, []);

  return (
    <Container style={containerClass}>
      <Header2 style={h2Class}>Seconds Since Refresh:</Header2>
      <Paragraph style={pClass}>
        {secondsPassed}
        <Span1 style={spanClass1}>
          {secondsPassed === "1" ? " second" : " seconds"}
        </Span1>
      </Paragraph>
    </Container>
  );
}
