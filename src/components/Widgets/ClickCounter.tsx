// Element imports
import Container from "../Elements/Container";
import Header3 from "../Elements/Header3";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";

// React imports
import { useEffect, useState } from "react";

// Type imports
import type { Style } from "../../types/types";

type ClickCounterProps = {
  style: Style;
};

export default function ClickCounter({ style }: ClickCounterProps) {
  const { containerClass, h3Class, pClass, spanClass1 } = style;

  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    function handleClick() {
        setClickCount(prev => prev + 1);
    }

    document.addEventListener('click', handleClick);

    return () => {
        document.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <Container style={containerClass}>
      <Header3 style={h3Class}>Click Counter:</Header3>
      <Paragraph style={pClass}>
        <Span1 style={spanClass1}>
          You've clicked 
        </Span1>
         {` ${clickCount} `}
        <Span1 style={spanClass1}>
         times.
        </Span1>
      </Paragraph>
    </Container>
  );
}
