import { styleClass1 } from "../../styles/styles";

import type { Dispatch, SetStateAction } from "react";
import type { Style } from "../../types/types";

type StyleTemplateProps = {
  setStyle: Dispatch<SetStateAction<Style>>;
}

export default function StyleTemplate1({ setStyle }: StyleTemplateProps) {
  return (
    <div className="m-2 w-[100%] grow xxs:w-50 rounded-lg border-2 border-emerald-400 bg-slate-800 p-4 ring-1 inset-shadow-sm ring-lime-200 inset-shadow-slate-950/50 hover:cursor-pointer" onClick={() => setStyle(styleClass1)}>
      <h3 className="text-xl font-medium tracking-wide text-yellow-300/95 text-shadow-lg/50 text-shadow-neutral-950">
        Header3 Element
      </h3>

      <h4 className="text-xl text-teal-300">
        Header4 Element
      </h4>

      <p className="text-xl font-semibold text-cyan-100 text-shadow-md/50 text-shadow-neutral-950">
        Paragraph Element
      </p>

      <p className="text-xl font-semibold text-cyan-100 text-shadow-md/50 text-shadow-neutral-950">
        <span className="text-xl text-neutral-500">Span 1</span>
      </p>
      <p className="text-xl font-semibold text-cyan-100 text-shadow-md/50 text-shadow-neutral-950">
        <span className="text-xl font-extralight text-emerald-300/50 text-shadow-none">
          Span 2
        </span>
      </p>

      <input
        className="focus: my-1 block min-w-0 grow rounded-sm bg-cyan-50 py-1 pr-3 pl-1 text-base text-slate-950 caret-teal-500 ring-teal-500 placeholder:text-gray-400 focus:ring-2 focus:outline-none sm:text-sm/6"
        placeholder="Placeholder text"
      />

      <button className="my-2 rounded-lg bg-teal-300 px-4 py-1 text-slate-950 outline-2 outline-offset-2 outline-teal-300 hover:bg-teal-500 active:bg-teal-600">
        Button
      </button>
    </div>
  );
}
