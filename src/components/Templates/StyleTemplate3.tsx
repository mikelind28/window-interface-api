import { styleClass1 } from "../../styles/styles";

import type { Dispatch, SetStateAction } from "react";
import type { Style } from "../../types/types";

type StyleTemplateProps = {
  setStyle: Dispatch<SetStateAction<Style>>;
}

export default function StyleTemplate1({ setStyle }: StyleTemplateProps) {
  return (
    <div className="m-2 w-[100%] grow xxs:w-50 rounded-lg border-2 border-blue-500 bg-slate-800 p-4 inset-shadow-sm inset-shadow-slate-950/50 hover:cursor-pointer" onClick={() => setStyle(styleClass1)}>
      <h3 className="text-xl font-medium tracking-wide text-orange-400 text-shadow-lg/50 text-shadow-neutral-950">
        Header3 Element
      </h3>

      <h4 className="text-xl text-amber-300">
        Header4 Element
      </h4>

      <p className="text-xl font-semibold text-green-200 text-shadow-md/50 text-shadow-neutral-950">
        Paragraph Element
      </p>

      <p className="text-xl font-semibold text-cyan-100 text-shadow-md/50 text-shadow-neutral-950">
        <span className="text-xl text-zinc-500">Span 1</span>
      </p>
      <p className="text-xl font-semibold text-cyan-100 text-shadow-md/50 text-shadow-neutral-950">
        <span className="text-xl font-extralight text-lime-600 text-shadow-none">
          Span 2
        </span>
      </p>

      <input
        className="my-1 block min-w-0 grow rounded-sm bg-cyan-50 py-1 pr-3 pl-1 text-base text-slate-950 caret-lime-600 focus:ring-2 focus:ring-lime-600 placeholder:text-zinc-500  focus:outline-none sm:text-sm/6"
        placeholder="Placeholder text"
      />

      <button className="my-2 rounded-lg bg-amber-300 px-4 py-1 text-slate-950 outline-2 outline-offset-2 outline-orange-300 hover:bg-amber-400 active:bg-amber-500">
        Button
      </button>
    </div>
  );
}
