// Element imports
import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";

// React imports
import { useState } from "react";

// Type imports
import type { Style } from "../../types/types";
import Span2 from "../Elements/Span2";
import Paragraph from "../Elements/Paragraph";

type PromptProps = {
  style: Style;
};

export default function Prompt({ style }: PromptProps) {
  const { buttonClass, containerClass, h3Class, pClass, spanClass2 } = style;

  const [userInput, setUserInput] = useState<string | null>(null);

  function windowPrompt() {
    const prompt = window.prompt("Enter something below to display it in the window.prompt() widget.");
    setUserInput(prompt);
  }

  return (
    <WidgetContainer style={containerClass}>
      <Header3 style={h3Class}>
        <code>window.prompt()</code>
      </Header3>

      <Button style={buttonClass} handleClick={windowPrompt}>
        Prompt...
      </Button>

      { userInput &&
        <div>
        <Span2 style={spanClass2}>
          Your input:
        </Span2>
        </div>
      }

      <Paragraph style={pClass}>
          {userInput}
      </Paragraph>

    </WidgetContainer>
  );
}
