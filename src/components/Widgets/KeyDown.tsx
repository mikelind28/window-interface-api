// Element imports
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";

// React imports
import { useEffect, useState } from "react";

// Type imports
import type { Style } from "../../types/types";
import Header4 from "../Elements/Header4";

type KeyDownProps = {
  style: Style;
};

export default function KeyDown({ style }: KeyDownProps) {
  const { containerClass, h3Class, h4Class, pClass, spanClass1 } = style;

  const [currentKeyDown, setCurrentKeyDown] = useState('');

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
        setCurrentKeyDown(event.key);
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
    <WidgetContainer style={containerClass}>
      <Header3 style={h3Class}>
        <code>document</code>
        <code>.addEventListener</code>
        <code>('keydown', ...)</code>
      </Header3>

      <Header4 style={h4Class}>Press a keyboard key!</Header4>

      <Span1 style={spanClass1}>
        You pressed: 
      </Span1> 

      <br/>

      <kbd className="bg-neutral-200 rounded-sm border-1 border-neutral-500 drop-shadow-neutral-800 inset-shadow-neutral-50 text-neutral-900 inline-block font-bold px-2 mt-1">{currentKeyDown}</kbd>

    </WidgetContainer>
  );
}
