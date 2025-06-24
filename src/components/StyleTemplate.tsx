export default function StyleTemplate() {
    return (
        <div id="container" className="w-60 bg-slate-800 m-2 p-4 border-2 rounded-lg border-emerald-400  inset-shadow-sm inset-shadow-slate-950/50 ring-1 ring-lime-200">
            <h2 
                id="h2"
                className="text-xl text-yellow-300/95 text-shadow-lg/50 text-shadow-neutral-950 font-medium tracking-wide"
            >
                Header2 Element
            </h2>

            <h3 
                id="h3"
                className="text-xl text-teal-300"
            >
                Header3 Element
            </h3>

            <p 
                id="p"
                className="text-xl text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 font-semibold"
            >
                Paragraph Element
            </p>

            <p><span id="span-1">Span 1</span></p>
            <p><span id="span-2">Span 2</span></p>
        </div>
    );
}