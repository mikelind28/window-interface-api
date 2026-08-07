import type { Theme } from "../../types/types";

export default function ThemeTemplate({ theme }: { theme: Theme }) {
  return (
    <div data-theme={theme}>
      <div className="container">
        <h3>
          Header3 Element
        </h3>

        <h4>
          Header4 Element
        </h4>

        <p>
          Paragraph Element
        </p>

        <p >
          <span className="span-1">Span 1</span>
        </p>
        <p >
          <span className="span-2">
            Span 2
          </span>
        </p>

        <input
          placeholder="Placeholder text"
        />

        <button>
          Button
        </button>
      </div>
    </div>
  );
}
