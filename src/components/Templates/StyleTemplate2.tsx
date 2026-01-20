import { styleClass2 } from "../../styles/styles";

import type { Dispatch, SetStateAction } from "react";
import type { Style } from "../../types/types";

type StyleTemplateProps = {
  setStyle: Dispatch<SetStateAction<Style>>;
}

export default function StyleTemplate2({ setStyle }: StyleTemplateProps) {
  return (
    <div className="m-2 w-full grow xxs:w-50 rounded-lg outline-2 outline-indigo-700 outline-offset-3 bg-slate-800 p-4 print:bg-neutral-50 print:border-neutral-600 print:inset-shadow-neutral-950/25 print:ring-neutral-200 print:outline-neutral-200" onClick={() => setStyle(styleClass2)}>
      <h3 className="text-xl font-medium tracking-wide text-fuchsia-500 text-shadow-lg/50 text-shadow-neutral-950 print:text-neutral-950 print:text-shadow-none">
        Header3 Element
      </h3>

      <h4 className="text-xl text-fuchsia-300 print:text-neutral-800">Header4 Element</h4>

      <p className="text-xl font-semibold text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 print:text-neutral-700 print:text-shadow-none">
        Paragraph Element
      </p>

      <p className="text-xl font-semibold text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 print:text-neutral-700 print:text-shadow-none">
        <span className="text-xl text-slate-500 print:text-neutral-300">Span 1</span>
      </p>
      <p className="text-xl font-semibold text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 print:text-neutral-700 print:text-shadow-none">
        <span className="text-xl font-extralight text-blue-400 text-shadow-none print:text-neutral-800">
          Span 2
        </span>
      </p>

      <input
        className="my-1 block min-w-0 grow rounded-sm bg-cyan-50 py-1 pr-3 pl-1 text-base text-slate-950 caret-blue-400 ring-fuchsia-500 placeholder:text-slate-400 focus:ring-2 focus:outline-none sm:text-sm/6 print:text-neutral-900 print:ring-neutral print:caret-neutral-500 print:placeholder:text-neutral-400"
        placeholder="Placeholder text"
      />

      <button className="my-2 rounded-lg bg-purple-300 px-4 py-1 text-slate-950 outline-2 outline-offset-2 outline-purple-300 hover:bg-purple-400 active:bg-purple-500 print:bg-neutral-100 print:text-neutral-900 print:outline-neutral-500">
        Button
      </button>
    </div>
  );
}
