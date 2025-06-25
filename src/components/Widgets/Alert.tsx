// Element imports
import Button from "../Elements/Button";
import Container from "../Elements/Container";
import Header2 from "../Elements/Header2";
import Input from "../Elements/Input";

// React imports
import { useState } from "react";

// Type imports
import type { Style } from "../../types/types";

type AlertProps = {
  style: Style;
};

export default function Alert({ style }: AlertProps) {
  const { containerClass, h2Class, inputClass, buttonClass } = style;

  const [alertText, setAlertText] = useState("");

  function windowAlert() {
    if (alertText === "") {
        window.alert("Alert! 🚨");
    } else {
        window.alert(alertText);
    }
  }

  return (
    <Container style={containerClass}>
      <Header2 style={h2Class}>
        <code className="text-base xs:text-lg">window.alert()</code>
      </Header2>

      <Input
        placeholder="Customize your alert!"
        style={inputClass}
        onChange={setAlertText}
        value={alertText}
      />

      <Button style={buttonClass} handleClick={windowAlert}>
        Alert!
      </Button>
    </Container>
  );
}
