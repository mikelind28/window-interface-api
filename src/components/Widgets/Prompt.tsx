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

export default function Prompt() {
  const [userInput, setUserInput] = useState<string | null>(null);

  function windowPrompt() {
    const prompt = window.prompt(
      "Enter something below to display it in the window.prompt() widget.",
    );
    setUserInput(prompt);
  }

  return (
    <WidgetContainer>
      <Header3>
        <code>window.prompt()</code>
      </Header3>

      <Button handleClick={windowPrompt}>Prompt...</Button>

      {userInput && (
        <div>
          <Span2>Your input:</Span2>
        </div>
      )}

      <Paragraph>{userInput}</Paragraph>

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            <code>window.prompt()</code> instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt"
          >
            Window: prompt() method - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
