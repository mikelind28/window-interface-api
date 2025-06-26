// Element imports
import Button from "../Elements/Button";
import Container from "../Elements/Container";
import Header3 from "../Elements/Header3";

// React imports
import { useState } from "react";

// Type imports
import type { Style } from "../../types/types";
import Span2 from "../Elements/Span2";
import Paragraph from "../Elements/Paragraph";

type ConfirmProps = {
  style: Style;
};

type confirmationState = "undefined" | true | false


export default function Confirm({ style }: ConfirmProps) {
  const { buttonClass, containerClass, h3Class, pClass, spanClass2 } = style;

  const [confirmed, setConfirmed] = useState<confirmationState>("undefined");

  function windowAlert() {
    const confirmation = window.confirm("Press 'OK' to confirm, or 'Cancel' to cancel.");
    setConfirmed(confirmation);
  }

  return (
    <Container style={containerClass}>
      <Header3 style={h3Class}>
        <code className="text-base xs:text-lg">window.confirm()</code>
      </Header3>

      <Button style={buttonClass} handleClick={windowAlert}>
        Confirm...
      </Button>

      {confirmed != "undefined" && confirmed &&
        <Paragraph style={pClass}>
          <Span2 style={spanClass2}>The message was <strong>confirmed</strong>.</Span2>
        </Paragraph>
      }

      {confirmed != "undefined" && !confirmed &&
        <Paragraph style={pClass}>
          <Span2 style={spanClass2}>The message was <strong>cancelled</strong>.</Span2>
        </Paragraph>
      }

    </Container>
  );
}
