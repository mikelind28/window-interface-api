import { useState, type Dispatch, type SetStateAction } from "react";
import type { Style } from "../../types/types";
import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
import Input from "../Elements/Input";
import Header3 from "../Elements/Header3";

type DocumentTitleType = {
    style: Style;
    setDocumentTitle: Dispatch<SetStateAction<string>>;
}

export default function DocumentTitle({ style, setDocumentTitle }: DocumentTitleType) {
    const { containerClass, h3Class, inputClass, buttonClass } = style;

    const [inputValue, setInputValue] = useState('');

    function handleClick() {
      if (inputValue.trim() == "") {
        setInputValue("");
        setDocumentTitle('Properties and Methods of the Window, Document, and Navigator');
      } else {
        setDocumentTitle(inputValue);
      }
    }

    return (
        <WidgetContainer style={containerClass}>
          <Header3 style={h3Class}>
            <div>
              HTML
              <code>{` <title> `}</code>
              element:
            </div>
          </Header3>

          <Input style={inputClass} placeholder={"Document title..."} value={inputValue} onChange={setInputValue} />

          <Button style={buttonClass} handleClick={handleClick}>
            Change Document Title
          </Button>
        </WidgetContainer>
    );
}