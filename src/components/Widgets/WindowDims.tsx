// Element imports
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Header4 from "../Elements/Header4";
import Paragraph from "../Elements/Paragraph";
import Span1 from "../Elements/Span1";
import Span2 from "../Elements/Span2";

// React imports
import { useEffect, useState } from "react";
import WidgetDescription from "../Elements/WidgetDescripiton";

export default function WindowDims() {

  const [windowDims, setWindowDims] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
  });

  function handleSizeChange() {
    setWindowDims({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleSizeChange);

    return () => {
      window.removeEventListener("resize", handleSizeChange);
    };
  }, []);

  return (
    <WidgetContainer>
      <Header3>
        <code>window.innerWidth, window.innerHeight</code>
      </Header3>

      <Header4>Window's Inner Dims (W x H):</Header4>
      <Paragraph>
        {windowDims.innerWidth}
        <Span1> px</Span1>
        <Span2> x </Span2>
        {windowDims.innerHeight}
        <Span1> px</Span1>
      </Paragraph>

      <br/>

      <Header3>
        <code>window.outerWidth, window.outerHeight</code>
      </Header3>
      <Header4>Window's Outer Dims (W x H):</Header4>
      <Paragraph>
        {windowDims.outerWidth}
        <span className="span-1"> px</span>
        <span className="span-2"> x </span>
        {windowDims.outerHeight}
        <span className="span-1"> px</span>
      </Paragraph>

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            The read-only Window property <code>innerWidth</code> returns the interior width of the window in pixels (that is, the width of the window's layout viewport). That includes the width of the vertical scroll bar, if one is present.
          </p>
          <p className="span-3">
            Similarly, the interior height of the window (that is, the height of the layout viewport) can be obtained using the <code>innerHeight</code> property. That measurement also accounts for the height of the horizontal scroll bar, if it is visible.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth"
          >
            Window: innerWidth property - Web APIs | MDN
          </a>
        </cite>
        <div className='h-4' />
        <blockquote>
          <p className="span-3">
            The <code>Window.outerWidth</code> read-only property returns the width of the outside of the browser window. It represents the width of the whole browser window including sidebar (if expanded), window chrome and window resizing borders/handles.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth"
          >
            Window: outerWidth property - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
