import Button from "../Elements/Button";
import WidgetContainer from "../Elements/WidgetContainer";
import Header3 from "../Elements/Header3";
import WidgetDescription from "../Elements/WidgetDescripiton";

export default function Print() {
  return (
    <WidgetContainer>
      <Header3>
        <code>window.print()</code>
      </Header3>

      <Button handleClick={() => window.print()}>Print...</Button>

      <WidgetDescription>
        <blockquote>
          <p className="span-3">
            Opens the print dialog to print the current document.
          </p>
        </blockquote>
        <cite className="span-2 underline decoration-1 underline-offset-2">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Window/print"
          >
            Window: print() method - Web APIs | MDN
          </a>
        </cite>
      </WidgetDescription>
    </WidgetContainer>
  );
}
