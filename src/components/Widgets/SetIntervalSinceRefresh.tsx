// Element imports
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";

// React imports
import { useEffect, useState } from "react";

// Type imports
import Button from "../Elements/Button";
import WidgetDescription from "../Elements/WidgetDescripiton";

// TODO: update this to read "_ minutes and _seconds"
export default function SetIntervalSinceRefresh() {
  const [secondsPassed, setSecondsPassed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsPassed((s) => s + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <WidgetContainer>
      <Header3>
        <code>window</code>
        <code className="wrap-anywhere">.setInterval(), window</code>
        <code>.location</code>
        <code className="wrap-anywhere">.reload()</code>
      </Header3>

      <Span1>Time since refresh:</Span1>

      <Paragraph>
        {secondsPassed}
        <Span1>
          {secondsPassed.toString() === "1" ? " second" : " seconds"}
        </Span1>
      </Paragraph>

      <Button handleClick={() => window.location.reload()}>Refresh</Button>

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            The <code>reload()</code> method of the Location interface reloads the current URL, like the Refresh button.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Location/reload"
          >
            Location: reload() method - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
