// Element imports
import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";

// React imports
import { useState } from "react";

// Type imports
import Span2 from "../Elements/Span2";
import Paragraph from "../Elements/Paragraph";
import WidgetDescription from "../Elements/WidgetDescripiton";

type confirmationState = "undefined" | true | false;

export default function Confirm() {
  const [confirmed, setConfirmed] = useState<confirmationState>("undefined");

  function windowAlert() {
    const confirmation = window.confirm(
      "Press 'OK' to confirm, or 'Cancel' to cancel.",
    );
    setConfirmed(confirmation);
  }

  return (
    <WidgetContainer>
      <Header3>
        <code>window.</code>
        <code className="wrap-anywhere">confirm()</code>
      </Header3>

      <Button handleClick={windowAlert}>Confirm...</Button>

      {confirmed != "undefined" && confirmed && (
        <Paragraph>
          <Span2>
            The message was <strong>confirmed</strong>.
          </Span2>
        </Paragraph>
      )}

      {confirmed != "undefined" && !confirmed && (
        <Paragraph>
          <Span2>
            The message was <strong>cancelled</strong>.
          </Span2>
        </Paragraph>
      )}

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            <code>window.confirm()</code> instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm"
          >
            Window: confirm() method - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
