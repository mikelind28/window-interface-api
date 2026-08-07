// Element imports
import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import Input from "../Elements/Input";

// React imports
import { useState } from "react";
import WidgetDescription from "../Elements/WidgetDescripiton";

export default function Alert() {
  const [alertText, setAlertText] = useState("");

  function windowAlert() {
    if (alertText === "") {
      window.alert("Alert! 🚨");
    } else {
      window.alert(alertText);
    }
  }

  return (
    <WidgetContainer>
      <Header3>
        <code>window.alert()</code>
      </Header3>

      <Input
        placeholder="Customize your alert!"
        onChange={setAlertText}
        value={alertText}
      />

      <Button handleClick={windowAlert}>Alert!</Button>

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            <code>window.alert()</code> instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"
          >
            Window: alert() method - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
