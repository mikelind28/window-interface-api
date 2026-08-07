// Element imports
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";

// React imports
import { useEffect, useState } from "react";

// Type imports
import Header4 from "../Elements/Header4";
import WidgetDescription from "../Elements/WidgetDescripiton";

export default function ClickCounter() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    function handleClick() {
      setClickCount((prev) => prev + 1);
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <WidgetContainer>
      <Header3>
        <code>document</code>
        <code>.addEventListener</code>
        <code>('click', ...)</code>
      </Header3>

      <Header4>Click counter:</Header4>

      <Paragraph>
        <Span1>You've clicked</Span1>
        {` ${clickCount} `}
        <Span1>times.</Span1>
      </Paragraph>

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            The <code>addEventListener()</code> method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
          >
            EventTarget: addEventListener() method - Web APIs | MDN
          </a>
        </cite>
        <div className='h-4' />
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event"
          >
            Element: click event - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
