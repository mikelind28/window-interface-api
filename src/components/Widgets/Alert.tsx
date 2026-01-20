// Element imports
import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
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
    <WidgetContainer style={containerClass}>
      <Header3 style={h3Class}>
          <code>window.alert()</code>
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
    </WidgetContainer>
  );
}
