import { useRef, useState } from "react";
import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Span1 from "../Elements/Span1";
import WidgetDescription from "../Elements/WidgetDescripiton";

export default function CutCopyPaste() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [text, setText] = useState("");

  async function handleCut() {
    const textarea = textareaRef.current;

    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === end) return;

    const selectedText = text.slice(start, end);

    try {
      await navigator.clipboard.writeText(selectedText);

      const newText = text.slice(0, start) + text.slice(end);

      setText(newText);

      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = start;
      });
    } catch (error) {
      console.error("failed to cut text:", error);
    }
  }

  async function handleCopy() {
    const textarea = textareaRef.current;

    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === end) return;

    const selectedText = text.slice(start, end);

    try {
      await navigator.clipboard.writeText(selectedText);
    } catch (error) {
      console.error("failed to copy text:", error);
    }
  }

  async function handlePaste() {
    const textarea = textareaRef.current;

    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    try {
      const clipboardText = await navigator.clipboard.readText();

      const newText = text.slice(0, start) + clipboardText + text.slice(end);

      setText(newText);
    } catch (error) {
      console.error("failed to paste text:", error);
    }
  }

  function handleReset() {
    setText("");
  }

  return (
    <WidgetContainer>
      <Header3>
        <div className="flex flex-wrap">
          <code>navigator</code>
          <code>.clipboard</code>
          <code>.writeText(),</code>
        </div>
        <div className="flex flex-wrap">
          <code>navigator</code>
          <code>.clipboard</code>
          <code>.readText()</code>
        </div>
      </Header3>

      <label htmlFor="cut-copy-paste-text-area">
        <Span1>
          Cut, copy, and paste text from the textarea box below.
          <br />
        </Span1>
      </label>

      <textarea
        id="cut-copy-paste-text-area"
        ref={textareaRef}
        placeholder="Try it out!"
        aria-label="Try it out!"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></textarea>

      <div className="flex flex-wrap gap-x-4 gap-y-0">
        <Button handleClick={handleCut}>Cut</Button>

        <Button handleClick={handleCopy}>Copy</Button>

        <Button handleClick={handlePaste}>Paste</Button>

        <Button handleClick={handleReset}>Reset</Button>
      </div>

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            The <code>clipboard</code> read-only property of the Navigator
            interface returns a Clipboard object used to read and write the
            clipboard's contents.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard"
          >
            Navigator: clipboard property - Web APIs | MDN
          </a>
        </cite>
        <div className="h-4" />
        <blockquote>
          <p className="span-3">
            The <code>writeText()</code> method of the Clipboard interface writes the specified text to the system clipboard, returning a Promise that is resolved once the system clipboard has been updated.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText"
          >
            Clipboard: writeText() method - Web APIs | MDN
          </a>
        </cite>
        <div className="h-4" />
        <blockquote>
          <p className="span-3">
            The <code>readText()</code> method of the Clipboard interface returns a Promise which fulfills with a copy of the textual contents of the system clipboard.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/readText"
          >
            Clipboard: readText() method - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
