export default function StyleTemplate() {
    return (
        <div className="w-70 bg-slate-800 m-2 p-4 border-2 rounded-lg border-emerald-400  inset-shadow-sm inset-shadow-slate-950/50 ring-1 ring-lime-200">
            <h2 
                className="text-xl text-yellow-300/95 text-shadow-lg/50 text-shadow-neutral-950 font-medium tracking-wide"
            >
                Header2 Element
            </h2>

            <h3 
                className="text-xl text-teal-300"
            >
                Header3 Element
            </h3>

            <p 
                className="text-xl text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 font-semibold"
            >
                Paragraph Element
            </p>

            <p className="text-xl text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 font-semibold"><span className="text-neutral-500 text-xl ">Span 1</span></p>
            <p className="text-xl text-cyan-100 text-shadow-md/50 text-shadow-neutral-950 font-semibold"><span className="text-emerald-300/50 text-xl font-extralight text-shadow-none">Span 2</span></p>

            <input
                className=""
            />
        </div>
    );
}