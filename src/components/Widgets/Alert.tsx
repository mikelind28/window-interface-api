// Element imports
import Button from "../Elements/Button";
import Container from "../Elements/Container";
import Header3 from "../Elements/Header3";
import Input from "../Elements/Input";

// React imports
import { useState } from "react";

// Type imports
import type { Style } from "../../types/types";

type AlertProps = {
  style: Style;
};

export default function Alert({ style }: AlertProps) {
  const { containerClass, h3Class, inputClass, buttonClass } = style;

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
      <Header3 style={h3Class}>
        <div className="flex flex-wrap text-sm xs:text-base sm:text-lg">
            <code>window</code>
            <code className="wrap-anywhere">.alert()</code>
        </div>
      </Header3>

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
