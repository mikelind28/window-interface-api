// Element imports
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Header4 from "../Elements/Header4";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";

// React imports
import { useEffect, useState } from "react";
import WidgetDescription from "../Elements/WidgetDescripiton";

export default function ScreenDims() {
  const [screenDims, setScreenDims] = useState({
    width: window.screen.width,
    height: window.screen.height,
  });

  useEffect(() => {
    setScreenDims({
      width: window.screen.width,
      height: window.screen.height,
    });
  }, []);

  return (
    <WidgetContainer>
      <Header3>
        <code>window.screen.width, window.screen.height</code>
      </Header3>

      <Header4>Screen's Width:</Header4>
      <Paragraph>
        {screenDims.width}
        <Span1> px</Span1>
      </Paragraph>

      <Header4>Screen's Height:</Header4>
      <Paragraph>
        {screenDims.height}
        <span className="span-1"> px</span>
      </Paragraph>

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            The Window property <code>screen</code> returns a reference to the screen object associated with the window. The screen object, implementing the Screen interface, is a special object for inspecting properties of the screen on which the current window is being rendered.
          </p>
          <p className="span-3">
            The Screen interface represents a screen, usually the one on which the current window is being rendered, and is obtained using <code>window.screen</code>.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/screen"
          >
            Window: screen property - Web APIs | MDN
          </a>
          <div className='h-4' />
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Screen"
          >
            Screen - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
