// Element imports
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";

// React imports
import { useEffect, useState } from "react";

// Type imports
import type { Style } from "../../types/types";
import Button from "../Elements/Button";

type SetIntervalSinceRefreshProps = {
  style: Style;
};

// TODO: update this to read "_ minutes and _seconds"
export default function SetIntervalSinceRefresh({ style }: SetIntervalSinceRefreshProps) {
  const { buttonClass, containerClass, h3Class, pClass, spanClass1 } = style;

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
    <WidgetContainer style={containerClass}>
      <Header3 style={h3Class}>
        <code>window</code>
        <code className="wrap-anywhere">.setInterval()</code>
      </Header3>

      <Span1 style={spanClass1}>Time since refresh:</Span1>

      <Paragraph style={pClass}>
        {secondsPassed}
        <Span1 style={spanClass1}>
          {secondsPassed === "1" ? " second" : " seconds"}
        </Span1>
      </Paragraph>

      <Button style={buttonClass} handleClick={() => window.location.reload()}>
        Refresh
      </Button>
    </WidgetContainer>
  );
}
