import { useEffect, useState } from "react";
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Paragraph from "../Elements/Paragraph";
import Span2 from "../Elements/Span2";
import Span1 from "../Elements/Span1";
import WidgetDescription from "../Elements/WidgetDescripiton";

export default function GetSelection() {
  const [selection, setSelection] = useState<string | undefined>(undefined);

  useEffect(() => {
    document.addEventListener("selectionchange", () => {
      const selection = document.getSelection()?.toString();
      setSelection(selection);
    });
  }, []);

  return (
    <WidgetContainer>
      <Header3>
        <div className="flex flex-wrap">
          <code>document</code>
          <code>.addEventListener</code>
          <code>('selectionchange', ...),</code>
        </div>
        <div className="flex flex-wrap">
          <code>document</code>
          <code>.getSelection()</code>
        </div>
      </Header3>

      <Span1>
        Select some text from anywhere on the page.
        <br />
      </Span1>

      <div className="max-h-30 overflow-scroll">
        {selection && <Span2>Your selected text:</Span2>}
        <div className="">
          <Paragraph>{selection}</Paragraph>
        </div>
      </div>

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            The browser fires the <code>selectionchange</code> event of the Selection API when the current Selection of a Document changes. A document selection represents either a range of selected content across DOM nodes or a collapsed caret position.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Document/selectionchange_event"
          >
            Document: selectionchange event - Web APIs | MDN
          </a>
        </cite>
        <div className='h-4' />
        <blockquote>
          <p className="span-3">
            The <code>getSelection()</code> method of the Document interface returns the Selection object associated with this document, representing the range of text selected by the user, or the current position of the caret.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getSelection"
          >
            Document: getSelection() method - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
