import { useState, type Dispatch, type SetStateAction } from "react";
import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
import Input from "../Elements/Input";
import Header3 from "../Elements/Header3";

type DocumentTitleType = {
  setDocumentTitle: Dispatch<SetStateAction<string>>;
};

export default function DocumentTitle({
  setDocumentTitle,
}: DocumentTitleType) {
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    if (inputValue.trim() == "") {
      setInputValue("");
      setDocumentTitle(
        "Properties and Methods of the Window, Document, and Navigator",
      );
    } else {
      setDocumentTitle(inputValue);
    }
  }

  return (
    <WidgetContainer>
      <Header3>
        <div>
          HTML
          <code>{` <title> `}</code>
          element:
        </div>
      </Header3>

      <Input
        placeholder={"Document title..."}
        value={inputValue}
        onChange={setInputValue}
      />

      <Button handleClick={handleClick}>Change Document Title</Button>
    </WidgetContainer>
  );
}
